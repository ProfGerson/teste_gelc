PennController.ResetPrefix(null)
PennController.DebugOff();

Sequence("Participante", "Instrucoes", randomize("Experimento"), SendResults(), "Final");

NewTrial("Participante") ,
    DefaulText
        .css("font-size","1.2em") 
        .print
Newtrial ("Instrucoes")
     DefaulText
        .css("font-size","1.2em") 
        .print
    newText("<p>>Para a realização, você será apresentado a uma situação fictícia e em seguida lerá em voz alta a sentença que aparece em destaque.</p>")
    
    
