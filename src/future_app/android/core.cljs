(ns future-app.android.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [future-app.events]
            [future-app.subs]))

;; jack in the clojurescript repl and should be good

(def ReactNative (js/require "react-native"))

(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))

(def logo-img (js/require "./images/cljs.png"))

(defn alert [title]
      (.alert (.-Alert ReactNative) title))

(defn app-root []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      [view {:style {:flex-direction "column" :margin 40 :align-items "center"}}
       [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @greeting ]
       [image {:source logo-img
               :style  {:width 180 :height 180 :margin-bottom 30}}]
       [touchable-highlight {:style {:background-color "#f00" :padding 20 :border-radius 5}
                             :on-press #(alert "HELLO!")}
        [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "press me"]]])))

(defn init []
      (dispatch-sync [:initialize-db])
      (.registerComponent app-registry "FutureApp" #(r/reactify-component app-root)))

;(in-ns 'future-app.android.core)
;(dispatch [:set-greeting "hellow world."])
