import React, { Component } from 'react';
import pic02 from '../../images/pic02.jpg';
import pic03 from '../../images/pic03.jpg';
import pic04 from '../../images/pic04.jpg';

export default class Section3 extends Component{
    render() {
        return(
            <section id="three" className="main style1 special">
				<div className="container">
					<header className="major">
						<h2>Adipiscing amet consequat</h2>
					</header>
					<p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
					<div className="row gtr-150">
						<div className="col-4 col-12-medium">
							<span className="image fit"><img src={pic02} alt="" /></span>
							<h3>Magna feugiat lorem</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul className="actions special">
								<li><a href="/" className="button">More</a></li>
							</ul>
						</div>
						<div className="col-4 col-12-medium">
							<span className="image fit"><img src={pic03} alt="" /></span>
							<h3>Magna feugiat lorem</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul className="actions special">
								<li><a href="/" className="button">More</a></li>
							</ul>
						</div>
						<div className="col-4 col-12-medium">
							<span className="image fit"><img src={pic04} alt="" /></span>
							<h3>Magna feugiat lorem</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul className="actions special">
								<li><a href="/" className="button">More</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
        )
    }
}