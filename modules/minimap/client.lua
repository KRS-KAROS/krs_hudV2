if cfg.circleMap then
  CreateThread(function()
    DisplayRadar(false)
    local defaultAspectRatio = 1920/1080
    local resolutionX, resolutionY = GetActiveScreenResolution()
    local aspectRatio = resolutionX/resolutionY
    local minimapOffset = 0
    if aspectRatio > defaultAspectRatio then
        minimapOffset = ((defaultAspectRatio-aspectRatio)/3.6)-0.008
    end
    local minimap = RequestScaleformMovie("minimap")
    RequestStreamedTextureDict("squaremap", false)
    if not HasStreamedTextureDictLoaded("squaremap") then
        Wait(100) 
    end
    SetMinimapClipType(0)
    AddReplaceTexture("platform:/textures/graphics", "radarmasksm", "squaremap", "radarmasksm")
    AddReplaceTexture("platform:/textures/graphics", "radarmask1g", "squaremap", "radarmasksm")
 
    
    SetMinimapComponentPosition("minimap", "L", "B", 0.0 + minimapOffset, -0.047, 0.1638, 0.183)

    SetMinimapComponentPosition("minimap_mask", "L", "B", 0.0 + minimapOffset, 0.0, 0.128, 0.20)

    SetMinimapComponentPosition('minimap_blur', 'L', 'B', -0.01 + minimapOffset, 0.025, 0.262, 0.300)

    repeat Citizen.Wait(100) until ESX.PlayerLoaded

    Citizen.Wait(500)
    SetRadarBigmapEnabled(true, false)
    Citizen.Wait(500)
    SetRadarBigmapEnabled(false, false)

    local minimap = RequestScaleformMovie('minimap')
    repeat Citizen.Wait(100) until HasScaleformMovieLoaded(minimap)

    DisplayRadar(cfg.persistentRadar)
    while true do
      BeginScaleformMovieMethod(minimap, 'SETUP_HEALTH_ARMOUR')
      ScaleformMovieMethodAddParamInt(3)
      EndScaleformMovieMethod()
      Citizen.Wait(cfg.refreshRates.base)
    end
  end)
end

