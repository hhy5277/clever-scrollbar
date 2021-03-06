const head = document.querySelector('head')

const styleElement = document.createElement('style')

styleElement.appendChild(document.createTextNode(`
.clererscroll--container {
    position: fixed;
    right: 0;
    top: 0;
    width: 10px;
    height: 100%;
    z-index: 1;

    transition: width .2s ease;
}

.clererscroll--container:hover {
    width: 100px;
}

.clererscroll--block {
    width: 10px;
    position: fixed;
    text-align: center;
    font-size: 12px;
    color: transparent;
    overflow: hidden;
    padding: 5px;
    box-sizing: border-box;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: width .2s ease;
}

.clererscroll--container:hover .clererscroll--block {
    color: #444;
    width: 100px;
}

.clererscroll--block-1 {
    background: rgba(200,0,0,0.5);
}

.clererscroll--block-2 {
    background: rgba(84, 175, 241, 0.5);
}

.clererscroll--block-3 {
    background: rgba(126, 234, 124, 0.5);
}

.clererscroll--block-4 {
    background: rgba(154, 46, 210, 0.5);
}

.clererscroll--block-5 {
    background: rgba(76, 65, 82, 0.5);
}
`))

head.appendChild(styleElement)