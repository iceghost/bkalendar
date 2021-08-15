module Main exposing (main)

import Browser
import Html.Styled as Html exposing (Html, toUnstyled)
import Html.Styled.Events exposing (onInput)
import Random exposing (generate)
import Timetable exposing (Timetable)
import Url exposing (percentEncode)
import Uuid exposing (uuidGenerator)


type alias Model =
    { raw : String
    , result : Maybe Timetable
    , events : List String
    , readyToDownload : Bool
    }


type Msg
    = GotInput String
    | GotEvent String


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view >> toUnstyled
        , update = update
        , subscriptions = subscriptions
        }


init : flags -> ( Model, Cmd msg )
init _ =
    ( { raw = ""
      , result = Nothing
      , events = []
      , readyToDownload = False
      }
    , Cmd.none
    )


view : Model -> Html Msg
view model =
    Html.textarea [ onInput GotInput ] []



-- layout [] <|
--     column
--         [ height fill
--         , width fill
--         , Font.family
--             [ Font.typeface "Roboto Condensed"
--             , Font.sansSerif
--             ]
--         ]
--     <|
--         [ row
--             [ height (px 50)
--             , width fill
--             , spacing 10
--             , paddingXY 20 0
--             , Bg.color black
--             , Font.color white
--             ]
--             [ el [] <| text "BKalendar"
--             , el [ alignRight ] <| text "Home"
--             , el [ alignRight ] <| text "Bonus"
--             , el [ alignRight ] <| text "About"
--             ]
--         , row
--             [ height (px 400)
--             , width fill
--             , paddingXY 100 20
--             , spacing 50
--             , Bg.color gutterGrey
--             , Font.color white
--             ]
--             [ paragraph
--                 [ width (fillPortion 2)
--                 , Font.size 48
--                 , Font.light
--                 ]
--               <|
--                 [ text "Chuyển từ lịch "
--                 , el [ Font.color blue ] <| text "MyBK "
--                 , text "sang "
--                 , el [ Font.color blue ] <| text "G"
--                 , el [ Font.color darkRed ] <| text "o"
--                 , el [ Font.color darkYellow ] <| text "o"
--                 , el [ Font.color blue ] <| text "g"
--                 , el [ Font.color green ] <| text "l"
--                 , el [ Font.color darkRed ] <| text "e "
--                 , text " Calendar chỉ với vài thao tác!"
--                 ]
--             , column [ width (fillPortion 1), spacing 20 ]
--                 [ Input.multiline
--                     [ height (px 150)
--                     , Bg.color commentGrey
--                     , Border.width 0
--                     ]
--                     { onChange = GotInput
--                     , text = model.raw
--                     , placeholder = Nothing
--                     , label = Input.labelAbove [] <| text "paste lịch vào đây"
--                     , spellcheck = False
--                     }
--                 , if model.readyToDownload then
--                     downloadAs [ Font.color green ]
--                         { label =
--                             el [ Font.bold ] <|
--                                 text "➥ click để tải về"
--                         , filename = "calendar"
--                         , url = "data:text/calendar," ++ percentEncode (Class.toCalendar model.events)
--                         }
--                   else
--                     el [ Font.color lightRed ] <| text "kiểm tra lại nhá"
--                 ]
--             ]
--         , row
--             [ width fill, paddingXY 50 20, spacingXY 50 0 ]
--             [ column [ Font.center, width (fillPortion 1), spacingXY 0 10, alignTop ]
--                 [ el [ width fill, Font.bold ] <| text "bước 1"
--                 , paragraph []
--                     [ text "copy thời khóa biểu của bạn trên MyBK" ]
--                 , paragraph [ Font.size 14, Font.italic ]
--                     [ text "(pro-tip: Ctrl + A cả trang cũng được, nhớ chọn học kỳ 2)" ]
--                 , image [ centerX ] { description = "tutorial", src = "./public/tutorial.gif" }
--                 ]
--             , column [ Font.center, width (fillPortion 1), spacingXY 0 10, alignTop ]
--                 [ el [ width fill, Font.bold ] <| text "bước 2"
--                 , paragraph []
--                     [ text "paste vào ô phía phải trên, rồi tải file .ics về" ]
--                 ]
--             , column [ Font.center, width (fillPortion 1), spacingXY 0 10, alignTop ]
--                 [ el [ width fill, Font.bold ] <| text "bước 3"
--                 , paragraph []
--                     [ text <|
--                         "tạo một lịch mới trong Google Calendar, "
--                             ++ "sau đó import file vừa mới tải về vào lịch đó"
--                     ]
--                 ]
--             ]
--         , paragraph
--             [ paddingXY 0 5, alignBottom, Font.center ]
--             [ image [ height (px 16) ]
--                 { description = "logo facebook", src = "./public/facebook.svg" }
--             , link [] { label = text " facebook", url = "https://www.facebook.com/dykhng/" }
--             , text " · "
--             , image [ height (px 16) ]
--                 { description = "logo github", src = "./public/github.svg" }
--             , link [] { label = text " github", url = "https://github.com/iceghost/bkalendar" }
--             ]
--         ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotInput raw ->
            let
                eventGenerator class =
                    Random.map (\uuid -> Timetable.toEvent (Uuid.toString uuid) class) uuidGenerator

                newResult =
                    Timetable.parse raw
            in
            ( { model
                | raw = raw
                , result = newResult
                , events = []
                , readyToDownload = False
              }
            , Cmd.none
            )

        GotEvent event ->
            ( { model
                | events = event :: model.events
              }
            , Cmd.none
            )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
