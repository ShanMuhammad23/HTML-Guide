import React from 'react'
import {Link} from 'react-router-dom'
import Introduction from '../Introduction/Introductionfile'

function Sidebar() {
  return (
  

    <div className="sidebar flex-shrink-0 p-3 sidebar rounded min-h-100 shadow-lg p-3 mb-5  bg-gray-200 rounded" style={{width: "280px"}}>
      <Link to="/Introduction/Introductionfile" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-bold ">Menu</span>
      </Link>
      <Link className="btn fs-4 btn-toggle d-inline-flex align-items-center rounded border-0 "   to="/Introduction/Introductionfile">
      &rarr;  Introduction
          </Link>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <Link className="btn btn-toggle d-inline-flex  align-items-center  rounded border-0"  exact to="/Introduction/Boilerplate">
          &rarr; Boiler Plate
          </Link>
          
        </li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex  align-items-center text-whit rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
           &rarr; HTML Tags
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><Link to="/Tags/Headingtags" className="link-dark d-inline-flex  text-decoration-none mx-3 rounded">&#8680;Heading Tags</Link></li>
              <li><Link to="/Tags/MetaTags" className="link-dark d-inline-flex  text-decoration-none mx-3 rounded">&#8680;Meta Tags</Link></li>
              <li><Link to="/Tags/Texttags" className="link-dark d-inline-flex  text-decoration-none mx-3 rounded">&#8680;TextTags</Link></li>
              <li><Link to="/Tags/AudioVideo" className="link-dark d-inline-flex text-decoration-none  mx-3 rounded">&#8680;Audio and Video Tags</Link></li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <Link className="btn btn-toggle d-inline-flex align-items-center  rounded border-0 collapsed" to="/Introduction/Tips">
            Tips
          </Link>
         
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <Link className="btn btn-toggle d-inline-flex align-items-center  rounded border-0 collapsed" to="/Introduction/Faqs">
            FAQs
          </Link>
          
        </li>
      </ul>
    </div>
  
  )
}

export default Sidebar
