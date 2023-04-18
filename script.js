// popup modal

// Modal Variable

const modal = document.querySelector('[data-modal]')
const modalCloseBtn = document.querySelector('[data-modal-close]')
const modalCloseOverlay = document.querySelector('[data-modal-overlay]')

// Modal Function

const modalCloseFunction = function() {
    modal.classList.add('closed')
}

// Modal Event Listner

modalCloseOverlay.addEventListener('click',modalCloseFunction)
modalCloseBtn.addEventListener('click',modalCloseFunction)

// Notification Toast variables

const notificationToast = document.querySelector('[data-toast]')
const closeBtn = document.querySelector('[data-toast-close]')

// Notification Toast addEventListner

closeBtn.addEventListener('click',function(){
    notificationToast.classList.add('closed')
})

// Mobile Menu Variable

const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]')
const mobileMenu = document.querySelectorAll('[data-mobile-menu]')
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]')
const overlay = document.querySelector('[data-overlay]')

for (let i=0; i < mobileMenuOpenBtn.length; i++){
    // Mobile Menu Function

    const mobileMenuCloseFunc = function (){
        mobileMenu[i].classList.remove('active')
        overlay.classList.remove('active')
    }

    mobileMenuOpenBtn[i].addEventListener('click',function (){
        mobileMenu[i].classList.add('active')
        overlay.classList.add('active')
    })

    mobileMenuCloseBtn[i].addEventListener('click',mobileMenuCloseFunc)
    overlay.addEventListener('click',mobileMenuCloseFunc)
}


// Accordion Variables

const accordionBtn = document.querySelectorAll('[data-accordion-btn]')
const accordion = document.querySelectorAll('[data-accordion]')

for (let i=0; i < accordionBtn.length; i++){
    accordionBtn[i].addEventListener('click',function() {
        const clickedBtn = this.nextElementSibling.classList.contains('active')
        for (let i=0; i<accordion.length; i++){
            if(clickedBtn) break
            if(accordion[i].classList.contains('active')){
                accordion[i].classList.remove('active')
                accordionBtn[i].classList.remove('active')

            }
        }

        this.nextElementSibling.classList.toggle('active')
        this.classList.toggle('active')
    })
}


