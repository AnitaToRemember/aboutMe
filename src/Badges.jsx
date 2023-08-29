import socialMedia from './data/socialMedia.json'
import './Badges.css'

function Badges() {
    return (
        <div className="social-media">        
            <ul>
            {socialMedia.map(profile => 
                <li key={profile.id} className='profile'>
                    <button>
                    <a href={profile.url} target='_blank' rel='noreferrer'>{profile.name}</a>
                    </button>
                </li>
            )}
            </ul>
        </div>
    )
}

export default Badges