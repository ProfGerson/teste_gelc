PennController.ResetPrefix(null);

Sequence("Participante", "Instrucoes", randomize("Experimento"), SendResults(), "Final");

Header(
         defaultText
                  .css("font-size","1.2em")
                  .print()
         ,
         defaultTextInput
                  .css("font-size","1.2em")
                  .print()
         ,
         defaultButton
                  .css("font-size","1.2em")
                  .center()
                  .print()
                  .wait()   
)

NewTrial("Participante")

    newtext("<p>Olá! Seja bem-vindo ao nosso experimento!</p>")
    ,
    newtext("<p>Por gentileza, informe o seu NOME COMPLETO.</p>")
    ,
    newTextInput("Nome")
    ,
    newtext("<p>O que você cursa na Ufersa?</p>")
    ,
    newTextInput("Curso")
    ,
    newButtonn ("Iniciar")
    ,
    newVar ("NOME")
      .global() 
      .set( gettextinput("Nome"))
)

.log("NOME" , getVar("NOME"))

newtrial ("Instrucoes",

          newtext ("<p> Instruções </p>") 
          ,
          newtext ("<p>Para a realização, você será apresentado a uma situação fictícia e em seguida lerá em voz alta a sentença que aparece em destaque.</p>") 
          ,

          newButton ("Iniciar")
            .log()
)

