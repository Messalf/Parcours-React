import React, { Component } from 'react';

export default class Footer extends Component{
    render() {
        return(
            <footer>
				<ul className="icons">
					<li><a href="/"><i className="fab fa-twitter-square"></i></a></li>
					<li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
					<li><a href="/"><i className="fab fa-instagram"></i></a></li>
					<li><a href="/"><i className="fab fa-github-square"></i></a></li>
					<li><a href="/"><i className="fas fa-envelope-square"></i></a></li>
				</ul>
				<ul className="copyright">
					<li>© Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li><li>Demo Images: <a href="http://unsplash.com">Unsplash</a></li>
				</ul>
			</footer>
        )
    }
}