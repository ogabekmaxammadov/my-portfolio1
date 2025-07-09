import React, { useEffect, useState } from 'react'
import { FiLoader } from 'react-icons/fi'
import '../App.css'
import ProjectsSection from '../components/projectsSection/ProjectsSection'

const ProjectsPage = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000) // 2 soniyada yuklanish tugaydi
	}, [])
	return loading ? <FiLoader className='fi-loader' /> : <ProjectsSection />
}

export default ProjectsPage
