/*window.addEventListener("load", ()=>{
    GuardarTarefas = JSON.parse(localStorage.getItem("GuardarTarefas")) || []
    const

})*/


let Tarefas = [{Titulo: "", Texto: "", url: "", lista: []}]
    
document.getElementById("Enviar").addEventListener("click", function(event){
    event.preventDefault()

    const DivPai= document.getElementById("#DivPai")
    const Valortitulo = document.querySelector("#Titulo")
    const Valortexto = document.querySelector("#Texto")
    const ValorDias = document.querySelector("#Dias")
    const ValorPrioridade = document.querySelector("#Prioridade")
    Tarefas.push({Titulo:Valortitulo.value, Texto:Valortexto.value, url:"Padrao"})
    console.log(Valortexto.value, Valortitulo.value, ValorDias.value)

    const divPaiSegunda = document.querySelector("#TarefasSegunda > div")
    const divPaiTerça = document.querySelector("#TarefasTerça > div")
    const divPaiQuarta = document.querySelector("#TarefasQuarta > div")
    const divPaiQuinta = document.querySelector("#TarefasQuinta > div")
    const divPaiSexta = document.querySelector("#TarefasSexta > div")
    const divPaiSabado = document.querySelector("#TarefasSabado > div")
    const divPaiDomingo = document.querySelector("#TarefasDomingo > div")

    const Tarefa = document.createElement("div")
    Tarefa.classList.add("Tarefas")
    
    
    const Titulo = document.createElement("input")
    Titulo.type = "text"
    Titulo.value = Valortitulo.value
    Tarefa.appendChild(Titulo)
    Titulo.classList.add("Titulo")


    const Texto = document.createElement("textarea")
    Texto.cols="15" 
    Texto.rows="5"
    Texto.wrap="soft"
    Texto.value = Valortexto.value
    Tarefa.appendChild(Texto)
    Texto.classList.add("Texto")

    const Deletar = document.createElement("button")
    Deletar.classList.add("Btn-Deletar")
    Tarefa.appendChild(Deletar)
    Deletar.textContent = "Deletar"
    

    if(ValorPrioridade.value == "Alta"){
        Tarefa.classList.add("Alta")
    }
    if(ValorPrioridade.value == "Media"){
        Tarefa.classList.add("Media")
    }
    if(ValorPrioridade.value == "Baixa"){
        Tarefa.classList.add("Baixa")
    }
    if(ValorPrioridade.value == "Nula"){
        Tarefa.classList.add("Nula")
    }
    
    if(ValorDias.value == "Segunda"){
        divPaiSegunda.appendChild(Tarefa)

        Deletar.addEventListener("click",()=>{
            divPaiSegunda.removeChild(Tarefa)
        
        })
    }
    if(ValorDias.value == "Terça"){
        divPaiTerça.appendChild(Tarefa)

        Deletar.addEventListener("click",()=>{
            divPaiTerça.removeChild(Tarefa)
        
        })
    }
    if(ValorDias.value == "Quarta"){
        divPaiQuarta.appendChild(Tarefa)

        Deletar.addEventListener("click",()=>{
            divPaiQuarta.removeChild(Tarefa)
        
        })
    }
    if(ValorDias.value == "Quinta"){
        divPaiQuinta.appendChild(Tarefa)

        Deletar.addEventListener("click",()=>{
            divPaiQuinta.removeChild(Tarefa)
        
        })
    }
    if(ValorDias.value == "Sexta"){
        divPaiSexta.appendChild(Tarefa)

        Deletar.addEventListener("click",()=>{
            divPaiSexta.removeChild(Tarefa)
        
        })
    }
    if(ValorDias.value == "Sabado"){
        divPaiSabado.appendChild(Tarefa)

        Deletar.addEventListener("click",()=>{
            divPaiSabado.removeChild(Tarefa)
        
        })
    }
    if(ValorDias.value == "Domingo"){
        divPaiDomingo.appendChild(Tarefa)

        Deletar.addEventListener("click",()=>{
            divPaiDomingo.removeChild(Tarefa)
        
        })
    }   


    Valortexto.value = "";
    Valortitulo.value = "";
    
})

document.querySelectorAll(".grid-dias").forEach((div)=>{
    div.addEventListener("click",()=>{
        console.log("sla ")
        document.querySelectorAll(".Tarefas").forEach((Tarefa)=>{
            Tarefa.addEventListener("click",()=>{
                console.log("sla 2")
            })
        })
    })
})
