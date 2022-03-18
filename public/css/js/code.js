const modalApi = new bootstrap.Modal(document.getElementById('modalApi'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnModificar', e =>{
    const fila = e.target.parentNode.parentNode
    id_modificar.value = fila.children[0].innerHTML
    nombre_modificar.value = fila.children[1].innerHTML
    fecha_modificar.value = fila.children[2].innerHTML
    modalApi.show()
})