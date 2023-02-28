import './secondHomeSection.css';

export default function SecondHomeSection() {
  return (
    <div className='secondHomeSection'>
        <div className="leftSecondHomeSection">
            <p>
                We work with or <span className='bold'> Global Financing Partner that  provides
                the initial International Student Loan and EdulInvestment that enables our
                candidates pursue an education to the United States or  Canada.</span>
                ProconnectPAY supported Candidates are individuals who have spent an average of 5-months going through 
                the <span className='blue'> rigorous weekly mentoring, career advisory, mindset re-orientation, and innovation and 
                start-up culturing ProconnectPAY instils in her candidates.</span>
            </p>

            <button className="commence">COMMERCE YOUR EDUCATIONAL JOURNEY HERE</button>
        </div>
        <div className="rightSecondHomeSection">
            <img src="assets/dialogue.jpg" alt="" />
        </div>
    </div>
  )
}
