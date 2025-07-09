import { AiOutlinePicture } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { CiCircleRemove } from 'react-icons/ci'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoHome, IoMailOpenOutline } from 'react-icons/io5'
import { RiContactsFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import myImg from '../../assets/assetsImg/my-img.jpg'

import { useTranslation } from 'react-i18next'
import './menuSection.css'

const MenuSection = ({ openMenu, setOpenMenu }) => {
	const { t } = useTranslation()
	return (
		<div className={`menu-section ${openMenu ? 'open' : ''}`}>
			<CiCircleRemove
				className='exit-icon'
				onClick={() => setOpenMenu(false)}
			/>
			<div className='about-me'>
				<div className='my-img'>
					<img src={myImg} alt='' />
				</div>
				<div className='my-name'>
					<h1>{t('Ogabek Maxammadov')}</h1>
				</div>
				<div className='social-media'>
					<a href='https://www.instagram.com/ogab_ek7006/'>
						<FaInstagram className='icon' />
					</a>
					<a href='https://github.com/ogabekmaxammadov'>
						<FaGithub className='icon' />
					</a>
					<a href='https://t.me/O_Maxammadov'>
						<BsTelegram className='icon' />
					</a>
					<a href='https://www.linkedin.com/in/ogabek-maxammadov-244539358/'>
						<FaLinkedin className='icon' />
					</a>
				</div>
			</div>
			<nav className='navbar'>
				<ul>
					<li>
						<NavLink
							to={'/'}
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							<IoHome className='nav-icon' />
							{t('Home')}
						</NavLink>
						<NavLink
							to={'/about'}
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							<RiContactsFill className='nav-icon' />
							{t('About')}
						</NavLink>
						<NavLink
							to={'/projects'}
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							<AiOutlinePicture className='nav-icon' />
							{t('Projects')}
						</NavLink>
						<NavLink
							to={'/contact'}
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							<IoMailOpenOutline className='nav-icon' />
							{t('Contacts')}
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default MenuSection
