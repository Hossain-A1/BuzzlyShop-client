
const Footer = () => {
  return (
    <footer className="footer section-padding flex max-md:flex-col justify-between items-center gap-5">
  <div className="flex flex-col items-center justify-center gap-5  ">
    <span className="footer-title text-xl font-semibold">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
  </div> 
  <div  className="flex flex-col items-center justify-center gap-5  ">
    <span className="footer-title text-xl font-semibold">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
  </div> 
  <div className="flex flex-col items-center justify-center gap-5  ">
    <span className="footer-title text-xl font-semibold">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  )
}

export default Footer