RegisterCommand("openUI", function(_, args)
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = "openUI",
        data = args
    })
end, false)

RegisterNUICallback("closeUI", function(_, cb)
    SetNuiFocus(false, false)
    cb("ok")
end)
