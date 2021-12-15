<template>
  <div>
    <BookPreview
      v-for="book in books"
      :image="book.image"
      :name="book.name"
      :text="book.text"
      :route-name="book.route"
      :key="book.name"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import BookPreview from '../components/BookPreview'
export default {
  name: 'Home',
  components: {
    BookPreview
  },
  data () {
    return {
      books: [
        {
          name: this.$t('books.three-pigs.name'),
          text: this.$t('books.three-pigs.text'),
          image: 'three-pigs',
          route: 'ThreePigs'
        }
      ]
    }
  }
}
</script>
