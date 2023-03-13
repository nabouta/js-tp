let button1  =document.querySelector('.success');
let button2 =document.querySelector('.danger');
let button3 =document.querySelector('.warming');
let button4 =document.querySelector('.info');
let shownotification =document.querySelector('.show');



 button1.addEventListener('click',() => {
 let notificationsuccess=  document.createElement('div')
 notificationsuccess.className='notification S';
 notificationsuccess.textContent="Notification Success"
 shownotification.appendChild(notificationsuccess)

})

  button2.addEventListener('click',() => {
    let notificationdanger=  document.createElement('div')
    notificationdanger.className='notification D';
    notificationdanger.textContent="Notification Danger"
    shownotification.appendChild(notificationdanger)
   
   })


   button3.addEventListener('click',() => {
    let notificationwarming=  document.createElement('div')
    notificationwarming.className='notification W';
    notificationwarming.textContent="Notification Warming"
    shownotification.appendChild(notificationwarming)
   
   })

   button4.addEventListener('click',() => {
    let notificationinfo=  document.createElement('div')
    notificationinfo.className='notification I';
    notificationinfo.textContent="Notification Info"
    shownotification.appendChild(notificationinfo)
   
   })


