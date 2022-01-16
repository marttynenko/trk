export default {
  methods: {
    choosedFiles(event) {
      if (event.target.files && event.target.files.length) {
        if (event.target.nextElementSibling) {
          event.target.nextElementSibling.innerHTML = ''
        }
        for (let file of event.target.files) {
          const filename = `<div class="ui-files-area-preview">Файл: ${file.name}, размер: ${(file.size / 1024 / 1024).toFixed(2)} Mb</div>`
          if (event.target.nextElementSibling) {
            event.target.nextElementSibling.insertAdjacentHTML('beforeend',filename)
          }
        }
      } else {
        if (event.target.nextElementSibling) {
          event.target.nextElementSibling.innerHTML = ''
        }
      }
    }
  }
}