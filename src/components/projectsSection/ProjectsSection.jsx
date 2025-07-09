import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'
import '../../App.css'
import AiImg from '../../assets/assetsImg/image.png'
import itTatAppImg from '../../assets/assetsImg/it-tat-app.png'
import kafeImg from '../../assets/assetsImg/kafeImg.png'
import maktabImg from '../../assets/assetsImg/maktabImg.png'
import moviesImg from '../../assets/assetsImg/movies.png'
import projectImg from '../../assets/assetsImg/projectImg.jfif'
import '../aboutSection/aboutSection.css'
import './projectsSection.css'

const ProjectsSection = () => {
	const { t } = useTranslation()

	const projects = [
		{
			id: 1,
			title: t('It TAT AI'),
			description: t(
				'Suniy intellekt bilan integratsiya qilingan telegram web app'
			),
			image: AiImg,
			link: 'https://t.me/ItTat_bot',
		},
		{
			id: 2,
			title: t('IT TAT'),
			description: t("It TAT o'quv markazi uchun telegram web app."),
			image: itTatAppImg,
			link: 'https://t.me/itTatApp_bot',
		},
		{
			id: 3,
			title: t('Kafe'),
			description: t(
				'Kafelar uchun ishni yengilashtirish, buyurtmalar qabul qilish va bir nechta filallar uchun sayt.'
			),
			image: kafeImg,
			link: 'https://for-kafes.netlify.app/',
		},
		{
			id: 4,
			title: t('12-maktab'),
			description: t('12-maktab uchun sayt. Demo versiyasi.'),
			image: maktabImg,
			link: 'https://qoshrabot-tumani-12-maktabi.netlify.app/',
		},
		{
			id: 5,
			title: t('Movies'),
			description: t('API lar bilan integratsiya qilingan birinchi saytim.'),
			image: moviesImg,
			link: 'https://polite-sunflower-68ca2b.netlify.app/',
		},
		{
			id: 6,
			title: t('Web site'),
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, dicta?',
			image: projectImg,
			link: 'https://polite-sunflower-68ca2b.netlify.app/',
		},
	]

	return (
		<div className='projects-section'>
			<h1>{t('Projects')}</h1>
			<div className='content-primary'></div>

			<div className='projects'>
				{projects.map(project => (
					<a
						key={project.id}
						className='project'
						href={project.link}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={project.image} alt={project.title} />
						<h2>{project.title}</h2>
						<p>{project.description}</p>
						<div className='btnss'>
							<button className='btn-primary'>{t('View site')}</button>
							<a href=''>
								<FaGithub className='git-hub' />
							</a>
						</div>
					</a>
				))}
			</div>
			<button className='btn-secondary'>{t('Show more')}</button>
		</div>
	)
}

export default ProjectsSection
