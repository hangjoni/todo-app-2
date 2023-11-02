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
  }
}

export default service
