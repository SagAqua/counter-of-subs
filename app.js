const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        //FOR GETTING IT QUICKER- cant see the difference tho //
        const increment = target / 500;

        if(c < target){
            counter.innerText = c + 1;
            setTimeout(updateCounter, 1);
        } else{
            counter.innerText = target;
        }
    };
    updateCounter();
})

