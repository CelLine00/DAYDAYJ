const expandables = document.querySelectorAll('.expandable')
const reactCounts = {};
const reactions = document.querySelectorAll('.reaction')

expandables.forEach(el => {
    const context = el.innerText;

    if(context.length > 150) {
        const seeMore = document.createElement("a")
            seeMore.innerText = "See more"
            seeMore.href = ""
            seeMore.onclick = e => expand(e, el, context, seeMore)
        
        el.innerHTML = context.slice(0, 150)
        el.appendChild(seeMore)
    }
})

reactions.forEach(reaction => {
    reaction.addEventListener('click', () => {
        const reactText = reaction.innerText;
        const reactContainer = reaction.parentNode.nextElementSibling;

        if (reactContainer.classList.contains('react')) {
            const currentCount = reactCounts[reactText] || 0;

            if (currentCount === 0) {
                reactCounts[reactText] = 1;
                reactContainer.innerText = reactCounts[reactText];
            } 
            else {
                reactCounts[reactText] = 0;
                reactContainer.innerText = 0; 
            }
        }
    });
});

function expand(e, el, context, a) {
    e.preventDefault()

    a.innerText = "See Less"
    a.onclick = e => shrink(e, el, context, a)
    el.innerText = context
    el.appendChild(a)
}

function shrink(e, el, context, a) {
    e.preventDefault()

    a.innerText = "See More"
    a.onclick = e => expand(e, el, context, a)
    el.innerText = context.slice(0, 150)
    el.appendChild(a)
}