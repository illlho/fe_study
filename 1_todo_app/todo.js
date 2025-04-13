// 할 일 생성
function createTodo() {
    let todoInput = document.getElementById('todo-input')
    let inputText = todoInput.value

    if (inputText == '') {
        alert('할 일을 입력해 주세요!')
        return false
    }

    let todoList = document.getElementById('todo-list')
    let newTodo = document.createElement('li')
    newTodo.innerText = inputText

    todoList.appendChild(newTodo)

    todoInput.value = ''
}

// 할 일 삭제
function deleteItem(button) {
    // closest : 부모 방향으로 거슬러 올라가며 매개변수로 전달한 'li' 태그를 찾는다. 가장 먼저 발견된 항목 하나를 반환한다.
    let li = button.closest('li')
    li.remove()
}

// 할 일 수정
function editItem(button) {
    let li = button.closest('li')

    // querySelector : css 선택자 문법으로 HTML 요소를 '하나' 찾아주는 함수
    // 조건에 맞는 첫 번째 요소 하나만을 가져온다.
    let textSpan = li.querySelector('.todo-text')

    let newText = prompt('할 일을 수정하세요', textSpan.textContent)
    if (newText == null) {
        alert('수정할 내용을 입력해 주세요!')
        return false
    }
    if (newText.trim() == '') {
        alert('수정할 내용을 입력해 주세요!')
        return false
    }
    textSpan.textContent = newText.trim()

    // if (newText != null && newText.trim() != '') {
    //     textSpan.textContent = newText.trim()
    // } else {
    //     alert('수정할 내용을 입력해 주세요!')
    //     return false
    // }
}

// 할 일 완료
function toggleComplete(checkbox) {
    // 현재 요소의 다음 형제 요소를 가져와라
    let textDiv = checkbox.nextElementSibling
    textDiv.classList.toggle('completed', checkbox.checked)
}