¿por qué se usa un contexto y no props para la sesión?
por que la sesion se necesita en diferentes partes de la aplicacion(usuario, entrar y salir).

¿qué pasa si un componente usa la sesión fuera del proveedor?
se recibe el valor predeterminado del contexto que es un null, eso provca que lanze un error con el mensaje 
que el usession tiene que usarse dentro del componente principal.


¿dónde se guarda el token y qué riesgo tiene ese lugar?
se guarda en local storage, el riesgo mas fuerte es que cual JS que se ejecute en el origen puede leerlo,
esto podria permitir a una vulnerabilidad inyectar codigo, que se roben el token y hacerse pasar por la persona.
