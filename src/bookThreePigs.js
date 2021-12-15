import { i18n } from '@/locales'

const threePigs = {
  currentStep: 0,
  newStory: function () {
    return {
      isThreeTogether: false,
      isTwoTogether: false,
      isGoingToForest: false,
      isTheyBelievedToSheep: false,
      isWolfBrokeTheDoor: false,
      isWolfPassedViaChimney: false
    }
  },
  story: {
    isThreeTogether: false,
    isTwoTogether: false,
    isGoingToForest: false,
    isTheyBelievedToSheep: false,
    isWolfBrokeTheDoor: false,
    isWolfPassedViaChimney: false
  },
  init: function () {
    this.currentStep = 0
    this.story = this.newStory()
    return {
      text: i18n.t('three-pigs.text.0'),
      actions: i18n.t('three-pigs.actions.0')
    }
  },
  doAction: function (action) {
    switch (this.currentStep++) {
      case 0:
        this.story.isThreeTogether = action === 0
        if (this.story.isThreeTogether) {
          this.currentStep += 2
          return {
            text: [...i18n.t('three-pigs.text.11'), ...i18n.t('three-pigs.text.3')],
            actions: i18n.t('three-pigs.actions.3')
          }
        } else {
          return {
            text: i18n.t('three-pigs.text.1'),
            actions: i18n.t('three-pigs.actions.1')
          }
        }
      case 1:
        this.story.isTwoTogether = action === 0
        if (this.story.isTwoTogether) {
          return {
            text: i18n.t('three-pigs.text.13'),
            actions: i18n.t('three-pigs.actions.2')
          }
        } else {
          return {
            text: i18n.t('three-pigs.text.2'),
            actions: i18n.t('three-pigs.actions.2')
          }
        }
      case 2:
        return {
          text: i18n.t('three-pigs.text.3'),
          actions: i18n.t('three-pigs.actions.3')
        }
      case 3:
        this.story.isGoingToForest = action === 0
        if (this.story.isGoingToForest) {
          return {
            text: i18n.t('three-pigs.text.4'),
            actions: i18n.t('three-pigs.actions.4')
          }
        } else {
          return {
            text: i18n.t('three-pigs.text.15'),
            actions: i18n.t('three-pigs.actions.9')
          }
        }
      case 4:
        if (this.story.isThreeTogether) {
          this.currentStep += 3
          return {
            text: i18n.t('three-pigs.text.8'),
            actions: i18n.t('three-pigs.actions.3')
          }
        }
        if (this.story.isTwoTogether) {
          return {
            text: i18n.t('three-pigs.text.14'),
            actions: i18n.t('three-pigs.actions.5')
          }
        }
        return {
          text: i18n.t('three-pigs.text.5'),
          actions: i18n.t('three-pigs.actions.5')
        }
      case 5:
        return {
          text: i18n.t('three-pigs.text.6'),
          actions: i18n.t('three-pigs.actions.6')
        }
      case 6:
        this.story.isTheyBelievedToSheep = action === 0
        if (this.story.isTheyBelievedToSheep) {
          return {
            text: i18n.t('three-pigs.text.12'),
            actions: i18n.t('three-pigs.actions.9')
          }
        } else {
          return {
            text: i18n.t('three-pigs.text.7'),
            actions: i18n.t('three-pigs.actions.7')
          }
        }
      case 7:
        return {
          text: i18n.t('three-pigs.text.8'),
          actions: i18n.t('three-pigs.actions.8')
        }
      case 8:
        this.story.isWolfPassedViaChimney = action === 0
        if (this.story.isWolfPassedViaChimney) {
          return {
            text: i18n.t('three-pigs.text.9'),
            actions: i18n.t('three-pigs.actions.9')
          }
        } else {
          return {
            text: i18n.t('three-pigs.text.10'),
            actions: i18n.t('three-pigs.actions.9')
          }
        }
    }
  }
}

export default threePigs
