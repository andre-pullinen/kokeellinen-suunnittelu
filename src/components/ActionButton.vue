<template>
  <div class="button__wrapper" @click="$emit('born', $props.action)">
    <span class="button" :title="$props.text"></span>
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text', 'action']
}
</script>

<style lang="sass">
.button
  position: relative
  width: 100%
  padding-top: 25.92%
  display: block
  background-size: 100% 100%
  font-family: 'luckiest guy', serif
  font-size: 28px
  margin-bottom: 20px
  text-decoration: none
  color: #333
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/323909/yellow-shadow.png)

  &:after
    content: attr(title)
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/323909/yellow-top.png)
    transition: all 0.3s
    display: flex
    justify-content: center
    align-items: center

  &:hover:after
    -webkit-transform: translate(2.5%, 10%)
    transform: translate(2.5%, 10%)
    text-shadow: 2px 2px 1px white
    color: black
  &__wrapper
    width: 355px
    display: inline-block
    margin: 20px
    filter: hue-rotate(144deg)
</style>
