import './App.scss';
import Drawers from './images/drawers.jpg';
import ShareIcon from './images/icon-share.svg';
import PinterestIcon from './images/icon-pinterest.svg';
import TwitterIcon from './images/icon-twitter.svg';
import FacebookIcon from './images/icon-facebook.svg';
import userImg from './images/avatar-michelle.jpg';

import { useState } from 'react';

function App() {
	const [isShown, setIsShown] = useState(false);

	return (
		<div className="App">
			<div className="container">
				<div className="imageContainer">
					<img src={Drawers} alt="drawers" />
				</div>
				<div className="text">
					<h3>
						Shift the overall look and feel by adding these wonderful touches to furniture in your
						home
					</h3>
					<p>
						Ever been in a room and felt like something was missing? Perhaps it felt slightly bare
						and uninviting. I’ve got some simple tips to help you make any room feel complete.
					</p>
					<div className="userInfo">
						<img className="userImg" src={userImg} alt="" />
						<div className="userPost">
							<h3>Michelle Appleton</h3>
							<p> 28 Jun 2020</p>
						</div>
						<img className="share" src={ShareIcon} alt="" onClick={() => setIsShown(!isShown)} />
						{isShown && (
							<div className="popupshows">
								<div className="socialIcon">
									S H A R E
									<img src={FacebookIcon} alt="FacebookIcon" />
									<img src={TwitterIcon} alt="TwitterIcon" />
									<img src={PinterestIcon} alt="PinterestIcon" />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
