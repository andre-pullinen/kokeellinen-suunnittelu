<template>
  <div class="book-preview">
    <div class="book-preview_image">
      <img :src="require(`../assets/previews/${$props.image}-${$i18n.locale}.png`)" alt=""/>
    </div>
    <div class="book-preview_description">
      <div class="book-preview_title">{{ $props.name }}</div>
      <div class="book-preview_text">{{ $props.text }}</div>
      <div class="book-preview_actions">
        <learn-button :to-go="{ name: $props.routeName }" />
      </div>
    </div>
  </div>
</template>

<script>
import LearnButton from '@/components/LearnButton'
export default {
  name: 'BookPreview',
  components: { LearnButton },
  props: [
    'name',
    'text',
    'image',
    'routeName'
  ]
}
</script>

<style lang="sass">
.book-preview
  display: flex
  width: 50%
  &_image
    background-color: gray
    width: 200px
    height: 300px
    margin-right: 1em
  &_description
    flex: 2
    display: flex
    flex-direction: column
    text-align: left
  &_title
    flex: 0
    padding: 0 0 10px 0
    font-size: 2em
    font-weight: bold
    color: #0c6291
  &_text
    flex: 1
    color: #000004
    font-size: 1.2em
  &_actions
    flex: 0
</style>
