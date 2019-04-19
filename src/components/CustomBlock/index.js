import './index.css'

export default {
  name: 'DocuteCustomContainer',

  props: {
    type: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  render(h) {
    return h(
      'div',
      {
        class: ['custom-block', this.type]
      },
      [
        this.title &&
          h(
            'p',
            {
              class: 'custom-block-title'
            },
            this.title
          ),
        this.$slots.default
      ]
    )
  }
}
