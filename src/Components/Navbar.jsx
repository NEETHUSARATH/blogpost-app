import React from 'react'

const Navbar = () => {
  return (
    
    <div>
         <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
             <div class="container-fluid">
                 <a class="navbar-brand" href="/">BlogApp</a>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                 </button>
                 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                     <div class="navbar-nav">
                         <a class="nav-link active" aria-current="page" href="/viewpost">ViewPost</a>
                         <a class="nav-link" href="/addpost">AddPost</a>
                     </div>
                 </div>
             </div>
         </nav>
     </div>

  )
}

export default Navbar
