import { Interceptors } from '@/utils/axios'

const api = new Interceptors('/govern/project', 'noForm').getInterceptors()
export const getAllProjects = (data = {}) => {
  return api.post('/api/v1/app/list-by-item', data)
}