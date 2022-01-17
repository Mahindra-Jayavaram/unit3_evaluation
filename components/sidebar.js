function sidebar() {


    // return your html component here
    //Make sure to give input search box id as ""
    return `
    <div id="sidebar">
    <h1>Techcrunch</h1>
    <div class = "names"><b>Login</b></div>
    <div class = "names"><input id = "searchbar" type="text" placeholder="Search News"></div>
    <div class = "names"><b>Startups</b></div>
    <div class = "names"><b>Newsletters</b></div>
    <div class = "names"><b>Audio</b></div>
    <div class = "names"><b>Video</b></div>


   </div> 

   <div id="main">

  </div>
    `
}
export default sidebar