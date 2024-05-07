/**
 * Create a dialog for Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 * @param {Object} request the data from the form or from parameters.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function dialogCard(event, request = null) {

  return {
    "action_response": {
      "type": RESPONSE_TYPE_DIALOG,
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "Card Builder",
                "collapsible": true,
                "uncollapsibleWidgetsCount": 2,
                "widgets": [
                  {
                    "textInput": {
                      "name": "description",
                      "type": "MULTIPLE_LINE",
                      "label": "📝 Description",
                      "value": request ? (htmlEntities(request["description"]) || "") : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "image_1",
                      "label": "1️⃣ Image URL",
                      "value": request ? (request["image_1"] || "") : "",
                      "placeholderText": "https://source.unsplash.com/featured/320x320"
                    }
                  },
                  {
                    "textInput": {
                      "name": "image_2",
                      "label": "2️⃣",
                      "value": request ? (request["image_2"] || "") : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "image_3",
                      "label": "3️⃣",
                      "value": request ? (request["image_3"] || "") : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "image_4",
                      "label": "4️⃣",
                      "value": request ? (request["image_4"] || "") : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "image_5",
                      "label": "5️⃣",
                      "value": request ? (request["image_5"] || "") : ""
                    }
                  }
                ]
              }
            ],
            "fixedFooter": {
              "primaryButton": {
                "icon": {
                  "materialIcon": {
                    "name": "send"
                  }
                },
                "text": "Preview",
                "onClick": {
                  "action": {
                    "function": "actionPreviewCard"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
