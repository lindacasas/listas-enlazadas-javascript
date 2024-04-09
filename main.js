// Ejercicio 1: Insertar elemento sin duplicados
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    displayLinkedList(container) {
        let current = this.head;
        let result = "";

        while (current !== null) {
            result += `${current.value} -> `;
            current = current.next;
        }
        result += "null";

        if (!this.head) {
            result = "null";
        }

        container.textContent = `Lista:  ${result}`;
    }

    insertNoDuplicates(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.value === value) {
                alert(`El número ${value} ya está en la lista. Ingrese un número nuevo que no exista en la lista.`);
                return; 
            }
            current = current.next;
        }

        if (current.value === value) {
            alert(`El número ${value} ya está en la lista. Ingrese un número nuevo que no exista en la lista.`);
            return; 
        }

        current.next = new Node(value);
    }
}

const list = new LinkedList();
const input = document.getElementById("ex1-input");
const resultForm = document.getElementById("ex1-resultList");

document.getElementById("button-ex1").addEventListener("click", () => {
    const value = parseInt(input.value);
    if (isNaN(value)) {
        alert("Debe ingresar un número válido");
        return;
    }
    list.insertNoDuplicates(value);
    list.displayLinkedList(resultForm);
    input.value = "";
});
document.getElementById("button1-ex1").addEventListener("click", () => {
    input.value = ""; 
    resultForm.textContent = ""; 
    list.head = null; 
});

// Ejercicio 2: Crear y mostrar listas enlazadas
function generateRandomLinkedList() {
    const head = { value: Math.floor(Math.random() * 100), next: null };
    let current = head;

    for (let i = 0; i < 5; i++) {
        current.next = { value: Math.floor(Math.random() * 100), next: null };
        current = current.next;
    }

    return head;
}

function displayLinkedListInParagraph(resultList, current) {
    resultList.textContent = `Lista:  `;
    
    while (current !== null) {
        resultList.textContent += `${current.value}`;
        current = current.next;
        if (current !== null) resultList.textContent += ` -> `;
    }
    resultList.textContent  += ' -> null';
}

function showElements(current, value) {
    let result = `Elementos mayores a ${value} en Lista: `;
    while (current) {
        if (current.value > value) {
            result += current.value + ' -> ';
        }
        current = current.next;
    }
    result += 'null';
    document.getElementById('ex2-resultList1').textContent = result;
}

let list1;
const inputValue = document.getElementById('ex2-input');
const resultList1 = document.getElementById("ex2-resultList");
const resultContainer=document.getElementById('ex2-resultList1');

const createButton = document.getElementById('btn-ex2-create');

createButton.addEventListener('click', () => {
    list1 = generateRandomLinkedList();
    displayLinkedListInParagraph(resultList1, list1);
    createButton.disabled = true;
});

document.getElementById('btn-ex2-show').addEventListener('click', () => {
    if(createButton.disabled === false){
        alert("Primero debe generar una lista");
        inputValue.value = ""; 
        return;
    }
    const value = parseInt(inputValue.value);
    if (isNaN(value)) {
        alert('Debe ingresar un número válido');
        return;
    }
    showElements(list1, value);
    inputValue.value = ""; 
});

document.getElementById("btn-ex2-clean").addEventListener("click", () => {
    inputValue.value = ""; 
    resultList1.textContent = "";
    resultContainer.textContent = "";
    list1 = null;
    createButton.disabled = false;
});