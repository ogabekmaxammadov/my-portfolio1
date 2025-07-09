import { useTranslation } from 'react-i18next'
import { FaPhoneAlt } from 'react-icons/fa'
import myImg from '../../assets/assetsImg/my-img.jpg'
import './homeSection.css'

const HomeSection = () => {
	const { t } = useTranslation()
	return (
		<div className='home-section'>
			<div className='home-inform'>
				<h1>{t('Ogabek Maxammadov')}</h1>
				<h2> {t('Im Frontend developer')}</h2>

				<div className='btn-social'>
					<a href='/Ogabek s resume.pdf' download className='btn-primary'>
						{t('Information')}
					</a>
					<a href='tel: +998945432939'>
						<FaPhoneAlt className='icon phone-icon' />
					</a>
				</div>
			</div>
			<div className='myImg'>
				<img src={myImg} alt='' />
			</div>
		</div>
	)
}

export default HomeSection
