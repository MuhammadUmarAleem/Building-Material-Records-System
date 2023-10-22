import React from 'react'

const check = () => {
  return (
    <div>
      <form enctype='multipart/form-data'  action={`https://majestic-clever-grapple.glitch.me/UpdateCompanyProfile`} method='post'>
      <input type="file" name="img" />
      <button value="submit" style={{marginTop: "2%",width:"200px" ,padding: "0.25rem 0.5rem", fontSize: "1.0rem"}} class="btn btn-primary btn-block mb-4">Add Product</button>
      </form>
    </div>
  )
}

export default check
