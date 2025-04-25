module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

main =
  Browser.sandbox { init = "5", update = update, view = view }

type Msg = Increment | Decrement | Reset

update msg model =
  case msg of
    Increment ->
      String.toInt model
        |> Maybe.map (\n -> n + 1)
        |> Maybe.withDefault 0
        |> String.fromInt
    Decrement ->
      String.toInt model
        |> Maybe.map (\n -> n - 1)
        |> Maybe.withDefault 0
        |> String.fromInt

    Reset ->
      "5"

view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text model]
    , button [ onClick Increment ] [ text "+" ]
    , button [ onClick Reset ] [ text "Reset" ]
    ]