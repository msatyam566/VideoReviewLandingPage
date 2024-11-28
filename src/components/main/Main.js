import React from 'react';
import './Main.css'; // Import the CSS file for styling


function Main() {
    return (

        <>

            <div className="image-main">
                <div className="layout-image">
                <div class="blur-bg"></div>
                    <img src="/images/Frame.png" alt="example" className="image" />
                </div>
                

            </div>

            <div className="main-content">

                <div className="main-left">
                    <div className="prize-amount">

                        <p>Prize Amount</p>
                        <h1 >$5,000</h1>
                    </div>
                    <div className="min-participants">

                        <p>Minimum Participants</p>
                    </div>
                    <h2>09</h2>
                    <p>Submission Deadline</p>

                    <div className="deadline">
                        <h2>10 Oct '24</h2>
                    </div>
                    <img src='/images/mainFilmReel.png' alt='main ' className='film-reel'/>

                </div>

                <div className="main-right">
                    <h1>What is Lorem Video Contest 2024?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non sine causa ex iis memoriae ducta sit disciplina. Illa videamus, quae a te de amicitia dicta sunt. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Duo Reges: constructio interrete. Ille vero, si insipiens - quo certe, quoniam tyrannus, numquam beatus; Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non sine causa ex iis memoriae ducta sit disciplina. Illa videamus, quae a te de amicitia dicta sunt. Quid turpius quam sapientis vitam ex insipientium sermone pendere?
                    </p>
                    <button className="btn">Enter the Contest</button>
                </div>

            </div>

            <section className="judging-criteria">
                <h2>Judging Criteria</h2>
                <div className="criteria-list">
                    <div className="criterion">
                        <h3>Quality of Content</h3>
                        <p>HD</p>
                    </div>
                    <div className="criterion">
                        <h3>Video Production</h3>
                        <p>Premium</p>
                    </div>
                    <div className="criterion">
                        <h3>Sound Quality</h3>
                        <p>Good</p>
                    </div>
                    <div className="criterion">
                        <h3>Social Media Upload</h3>
                        <p>3+ Platforms</p>
                    </div>
                </div>
            </section>

            <div className='video-main'>
                <h2 >Promo Video</h2>

                <section className="promo-video">
                    <img src="/images/box.png" alt='ssss'></img>
                </section>
            </div>


        </>


    );
}

export default Main;




