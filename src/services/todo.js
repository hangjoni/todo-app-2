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
    localStorage.setItem(`project.${projectManifest.id}`, [])
  }
}

export default service
