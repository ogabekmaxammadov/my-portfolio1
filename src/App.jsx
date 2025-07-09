import { useEffect, useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Route, Routes, useLocation } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import './App.css'
import MenuSection from './components/menuSection/MenuSection'
import AboutPgae from './pages/AboutPgae'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
	const [openMenu, setOpenMenu] = useState(false)
	const location = useLocation()

	// live chatni yuklash
	useEffect(() => {
		window.replainSettings = { id: '2585a02f-6261-4755-b492-120a20371121' }

		const script = document.createElement('script')
		script.src = 'https://widget.replain.cc/dist/client.js'
		script.async = true
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	// Sahifa o'zgarganda menyuni yopish
	useEffect(() => {
		setOpenMenu(false)
	}, [location])

	// Dark mode holati
	// const [darkMode, setDarkMode] = useState(() => {
	// 	return localStorage.getItem('darkMode') === 'true'
	// })

	// // Dark mode toggle qilish
	// useEffect(() => {
	// 	localStorage.setItem('darkMode', darkMode)
	// 	document.documentElement.classList.toggle('dark', darkMode)
	// }, [darkMode])

	// languages

	const { i18n } = useTranslation()

	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}

	return (
		<div className='container'>
			<MenuSection openMenu={openMenu} setOpenMenu={setOpenMenu} />
			<div className='bodyy'>
				<IoMenu className='menu-icon' onClick={() => setOpenMenu(true)} />

				{/* <div className='mode'>
					<LuSunMoon
						className='moon'
						onClick={() => setDarkMode(prev => !prev)}
					/>
				</div> */}

				{/* languages */}

				<div className='lngs'>
					<button
						className={`fi fi-uz ${({ isActive }) =>
							isActive ? 'active' : ''}`}
						onClick={() => changeLanguage('uz')}
					></button>
					<button
						className={`fi fi-gb ${({ isActive }) =>
							isActive ? 'active' : ''}`}
						onClick={() => changeLanguage('en')}
					></button>
					<button
						className={`fi fi-ru ${({ isActive }) =>
							isActive ? 'active' : ''}`}
						onClick={() => changeLanguage('ru')}
					></button>
				</div>

				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPgae />} />
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
