const service = {
  getDefault() {
    return {
      id: Math.random().toString(36).substring(2, 15),
      text: '',
      status: 'not_started'
    }
  },
  getStatusList() {
    return [
      { id: 'not_started', label: 'Not Started' },
      { id: 'in_progress', label: 'In Progress' },
      { id: 'completed', label: 'Completed' }
    ]
  },
  validateToDo(item) {
    return item.text.length > 0
  },
  makeCopy(item) {
    return JSON.parse(JSON.stringify(item))
  },
  toggleStatus(status) {
    switch (status) {
      case 'not_started':
        return 'in_progress'
      case 'in_progress':
        return 'completed'
      case 'completed':
        return 'not_started'
    }
  },
  loadProjectsManifest() {
    if (localStorage.getItem('projectsManifest') == null) {
      service.saveProjectsManifest({ next_id: 0, list: [] })
    }
    const projects = JSON.parse(localStorage.getItem('projectsManifest'))
    return projects
  },
  saveProjectsManifest(projects) {
    localStorage.setItem('projectsManifest', JSON.stringify(projects))
  },
  createToDoProject(name) {
    /* A real Project is a list of todo task (for example as returned by getDefault()) */
    // create an empty data

    // save this project into projectsManifiest
    let projects = service.loadProjectsManifest()
    let projectManifest = { id: projects.next_id, name: name }
    projects.list.push(projectManifest)
    projects.next_id++
    service.saveProjectsManifest(projects)

    // save this projects's data
    let memoryName = `project.${projectManifest.id}`
    console.log('saved new project to local storage named', memoryName)
    localStorage.setItem(memoryName, '[]')
  },
  getProjectName(id) {
    /* return project name if it exists */
    let projects = service.loadProjectsManifest()
    let project = projects.list.filter((p) => p.id === id)
    if (project.length > 0) {
      return project[0].name
    }
  },
  saveProject(id, data) {
    localStorage.setItem(`project.${id}`, JSON.stringify(data))
  },
  loadProject(id) {
    return JSON.parse(localStorage.getItem(`project.${id}`))
  }
}

export default service
