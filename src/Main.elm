module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text, h1, section)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)

type alias Id =
    Int

type alias Date =
    String

type alias User =
    { id : Id
    , name : String
    , chosenDates : List Date
    }

type alias Model =
    { users : List User
    , availableDates : List Date
    }


init : Model
init =
    { users = [{ id = 1, name = "John", chosenDates = [] }],
      availableDates = []
    }


main : Program () Model Msg
main =
    Browser.sandbox
        { init = init
        , update = update
        , view = view
        }


type Msg
    = Increment
    | Decrement
    | Reset


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model
                | count =
                    String.toInt model.count
                        |> Maybe.map (\n -> n + 1)
                        |> Maybe.withDefault 0
                        |> String.fromInt
            }

        Decrement ->
            { model
                | count =
                    String.toInt model.count
                        |> Maybe.map (\n -> n - 1)
                        |> Maybe.withDefault 0
                        |> String.fromInt
            }

        Reset ->
            { model | count = "5" }


view : Model -> Html Msg
view model =
    div [ class "counter-app" ]
        [ h1 [ class "title" ] [ text "Elm Counter" ]
        , section [ class "counter-controls" ]
            [ button [ class "btn decrement", onClick Decrement ] [ text "-" ]
            , div [ class "counter-value" ] [ text model.count ]
            , button [ class "btn increment", onClick Increment ] [ text "+" ]
            ]
        , button [ class "btn reset", onClick Reset ] [ text "Reset" ]
        ]
