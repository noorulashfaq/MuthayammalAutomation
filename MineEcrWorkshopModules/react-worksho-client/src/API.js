import axios from 'axios'

const url="http://localhost:1234"

export const loadEmployees=async(dept_id)=>{
    const employees=await axios.get(`${url}/ecr/find/${dept_id}`)
    let ids=[]
    employees.data.rows.map((v)=>{
        ids.push(v.faculty_id)
    })
    return ids
}

export const pushWorkshop=async(obj)=>{
    const response=await axios.post(`${url}/ecr/proposal`,obj)
    return response.data
}

export const callLogin=async(obj)=>{
    const response=await axios.post(`${url}/login`,obj)
    return response.data
}