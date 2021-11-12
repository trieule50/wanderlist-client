const About = () =>{
    return(
        <div>
            <div className='about-img'>
                <h1 className='about-text'>About</h1>
            </div>
            <div className='call-to-action'>
              <h2>CALLING ALL WANDERERS</h2>  
              <p>WanderList is an application where all wanderers come to checkout places to visit and make recommendations.</p>
            </div>
            <div className='hiker-img-container'>
                <div className='hiker-img-item'>
                    <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/toomas-tartes-yizrl9n-eda-unsplash-1571336397.jpg'/>
                </div>
                <div className='hiker-img-item'>
                    <img src='https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/virginia/MR19111203V_100_c2383fe3-fe51-4e58-bc88-58a4fe09ea6e.jpg'/>
                </div>
                <div className='hiker-img-item'>
                    <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6124fb65591cd98e874512c1%2Fwoman-hiking-at-Red-Rock-Canyon-during-sunset-with-backpack%2F960x0.jpg%3Ffit%3Dscale'/>
                </div>
            </div>
        </div>
    )
}

export default About;