import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCartPlus,
  faCoffee,
  faEdit,
  faEnvelope,
  faGavel,
  faImage,
  faKey,
  faPlus,
  faShoppingBasket,
  faSignInAlt,
  faSignOutAlt,
  faSpinner,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faGavel,
  faCoffee,
  faCartPlus,
  faSpinner,
  faShoppingBasket,
  faPlus,
  faImage,
  faEdit,
  faTag,
  faSignInAlt,
  faKey,
  faEnvelope,
  faSignOutAlt
)

export const auctionPortalIconSet = {
  install(app) {
    app.component('FaIcon', FontAwesomeIcon)
  },
}
