const DataAfterSection = () => {
    return (
        <div className='onesection' style={{display:'flex', width:"100%",padding:"20px"}}>
          <div style={{backgroundColor:'orange',width:"70%", alignItems:"center", justifyContent:"center",top:'3%'}}>
            <h1 style={{color:"white"}}>Register now and get a discount <span style={{color:"black"}}>50%</span> discount until 1 January</h1>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
          <button style={{backgroundColor:'black', color:'white',padding:"10px 35px"}}>REGISTR NOW</button>
          </div>
          <div style={{width:"30%"}}>
            <form action="" style={{position:"absolute", zIndex:'1', padding:'10px', right:'10%',bottom:'-73%'}}>
                <h1>Search for your course</h1>
<input type="text" placeholder="Name..." style={{padding:'10px 205px'}}/><br></br><br></br>
<input type="text" placeholder="Title..." style={{padding:'10px 205px'}}/><br></br><br></br>
<input type="text" placeholder="Description..."style={{padding:'10px 205px'}}/><br></br><br></br>
<button style={{backgroundColor:'orange', color:'white',padding:"10px 230px"}}> Search Course</button><br></br><br></br>
            </form>
            <img src="https://preview.colorlib.com/theme/course/images/search_background.jpg" alt="" style={{position:"relative"}}/>
          </div>
        </div>
    )
}

export default DataAfterSection
