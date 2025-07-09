import React, { useEffect, useState } from 'react'
import { FiLoader } from 'react-icons/fi'
import '../App.css'
import ContactSection from '../components/contactSection/ContactSection'

const ContactPage = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000) // 2 soniyada yuklanish tugaydi
	}, [])
	return loading ? <FiLoader className='fi-loader' /> : <ContactSection />
}

export default ContactPage
