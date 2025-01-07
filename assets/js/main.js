/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


document.addEventListener('DOMContentLoaded', () => {
    const githubStatsImage = document.getElementById('github-stats');

    if (githubStatsImage) {
        githubStatsImage.src = `https://github-readme-stats.vercel.app/api?username=harshshah2599&show_icons=true&hide_title=true&hide_border=true&count_private=true&include_all_commits=true&theme=dark`;
    }
});




document.addEventListener('DOMContentLoaded', async () => {
    const pinnedReposContainer = document.getElementById('pinned-repos-container');

    // Fetch your pinned repositories from the GitHub API
    const response = await fetch('https://api.github.com/users/harshshah2599/starred');
    const pinnedRepos = await response.json();

    // Generate HTML for each pinned repository as a card
    const pinnedReposHTML = pinnedRepos.map(repo => `
        <div class="card">
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description provided'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        </div>
    `).join('');

    // Append the HTML to the container
    pinnedReposContainer.innerHTML = pinnedReposHTML;
});