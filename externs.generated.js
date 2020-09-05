const BABYLON = {};

BABYLON.Debug = {}

/** @constructor */
BABYLON.AbstractScene = function () {
  this.rootNodes = {};
  this.cameras = {};
  this.lights = {};
  this.meshes = {};
  this.skeletons = {};
  this.particleSystems = {};
  this.animations = {};
  this.animationGroups = {};
  this.multiMaterials = {};
  this.materials = {};
  this.morphTargetManagers = {};
  this.geometries = {};
  this.transformNodes = {};
  this.actionManagers = {};
  this.textures = {};
  this.environmentTexture = null;
  this.getNodes = function () {};
  this.removeEffectLayer = function () {};
  this.addEffectLayer = function () {};
  this.getGlowLayerByName = function () {};
  this.getHighlightLayerByName = function () {};
  this.getLensFlareSystemByName = function () {};
  this.getLensFlareSystemByID = function () {};
  this.removeLensFlareSystem = function () {};
  this.addLensFlareSystem = function () {};
  this.removeReflectionProbe = function () {};
  this.addReflectionProbe = function () {};
  this.AddParser = function () {};
  this.GetParser = function () {};
  this.AddIndividualParser = function () {};
  this.GetIndividualParser = function () {};
  this.Parse = function () {};
};

/** @constructor */
BABYLON.AbstractActionManager = function () {
  this.hoverCursor = "";
  this.actions = {};
  this.isRecursive = false;
  this.HasTriggers = false;
  this.HasPickTriggers = false;
  this.HasSpecificTrigger = function () {};
  this.Triggers = {};
};

/** @constructor */
BABYLON.Action = function () {
};

/** @constructor */
BABYLON.ActionEvent = function () {
  // this.source = undefined;
  // this.pointerX = undefined;
  // this.pointerY = undefined;
  // this.meshUnderPointer = undefined;
  // this.sourceEvent = undefined;
  // this.additionalData = undefined;
  this.CreateNew = function () {};
  this.CreateNewFromSprite = function () {};
  this.CreateNewFromScene = function () {};
  this.CreateNewFromPrimitive = function () {};
};

/** @constructor */
BABYLON.ActionManager = function () {
  this.Parse = function () {};
  this.GetTriggerName = function () {};
  this.NothingTrigger = 0;
  this.OnPickTrigger = 1;
  this.OnLeftPickTrigger = 2;
  this.OnRightPickTrigger = 3;
  this.OnCenterPickTrigger = 4;
  this.OnPickDownTrigger = 5;
  this.OnDoublePickTrigger = 6;
  this.OnPickUpTrigger = 7;
  this.OnPickOutTrigger = 16;
  this.OnLongPressTrigger = 8;
  this.OnPointerOverTrigger = 9;
  this.OnPointerOutTrigger = 10;
  this.OnEveryFrameTrigger = 11;
  this.OnIntersectionEnterTrigger = 12;
  this.OnIntersectionExitTrigger = 13;
  this.OnKeyDownTrigger = 14;
  this.OnKeyUpTrigger = 15;
  this.HasTriggers = false;
  this.HasPickTriggers = false;
  this.HasSpecificTrigger = function () {};
  this.Triggers = {};
};

/** @constructor */
BABYLON.Condition = function () {
  this.isValid = function () {};
  this.serialize = function () {};
};

/** @constructor */
BABYLON.ValueCondition = function () {
  this.IsEqual = 0;
  this.IsDifferent = 1;
  this.IsGreater = 2;
  this.IsLesser = 3;
  this.GetOperatorName = function () {};
};

/** @constructor */
BABYLON.PredicateCondition = function () {
  // this.predicate = undefined;
  this.constructor = function () {};
  this.isValid = function () {};
  this.serialize = function () {};
};

/** @constructor */
BABYLON.StateCondition = function () {
  // this.value = undefined;
  this.constructor = function () {};
  this.isValid = function () {};
  this.serialize = function () {};
};

/** @constructor */
BABYLON.SwitchBooleanAction = function () {
};

/** @constructor */
BABYLON.SetStateAction = function () {
};

/** @constructor */
BABYLON.SetValueAction = function () {
};

/** @constructor */
BABYLON.IncrementValueAction = function () {
};

/** @constructor */
BABYLON.PlayAnimationAction = function () {
};

/** @constructor */
BABYLON.StopAnimationAction = function () {
};

/** @constructor */
BABYLON.DoNothingAction = function () {
  this.triggerOptions = 0;
  this.onBeforeExecuteObservable = {};
  this.trigger = 0;
  this.constructor = function () {};
  this.execute = function () {};
  this.serialize = function () {};
  this.getTriggerParameter = function () {};
  this.skipToNextActiveAction = function () {};
  this.then = function () {};
};

/** @constructor */
BABYLON.CombineAction = function () {
};

/** @constructor */
BABYLON.ExecuteCodeAction = function () {
};

/** @constructor */
BABYLON.SetParentAction = function () {
};

/** @constructor */
BABYLON.PlaySoundAction = function () {
};

/** @constructor */
BABYLON.StopSoundAction = function () {
};

/** @constructor */
BABYLON.InterpolateValueAction = function () {
};

/** @constructor */
BABYLON.Animatable = function () {
};

/** @constructor */
BABYLON.Animation = function () {
  this.CreateAnimation = function () {};
  this.CreateAndStartAnimation = function () {};
  this.CreateAndStartHierarchyAnimation = function () {};
  this.CreateMergeAndStartAnimation = function () {};
  this.TransitionTo = function () {};
  this.Parse = function () {};
  this.AppendSerializedAnimations = function () {};
  this.AllowMatricesInterpolation = false;
  this.AllowMatrixDecomposeForInterpolation = true;
  this.ANIMATIONTYPE_FLOAT = 0;
  this.ANIMATIONTYPE_VECTOR3 = 1;
  this.ANIMATIONTYPE_QUATERNION = 2;
  this.ANIMATIONTYPE_MATRIX = 3;
  this.ANIMATIONTYPE_COLOR3 = 4;
  this.ANIMATIONTYPE_COLOR4 = 7;
  this.ANIMATIONTYPE_VECTOR2 = 5;
  this.ANIMATIONTYPE_SIZE = 6;
  this.ANIMATIONLOOPMODE_RELATIVE = 0;
  this.ANIMATIONLOOPMODE_CYCLE = 1;
  this.ANIMATIONLOOPMODE_CONSTANT = 2;
};

/** @constructor */
BABYLON.TargetedAnimation = function () {
  this.serialize = function () {};
};

/** @constructor */
BABYLON.AnimationGroup = function () {
  this.Parse = function () {};
};

/** @constructor */
BABYLON.AnimationPropertiesOverride = function () {
  this.enableBlending = false;
  this.blendingSpeed = 0.01;
  this.loopMode = 1;
};

/** @constructor */
BABYLON.EasingFunction = function () {
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.easeInCore = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.CircleEase = function () {
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.BackEase = function () {
  this.amplitude = 1;
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.BounceEase = function () {
  this.bounces = 3;
  this.bounciness = 2;
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.CubicEase = function () {
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.ElasticEase = function () {
  this.oscillations = 3;
  this.springiness = 3;
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.ExponentialEase = function () {
  this.exponent = 2;
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.PowerEase = function () {
  this.power = 2;
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.QuadraticEase = function () {
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.QuarticEase = function () {
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.QuinticEase = function () {
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.SineEase = function () {
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.BezierCurveEase = function () {
  this.x1 = 0;
  this.y1 = 0;
  this.x2 = 1;
  this.y2 = 1;
  this.constructor = function () {};
  this.easeInCore = function () {};
  this.setEasingMode = function () {};
  this.getEasingMode = function () {};
  this.ease = function () {};
  this.EASINGMODE_EASEIN = 0;
  this.EASINGMODE_EASEOUT = 1;
  this.EASINGMODE_EASEINOUT = 2;
};

/** @constructor */
BABYLON.RuntimeAnimation = function () {
};

/** @constructor */
BABYLON.AnimationEvent = function () {
  // this.frame = undefined;
  // this.action = undefined;
  // this.onlyOnce = undefined;
  this.isDone = false;
};

BABYLON.AnimationKeyInterpolation = {}

/** @constructor */
BABYLON.AnimationRange = function () {
  // this.name = undefined;
  // this.from = undefined;
  // this.to = undefined;
  this.clone = function () {};
};

/** @constructor */
BABYLON.KeepAssets = function () {
  this.rootNodes = {};
  this.cameras = {};
  this.lights = {};
  this.meshes = {};
  this.skeletons = {};
  this.particleSystems = {};
  this.animations = {};
  this.animationGroups = {};
  this.multiMaterials = {};
  this.materials = {};
  this.morphTargetManagers = {};
  this.geometries = {};
  this.transformNodes = {};
  this.actionManagers = {};
  this.textures = {};
  this.environmentTexture = null;
  this.constructor = function () {};
  this.getNodes = function () {};
  this.removeEffectLayer = function () {};
  this.addEffectLayer = function () {};
  this.getGlowLayerByName = function () {};
  this.getHighlightLayerByName = function () {};
  this.getLensFlareSystemByName = function () {};
  this.getLensFlareSystemByID = function () {};
  this.removeLensFlareSystem = function () {};
  this.addLensFlareSystem = function () {};
  this.removeReflectionProbe = function () {};
  this.addReflectionProbe = function () {};
  this.AddParser = function () {};
  this.GetParser = function () {};
  this.AddIndividualParser = function () {};
  this.GetIndividualParser = function () {};
  this.Parse = function () {};
};

/** @constructor */
BABYLON.InstantiatedEntries = function () {
  this.rootNodes = {};
  this.skeletons = {};
  this.animationGroups = {};
};

/** @constructor */
BABYLON.AssetContainer = function () {
  this.AddParser = function () {};
  this.GetParser = function () {};
  this.AddIndividualParser = function () {};
  this.GetIndividualParser = function () {};
  this.Parse = function () {};
};

/** @constructor */
BABYLON.Analyser = function () {
};

/** @constructor */
BABYLON.AudioEngine = function () {
  this.canUseWebAudio = false;
  this.WarnedWebAudioUnsupported = false;
  this.isMP3supported = false;
  this.isOGGsupported = false;
  this.unlocked = true;
  this.useCustomUnlockedButton = false;
  this.onAudioUnlockedObservable = {};
  this.onAudioLockedObservable = {};
  this.audioContext = null;
  this.lock = function () {};
  this.unlock = function () {};
  this.dispose = function () {};
  this.getGlobalVolume = function () {};
  this.setGlobalVolume = function () {};
  this.connectToAnalyser = function () {};
};

/** @constructor */
BABYLON.AudioSceneComponent = function () {
};

/** @constructor */
BABYLON.Sound = function () {
  this.Parse = function () {};
};

/** @constructor */
BABYLON.SoundTrack = function () {
};

/** @constructor */
BABYLON.WeightedSound = function () {
};

/** @constructor */
BABYLON.AutoRotationBehavior = function () {
  this.name = "AutoRotation";
  this.zoomStopsAnimation = false;
  this.idleRotationSpeed = 0.05;
  this.idleRotationWaitTime = 2000;
  this.idleRotationSpinupTime = 2000;
  this.rotationInProgress = false;
  this.init = function () {};
  this.attach = function () {};
  this.detach = function () {};
};

/** @constructor */
BABYLON.BouncingBehavior = function () {
  this.transitionDuration = 450;
  this.lowerRadiusTransitionRange = 2;
  this.upperRadiusTransitionRange = -2;
  this.name = "Bouncing";
  this.autoTransitionRange = false;
  this.init = function () {};
  this.attach = function () {};
  this.detach = function () {};
  this.stopAllAnimations = function () {};
  this.EasingFunction = {};
  this.EasingMode = 1;
};

/** @constructor */
BABYLON.FramingBehavior = function () {
  this.autoCorrectCameraLimitsAndSensibility = true;
  this.name = "Framing";
  this.mode = 1;
  this.radiusScale = 1;
  this.positionScale = 0.5;
  this.defaultElevation = 0.3;
  this.elevationReturnTime = 1500;
  this.elevationReturnWaitTime = 1000;
  this.zoomStopsAnimation = false;
  this.framingTime = 1500;
  this.init = function () {};
  this.attach = function () {};
  this.detach = function () {};
  this.zoomOnMesh = function () {};
  this.zoomOnMeshHierarchy = function () {};
  this.zoomOnMeshesHierarchy = function () {};
  this.zoomOnBoundingInfo = function () {};
  this.stopAllAnimations = function () {};
  this.isUserIsMoving = false;
  this.EasingFunction = {};
  this.EasingMode = 2;
  this.IgnoreBoundsSizeMode = 0;
  this.FitFrustumSidesMode = 1;
};

/** @constructor */
BABYLON.AttachToBoxBehavior = function () {
  // this.ui = undefined;
  this.name = "AttachToBoxBehavior";
  this.distanceAwayFromFace = 0.15;
  this.distanceAwayFromBottomOfFace = 0.15;
  this.init = function () {};
  this.attach = function () {};
  this.detach = function () {};
};

/** @constructor */
BABYLON.FadeInOutBehavior = function () {
  this.delay = 0;
  this.fadeInTime = 300;
  this.name = "FadeInOut";
  this.init = function () {};
  this.attach = function () {};
  this.detach = function () {};
  this.fadeIn = function () {};
};

/** @constructor */
BABYLON.MultiPointerScaleBehavior = function () {
  this.name = "MultiPointerScale";
  this.init = function () {};
  this.attach = function () {};
  this.detach = function () {};
};

/** @constructor */
BABYLON.PointerDragBehavior = function () {
  this.maxDragAngle = 0;
  this.currentDraggingPointerID = -1;
  this.dragging = false;
  this.dragDeltaRatio = 0.2;
  this.updateDragPlane = true;
  this.onDragObservable = {};
  this.onDragStartObservable = {};
  this.onDragEndObservable = {};
  this.moveAttached = true;
  this.enabled = true;
  this.startAndReleaseDragOnPointerEvents = true;
  this.detachCameraControls = true;
  this.useObjectOrientationForDragging = true;
  this.validateDrag = function () {};
  this.options = {};
  this.name = "PointerDrag";
  this.init = function () {};
  this.attach = function () {};
  this.releaseDrag = function () {};
  this.startDrag = function () {};
  this.detach = function () {};
};

/** @constructor */
BABYLON.SixDofDragBehavior = function () {
  this.zDragFactor = 3;
  this.rotateDraggedObject = true;
  this.dragging = false;
  this.dragDeltaRatio = 0.2;
  this.currentDraggingPointerID = -1;
  this.detachCameraControls = true;
  this.onDragStartObservable = {};
  this.onDragEndObservable = {};
  this.name = "SixDofDrag";
  this.init = function () {};
  this.attach = function () {};
  this.detach = function () {};
};

/** @constructor */
BABYLON.Bone = function () {
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.BoneIKController = function () {
};

/** @constructor */
BABYLON.BoneLookController = function () {
};

/** @constructor */
BABYLON.Skeleton = function () {
  this.Parse = function () {};
};

BABYLON.CameraInputTypes = {}

/** @constructor */
BABYLON.CameraInputsManager = function () {
  this.attached = {};
  // this.camera = undefined;
  this.checkInputs = function () {};
  this.add = function () {};
  this.remove = function () {};
  this.removeByType = function () {};
  this.attachInput = function () {};
  this.attachElement = function () {};
  this.detachElement = function () {};
  this.rebuildInputCheck = function () {};
  this.clear = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.Camera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.TargetCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.FreeCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.FreeCameraInputsManager = function () {
  this.attached = {};
  // this.camera = undefined;
  this.checkInputs = function () {};
  this.constructor = function () {};
  this.addKeyboard = function () {};
  this.addMouse = function () {};
  this.removeMouse = function () {};
  this.addTouch = function () {};
  this.clear = function () {};
  this.addDeviceOrientation = function () {};
  this.addVirtualJoystick = function () {};
  this.addGamepad = function () {};
  this.add = function () {};
  this.remove = function () {};
  this.removeByType = function () {};
  this.attachInput = function () {};
  this.attachElement = function () {};
  this.detachElement = function () {};
  this.rebuildInputCheck = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.TouchCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.ArcRotateCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.ArcRotateCameraInputsManager = function () {
  this.attached = {};
  // this.camera = undefined;
  this.checkInputs = function () {};
  this.constructor = function () {};
  this.addMouseWheel = function () {};
  this.addPointers = function () {};
  this.addKeyboard = function () {};
  this.addVRDeviceOrientation = function () {};
  this.addGamepad = function () {};
  this.add = function () {};
  this.remove = function () {};
  this.removeByType = function () {};
  this.attachInput = function () {};
  this.attachElement = function () {};
  this.detachElement = function () {};
  this.rebuildInputCheck = function () {};
  this.clear = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.DeviceOrientationCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.FlyCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.FlyCameraInputsManager = function () {
  this.attached = {};
  // this.camera = undefined;
  this.checkInputs = function () {};
  this.constructor = function () {};
  this.addKeyboard = function () {};
  this.addMouse = function () {};
  this.add = function () {};
  this.remove = function () {};
  this.removeByType = function () {};
  this.attachInput = function () {};
  this.attachElement = function () {};
  this.detachElement = function () {};
  this.rebuildInputCheck = function () {};
  this.clear = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.FollowCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.ArcFollowCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.FollowCameraInputsManager = function () {
  this.attached = {};
  // this.camera = undefined;
  this.checkInputs = function () {};
  this.constructor = function () {};
  this.addKeyboard = function () {};
  this.addMouseWheel = function () {};
  this.addPointers = function () {};
  this.addVRDeviceOrientation = function () {};
  this.add = function () {};
  this.remove = function () {};
  this.removeByType = function () {};
  this.attachInput = function () {};
  this.attachElement = function () {};
  this.detachElement = function () {};
  this.rebuildInputCheck = function () {};
  this.clear = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.GamepadCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.UniversalCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.VirtualJoysticksCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.ArcRotateCameraGamepadInput = function () {
  this.gamepadRotationSensibility = 80;
  this.gamepadMoveSensibility = 40;
  this.invertYAxis = false;
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.checkInputs = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.ArcRotateCameraKeyboardMoveInput = function () {
  this.keysUp = {};
  this.keysDown = {};
  this.keysLeft = {};
  this.keysRight = {};
  this.keysReset = {};
  this.panningSensibility = 50;
  this.zoomingSensibility = 25;
  this.useAltToZoom = true;
  this.angularSpeed = 0.01;
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.checkInputs = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.ArcRotateCameraMouseWheelInput = function () {
  this.wheelPrecision = 3;
  this.wheelDeltaPercentage = 0;
  this.computeDeltaFromMouseWheelLegacyEvent = function () {};
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.ArcRotateCameraPointersInput = function () {
  this.buttons = {};
  this.angularSensibilityX = 1000;
  this.angularSensibilityY = 1000;
  this.pinchPrecision = 12;
  this.pinchDeltaPercentage = 0;
  this.useNaturalPinchZoom = false;
  this.panningSensibility = 1000;
  this.multiTouchPanning = true;
  this.multiTouchPanAndZoom = true;
  this.pinchInwards = true;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.onTouch = function () {};
  this.onDoubleTap = function () {};
  this.onMultiTouch = function () {};
  this.onButtonDown = function () {};
  this.onButtonUp = function () {};
  this.onLostFocus = function () {};
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.getSimpleName = function () {};
  this.onContextMenu = function () {};
};

/** @constructor */
BABYLON.ArcRotateCameraVRDeviceOrientationInput = function () {
  this.alphaCorrection = 1;
  this.gammaCorrection = 1;
  this.attachControl = function () {};
  this.checkInputs = function () {};
  this.detachControl = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.FlyCameraKeyboardInput = function () {
  this.keysForward = {};
  this.keysBackward = {};
  this.keysUp = {};
  this.keysDown = {};
  this.keysRight = {};
  this.keysLeft = {};
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
  this.checkInputs = function () {};
};

/** @constructor */
BABYLON.FlyCameraMouseInput = function () {
  this.buttons = {};
  this.buttonsYaw = {};
  this.buttonsPitch = {};
  this.buttonsRoll = {};
  this.activeButton = -1;
  this.angularSensibility = 1000;
  this.previousPosition = null;
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
  this.rotateCamera = function () {};
};

/** @constructor */
BABYLON.FollowCameraKeyboardMoveInput = function () {
  this.keysHeightOffsetIncr = {};
  this.keysHeightOffsetDecr = {};
  this.keysHeightOffsetModifierAlt = false;
  this.keysHeightOffsetModifierCtrl = false;
  this.keysHeightOffsetModifierShift = false;
  this.keysRotationOffsetIncr = {};
  this.keysRotationOffsetDecr = {};
  this.keysRotationOffsetModifierAlt = false;
  this.keysRotationOffsetModifierCtrl = false;
  this.keysRotationOffsetModifierShift = false;
  this.keysRadiusIncr = {};
  this.keysRadiusDecr = {};
  this.keysRadiusModifierAlt = true;
  this.keysRadiusModifierCtrl = false;
  this.keysRadiusModifierShift = false;
  this.heightSensibility = 1;
  this.rotationSensibility = 1;
  this.radiusSensibility = 1;
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.checkInputs = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.FollowCameraMouseWheelInput = function () {
  this.axisControlRadius = true;
  this.axisControlHeight = false;
  this.axisControlRotation = false;
  this.wheelPrecision = 3;
  this.wheelDeltaPercentage = 0;
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.FollowCameraPointersInput = function () {
  this.buttons = {};
  this.angularSensibilityX = 1;
  this.angularSensibilityY = 1;
  this.pinchPrecision = 10000;
  this.pinchDeltaPercentage = 0;
  this.axisXControlRadius = false;
  this.axisXControlHeight = false;
  this.axisXControlRotation = true;
  this.axisYControlRadius = false;
  this.axisYControlHeight = true;
  this.axisYControlRotation = false;
  this.axisPinchControlRadius = true;
  this.axisPinchControlHeight = false;
  this.axisPinchControlRotation = false;
  this.warningEnable = true;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.onTouch = function () {};
  this.onMultiTouch = function () {};
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.getSimpleName = function () {};
  this.onDoubleTap = function () {};
  this.onContextMenu = function () {};
  this.onButtonDown = function () {};
  this.onButtonUp = function () {};
  this.onLostFocus = function () {};
};

/** @constructor */
BABYLON.FreeCameraDeviceOrientationInput = function () {
  // this.camera = undefined;
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.checkInputs = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
  this.WaitForOrientationChangeAsync = function () {};
};

/** @constructor */
BABYLON.FreeCameraGamepadInput = function () {
  this.gamepadAngularSensibility = 200;
  this.gamepadMoveSensibility = 40;
  this.invertYAxis = false;
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.checkInputs = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.FreeCameraKeyboardMoveInput = function () {
  this.keysUp = {};
  this.keysDown = {};
  this.keysLeft = {};
  this.keysRight = {};
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.checkInputs = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.FreeCameraMouseInput = function () {
  this.touchEnabled = true;
  this.buttons = {};
  this.angularSensibility = 2000;
  this.previousPosition = null;
  this.onPointerMovedObservable = {};
  this.attachControl = function () {};
  this.onContextMenu = function () {};
  this.detachControl = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.FreeCameraTouchInput = function () {
  this.touchAngularSensibility = 200000;
  this.touchMoveSensibility = 250;
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.checkInputs = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.FreeCameraVirtualJoystickInput = function () {
  this.getLeftJoystick = function () {};
  this.getRightJoystick = function () {};
  this.checkInputs = function () {};
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.getClassName = function () {};
  this.getSimpleName = function () {};
};

/** @constructor */
BABYLON.AnaglyphArcRotateCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.AnaglyphFreeCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.AnaglyphGamepadCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.AnaglyphUniversalCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.StereoscopicArcRotateCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.StereoscopicFreeCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.StereoscopicGamepadCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.StereoscopicUniversalCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.VRCameraMetrics = function () {
  this.compensateDistortion = true;
  this.multiviewEnabled = false;
  this.aspectRatio = NaN;
  this.aspectRatioFov = NaN;
  this.leftHMatrix = {};
  this.rightHMatrix = {};
  this.leftPreViewMatrix = {};
  this.rightPreViewMatrix = {};
  this.GetDefault = function () {};
};

/** @constructor */
BABYLON.VRDeviceOrientationArcRotateCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.VRDeviceOrientationFreeCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.VRDeviceOrientationGamepadCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.OnAfterEnteringVRObservableEvent = function () {
};

/** @constructor */
BABYLON.VRExperienceHelper = function () {
  this.TELEPORTATIONMODE_CONSTANTTIME = 0;
  this.TELEPORTATIONMODE_CONSTANTSPEED = 1;
};

/** @constructor */
BABYLON.WebVRFreeCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.Collider = function () {
  this.collisionMask = -1;
  this.slidePlaneNormal = {};
};

/** @constructor */
BABYLON.DefaultCollisionCoordinator = function () {
  this.getNewPosition = function () {};
  this.createCollider = function () {};
  this.init = function () {};
};

/** @constructor */
BABYLON.PickingInfo = function () {
  this.hit = false;
  this.distance = 0;
  this.pickedPoint = null;
  this.pickedMesh = null;
  this.bu = 0;
  this.bv = 0;
  this.faceId = -1;
  this.subMeshId = 0;
  this.pickedSprite = null;
  this.originMesh = null;
  this.ray = null;
  this.getNormal = function () {};
  this.getTextureCoordinates = function () {};
};

/** @constructor */
BABYLON.IntersectionInfo = function () {
  // this.bu = undefined;
  // this.bv = undefined;
  // this.distance = undefined;
  this.faceId = 0;
  this.subMeshId = 0;
};

/** @constructor */
BABYLON.BoundingBox = function () {
  this.Intersects = function () {};
  this.IntersectsSphere = function () {};
  this.IsCompletelyInFrustum = function () {};
  this.IsInFrustum = function () {};
  this.TmpVector3 = {};
};

/** @constructor */
BABYLON.BoundingInfo = function () {
  this.TmpVector3 = {};
};

/** @constructor */
BABYLON.BoundingSphere = function () {
  this.Intersects = function () {};
  this.TmpVector3 = {};
};

/** @constructor */
BABYLON.Ray = function () {
  // this.origin = undefined;
  // this.direction = undefined;
  this.length = 1.7976931348623157e+308;
  this.intersectsBoxMinMax = function () {};
  this.intersectsBox = function () {};
  this.intersectsSphere = function () {};
  this.intersectsTriangle = function () {};
  this.intersectsPlane = function () {};
  this.intersectsAxis = function () {};
  this.intersectsMesh = function () {};
  this.intersectsMeshes = function () {};
  this.intersectionSegment = function () {};
  this.update = function () {};
  this.unprojectRayToRef = function () {};
  this.Zero = function () {};
  this.CreateNew = function () {};
  this.CreateNewFromTo = function () {};
  this.Transform = function () {};
  this.TransformToRef = function () {};
  this.TmpVector3 = {};
  this.smallnum = 1e-8;
  this.rayl = 1000000000;
};

/** @constructor */
BABYLON.Octree = function () {
  this.maxDepth = 2;
  this.dynamicContent = {};
  this.update = function () {};
  this.addMesh = function () {};
  this.removeMesh = function () {};
  this.select = function () {};
  this.intersects = function () {};
  this.intersectsRay = function () {};
  this.CreationFuncForMeshes = function () {};
  this.CreationFuncForSubMeshes = function () {};
};

/** @constructor */
BABYLON.OctreeBlock = function () {
};

/** @constructor */
BABYLON.OctreeSceneComponent = function () {
};

/** @constructor */
BABYLON.AxesViewer = function () {
};

/** @constructor */
BABYLON.BoneAxesViewer = function () {
};

BABYLON.DebugLayerTab = {}

/** @constructor */
BABYLON.DebugLayer = function () {
  this.InspectorURL = "https://unpkg.com/babylonjs-inspector@4.1.0/babylon.inspector.bundle.js";
};

/** @constructor */
BABYLON.PhysicsViewer = function () {
};

/** @constructor */
BABYLON.RayHelper = function () {
  // this.ray = undefined;
  this.show = function () {};
  this.hide = function () {};
  this.attachToMesh = function () {};
  this.detachFromMesh = function () {};
  this.dispose = function () {};
  this.CreateAndShow = function () {};
};

/** @constructor */
BABYLON.SkeletonViewer = function () {
};

/** @constructor */
BABYLON.Constants = function () {
  this.ALPHA_DISABLE = 0;
  this.ALPHA_ADD = 1;
  this.ALPHA_COMBINE = 2;
  this.ALPHA_SUBTRACT = 3;
  this.ALPHA_MULTIPLY = 4;
  this.ALPHA_MAXIMIZED = 5;
  this.ALPHA_ONEONE = 6;
  this.ALPHA_PREMULTIPLIED = 7;
  this.ALPHA_PREMULTIPLIED_PORTERDUFF = 8;
  this.ALPHA_INTERPOLATE = 9;
  this.ALPHA_SCREENMODE = 10;
  this.ALPHA_ONEONE_ONEONE = 11;
  this.ALPHA_ALPHATOCOLOR = 12;
  this.ALPHA_REVERSEONEMINUS = 13;
  this.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14;
  this.ALPHA_ONEONE_ONEZERO = 15;
  this.ALPHA_EXCLUSION = 16;
  this.ALPHA_EQUATION_ADD = 0;
  this.ALPHA_EQUATION_SUBSTRACT = 1;
  this.ALPHA_EQUATION_REVERSE_SUBTRACT = 2;
  this.ALPHA_EQUATION_MAX = 3;
  this.ALPHA_EQUATION_MIN = 4;
  this.ALPHA_EQUATION_DARKEN = 5;
  this.DELAYLOADSTATE_NONE = 0;
  this.DELAYLOADSTATE_LOADED = 1;
  this.DELAYLOADSTATE_LOADING = 2;
  this.DELAYLOADSTATE_NOTLOADED = 4;
  this.NEVER = 512;
  this.ALWAYS = 519;
  this.LESS = 513;
  this.EQUAL = 514;
  this.LEQUAL = 515;
  this.GREATER = 516;
  this.GEQUAL = 518;
  this.NOTEQUAL = 517;
  this.KEEP = 7680;
  this.REPLACE = 7681;
  this.INCR = 7682;
  this.DECR = 7683;
  this.INVERT = 5386;
  this.INCR_WRAP = 34055;
  this.DECR_WRAP = 34056;
  this.TEXTURE_CLAMP_ADDRESSMODE = 0;
  this.TEXTURE_WRAP_ADDRESSMODE = 1;
  this.TEXTURE_MIRROR_ADDRESSMODE = 2;
  this.TEXTUREFORMAT_ALPHA = 0;
  this.TEXTUREFORMAT_LUMINANCE = 1;
  this.TEXTUREFORMAT_LUMINANCE_ALPHA = 2;
  this.TEXTUREFORMAT_RGB = 4;
  this.TEXTUREFORMAT_RGBA = 5;
  this.TEXTUREFORMAT_RED = 6;
  this.TEXTUREFORMAT_R = 6;
  this.TEXTUREFORMAT_RG = 7;
  this.TEXTUREFORMAT_RED_INTEGER = 8;
  this.TEXTUREFORMAT_R_INTEGER = 8;
  this.TEXTUREFORMAT_RG_INTEGER = 9;
  this.TEXTUREFORMAT_RGB_INTEGER = 10;
  this.TEXTUREFORMAT_RGBA_INTEGER = 11;
  this.TEXTURETYPE_UNSIGNED_BYTE = 0;
  this.TEXTURETYPE_UNSIGNED_INT = 0;
  this.TEXTURETYPE_FLOAT = 1;
  this.TEXTURETYPE_HALF_FLOAT = 2;
  this.TEXTURETYPE_BYTE = 3;
  this.TEXTURETYPE_SHORT = 4;
  this.TEXTURETYPE_UNSIGNED_SHORT = 5;
  this.TEXTURETYPE_INT = 6;
  this.TEXTURETYPE_UNSIGNED_INTEGER = 7;
  this.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8;
  this.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9;
  this.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10;
  this.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11;
  this.TEXTURETYPE_UNSIGNED_INT_24_8 = 12;
  this.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13;
  this.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14;
  this.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15;
  this.TEXTURE_NEAREST_SAMPLINGMODE = 1;
  this.TEXTURE_NEAREST_NEAREST = 1;
  this.TEXTURE_BILINEAR_SAMPLINGMODE = 2;
  this.TEXTURE_LINEAR_LINEAR = 2;
  this.TEXTURE_TRILINEAR_SAMPLINGMODE = 3;
  this.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3;
  this.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4;
  this.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5;
  this.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6;
  this.TEXTURE_NEAREST_LINEAR = 7;
  this.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8;
  this.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9;
  this.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10;
  this.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11;
  this.TEXTURE_LINEAR_NEAREST = 12;
  this.TEXTURE_EXPLICIT_MODE = 0;
  this.TEXTURE_SPHERICAL_MODE = 1;
  this.TEXTURE_PLANAR_MODE = 2;
  this.TEXTURE_CUBIC_MODE = 3;
  this.TEXTURE_PROJECTION_MODE = 4;
  this.TEXTURE_SKYBOX_MODE = 5;
  this.TEXTURE_INVCUBIC_MODE = 6;
  this.TEXTURE_EQUIRECTANGULAR_MODE = 7;
  this.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8;
  this.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.SCALEMODE_FLOOR = 1;
  this.SCALEMODE_NEAREST = 2;
  this.SCALEMODE_CEILING = 3;
  this.MATERIAL_TextureDirtyFlag = 1;
  this.MATERIAL_LightDirtyFlag = 2;
  this.MATERIAL_FresnelDirtyFlag = 4;
  this.MATERIAL_AttributesDirtyFlag = 8;
  this.MATERIAL_MiscDirtyFlag = 16;
  this.MATERIAL_AllDirtyFlag = 31;
  this.MATERIAL_TriangleFillMode = 0;
  this.MATERIAL_WireFrameFillMode = 1;
  this.MATERIAL_PointFillMode = 2;
  this.MATERIAL_PointListDrawMode = 3;
  this.MATERIAL_LineListDrawMode = 4;
  this.MATERIAL_LineLoopDrawMode = 5;
  this.MATERIAL_LineStripDrawMode = 6;
  this.MATERIAL_TriangleStripDrawMode = 7;
  this.MATERIAL_TriangleFanDrawMode = 8;
  this.MATERIAL_ClockWiseSideOrientation = 0;
  this.MATERIAL_CounterClockWiseSideOrientation = 1;
  this.ACTION_NothingTrigger = 0;
  this.ACTION_OnPickTrigger = 1;
  this.ACTION_OnLeftPickTrigger = 2;
  this.ACTION_OnRightPickTrigger = 3;
  this.ACTION_OnCenterPickTrigger = 4;
  this.ACTION_OnPickDownTrigger = 5;
  this.ACTION_OnDoublePickTrigger = 6;
  this.ACTION_OnPickUpTrigger = 7;
  this.ACTION_OnPickOutTrigger = 16;
  this.ACTION_OnLongPressTrigger = 8;
  this.ACTION_OnPointerOverTrigger = 9;
  this.ACTION_OnPointerOutTrigger = 10;
  this.ACTION_OnEveryFrameTrigger = 11;
  this.ACTION_OnIntersectionEnterTrigger = 12;
  this.ACTION_OnIntersectionExitTrigger = 13;
  this.ACTION_OnKeyDownTrigger = 14;
  this.ACTION_OnKeyUpTrigger = 15;
  this.PARTICLES_BILLBOARDMODE_Y = 2;
  this.PARTICLES_BILLBOARDMODE_ALL = 7;
  this.PARTICLES_BILLBOARDMODE_STRETCHED = 8;
  this.MESHES_CULLINGSTRATEGY_STANDARD = 0;
  this.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
  this.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
  this.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
  this.SCENELOADER_NO_LOGGING = 0;
  this.SCENELOADER_MINIMAL_LOGGING = 1;
  this.SCENELOADER_SUMMARY_LOGGING = 2;
  this.SCENELOADER_DETAILED_LOGGING = 3;
};

/** @constructor */
BABYLON.ThinEngine = function () {
  this.forcePOTTextures = false;
  this.isFullscreen = false;
  this.cullBackFaces = true;
  this.renderEvenInBackground = true;
  this.preventCacheWipeBetweenFrames = false;
  this.validateShaderPrograms = false;
  this.useReverseDepthBuffer = false;
  this.disableUniformBuffers = false;
  this.onContextLostObservable = {};
  this.onContextRestoredObservable = {};
  this.disableVertexArrayObjects = false;
  this.premultipliedAlpha = true;
  this.onBeforeTextureInitObservable = {};
  this.enableUnpackFlipYCached = true;
  this.NpmPackage = "babylonjs@4.1.0";
  this.Version = "4.1.0";
  this.ShadersRepository = "src/Shaders/";
  this.isSupported = function () {};
  this.CeilingPOT = function () {};
  this.FloorPOT = function () {};
  this.NearestPOT = function () {};
  this.GetExponentOfTwo = function () {};
  this.QueueNewFrame = function () {};
  this.ExceptionList = {};
  this.CollisionsEpsilon = 0.001;
};

/** @constructor */
BABYLON.Engine = function () {
  this.forcePOTTextures = false;
  this.isFullscreen = false;
  this.cullBackFaces = true;
  this.renderEvenInBackground = true;
  this.preventCacheWipeBetweenFrames = false;
  this.validateShaderPrograms = false;
  this.useReverseDepthBuffer = false;
  this.disableUniformBuffers = false;
  this.onContextLostObservable = {};
  this.onContextRestoredObservable = {};
  this.disableVertexArrayObjects = false;
  this.premultipliedAlpha = true;
  this.onBeforeTextureInitObservable = {};
  this.enableUnpackFlipYCached = true;
  this.enableOfflineSupport = false;
  this.disableManifestCheck = false;
  this.scenes = {};
  this.onNewSceneAddedObservable = {};
  this.postProcesses = {};
  this.isPointerLock = false;
  this.onResizeObservable = {};
  this.onCanvasBlurObservable = {};
  this.onCanvasFocusObservable = {};
  this.onCanvasPointerOutObservable = {};
  this.onBeginFrameObservable = {};
  this.customAnimationFrameRequester = null;
  this.onEndFrameObservable = {};
  this.onBeforeShaderCompilationObservable = {};
  this.onAfterShaderCompilationObservable = {};
  this.canvasTabIndex = 1;
  this.disablePerformanceMonitorInBackground = false;
  this.constructor = function () {};
  this.performanceMonitor = {};
  this.getInputElement = function () {};
  this.getAspectRatio = function () {};
  this.getScreenAspectRatio = function () {};
  this.getRenderingCanvasClientRect = function () {};
  this.getInputElementClientRect = function () {};
  this.isDeterministicLockStep = function () {};
  this.getLockstepMaxSteps = function () {};
  this.getTimeStep = function () {};
  this.generateMipMapsForCubemap = function () {};
  this.setState = function () {};
  this.setZOffset = function () {};
  this.getZOffset = function () {};
  this.setDepthBuffer = function () {};
  this.getDepthWrite = function () {};
  this.setDepthWrite = function () {};
  this.getStencilBuffer = function () {};
  this.setStencilBuffer = function () {};
  this.getStencilMask = function () {};
  this.setStencilMask = function () {};
  this.getStencilFunction = function () {};
  this.getStencilFunctionReference = function () {};
  this.getStencilFunctionMask = function () {};
  this.setStencilFunction = function () {};
  this.setStencilFunctionReference = function () {};
  this.setStencilFunctionMask = function () {};
  this.getStencilOperationFail = function () {};
  this.getStencilOperationDepthFail = function () {};
  this.getStencilOperationPass = function () {};
  this.setStencilOperationFail = function () {};
  this.setStencilOperationDepthFail = function () {};
  this.setStencilOperationPass = function () {};
  this.setDitheringState = function () {};
  this.setRasterizerState = function () {};
  this.getDepthFunction = function () {};
  this.setDepthFunction = function () {};
  this.setDepthFunctionToGreater = function () {};
  this.setDepthFunctionToGreaterOrEqual = function () {};
  this.setDepthFunctionToLess = function () {};
  this.setDepthFunctionToLessOrEqual = function () {};
  this.cacheStencilState = function () {};
  this.restoreStencilState = function () {};
  this.setDirectViewport = function () {};
  this.scissorClear = function () {};
  this.enableScissor = function () {};
  this.disableScissor = function () {};
  this.initWebVR = function () {};
  this.disableVR = function () {};
  this.isVRPresenting = function () {};
  this.getVertexShaderSource = function () {};
  this.getFragmentShaderSource = function () {};
  this.setDepthStencilTexture = function () {};
  this.setTextureFromPostProcess = function () {};
  this.setTextureFromPostProcessOutput = function () {};
  this.switchFullscreen = function () {};
  this.enterFullscreen = function () {};
  this.exitFullscreen = function () {};
  this.enterPointerlock = function () {};
  this.exitPointerlock = function () {};
  this.beginFrame = function () {};
  this.endFrame = function () {};
  this.resize = function () {};
  this.setSize = function () {};
  this.updateDynamicVertexBuffer = function () {};
  this.createShaderProgram = function () {};
  this.getFps = function () {};
  this.getDeltaTime = function () {};
  this.updateDynamicIndexBuffer = function () {};
  this.updateRenderTargetTextureSampleCount = function () {};
  this.updateTextureComparisonFunction = function () {};
  this.createInstancesBuffer = function () {};
  this.deleteInstancesBuffer = function () {};
  this.dispose = function () {};
  this.displayLoadingUI = function () {};
  this.hideLoadingUI = function () {};
  // this.loadingScreen = undefined;
  // this.loadingUIText = undefined;
  // this.loadingUIBackgroundColor = undefined;
  this.updateRawTexture = function () {};
  this.createRawTexture = function () {};
  this.createRawCubeTexture = function () {};
  this.updateRawCubeTexture = function () {};
  this.createRawCubeTextureFromUrl = function () {};
  this.createRawTexture2DArray = function () {};
  this.createRawTexture3D = function () {};
  this.updateRawTexture2DArray = function () {};
  this.updateRawTexture3D = function () {};
  this.createMultiviewRenderTargetTexture = function () {};
  this.bindMultiviewFramebuffer = function () {};
  // this.isInVRExclusivePointerMode = undefined;
  this.isVRDevicePresent = function () {};
  this.getVRDevice = function () {};
  this.initWebVRAsync = function () {};
  this.enableVR = function () {};
  this.createQuery = function () {};
  this.deleteQuery = function () {};
  this.isQueryResultAvailable = function () {};
  this.getQueryResult = function () {};
  this.beginOcclusionQuery = function () {};
  this.endOcclusionQuery = function () {};
  this.startTimeQuery = function () {};
  this.endTimeQuery = function () {};
  this.createTransformFeedback = function () {};
  this.deleteTransformFeedback = function () {};
  this.bindTransformFeedback = function () {};
  this.beginTransformFeedback = function () {};
  this.endTransformFeedback = function () {};
  this.setTranformFeedbackVaryings = function () {};
  this.bindTransformFeedbackBuffer = function () {};
  this.registerView = function () {};
  this.unRegisterView = function () {};
  this.createEffectForParticles = function () {};
  this.NpmPackage = "babylonjs@4.1.0";
  this.Version = "4.1.0";
  this.Instances = {};
  this.LastCreatedEngine = null;
  this.LastCreatedScene = null;
  this.MarkAllMaterialsAsDirty = function () {};
  this.DefaultLoadingScreenFactory = function () {};
  this.ALPHA_DISABLE = 0;
  this.ALPHA_ADD = 1;
  this.ALPHA_COMBINE = 2;
  this.ALPHA_SUBTRACT = 3;
  this.ALPHA_MULTIPLY = 4;
  this.ALPHA_MAXIMIZED = 5;
  this.ALPHA_ONEONE = 6;
  this.ALPHA_PREMULTIPLIED = 7;
  this.ALPHA_PREMULTIPLIED_PORTERDUFF = 8;
  this.ALPHA_INTERPOLATE = 9;
  this.ALPHA_SCREENMODE = 10;
  this.DELAYLOADSTATE_NONE = 0;
  this.DELAYLOADSTATE_LOADED = 1;
  this.DELAYLOADSTATE_LOADING = 2;
  this.DELAYLOADSTATE_NOTLOADED = 4;
  this.NEVER = 512;
  this.ALWAYS = 519;
  this.LESS = 513;
  this.EQUAL = 514;
  this.LEQUAL = 515;
  this.GREATER = 516;
  this.GEQUAL = 518;
  this.NOTEQUAL = 517;
  this.KEEP = 7680;
  this.REPLACE = 7681;
  this.INCR = 7682;
  this.DECR = 7683;
  this.INVERT = 5386;
  this.INCR_WRAP = 34055;
  this.DECR_WRAP = 34056;
  this.TEXTURE_CLAMP_ADDRESSMODE = 0;
  this.TEXTURE_WRAP_ADDRESSMODE = 1;
  this.TEXTURE_MIRROR_ADDRESSMODE = 2;
  this.TEXTUREFORMAT_ALPHA = 0;
  this.TEXTUREFORMAT_LUMINANCE = 1;
  this.TEXTUREFORMAT_LUMINANCE_ALPHA = 2;
  this.TEXTUREFORMAT_RGB = 4;
  this.TEXTUREFORMAT_RGBA = 5;
  this.TEXTUREFORMAT_RED = 6;
  this.TEXTUREFORMAT_R = 6;
  this.TEXTUREFORMAT_RG = 7;
  this.TEXTUREFORMAT_RED_INTEGER = 8;
  this.TEXTUREFORMAT_R_INTEGER = 8;
  this.TEXTUREFORMAT_RG_INTEGER = 9;
  this.TEXTUREFORMAT_RGB_INTEGER = 10;
  this.TEXTUREFORMAT_RGBA_INTEGER = 11;
  this.TEXTURETYPE_UNSIGNED_BYTE = 0;
  this.TEXTURETYPE_UNSIGNED_INT = 0;
  this.TEXTURETYPE_FLOAT = 1;
  this.TEXTURETYPE_HALF_FLOAT = 2;
  this.TEXTURETYPE_BYTE = 3;
  this.TEXTURETYPE_SHORT = 4;
  this.TEXTURETYPE_UNSIGNED_SHORT = 5;
  this.TEXTURETYPE_INT = 6;
  this.TEXTURETYPE_UNSIGNED_INTEGER = 7;
  this.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8;
  this.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9;
  this.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10;
  this.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11;
  this.TEXTURETYPE_UNSIGNED_INT_24_8 = 12;
  this.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13;
  this.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14;
  this.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15;
  this.TEXTURE_NEAREST_SAMPLINGMODE = 1;
  this.TEXTURE_BILINEAR_SAMPLINGMODE = 2;
  this.TEXTURE_TRILINEAR_SAMPLINGMODE = 3;
  this.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8;
  this.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11;
  this.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3;
  this.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4;
  this.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5;
  this.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6;
  this.TEXTURE_NEAREST_LINEAR = 7;
  this.TEXTURE_NEAREST_NEAREST = 1;
  this.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9;
  this.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10;
  this.TEXTURE_LINEAR_LINEAR = 2;
  this.TEXTURE_LINEAR_NEAREST = 12;
  this.TEXTURE_EXPLICIT_MODE = 0;
  this.TEXTURE_SPHERICAL_MODE = 1;
  this.TEXTURE_PLANAR_MODE = 2;
  this.TEXTURE_CUBIC_MODE = 3;
  this.TEXTURE_PROJECTION_MODE = 4;
  this.TEXTURE_SKYBOX_MODE = 5;
  this.TEXTURE_INVCUBIC_MODE = 6;
  this.TEXTURE_EQUIRECTANGULAR_MODE = 7;
  this.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8;
  this.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.SCALEMODE_FLOOR = 1;
  this.SCALEMODE_NEAREST = 2;
  this.SCALEMODE_CEILING = 3;
  this.AudioEngineFactory = function () {};
  this.OfflineProviderFactory = function () {};
  this.ShadersRepository = "src/Shaders/";
  this.isSupported = function () {};
  this.CeilingPOT = function () {};
  this.FloorPOT = function () {};
  this.NearestPOT = function () {};
  this.GetExponentOfTwo = function () {};
  this.QueueNewFrame = function () {};
  this.ExceptionList = {};
  this.CollisionsEpsilon = 0.001;
};

/** @constructor */
BABYLON.EngineStore = function () {
  this.LastCreatedEngine = null;
  this.LastCreatedScene = null;
  this.Instances = {};
  this.UseFallbackTexture = true;
  this.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z";
};

/** @constructor */
BABYLON.NullEngineOptions = function () {
  this.renderWidth = 512;
  this.renderHeight = 256;
  this.textureSize = 512;
  this.deterministicLockstep = false;
  this.lockstepMaxSteps = 4;
};

/** @constructor */
BABYLON.NullEngine = function () {
  this.forcePOTTextures = false;
  this.isFullscreen = false;
  this.cullBackFaces = true;
  this.renderEvenInBackground = true;
  this.preventCacheWipeBetweenFrames = false;
  this.validateShaderPrograms = false;
  this.useReverseDepthBuffer = false;
  this.disableUniformBuffers = false;
  this.onContextLostObservable = {};
  this.onContextRestoredObservable = {};
  this.disableVertexArrayObjects = false;
  this.premultipliedAlpha = true;
  this.onBeforeTextureInitObservable = {};
  this.enableUnpackFlipYCached = true;
  this.enableOfflineSupport = false;
  this.disableManifestCheck = false;
  this.scenes = {};
  this.onNewSceneAddedObservable = {};
  this.postProcesses = {};
  this.isPointerLock = false;
  this.onResizeObservable = {};
  this.onCanvasBlurObservable = {};
  this.onCanvasFocusObservable = {};
  this.onCanvasPointerOutObservable = {};
  this.onBeginFrameObservable = {};
  this.customAnimationFrameRequester = null;
  this.onEndFrameObservable = {};
  this.onBeforeShaderCompilationObservable = {};
  this.onAfterShaderCompilationObservable = {};
  this.canvasTabIndex = 1;
  this.disablePerformanceMonitorInBackground = false;
  this.constructor = function () {};
  this.isDeterministicLockStep = function () {};
  this.getLockstepMaxSteps = function () {};
  this.getHardwareScalingLevel = function () {};
  this.createVertexBuffer = function () {};
  this.createIndexBuffer = function () {};
  this.clear = function () {};
  this.getRenderWidth = function () {};
  this.getRenderHeight = function () {};
  this.setViewport = function () {};
  this.createShaderProgram = function () {};
  this.getUniforms = function () {};
  this.getAttributes = function () {};
  this.bindSamplers = function () {};
  this.enableEffect = function () {};
  this.setState = function () {};
  this.setIntArray = function () {};
  this.setIntArray2 = function () {};
  this.setIntArray3 = function () {};
  this.setIntArray4 = function () {};
  this.setFloatArray = function () {};
  this.setFloatArray2 = function () {};
  this.setFloatArray3 = function () {};
  this.setFloatArray4 = function () {};
  this.setArray = function () {};
  this.setArray2 = function () {};
  this.setArray3 = function () {};
  this.setArray4 = function () {};
  this.setMatrices = function () {};
  this.setMatrix3x3 = function () {};
  this.setMatrix2x2 = function () {};
  this.setFloat = function () {};
  this.setFloat2 = function () {};
  this.setFloat3 = function () {};
  this.setBool = function () {};
  this.setFloat4 = function () {};
  this.setAlphaMode = function () {};
  this.bindBuffers = function () {};
  this.wipeCaches = function () {};
  this.draw = function () {};
  this.drawElementsType = function () {};
  this.drawArraysType = function () {};
  this.createTexture = function () {};
  this.createRenderTargetTexture = function () {};
  this.updateTextureSamplingMode = function () {};
  this.bindFramebuffer = function () {};
  this.unBindFramebuffer = function () {};
  this.createDynamicVertexBuffer = function () {};
  this.updateDynamicTexture = function () {};
  this.areAllEffectsReady = function () {};
  this.getError = function () {};
  this.updateDynamicIndexBuffer = function () {};
  this.updateDynamicVertexBuffer = function () {};
  this.releaseEffects = function () {};
  this.displayLoadingUI = function () {};
  this.hideLoadingUI = function () {};
  this.performanceMonitor = {};
  this.getInputElement = function () {};
  this.getAspectRatio = function () {};
  this.getScreenAspectRatio = function () {};
  this.getRenderingCanvasClientRect = function () {};
  this.getInputElementClientRect = function () {};
  this.getTimeStep = function () {};
  this.generateMipMapsForCubemap = function () {};
  this.setZOffset = function () {};
  this.getZOffset = function () {};
  this.setDepthBuffer = function () {};
  this.getDepthWrite = function () {};
  this.setDepthWrite = function () {};
  this.getStencilBuffer = function () {};
  this.setStencilBuffer = function () {};
  this.getStencilMask = function () {};
  this.setStencilMask = function () {};
  this.getStencilFunction = function () {};
  this.getStencilFunctionReference = function () {};
  this.getStencilFunctionMask = function () {};
  this.setStencilFunction = function () {};
  this.setStencilFunctionReference = function () {};
  this.setStencilFunctionMask = function () {};
  this.getStencilOperationFail = function () {};
  this.getStencilOperationDepthFail = function () {};
  this.getStencilOperationPass = function () {};
  this.setStencilOperationFail = function () {};
  this.setStencilOperationDepthFail = function () {};
  this.setStencilOperationPass = function () {};
  this.setDitheringState = function () {};
  this.setRasterizerState = function () {};
  this.getDepthFunction = function () {};
  this.setDepthFunction = function () {};
  this.setDepthFunctionToGreater = function () {};
  this.setDepthFunctionToGreaterOrEqual = function () {};
  this.setDepthFunctionToLess = function () {};
  this.setDepthFunctionToLessOrEqual = function () {};
  this.cacheStencilState = function () {};
  this.restoreStencilState = function () {};
  this.setDirectViewport = function () {};
  this.scissorClear = function () {};
  this.enableScissor = function () {};
  this.disableScissor = function () {};
  this.initWebVR = function () {};
  this.disableVR = function () {};
  this.isVRPresenting = function () {};
  this.getVertexShaderSource = function () {};
  this.getFragmentShaderSource = function () {};
  this.setDepthStencilTexture = function () {};
  this.setTextureFromPostProcess = function () {};
  this.setTextureFromPostProcessOutput = function () {};
  this.switchFullscreen = function () {};
  this.enterFullscreen = function () {};
  this.exitFullscreen = function () {};
  this.enterPointerlock = function () {};
  this.exitPointerlock = function () {};
  this.beginFrame = function () {};
  this.endFrame = function () {};
  this.resize = function () {};
  this.setSize = function () {};
  this.getFps = function () {};
  this.getDeltaTime = function () {};
  this.updateRenderTargetTextureSampleCount = function () {};
  this.updateTextureComparisonFunction = function () {};
  this.createInstancesBuffer = function () {};
  this.deleteInstancesBuffer = function () {};
  this.dispose = function () {};
  // this.loadingScreen = undefined;
  // this.loadingUIText = undefined;
  // this.loadingUIBackgroundColor = undefined;
  this.updateRawTexture = function () {};
  this.createRawTexture = function () {};
  this.createRawCubeTexture = function () {};
  this.updateRawCubeTexture = function () {};
  this.createRawCubeTextureFromUrl = function () {};
  this.createRawTexture2DArray = function () {};
  this.createRawTexture3D = function () {};
  this.updateRawTexture2DArray = function () {};
  this.updateRawTexture3D = function () {};
  this.createMultiviewRenderTargetTexture = function () {};
  this.bindMultiviewFramebuffer = function () {};
  // this.isInVRExclusivePointerMode = undefined;
  this.isVRDevicePresent = function () {};
  this.getVRDevice = function () {};
  this.initWebVRAsync = function () {};
  this.enableVR = function () {};
  this.createQuery = function () {};
  this.deleteQuery = function () {};
  this.isQueryResultAvailable = function () {};
  this.getQueryResult = function () {};
  this.beginOcclusionQuery = function () {};
  this.endOcclusionQuery = function () {};
  this.startTimeQuery = function () {};
  this.endTimeQuery = function () {};
  this.createTransformFeedback = function () {};
  this.deleteTransformFeedback = function () {};
  this.bindTransformFeedback = function () {};
  this.beginTransformFeedback = function () {};
  this.endTransformFeedback = function () {};
  this.setTranformFeedbackVaryings = function () {};
  this.bindTransformFeedbackBuffer = function () {};
  this.registerView = function () {};
  this.unRegisterView = function () {};
  this.createEffectForParticles = function () {};
  this.description = "WebGL1";
  this.supportsUniformBuffers = false;
  this.needPOTTextures = true;
  this.doNotHandleContextLost = false;
  // this.framebufferDimensionsObject = undefined;
  this.texturesSupported = {};
  // this.textureFormatInUse = undefined;
  // this.currentViewport = undefined;
  this.NpmPackage = "babylonjs@4.1.0";
  this.Version = "4.1.0";
  this.Instances = {};
  this.LastCreatedEngine = {};
  this.LastCreatedScene = null;
  this.MarkAllMaterialsAsDirty = function () {};
  this.DefaultLoadingScreenFactory = function () {};
  this.ALPHA_DISABLE = 0;
  this.ALPHA_ADD = 1;
  this.ALPHA_COMBINE = 2;
  this.ALPHA_SUBTRACT = 3;
  this.ALPHA_MULTIPLY = 4;
  this.ALPHA_MAXIMIZED = 5;
  this.ALPHA_ONEONE = 6;
  this.ALPHA_PREMULTIPLIED = 7;
  this.ALPHA_PREMULTIPLIED_PORTERDUFF = 8;
  this.ALPHA_INTERPOLATE = 9;
  this.ALPHA_SCREENMODE = 10;
  this.DELAYLOADSTATE_NONE = 0;
  this.DELAYLOADSTATE_LOADED = 1;
  this.DELAYLOADSTATE_LOADING = 2;
  this.DELAYLOADSTATE_NOTLOADED = 4;
  this.NEVER = 512;
  this.ALWAYS = 519;
  this.LESS = 513;
  this.EQUAL = 514;
  this.LEQUAL = 515;
  this.GREATER = 516;
  this.GEQUAL = 518;
  this.NOTEQUAL = 517;
  this.KEEP = 7680;
  this.REPLACE = 7681;
  this.INCR = 7682;
  this.DECR = 7683;
  this.INVERT = 5386;
  this.INCR_WRAP = 34055;
  this.DECR_WRAP = 34056;
  this.TEXTURE_CLAMP_ADDRESSMODE = 0;
  this.TEXTURE_WRAP_ADDRESSMODE = 1;
  this.TEXTURE_MIRROR_ADDRESSMODE = 2;
  this.TEXTUREFORMAT_ALPHA = 0;
  this.TEXTUREFORMAT_LUMINANCE = 1;
  this.TEXTUREFORMAT_LUMINANCE_ALPHA = 2;
  this.TEXTUREFORMAT_RGB = 4;
  this.TEXTUREFORMAT_RGBA = 5;
  this.TEXTUREFORMAT_RED = 6;
  this.TEXTUREFORMAT_R = 6;
  this.TEXTUREFORMAT_RG = 7;
  this.TEXTUREFORMAT_RED_INTEGER = 8;
  this.TEXTUREFORMAT_R_INTEGER = 8;
  this.TEXTUREFORMAT_RG_INTEGER = 9;
  this.TEXTUREFORMAT_RGB_INTEGER = 10;
  this.TEXTUREFORMAT_RGBA_INTEGER = 11;
  this.TEXTURETYPE_UNSIGNED_BYTE = 0;
  this.TEXTURETYPE_UNSIGNED_INT = 0;
  this.TEXTURETYPE_FLOAT = 1;
  this.TEXTURETYPE_HALF_FLOAT = 2;
  this.TEXTURETYPE_BYTE = 3;
  this.TEXTURETYPE_SHORT = 4;
  this.TEXTURETYPE_UNSIGNED_SHORT = 5;
  this.TEXTURETYPE_INT = 6;
  this.TEXTURETYPE_UNSIGNED_INTEGER = 7;
  this.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8;
  this.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9;
  this.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10;
  this.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11;
  this.TEXTURETYPE_UNSIGNED_INT_24_8 = 12;
  this.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13;
  this.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14;
  this.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15;
  this.TEXTURE_NEAREST_SAMPLINGMODE = 1;
  this.TEXTURE_BILINEAR_SAMPLINGMODE = 2;
  this.TEXTURE_TRILINEAR_SAMPLINGMODE = 3;
  this.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8;
  this.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11;
  this.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3;
  this.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4;
  this.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5;
  this.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6;
  this.TEXTURE_NEAREST_LINEAR = 7;
  this.TEXTURE_NEAREST_NEAREST = 1;
  this.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9;
  this.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10;
  this.TEXTURE_LINEAR_LINEAR = 2;
  this.TEXTURE_LINEAR_NEAREST = 12;
  this.TEXTURE_EXPLICIT_MODE = 0;
  this.TEXTURE_SPHERICAL_MODE = 1;
  this.TEXTURE_PLANAR_MODE = 2;
  this.TEXTURE_CUBIC_MODE = 3;
  this.TEXTURE_PROJECTION_MODE = 4;
  this.TEXTURE_SKYBOX_MODE = 5;
  this.TEXTURE_INVCUBIC_MODE = 6;
  this.TEXTURE_EQUIRECTANGULAR_MODE = 7;
  this.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8;
  this.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.SCALEMODE_FLOOR = 1;
  this.SCALEMODE_NEAREST = 2;
  this.SCALEMODE_CEILING = 3;
  this.AudioEngineFactory = function () {};
  this.OfflineProviderFactory = function () {};
  this.ShadersRepository = "src/Shaders/";
  this.isSupported = function () {};
  this.CeilingPOT = function () {};
  this.FloorPOT = function () {};
  this.NearestPOT = function () {};
  this.GetExponentOfTwo = function () {};
  this.QueueNewFrame = function () {};
  this.ExceptionList = {};
  this.CollisionsEpsilon = 0.001;
};

/** @constructor */
BABYLON.WebGLPipelineContext = function () {
  this.vertexCompilationError = null;
  this.fragmentCompilationError = null;
  this.programLinkError = null;
  this.programValidationError = null;
  // this.isAsync = undefined;
  this.isReady = false;
};

/** @constructor */
BABYLON.WebGL2ShaderProcessor = function () {
  this.attributeProcessor = function () {};
  this.varyingProcessor = function () {};
  this.postProcessor = function () {};
};

/** @constructor */
BABYLON.NativeEngine = function () {
  this.NpmPackage = "babylonjs@4.1.0";
  this.Version = "4.1.0";
  this.Instances = {};
  this.LastCreatedEngine = {};
  this.LastCreatedScene = null;
  this.MarkAllMaterialsAsDirty = function () {};
  this.DefaultLoadingScreenFactory = function () {};
  this.ALPHA_DISABLE = 0;
  this.ALPHA_ADD = 1;
  this.ALPHA_COMBINE = 2;
  this.ALPHA_SUBTRACT = 3;
  this.ALPHA_MULTIPLY = 4;
  this.ALPHA_MAXIMIZED = 5;
  this.ALPHA_ONEONE = 6;
  this.ALPHA_PREMULTIPLIED = 7;
  this.ALPHA_PREMULTIPLIED_PORTERDUFF = 8;
  this.ALPHA_INTERPOLATE = 9;
  this.ALPHA_SCREENMODE = 10;
  this.DELAYLOADSTATE_NONE = 0;
  this.DELAYLOADSTATE_LOADED = 1;
  this.DELAYLOADSTATE_LOADING = 2;
  this.DELAYLOADSTATE_NOTLOADED = 4;
  this.NEVER = 512;
  this.ALWAYS = 519;
  this.LESS = 513;
  this.EQUAL = 514;
  this.LEQUAL = 515;
  this.GREATER = 516;
  this.GEQUAL = 518;
  this.NOTEQUAL = 517;
  this.KEEP = 7680;
  this.REPLACE = 7681;
  this.INCR = 7682;
  this.DECR = 7683;
  this.INVERT = 5386;
  this.INCR_WRAP = 34055;
  this.DECR_WRAP = 34056;
  this.TEXTURE_CLAMP_ADDRESSMODE = 0;
  this.TEXTURE_WRAP_ADDRESSMODE = 1;
  this.TEXTURE_MIRROR_ADDRESSMODE = 2;
  this.TEXTUREFORMAT_ALPHA = 0;
  this.TEXTUREFORMAT_LUMINANCE = 1;
  this.TEXTUREFORMAT_LUMINANCE_ALPHA = 2;
  this.TEXTUREFORMAT_RGB = 4;
  this.TEXTUREFORMAT_RGBA = 5;
  this.TEXTUREFORMAT_RED = 6;
  this.TEXTUREFORMAT_R = 6;
  this.TEXTUREFORMAT_RG = 7;
  this.TEXTUREFORMAT_RED_INTEGER = 8;
  this.TEXTUREFORMAT_R_INTEGER = 8;
  this.TEXTUREFORMAT_RG_INTEGER = 9;
  this.TEXTUREFORMAT_RGB_INTEGER = 10;
  this.TEXTUREFORMAT_RGBA_INTEGER = 11;
  this.TEXTURETYPE_UNSIGNED_BYTE = 0;
  this.TEXTURETYPE_UNSIGNED_INT = 0;
  this.TEXTURETYPE_FLOAT = 1;
  this.TEXTURETYPE_HALF_FLOAT = 2;
  this.TEXTURETYPE_BYTE = 3;
  this.TEXTURETYPE_SHORT = 4;
  this.TEXTURETYPE_UNSIGNED_SHORT = 5;
  this.TEXTURETYPE_INT = 6;
  this.TEXTURETYPE_UNSIGNED_INTEGER = 7;
  this.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8;
  this.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9;
  this.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10;
  this.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11;
  this.TEXTURETYPE_UNSIGNED_INT_24_8 = 12;
  this.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13;
  this.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14;
  this.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15;
  this.TEXTURE_NEAREST_SAMPLINGMODE = 1;
  this.TEXTURE_BILINEAR_SAMPLINGMODE = 2;
  this.TEXTURE_TRILINEAR_SAMPLINGMODE = 3;
  this.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8;
  this.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11;
  this.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3;
  this.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4;
  this.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5;
  this.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6;
  this.TEXTURE_NEAREST_LINEAR = 7;
  this.TEXTURE_NEAREST_NEAREST = 1;
  this.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9;
  this.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10;
  this.TEXTURE_LINEAR_LINEAR = 2;
  this.TEXTURE_LINEAR_NEAREST = 12;
  this.TEXTURE_EXPLICIT_MODE = 0;
  this.TEXTURE_SPHERICAL_MODE = 1;
  this.TEXTURE_PLANAR_MODE = 2;
  this.TEXTURE_CUBIC_MODE = 3;
  this.TEXTURE_PROJECTION_MODE = 4;
  this.TEXTURE_SKYBOX_MODE = 5;
  this.TEXTURE_INVCUBIC_MODE = 6;
  this.TEXTURE_EQUIRECTANGULAR_MODE = 7;
  this.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8;
  this.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.SCALEMODE_FLOOR = 1;
  this.SCALEMODE_NEAREST = 2;
  this.SCALEMODE_CEILING = 3;
  this.AudioEngineFactory = function () {};
  this.OfflineProviderFactory = function () {};
  this.ShadersRepository = "src/Shaders/";
  this.isSupported = function () {};
  this.CeilingPOT = function () {};
  this.FloorPOT = function () {};
  this.NearestPOT = function () {};
  this.GetExponentOfTwo = function () {};
  this.QueueNewFrame = function () {};
  this.ExceptionList = {};
  this.CollisionsEpsilon = 0.001;
};

/** @constructor */
BABYLON.EngineView = function () {
};

/** @constructor */
BABYLON.KeyboardEventTypes = function () {
  this.KEYDOWN = 1;
  this.KEYUP = 2;
};

/** @constructor */
BABYLON.KeyboardInfo = function () {
  // this.type = undefined;
  // this.event = undefined;
};

/** @constructor */
BABYLON.KeyboardInfoPre = function () {
  // this.type = undefined;
  // this.event = undefined;
  this.skipOnPointerObservable = false;
  this.constructor = function () {};
};

/** @constructor */
BABYLON.PointerEventTypes = function () {
  this.POINTERDOWN = 1;
  this.POINTERUP = 2;
  this.POINTERMOVE = 4;
  this.POINTERWHEEL = 8;
  this.POINTERPICK = 16;
  this.POINTERTAP = 32;
  this.POINTERDOUBLETAP = 64;
};

/** @constructor */
BABYLON.PointerInfoBase = function () {
  // this.type = undefined;
  // this.event = undefined;
};

/** @constructor */
BABYLON.PointerInfoPre = function () {
  // this.type = undefined;
  // this.event = undefined;
  this.ray = null;
  this.skipOnPointerObservable = false;
  this.localPosition = {};
  this.constructor = function () {};
};

/** @constructor */
BABYLON.PointerInfo = function () {
  // this.type = undefined;
  // this.event = undefined;
  // this.pickInfo = undefined;
  this.constructor = function () {};
};

/** @constructor */
BABYLON.ClipboardEventTypes = function () {
  this.COPY = 1;
  this.CUT = 2;
  this.PASTE = 3;
};

/** @constructor */
BABYLON.ClipboardInfo = function () {
  // this.type = undefined;
  // this.event = undefined;
  this.GetTypeFromCharacter = function () {};
};

/** @constructor */
BABYLON.StickValues = function () {
  // this.x = undefined;
  // this.y = undefined;
};

/** @constructor */
BABYLON.Gamepad = function () {
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.GenericPad = function () {
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.GamepadManager = function () {
  this.onGamepadDisconnectedObservable = {};
  this.onGamepadConnectedObservable = {};
  this.gamepads = {};
  this.getGamepadByType = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.GamepadSystemSceneComponent = function () {
  this.name = "Gamepad";
  // this.scene = undefined;
  this.register = function () {};
  this.rebuild = function () {};
  this.dispose = function () {};
};

BABYLON.Xbox360Button = {}

BABYLON.Xbox360Dpad = {}

/** @constructor */
BABYLON.Xbox360Pad = function () {
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

BABYLON.DualShockButton = {}

BABYLON.DualShockDpad = {}

/** @constructor */
BABYLON.DualShockPad = function () {
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.DaydreamController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/generic/";
  this.MODEL_FILENAME = "generic.babylon";
  this.GAMEPAD_ID_PREFIX = "Daydream";
  this.POINTING_POSE = "POINTING_POSE";
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.GearVRController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/generic/";
  this.MODEL_FILENAME = "generic.babylon";
  this.GAMEPAD_ID_PREFIX = "Gear VR";
  this.POINTING_POSE = "POINTING_POSE";
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.GenericController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/generic/";
  this.MODEL_FILENAME = "generic.babylon";
  this.POINTING_POSE = "POINTING_POSE";
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.OculusTouchController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/oculus/";
  this.MODEL_LEFT_FILENAME = "left.babylon";
  this.MODEL_RIGHT_FILENAME = "right.babylon";
  this.QUEST_MODEL_BASE_URL = "https://controllers.babylonjs.com/oculusQuest/";
  this.POINTING_POSE = "POINTING_POSE";
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

BABYLON.PoseEnabledControllerType = {}

/** @constructor */
BABYLON.PoseEnabledControllerHelper = function () {
  this.InitiateController = function () {};
};

/** @constructor */
BABYLON.PoseEnabledController = function () {
  this.POINTING_POSE = "POINTING_POSE";
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.ViveController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/vive/";
  this.MODEL_FILENAME = "wand.babylon";
  this.POINTING_POSE = "POINTING_POSE";
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.WebVRController = function () {
  this.POINTING_POSE = "POINTING_POSE";
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.WindowsMotionController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/microsoft/";
  this.MODEL_LEFT_FILENAME = "left.glb";
  this.MODEL_RIGHT_FILENAME = "right.glb";
  this.GAMEPAD_ID_PREFIX = "Spatial Controller (Spatial Interaction Source) ";
  this.GAMEPAD_ID_PATTERN = {};
  this.POINTING_POSE = "POINTING_POSE";
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.XRWindowsMotionController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/microsoft/";
  this.MODEL_LEFT_FILENAME = "left.glb";
  this.MODEL_RIGHT_FILENAME = "right.glb";
  this.GAMEPAD_ID_PREFIX = "Spatial Controller (Spatial Interaction Source) ";
  this.GAMEPAD_ID_PATTERN = {};
  this.POINTING_POSE = "POINTING_POSE";
  this.GAMEPAD = 0;
  this.GENERIC = 1;
  this.XBOX = 2;
  this.POSE_ENABLED = 3;
  this.DUALSHOCK = 4;
};

/** @constructor */
BABYLON.AxisDragGizmo = function () {
};

/** @constructor */
BABYLON.AxisScaleGizmo = function () {
};

/** @constructor */
BABYLON.BoundingBoxGizmo = function () {
  this.MakeNotPickableAndWrapInBoundingBox = function () {};
};

/** @constructor */
BABYLON.Gizmo = function () {
};

/** @constructor */
BABYLON.GizmoManager = function () {
};

/** @constructor */
BABYLON.PlaneRotationGizmo = function () {
};

/** @constructor */
BABYLON.PositionGizmo = function () {
};

/** @constructor */
BABYLON.RotationGizmo = function () {
};

/** @constructor */
BABYLON.ScaleGizmo = function () {
};

/** @constructor */
BABYLON.LightGizmo = function () {
};

/** @constructor */
BABYLON.PlaneDragGizmo = function () {
};

/** @constructor */
BABYLON.EnvironmentHelper = function () {
};

/** @constructor */
BABYLON.PhotoDome = function () {
  this.MODE_MONOSCOPIC = 0;
  this.MODE_TOPBOTTOM = 1;
  this.MODE_SIDEBYSIDE = 2;
  this.Parse = function () {};
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.VideoDome = function () {
  this.MODE_MONOSCOPIC = 0;
  this.MODE_TOPBOTTOM = 1;
  this.MODE_SIDEBYSIDE = 2;
  this.Parse = function () {};
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.EngineInstrumentation = function () {
  // this.engine = undefined;
  this.gpuFrameTimeCounter = {};
  this.captureGPUFrameTime = false;
  this.shaderCompilationTimeCounter = {};
  this.captureShaderCompilationTime = false;
  this.dispose = function () {};
};

/** @constructor */
BABYLON.SceneInstrumentation = function () {
};

/** @constructor */
BABYLON.EffectLayer = function () {
  this.Parse = function () {};
};

/** @constructor */
BABYLON.EffectLayerSceneComponent = function () {
};

/** @constructor */
BABYLON.GlowLayer = function () {
  this.Parse = function () {};
  this.EffectName = "GlowLayer";
  this.DefaultBlurKernelSize = 32;
  this.DefaultTextureRatio = 0.5;
};

/** @constructor */
BABYLON.HighlightLayer = function () {
  this.Parse = function () {};
  this.EffectName = "HighlightLayer";
  this.NeutralColor = {};
  this.GlowingMeshStencilReference = 2;
  this.NormalMeshStencilReference = 1;
};

/** @constructor */
BABYLON.Layer = function () {
};

/** @constructor */
BABYLON.LayerSceneComponent = function () {
};

/** @constructor */
BABYLON.LensFlare = function () {
  this.AddFlare = function () {};
};

/** @constructor */
BABYLON.LensFlareSystem = function () {
  this.Parse = function () {};
};

/** @constructor */
BABYLON.LensFlareSystemSceneComponent = function () {
};

/** @constructor */
BABYLON.Light = function () {
  this.CompareLightsPriority = function () {};
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.FALLOFF_DEFAULT = 0;
  this.FALLOFF_PHYSICAL = 1;
  this.FALLOFF_GLTF = 2;
  this.FALLOFF_STANDARD = 3;
  this.LIGHTMAP_DEFAULT = 0;
  this.LIGHTMAP_SPECULAR = 1;
  this.LIGHTMAP_SHADOWSONLY = 2;
  this.INTENSITYMODE_AUTOMATIC = 0;
  this.INTENSITYMODE_LUMINOUSPOWER = 1;
  this.INTENSITYMODE_LUMINOUSINTENSITY = 2;
  this.INTENSITYMODE_ILLUMINANCE = 3;
  this.INTENSITYMODE_LUMINANCE = 4;
  this.LIGHTTYPEID_POINTLIGHT = 0;
  this.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
  this.LIGHTTYPEID_SPOTLIGHT = 2;
  this.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.ShadowLight = function () {
  this.CompareLightsPriority = function () {};
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.FALLOFF_DEFAULT = 0;
  this.FALLOFF_PHYSICAL = 1;
  this.FALLOFF_GLTF = 2;
  this.FALLOFF_STANDARD = 3;
  this.LIGHTMAP_DEFAULT = 0;
  this.LIGHTMAP_SPECULAR = 1;
  this.LIGHTMAP_SHADOWSONLY = 2;
  this.INTENSITYMODE_AUTOMATIC = 0;
  this.INTENSITYMODE_LUMINOUSPOWER = 1;
  this.INTENSITYMODE_LUMINOUSINTENSITY = 2;
  this.INTENSITYMODE_ILLUMINANCE = 3;
  this.INTENSITYMODE_LUMINANCE = 4;
  this.LIGHTTYPEID_POINTLIGHT = 0;
  this.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
  this.LIGHTTYPEID_SPOTLIGHT = 2;
  this.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.DirectionalLight = function () {
  this.CompareLightsPriority = function () {};
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.FALLOFF_DEFAULT = 0;
  this.FALLOFF_PHYSICAL = 1;
  this.FALLOFF_GLTF = 2;
  this.FALLOFF_STANDARD = 3;
  this.LIGHTMAP_DEFAULT = 0;
  this.LIGHTMAP_SPECULAR = 1;
  this.LIGHTMAP_SHADOWSONLY = 2;
  this.INTENSITYMODE_AUTOMATIC = 0;
  this.INTENSITYMODE_LUMINOUSPOWER = 1;
  this.INTENSITYMODE_LUMINOUSINTENSITY = 2;
  this.INTENSITYMODE_ILLUMINANCE = 3;
  this.INTENSITYMODE_LUMINANCE = 4;
  this.LIGHTTYPEID_POINTLIGHT = 0;
  this.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
  this.LIGHTTYPEID_SPOTLIGHT = 2;
  this.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.HemisphericLight = function () {
  this.CompareLightsPriority = function () {};
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.FALLOFF_DEFAULT = 0;
  this.FALLOFF_PHYSICAL = 1;
  this.FALLOFF_GLTF = 2;
  this.FALLOFF_STANDARD = 3;
  this.LIGHTMAP_DEFAULT = 0;
  this.LIGHTMAP_SPECULAR = 1;
  this.LIGHTMAP_SHADOWSONLY = 2;
  this.INTENSITYMODE_AUTOMATIC = 0;
  this.INTENSITYMODE_LUMINOUSPOWER = 1;
  this.INTENSITYMODE_LUMINOUSINTENSITY = 2;
  this.INTENSITYMODE_ILLUMINANCE = 3;
  this.INTENSITYMODE_LUMINANCE = 4;
  this.LIGHTTYPEID_POINTLIGHT = 0;
  this.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
  this.LIGHTTYPEID_SPOTLIGHT = 2;
  this.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.PointLight = function () {
  this.CompareLightsPriority = function () {};
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.FALLOFF_DEFAULT = 0;
  this.FALLOFF_PHYSICAL = 1;
  this.FALLOFF_GLTF = 2;
  this.FALLOFF_STANDARD = 3;
  this.LIGHTMAP_DEFAULT = 0;
  this.LIGHTMAP_SPECULAR = 1;
  this.LIGHTMAP_SHADOWSONLY = 2;
  this.INTENSITYMODE_AUTOMATIC = 0;
  this.INTENSITYMODE_LUMINOUSPOWER = 1;
  this.INTENSITYMODE_LUMINOUSINTENSITY = 2;
  this.INTENSITYMODE_ILLUMINANCE = 3;
  this.INTENSITYMODE_LUMINANCE = 4;
  this.LIGHTTYPEID_POINTLIGHT = 0;
  this.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
  this.LIGHTTYPEID_SPOTLIGHT = 2;
  this.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.SpotLight = function () {
  this.CompareLightsPriority = function () {};
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.FALLOFF_DEFAULT = 0;
  this.FALLOFF_PHYSICAL = 1;
  this.FALLOFF_GLTF = 2;
  this.FALLOFF_STANDARD = 3;
  this.LIGHTMAP_DEFAULT = 0;
  this.LIGHTMAP_SPECULAR = 1;
  this.LIGHTMAP_SHADOWSONLY = 2;
  this.INTENSITYMODE_AUTOMATIC = 0;
  this.INTENSITYMODE_LUMINOUSPOWER = 1;
  this.INTENSITYMODE_LUMINOUSINTENSITY = 2;
  this.INTENSITYMODE_ILLUMINANCE = 3;
  this.INTENSITYMODE_LUMINANCE = 4;
  this.LIGHTTYPEID_POINTLIGHT = 0;
  this.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
  this.LIGHTTYPEID_SPOTLIGHT = 2;
  this.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.ShadowGenerator = function () {
  this.Parse = function () {};
  this.CLASSNAME = "ShadowGenerator";
  this.FILTER_NONE = 0;
  this.FILTER_EXPONENTIALSHADOWMAP = 1;
  this.FILTER_POISSONSAMPLING = 2;
  this.FILTER_BLUREXPONENTIALSHADOWMAP = 3;
  this.FILTER_CLOSEEXPONENTIALSHADOWMAP = 4;
  this.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP = 5;
  this.FILTER_PCF = 6;
  this.FILTER_PCSS = 7;
  this.QUALITY_HIGH = 0;
  this.QUALITY_MEDIUM = 1;
  this.QUALITY_LOW = 2;
};

/** @constructor */
BABYLON.CascadedShadowGenerator = function () {
  this.Parse = function () {};
  this.frustumCornersNDCSpace = {};
  this.CLASSNAME = "CascadedShadowGenerator";
  this.DEFAULT_CASCADES_COUNT = 4;
  this.MIN_CASCADES_COUNT = 2;
  this.MAX_CASCADES_COUNT = 4;
  this.FILTER_NONE = 0;
  this.FILTER_EXPONENTIALSHADOWMAP = 1;
  this.FILTER_POISSONSAMPLING = 2;
  this.FILTER_BLUREXPONENTIALSHADOWMAP = 3;
  this.FILTER_CLOSEEXPONENTIALSHADOWMAP = 4;
  this.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP = 5;
  this.FILTER_PCF = 6;
  this.FILTER_PCSS = 7;
  this.QUALITY_HIGH = 0;
  this.QUALITY_MEDIUM = 1;
  this.QUALITY_LOW = 2;
};

/** @constructor */
BABYLON.ShadowGeneratorSceneComponent = function () {
  this.name = "ShadowGenerator";
  // this.scene = undefined;
  this.register = function () {};
  this.rebuild = function () {};
  this.serialize = function () {};
  this.addFromContainer = function () {};
  this.removeFromContainer = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.DefaultLoadingScreen = function () {
  this.displayLoadingUI = function () {};
  this.hideLoadingUI = function () {};
  this.loadingUIText = "";
  this.loadingUIBackgroundColor = "black";
  this.DefaultLogoUrl = "";
  this.DefaultSpinnerUrl = "";
};

/** @constructor */
BABYLON.SceneLoaderProgressEvent = function () {
  // this.lengthComputable = undefined;
  // this.loaded = undefined;
  // this.total = undefined;
  this.FromProgressEvent = function () {};
};

BABYLON.SceneLoaderAnimationGroupLoadingMode = {}

/** @constructor */
BABYLON.SceneLoader = function () {
  this.ForceFullSceneLoadingForIncremental = false;
  this.ShowLoadingScreen = true;
  this.loggingLevel = 0;
  this.CleanBoneMatrixWeights = false;
  this.GetPluginForExtension = function () {};
  this.IsPluginForExtensionAvailable = function () {};
  this.RegisterPlugin = function () {};
  this.ImportMesh = function () {};
  this.ImportMeshAsync = function () {};
  this.Load = function () {};
  this.LoadAsync = function () {};
  this.Append = function () {};
  this.AppendAsync = function () {};
  this.LoadAssetContainer = function () {};
  this.LoadAssetContainerAsync = function () {};
  this.ImportAnimations = function () {};
  this.ImportAnimationsAsync = function () {};
  this.NO_LOGGING = 0;
  this.MINIMAL_LOGGING = 1;
  this.SUMMARY_LOGGING = 2;
  this.DETAILED_LOGGING = 3;
  this.OnPluginActivatedObservable = {};
};

/** @constructor */
BABYLON.SceneLoaderFlags = function () {
  this.ForceFullSceneLoadingForIncremental = false;
  this.ShowLoadingScreen = true;
  this.loggingLevel = 0;
  this.CleanBoneMatrixWeights = false;
};

/** @constructor */
BABYLON.BabylonFileLoaderConfiguration = function () {
  // this.LoaderInjectedPhysicsEngine = undefined;
};

/** @constructor */
BABYLON.ColorCurves = function () {
  this.globalHue = 30;
  this.globalDensity = 0;
  this.globalSaturation = 0;
  this.globalExposure = 0;
  this.highlightsHue = 30;
  this.highlightsDensity = 0;
  this.highlightsSaturation = 0;
  this.highlightsExposure = 0;
  this.midtonesHue = 30;
  this.midtonesDensity = 0;
  this.midtonesSaturation = 0;
  this.midtonesExposure = 0;
  this.shadowsHue = 30;
  this.shadowsDensity = 0;
  this.shadowsSaturation = 0;
  this.shadowsExposure = 0;
  this.getClassName = function () {};
  this.getColorGradingDataToRef = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.Bind = function () {};
  this.PrepareUniforms = function () {};
  this.applyColorGradingSliderNonlinear = function () {};
  this.fromHSBToRef = function () {};
  this.clamp = function () {};
  this.Parse = function () {};
};

/** @constructor */
BABYLON.EffectFallbacks = function () {
  this.unBindMesh = function () {};
  this.addFallback = function () {};
  this.addCPUSkinningFallback = function () {};
  this.hasMoreFallbacks = false;
  this.reduce = function () {};
};

/** @constructor */
BABYLON.Effect = function () {
  this.RegisterShader = function () {};
  this.ResetCache = function () {};
  this.ShadersRepository = "src/Shaders/";
  this.ShadersStore = {};
  this.IncludesShadersStore = {};
};

/** @constructor */
BABYLON.FresnelParameters = function () {
  this.leftColor = {};
  this.rightColor = {};
  this.bias = 0;
  this.power = 1;
  this.isEnabled = true;
  this.clone = function () {};
  this.serialize = function () {};
  this.Parse = function () {};
};

/** @constructor */
BABYLON.ImageProcessingConfigurationDefines = function () {
  this.IMAGEPROCESSING = false;
  this.VIGNETTE = false;
  this.VIGNETTEBLENDMODEMULTIPLY = false;
  this.VIGNETTEBLENDMODEOPAQUE = false;
  this.TONEMAPPING = false;
  this.TONEMAPPING_ACES = false;
  this.CONTRAST = false;
  this.COLORCURVES = false;
  this.COLORGRADING = false;
  this.COLORGRADING3D = false;
  this.SAMPLER3DGREENDEPTH = false;
  this.SAMPLER3DBGRMAP = false;
  this.IMAGEPROCESSINGPOSTPROCESS = false;
  this.EXPOSURE = false;
  this.constructor = function () {};
  this.isDirty = true;
  this.markAsProcessed = function () {};
  this.markAsUnprocessed = function () {};
  this.markAllAsDirty = function () {};
  this.markAsImageProcessingDirty = function () {};
  this.markAsLightDirty = function () {};
  this.markAsAttributesDirty = function () {};
  this.markAsTexturesDirty = function () {};
  this.markAsFresnelDirty = function () {};
  this.markAsMiscDirty = function () {};
  this.rebuild = function () {};
  this.isEqual = function () {};
  this.cloneTo = function () {};
  this.reset = function () {};
  this.toString = function () {};
};

/** @constructor */
BABYLON.ImageProcessingConfiguration = function () {
  this.colorCurves = {};
  this.vignetteStretch = 0;
  this.vignetteCentreX = 0;
  this.vignetteCentreY = 0;
  this.vignetteWeight = 1.5;
  this.vignetteColor = {};
  this.vignetteCameraFov = 0.5;
  this.onUpdateParameters = {};
  this.colorCurvesEnabled = false;
  // this.colorGradingTexture = undefined;
  this.colorGradingEnabled = false;
  this.colorGradingWithGreenDepth = true;
  this.colorGradingBGR = true;
  this.exposure = 1;
  this.toneMappingEnabled = false;
  this.toneMappingType = 0;
  this.contrast = 1;
  this.vignetteBlendMode = 0;
  this.vignetteEnabled = false;
  this.applyByPostProcess = false;
  this.isEnabled = true;
  this.getClassName = function () {};
  this.prepareDefines = function () {};
  this.isReady = function () {};
  this.bind = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.PrepareUniforms = function () {};
  this.PrepareSamplers = function () {};
  this.Parse = function () {};
  this.VIGNETTEMODE_MULTIPLY = 0;
  this.VIGNETTEMODE_OPAQUE = 1;
  this.TONEMAPPING_STANDARD = 0;
  this.TONEMAPPING_ACES = 1;
};

/** @constructor */
BABYLON.Material = function () {
  this.Parse = function () {};
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.MaterialDefines = function () {
  this.isDirty = true;
  this.markAsProcessed = function () {};
  this.markAsUnprocessed = function () {};
  this.markAllAsDirty = function () {};
  this.markAsImageProcessingDirty = function () {};
  this.markAsLightDirty = function () {};
  this.markAsAttributesDirty = function () {};
  this.markAsTexturesDirty = function () {};
  this.markAsFresnelDirty = function () {};
  this.markAsMiscDirty = function () {};
  this.rebuild = function () {};
  this.isEqual = function () {};
  this.cloneTo = function () {};
  this.reset = function () {};
  this.toString = function () {};
};

/** @constructor */
BABYLON.MaterialHelper = function () {
  this.BindEyePosition = function () {};
  this.PrepareDefinesForMergedUV = function () {};
  this.BindTextureMatrix = function () {};
  this.GetFogState = function () {};
  this.PrepareDefinesForMisc = function () {};
  this.PrepareDefinesForFrameBoundValues = function () {};
  this.PrepareDefinesForBones = function () {};
  this.PrepareDefinesForMorphTargets = function () {};
  this.PrepareDefinesForAttributes = function () {};
  this.PrepareDefinesForMultiview = function () {};
  this.PrepareDefinesForLight = function () {};
  this.PrepareDefinesForLights = function () {};
  this.PrepareUniformsAndSamplersForLight = function () {};
  this.PrepareUniformsAndSamplersList = function () {};
  this.HandleFallbacksForShadows = function () {};
  this.PrepareAttributesForMorphTargetsInfluencers = function () {};
  this.PrepareAttributesForMorphTargets = function () {};
  this.PrepareAttributesForBones = function () {};
  this.PrepareAttributesForInstances = function () {};
  this.PushAttributesForInstances = function () {};
  this.BindLightProperties = function () {};
  this.BindLight = function () {};
  this.BindLights = function () {};
  this.BindFogParameters = function () {};
  this.BindBonesParameters = function () {};
  this.BindMorphTargetParameters = function () {};
  this.BindLogDepth = function () {};
  this.BindClipPlane = function () {};
};

/** @constructor */
BABYLON.MultiMaterial = function () {
  this.ParseMultiMaterial = function () {};
  this.Parse = function () {};
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.PBRMaterial = function () {
  this.Parse = function () {};
  this.PBRMATERIAL_OPAQUE = 0;
  this.PBRMATERIAL_ALPHATEST = 1;
  this.PBRMATERIAL_ALPHABLEND = 2;
  this.PBRMATERIAL_ALPHATESTANDBLEND = 3;
  this.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
  this.LIGHTFALLOFF_PHYSICAL = 0;
  this.LIGHTFALLOFF_GLTF = 1;
  this.LIGHTFALLOFF_STANDARD = 2;
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.PushMaterial = function () {
  this.Parse = function () {};
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.ShaderMaterial = function () {
  this.Parse = function () {};
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.StandardMaterialDefines = function () {
  this.MAINUV1 = false;
  this.MAINUV2 = false;
  this.DIFFUSE = false;
  this.DIFFUSEDIRECTUV = 0;
  this.AMBIENT = false;
  this.AMBIENTDIRECTUV = 0;
  this.OPACITY = false;
  this.OPACITYDIRECTUV = 0;
  this.OPACITYRGB = false;
  this.REFLECTION = false;
  this.EMISSIVE = false;
  this.EMISSIVEDIRECTUV = 0;
  this.SPECULAR = false;
  this.SPECULARDIRECTUV = 0;
  this.BUMP = false;
  this.BUMPDIRECTUV = 0;
  this.PARALLAX = false;
  this.PARALLAXOCCLUSION = false;
  this.SPECULAROVERALPHA = false;
  this.CLIPPLANE = false;
  this.CLIPPLANE2 = false;
  this.CLIPPLANE3 = false;
  this.CLIPPLANE4 = false;
  this.CLIPPLANE5 = false;
  this.CLIPPLANE6 = false;
  this.ALPHATEST = false;
  this.DEPTHPREPASS = false;
  this.ALPHAFROMDIFFUSE = false;
  this.POINTSIZE = false;
  this.FOG = false;
  this.SPECULARTERM = false;
  this.DIFFUSEFRESNEL = false;
  this.OPACITYFRESNEL = false;
  this.REFLECTIONFRESNEL = false;
  this.REFRACTIONFRESNEL = false;
  this.EMISSIVEFRESNEL = false;
  this.FRESNEL = false;
  this.NORMAL = false;
  this.UV1 = false;
  this.UV2 = false;
  this.VERTEXCOLOR = false;
  this.VERTEXALPHA = false;
  this.NUM_BONE_INFLUENCERS = 0;
  this.BonesPerMesh = 0;
  this.BONETEXTURE = false;
  this.INSTANCES = false;
  this.GLOSSINESS = false;
  this.ROUGHNESS = false;
  this.EMISSIVEASILLUMINATION = false;
  this.LINKEMISSIVEWITHDIFFUSE = false;
  this.REFLECTIONFRESNELFROMSPECULAR = false;
  this.LIGHTMAP = false;
  this.LIGHTMAPDIRECTUV = 0;
  this.OBJECTSPACE_NORMALMAP = false;
  this.USELIGHTMAPASSHADOWMAP = false;
  this.REFLECTIONMAP_3D = false;
  this.REFLECTIONMAP_SPHERICAL = false;
  this.REFLECTIONMAP_PLANAR = false;
  this.REFLECTIONMAP_CUBIC = false;
  this.USE_LOCAL_REFLECTIONMAP_CUBIC = false;
  this.REFLECTIONMAP_PROJECTION = false;
  this.REFLECTIONMAP_SKYBOX = false;
  this.REFLECTIONMAP_EXPLICIT = false;
  this.REFLECTIONMAP_EQUIRECTANGULAR = false;
  this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
  this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
  this.INVERTCUBICMAP = false;
  this.LOGARITHMICDEPTH = false;
  this.REFRACTION = false;
  this.REFRACTIONMAP_3D = false;
  this.REFLECTIONOVERALPHA = false;
  this.TWOSIDEDLIGHTING = false;
  this.SHADOWFLOAT = false;
  this.MORPHTARGETS = false;
  this.MORPHTARGETS_NORMAL = false;
  this.MORPHTARGETS_TANGENT = false;
  this.MORPHTARGETS_UV = false;
  this.NUM_MORPH_INFLUENCERS = 0;
  this.NONUNIFORMSCALING = false;
  this.PREMULTIPLYALPHA = false;
  this.IMAGEPROCESSING = false;
  this.VIGNETTE = false;
  this.VIGNETTEBLENDMODEMULTIPLY = false;
  this.VIGNETTEBLENDMODEOPAQUE = false;
  this.TONEMAPPING = false;
  this.TONEMAPPING_ACES = false;
  this.CONTRAST = false;
  this.COLORCURVES = false;
  this.COLORGRADING = false;
  this.COLORGRADING3D = false;
  this.SAMPLER3DGREENDEPTH = false;
  this.SAMPLER3DBGRMAP = false;
  this.IMAGEPROCESSINGPOSTPROCESS = false;
  this.MULTIVIEW = false;
  this.IS_REFLECTION_LINEAR = false;
  this.IS_REFRACTION_LINEAR = false;
  this.EXPOSURE = false;
  this.constructor = function () {};
  this.setReflectionMode = function () {};
  this.isDirty = true;
  this.markAsProcessed = function () {};
  this.markAsUnprocessed = function () {};
  this.markAllAsDirty = function () {};
  this.markAsImageProcessingDirty = function () {};
  this.markAsLightDirty = function () {};
  this.markAsAttributesDirty = function () {};
  this.markAsTexturesDirty = function () {};
  this.markAsFresnelDirty = function () {};
  this.markAsMiscDirty = function () {};
  this.rebuild = function () {};
  this.isEqual = function () {};
  this.cloneTo = function () {};
  this.reset = function () {};
  this.toString = function () {};
};

/** @constructor */
BABYLON.StandardMaterial = function () {
  this.Parse = function () {};
  this.DiffuseTextureEnabled = true;
  this.AmbientTextureEnabled = true;
  this.OpacityTextureEnabled = true;
  this.ReflectionTextureEnabled = true;
  this.EmissiveTextureEnabled = true;
  this.SpecularTextureEnabled = true;
  this.BumpTextureEnabled = true;
  this.LightmapTextureEnabled = true;
  this.RefractionTextureEnabled = true;
  this.ColorGradingTextureEnabled = true;
  this.FresnelEnabled = true;
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.BaseTexture = function () {
  this.metadata = null;
  this.reservedDataStore = null;
  this.getAlphaFromRGB = false;
  this.level = 1;
  this.coordinatesIndex = 0;
  this.wrapU = 1;
  this.wrapV = 1;
  this.wrapR = 1;
  this.anisotropicFilteringLevel = 4;
  this.invertZ = false;
  this.lodLevelInAlpha = false;
  this.isRenderTarget = false;
  this.animations = {};
  this.onDisposeObservable = {};
  this.delayLoadState = 0;
  this.hasAlpha = false;
  this.coordinatesMode = 0;
  this.isCube = false;
  this.is3D = false;
  this.is2DArray = false;
  this.isRGBD = false;
  this.noMipmap = false;
  this.lodGenerationOffset = 0;
  this.lodGenerationScale = 0;
  this.linearSpecularLOD = false;
  this.irradianceTexture = null;
  this.uid = "7cb90573-4f21-4808-9569-65119798a5c2";
  this.toString = function () {};
  this.getClassName = function () {};
  // this.onDispose = undefined;
  this.isBlocking = true;
  this.getScene = function () {};
  this.getTextureMatrix = function () {};
  this.getReflectionTextureMatrix = function () {};
  this.getInternalTexture = function () {};
  this.isReadyOrNotBlocking = function () {};
  this.isReady = function () {};
  this.getSize = function () {};
  this.getBaseSize = function () {};
  this.updateSamplingMode = function () {};
  this.scale = function () {};
  this.canRescale = false;
  this.delayLoad = function () {};
  this.clone = function () {};
  this.textureType = 0;
  this.textureFormat = 5;
  this.readPixels = function () {};
  this.releaseInternalTexture = function () {};
  this.dispose = function () {};
  this.serialize = function () {};
  this.gammaSpace = true;
  this.sphericalPolynomial = null;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.CubeTexture = function () {
  this.metadata = null;
  this.reservedDataStore = null;
  this.getAlphaFromRGB = false;
  this.level = 1;
  this.coordinatesIndex = 0;
  this.wrapU = 1;
  this.wrapV = 1;
  this.wrapR = 1;
  this.anisotropicFilteringLevel = 4;
  this.invertZ = false;
  this.lodLevelInAlpha = false;
  this.isRenderTarget = false;
  this.animations = {};
  this.onDisposeObservable = {};
  this.delayLoadState = 0;
  this.onLoadObservable = {};
  this.boundingBoxPosition = {};
  // this.name = undefined;
  // this.url = undefined;
  this.constructor = function () {};
  // this.boundingBoxSize = undefined;
  this.rotationY = 0;
  this.noMipmap = false;
  this.isPrefiltered = false;
  this.getClassName = function () {};
  this.updateURL = function () {};
  this.delayLoad = function () {};
  this.getReflectionTextureMatrix = function () {};
  this.setReflectionTextureMatrix = function () {};
  this.clone = function () {};
  this.hasAlpha = false;
  this.coordinatesMode = 3;
  this.isCube = false;
  this.is3D = false;
  this.is2DArray = false;
  this.isRGBD = false;
  this.lodGenerationOffset = 0;
  this.lodGenerationScale = 0;
  this.linearSpecularLOD = false;
  this.irradianceTexture = null;
  this.uid = "027541ef-c49a-477b-b801-4c6cd0e022a6";
  this.toString = function () {};
  // this.onDispose = undefined;
  this.isBlocking = true;
  this.getScene = function () {};
  this.getTextureMatrix = function () {};
  this.getInternalTexture = function () {};
  this.isReadyOrNotBlocking = function () {};
  this.isReady = function () {};
  this.getSize = function () {};
  this.getBaseSize = function () {};
  this.updateSamplingMode = function () {};
  this.scale = function () {};
  this.canRescale = false;
  this.textureType = 0;
  this.textureFormat = 5;
  this.readPixels = function () {};
  this.releaseInternalTexture = function () {};
  this.dispose = function () {};
  this.serialize = function () {};
  this.gammaSpace = true;
  this.sphericalPolynomial = null;
  this.CreateFromImages = function () {};
  this.CreateFromPrefilteredData = function () {};
  this.Parse = function () {};
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.DynamicTexture = function () {
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.EquiRectangularCubeTexture = function () {
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.HDRCubeTexture = function () {
  this.metadata = null;
  this.reservedDataStore = null;
  this.getAlphaFromRGB = false;
  this.level = 1;
  this.coordinatesIndex = 0;
  this.wrapU = 1;
  this.wrapV = 1;
  this.wrapR = 1;
  this.anisotropicFilteringLevel = 4;
  this.invertZ = false;
  this.lodLevelInAlpha = false;
  this.isRenderTarget = false;
  this.animations = {};
  this.onDisposeObservable = {};
  this.delayLoadState = 0;
  this.boundingBoxPosition = {};
  this.constructor = function () {};
  this.isBlocking = true;
  this.rotationY = 0;
  // this.boundingBoxSize = undefined;
  this.getClassName = function () {};
  this.loadTexture = function () {};
  this.clone = function () {};
  this.delayLoad = function () {};
  this.getReflectionTextureMatrix = function () {};
  this.setReflectionTextureMatrix = function () {};
  this.serialize = function () {};
  this.hasAlpha = false;
  this.coordinatesMode = 3;
  this.isCube = false;
  this.is3D = false;
  this.is2DArray = false;
  this.isRGBD = false;
  this.noMipmap = false;
  this.lodGenerationOffset = 0;
  this.lodGenerationScale = 0;
  this.linearSpecularLOD = false;
  this.irradianceTexture = null;
  this.uid = "b33724c1-78b5-473b-9bd8-8ec3271a8589";
  this.toString = function () {};
  // this.onDispose = undefined;
  this.getScene = function () {};
  this.getTextureMatrix = function () {};
  this.getInternalTexture = function () {};
  this.isReadyOrNotBlocking = function () {};
  this.isReady = function () {};
  this.getSize = function () {};
  this.getBaseSize = function () {};
  this.updateSamplingMode = function () {};
  this.scale = function () {};
  this.canRescale = false;
  this.textureType = 0;
  this.textureFormat = 5;
  this.readPixels = function () {};
  this.releaseInternalTexture = function () {};
  this.dispose = function () {};
  this.gammaSpace = true;
  this.sphericalPolynomial = null;
  this.Parse = function () {};
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

BABYLON.InternalTextureSource = {}

/** @constructor */
BABYLON.InternalTexture = function () {
};

/** @constructor */
BABYLON.MirrorTexture = function () {
  this.REFRESHRATE_RENDER_ONCE = 0;
  this.REFRESHRATE_RENDER_ONEVERYFRAME = 1;
  this.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.MultiRenderTarget = function () {
  this.REFRESHRATE_RENDER_ONCE = 0;
  this.REFRESHRATE_RENDER_ONEVERYFRAME = 1;
  this.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.RawTexture = function () {
  this.CreateLuminanceTexture = function () {};
  this.CreateLuminanceAlphaTexture = function () {};
  this.CreateAlphaTexture = function () {};
  this.CreateRGBTexture = function () {};
  this.CreateRGBATexture = function () {};
  this.CreateRTexture = function () {};
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.RenderTargetTexture = function () {
  this.metadata = null;
  this.reservedDataStore = null;
  this.getAlphaFromRGB = false;
  this.level = 1;
  this.coordinatesIndex = 0;
  this.wrapU = 1;
  this.wrapV = 1;
  this.wrapR = 1;
  this.anisotropicFilteringLevel = 4;
  this.invertZ = false;
  this.lodLevelInAlpha = false;
  this.isRenderTarget = false;
  this.animations = {};
  this.onDisposeObservable = {};
  this.delayLoadState = 0;
  this.url = null;
  this.uOffset = 0;
  this.vOffset = 0;
  this.uScale = 1;
  this.vScale = 1;
  this.uAng = 0;
  this.vAng = 0;
  this.wAng = 0;
  this.uRotationCenter = 0.5;
  this.vRotationCenter = 0.5;
  this.wRotationCenter = 0.5;
  this.inspectableCustomProperties = null;
  this.onLoadObservable = {};
  this.name = "";
  this.renderParticles = true;
  this.renderSprites = false;
  this.ignoreCameraViewport = false;
  this.onBeforeBindObservable = {};
  this.onAfterUnbindObservable = {};
  this.onBeforeRenderObservable = {};
  this.onAfterRenderObservable = {};
  this.onClearObservable = {};
  this.onResizeObservable = {};
  this.boundingBoxPosition = {};
  this.constructor = function () {};
  // this.renderList = undefined;
  // this.onAfterUnbind = undefined;
  // this.onBeforeRender = undefined;
  // this.onAfterRender = undefined;
  // this.onClear = undefined;
  // this.renderTargetOptions = undefined;
  // this.boundingBoxSize = undefined;
  this.depthStencilTexture = null;
  this.createDepthStencilTexture = function () {};
  this.samples = 1;
  this.resetRefreshCounter = function () {};
  this.refreshRate = 1;
  this.addPostProcess = function () {};
  this.clearPostProcesses = function () {};
  this.removePostProcess = function () {};
  this.getRenderSize = function () {};
  this.getRenderWidth = function () {};
  this.getRenderHeight = function () {};
  this.getRenderLayers = function () {};
  this.canRescale = true;
  this.scale = function () {};
  this.getReflectionTextureMatrix = function () {};
  this.resize = function () {};
  this.render = function () {};
  this.unbindFrameBuffer = function () {};
  this.renderToTarget = function () {};
  this.setRenderingOrder = function () {};
  this.setRenderingAutoClearDepthStencil = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.disposeFramebufferObjects = function () {};
  this.dispose = function () {};
  this.freeRenderingGroups = function () {};
  this.getViewCount = function () {};
  this.noMipmap = true;
  this.isBlocking = true;
  this.samplingMode = 3;
  this.invertY = true;
  this.updateURL = function () {};
  this.delayLoad = function () {};
  this.getTextureMatrix = function () {};
  this.getClassName = function () {};
  this.hasAlpha = false;
  this.coordinatesMode = 4;
  this.isCube = false;
  this.is3D = false;
  this.is2DArray = false;
  this.isRGBD = false;
  this.lodGenerationOffset = 0;
  this.lodGenerationScale = 0;
  this.linearSpecularLOD = false;
  this.irradianceTexture = null;
  this.uid = "a1e40ede-7b56-4d20-8ca2-d8329a866931";
  this.toString = function () {};
  // this.onDispose = undefined;
  this.getScene = function () {};
  this.getInternalTexture = function () {};
  this.isReadyOrNotBlocking = function () {};
  this.isReady = function () {};
  this.getSize = function () {};
  this.getBaseSize = function () {};
  this.updateSamplingMode = function () {};
  this.textureType = 0;
  this.textureFormat = 5;
  this.readPixels = function () {};
  this.releaseInternalTexture = function () {};
  this.gammaSpace = true;
  this.sphericalPolynomial = null;
  this.REFRESHRATE_RENDER_ONCE = 0;
  this.REFRESHRATE_RENDER_ONEVERYFRAME = 1;
  this.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.Texture = function () {
  this.metadata = null;
  this.reservedDataStore = null;
  this.getAlphaFromRGB = false;
  this.level = 1;
  this.coordinatesIndex = 0;
  this.wrapU = 1;
  this.wrapV = 1;
  this.wrapR = 1;
  this.anisotropicFilteringLevel = 4;
  this.invertZ = false;
  this.lodLevelInAlpha = false;
  this.isRenderTarget = false;
  this.animations = {};
  this.onDisposeObservable = {};
  this.delayLoadState = 0;
  // this.url = undefined;
  this.uOffset = 0;
  this.vOffset = 0;
  this.uScale = 1;
  this.vScale = 1;
  this.uAng = 0;
  this.vAng = 0;
  this.wAng = 0;
  this.uRotationCenter = 0.5;
  this.vRotationCenter = 0.5;
  this.wRotationCenter = 0.5;
  this.inspectableCustomProperties = null;
  this.onLoadObservable = {};
  this.name = "";
  this.constructor = function () {};
  this.noMipmap = false;
  this.isBlocking = true;
  this.samplingMode = 3;
  this.invertY = true;
  this.updateURL = function () {};
  this.delayLoad = function () {};
  this.getTextureMatrix = function () {};
  this.getReflectionTextureMatrix = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.getClassName = function () {};
  this.dispose = function () {};
  this.hasAlpha = false;
  this.coordinatesMode = 0;
  this.isCube = false;
  this.is3D = false;
  this.is2DArray = false;
  this.isRGBD = false;
  this.lodGenerationOffset = 0;
  this.lodGenerationScale = 0;
  this.linearSpecularLOD = false;
  this.irradianceTexture = null;
  this.uid = "00ffc578-956b-449a-9e78-53bd3b7736a1";
  this.toString = function () {};
  // this.onDispose = undefined;
  this.getScene = function () {};
  this.getInternalTexture = function () {};
  this.isReadyOrNotBlocking = function () {};
  this.isReady = function () {};
  this.getSize = function () {};
  this.getBaseSize = function () {};
  this.updateSamplingMode = function () {};
  this.scale = function () {};
  this.canRescale = false;
  this.textureType = 0;
  this.textureFormat = 5;
  this.readPixels = function () {};
  this.releaseInternalTexture = function () {};
  this.gammaSpace = true;
  this.sphericalPolynomial = null;
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.UniformBuffer = function () {
};

/** @constructor */
BABYLON.MaterialFlags = function () {
  this.DiffuseTextureEnabled = true;
  this.AmbientTextureEnabled = true;
  this.OpacityTextureEnabled = true;
  this.ReflectionTextureEnabled = true;
  this.EmissiveTextureEnabled = true;
  this.SpecularTextureEnabled = true;
  this.BumpTextureEnabled = true;
  this.LightmapTextureEnabled = true;
  this.RefractionTextureEnabled = true;
  this.ColorGradingTextureEnabled = true;
  this.FresnelEnabled = true;
  this.ClearCoatTextureEnabled = true;
  this.ClearCoatBumpTextureEnabled = true;
  this.ClearCoatTintTextureEnabled = true;
  this.SheenTextureEnabled = true;
  this.AnisotropicTextureEnabled = true;
  this.ThicknessTextureEnabled = true;
};

/** @constructor */
BABYLON.EffectRenderer = function () {
};

/** @constructor */
BABYLON.EffectWrapper = function () {
};

/** @constructor */
BABYLON.BackgroundMaterial = function () {
  this.Parse = function () {};
  this.StandardReflectance0 = 0.05;
  this.StandardReflectance90 = 0.5;
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.PBRMaterialDefines = function () {
  this.PBR = true;
  this.MAINUV1 = false;
  this.MAINUV2 = false;
  this.UV1 = false;
  this.UV2 = false;
  this.ALBEDO = false;
  this.GAMMAALBEDO = false;
  this.ALBEDODIRECTUV = 0;
  this.VERTEXCOLOR = false;
  this.AMBIENT = false;
  this.AMBIENTDIRECTUV = 0;
  this.AMBIENTINGRAYSCALE = false;
  this.OPACITY = false;
  this.VERTEXALPHA = false;
  this.OPACITYDIRECTUV = 0;
  this.OPACITYRGB = false;
  this.ALPHATEST = false;
  this.DEPTHPREPASS = false;
  this.ALPHABLEND = false;
  this.ALPHAFROMALBEDO = false;
  this.ALPHATESTVALUE = "0.5";
  this.SPECULAROVERALPHA = false;
  this.RADIANCEOVERALPHA = false;
  this.ALPHAFRESNEL = false;
  this.LINEARALPHAFRESNEL = false;
  this.PREMULTIPLYALPHA = false;
  this.EMISSIVE = false;
  this.EMISSIVEDIRECTUV = 0;
  this.REFLECTIVITY = false;
  this.REFLECTIVITYDIRECTUV = 0;
  this.SPECULARTERM = false;
  this.MICROSURFACEFROMREFLECTIVITYMAP = false;
  this.MICROSURFACEAUTOMATIC = false;
  this.LODBASEDMICROSFURACE = false;
  this.MICROSURFACEMAP = false;
  this.MICROSURFACEMAPDIRECTUV = 0;
  this.METALLICWORKFLOW = false;
  this.ROUGHNESSSTOREINMETALMAPALPHA = false;
  this.ROUGHNESSSTOREINMETALMAPGREEN = false;
  this.METALLNESSSTOREINMETALMAPBLUE = false;
  this.AOSTOREINMETALMAPRED = false;
  this.METALLICF0FACTORFROMMETALLICMAP = false;
  this.ENVIRONMENTBRDF = false;
  this.ENVIRONMENTBRDF_RGBD = false;
  this.NORMAL = false;
  this.TANGENT = false;
  this.BUMP = false;
  this.BUMPDIRECTUV = 0;
  this.OBJECTSPACE_NORMALMAP = false;
  this.PARALLAX = false;
  this.PARALLAXOCCLUSION = false;
  this.NORMALXYSCALE = true;
  this.LIGHTMAP = false;
  this.LIGHTMAPDIRECTUV = 0;
  this.USELIGHTMAPASSHADOWMAP = false;
  this.GAMMALIGHTMAP = false;
  this.RGBDLIGHTMAP = false;
  this.REFLECTION = false;
  this.REFLECTIONMAP_3D = false;
  this.REFLECTIONMAP_SPHERICAL = false;
  this.REFLECTIONMAP_PLANAR = false;
  this.REFLECTIONMAP_CUBIC = false;
  this.USE_LOCAL_REFLECTIONMAP_CUBIC = false;
  this.REFLECTIONMAP_PROJECTION = false;
  this.REFLECTIONMAP_SKYBOX = false;
  this.REFLECTIONMAP_EXPLICIT = false;
  this.REFLECTIONMAP_EQUIRECTANGULAR = false;
  this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
  this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
  this.INVERTCUBICMAP = false;
  this.USESPHERICALFROMREFLECTIONMAP = false;
  this.USEIRRADIANCEMAP = false;
  this.SPHERICAL_HARMONICS = false;
  this.USESPHERICALINVERTEX = false;
  this.REFLECTIONMAP_OPPOSITEZ = false;
  this.LODINREFLECTIONALPHA = false;
  this.GAMMAREFLECTION = false;
  this.RGBDREFLECTION = false;
  this.LINEARSPECULARREFLECTION = false;
  this.RADIANCEOCCLUSION = false;
  this.HORIZONOCCLUSION = false;
  this.INSTANCES = false;
  this.NUM_BONE_INFLUENCERS = 0;
  this.BonesPerMesh = 0;
  this.BONETEXTURE = false;
  this.NONUNIFORMSCALING = false;
  this.MORPHTARGETS = false;
  this.MORPHTARGETS_NORMAL = false;
  this.MORPHTARGETS_TANGENT = false;
  this.MORPHTARGETS_UV = false;
  this.NUM_MORPH_INFLUENCERS = 0;
  this.IMAGEPROCESSING = false;
  this.VIGNETTE = false;
  this.VIGNETTEBLENDMODEMULTIPLY = false;
  this.VIGNETTEBLENDMODEOPAQUE = false;
  this.TONEMAPPING = false;
  this.TONEMAPPING_ACES = false;
  this.CONTRAST = false;
  this.COLORCURVES = false;
  this.COLORGRADING = false;
  this.COLORGRADING3D = false;
  this.SAMPLER3DGREENDEPTH = false;
  this.SAMPLER3DBGRMAP = false;
  this.IMAGEPROCESSINGPOSTPROCESS = false;
  this.EXPOSURE = false;
  this.MULTIVIEW = false;
  this.USEPHYSICALLIGHTFALLOFF = false;
  this.USEGLTFLIGHTFALLOFF = false;
  this.TWOSIDEDLIGHTING = false;
  this.SHADOWFLOAT = false;
  this.CLIPPLANE = false;
  this.CLIPPLANE2 = false;
  this.CLIPPLANE3 = false;
  this.CLIPPLANE4 = false;
  this.CLIPPLANE5 = false;
  this.CLIPPLANE6 = false;
  this.POINTSIZE = false;
  this.FOG = false;
  this.LOGARITHMICDEPTH = false;
  this.FORCENORMALFORWARD = false;
  this.SPECULARAA = false;
  this.CLEARCOAT = false;
  this.CLEARCOAT_DEFAULTIOR = false;
  this.CLEARCOAT_TEXTURE = false;
  this.CLEARCOAT_TEXTUREDIRECTUV = 0;
  this.CLEARCOAT_BUMP = false;
  this.CLEARCOAT_BUMPDIRECTUV = 0;
  this.CLEARCOAT_TINT = false;
  this.CLEARCOAT_TINT_TEXTURE = false;
  this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0;
  this.ANISOTROPIC = false;
  this.ANISOTROPIC_TEXTURE = false;
  this.ANISOTROPIC_TEXTUREDIRECTUV = 0;
  this.BRDF_V_HEIGHT_CORRELATED = false;
  this.MS_BRDF_ENERGY_CONSERVATION = false;
  this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = false;
  this.SHEEN = false;
  this.SHEEN_TEXTURE = false;
  this.SHEEN_TEXTUREDIRECTUV = 0;
  this.SHEEN_LINKWITHALBEDO = false;
  this.SUBSURFACE = false;
  this.SS_REFRACTION = false;
  this.SS_TRANSLUCENCY = false;
  this.SS_SCATERRING = false;
  this.SS_THICKNESSANDMASK_TEXTURE = false;
  this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0;
  this.SS_REFRACTIONMAP_3D = false;
  this.SS_REFRACTIONMAP_OPPOSITEZ = false;
  this.SS_LODINREFRACTIONALPHA = false;
  this.SS_GAMMAREFRACTION = false;
  this.SS_RGBDREFRACTION = false;
  this.SS_LINEARSPECULARREFRACTION = false;
  this.SS_LINKREFRACTIONTOTRANSPARENCY = false;
  this.SS_MASK_FROM_THICKNESS_TEXTURE = false;
  this.UNLIT = false;
  this.DEBUGMODE = 0;
  this.constructor = function () {};
  this.reset = function () {};
  this.isDirty = true;
  this.markAsProcessed = function () {};
  this.markAsUnprocessed = function () {};
  this.markAllAsDirty = function () {};
  this.markAsImageProcessingDirty = function () {};
  this.markAsLightDirty = function () {};
  this.markAsAttributesDirty = function () {};
  this.markAsTexturesDirty = function () {};
  this.markAsFresnelDirty = function () {};
  this.markAsMiscDirty = function () {};
  this.rebuild = function () {};
  this.isEqual = function () {};
  this.cloneTo = function () {};
  this.toString = function () {};
};

/** @constructor */
BABYLON.PBRBaseMaterial = function () {
  this.PBRMATERIAL_OPAQUE = 0;
  this.PBRMATERIAL_ALPHATEST = 1;
  this.PBRMATERIAL_ALPHABLEND = 2;
  this.PBRMATERIAL_ALPHATESTANDBLEND = 3;
  this.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
  this.LIGHTFALLOFF_PHYSICAL = 0;
  this.LIGHTFALLOFF_GLTF = 1;
  this.LIGHTFALLOFF_STANDARD = 2;
  this.Parse = function () {};
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.PBRBaseSimpleMaterial = function () {
  this.PBRMATERIAL_OPAQUE = 0;
  this.PBRMATERIAL_ALPHATEST = 1;
  this.PBRMATERIAL_ALPHABLEND = 2;
  this.PBRMATERIAL_ALPHATESTANDBLEND = 3;
  this.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
  this.LIGHTFALLOFF_PHYSICAL = 0;
  this.LIGHTFALLOFF_GLTF = 1;
  this.LIGHTFALLOFF_STANDARD = 2;
  this.Parse = function () {};
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.PBRMetallicRoughnessMaterial = function () {
  this.Parse = function () {};
  this.PBRMATERIAL_OPAQUE = 0;
  this.PBRMATERIAL_ALPHATEST = 1;
  this.PBRMATERIAL_ALPHABLEND = 2;
  this.PBRMATERIAL_ALPHATESTANDBLEND = 3;
  this.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
  this.LIGHTFALLOFF_PHYSICAL = 0;
  this.LIGHTFALLOFF_GLTF = 1;
  this.LIGHTFALLOFF_STANDARD = 2;
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.PBRSpecularGlossinessMaterial = function () {
  this.Parse = function () {};
  this.PBRMATERIAL_OPAQUE = 0;
  this.PBRMATERIAL_ALPHATEST = 1;
  this.PBRMATERIAL_ALPHABLEND = 2;
  this.PBRMATERIAL_ALPHATESTANDBLEND = 3;
  this.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
  this.LIGHTFALLOFF_PHYSICAL = 0;
  this.LIGHTFALLOFF_GLTF = 1;
  this.LIGHTFALLOFF_STANDARD = 2;
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.ColorGradingTexture = function () {
  this.metadata = null;
  this.reservedDataStore = null;
  this.getAlphaFromRGB = false;
  this.level = 1;
  this.coordinatesIndex = 0;
  this.wrapU = 1;
  this.wrapV = 1;
  this.wrapR = 1;
  this.anisotropicFilteringLevel = 4;
  this.invertZ = false;
  this.lodLevelInAlpha = false;
  this.isRenderTarget = false;
  this.animations = {};
  this.onDisposeObservable = {};
  this.delayLoadState = 0;
  this.constructor = function () {};
  this.getTextureMatrix = function () {};
  this.load3dlTexture = function () {};
  this.loadTexture = function () {};
  this.clone = function () {};
  this.delayLoad = function () {};
  this.serialize = function () {};
  this.hasAlpha = false;
  this.coordinatesMode = 0;
  this.isCube = false;
  this.is3D = false;
  this.is2DArray = false;
  this.isRGBD = false;
  this.noMipmap = false;
  this.lodGenerationOffset = 0;
  this.lodGenerationScale = 0;
  this.linearSpecularLOD = false;
  this.irradianceTexture = null;
  this.uid = "e92a7299-d3f1-49b2-87e5-ffde905f0d42";
  this.toString = function () {};
  this.getClassName = function () {};
  // this.onDispose = undefined;
  this.isBlocking = true;
  this.getScene = function () {};
  this.getReflectionTextureMatrix = function () {};
  this.getInternalTexture = function () {};
  this.isReadyOrNotBlocking = function () {};
  this.isReady = function () {};
  this.getSize = function () {};
  this.getBaseSize = function () {};
  this.updateSamplingMode = function () {};
  this.scale = function () {};
  this.canRescale = false;
  this.textureType = 0;
  this.textureFormat = 5;
  this.readPixels = function () {};
  this.releaseInternalTexture = function () {};
  this.dispose = function () {};
  this.gammaSpace = true;
  this.sphericalPolynomial = null;
  this.Parse = function () {};
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.RawCubeTexture = function () {
  this.CreateFromImages = function () {};
  this.CreateFromPrefilteredData = function () {};
  this.Parse = function () {};
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.RawTexture3D = function () {
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.RawTexture2DArray = function () {
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.RefractionTexture = function () {
  this.metadata = null;
  this.reservedDataStore = null;
  this.getAlphaFromRGB = false;
  this.level = 1;
  this.coordinatesIndex = 0;
  this.wrapU = 1;
  this.wrapV = 1;
  this.wrapR = 1;
  this.anisotropicFilteringLevel = 4;
  this.invertZ = false;
  this.lodLevelInAlpha = false;
  this.isRenderTarget = false;
  this.animations = {};
  this.onDisposeObservable = {};
  this.delayLoadState = 0;
  this.url = null;
  this.uOffset = 0;
  this.vOffset = 0;
  this.uScale = 1;
  this.vScale = 1;
  this.uAng = 0;
  this.vAng = 0;
  this.wAng = 0;
  this.uRotationCenter = 0.5;
  this.vRotationCenter = 0.5;
  this.wRotationCenter = 0.5;
  this.inspectableCustomProperties = null;
  this.onLoadObservable = {};
  this.name = "";
  this.renderParticles = true;
  this.renderSprites = false;
  this.ignoreCameraViewport = false;
  this.onBeforeBindObservable = {};
  this.onAfterUnbindObservable = {};
  this.onBeforeRenderObservable = {};
  this.onAfterRenderObservable = {};
  this.onClearObservable = {};
  this.onResizeObservable = {};
  this.boundingBoxPosition = {};
  this.refractionPlane = {};
  this.depth = 2;
  this.constructor = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  // this.renderList = undefined;
  // this.onAfterUnbind = undefined;
  // this.onBeforeRender = undefined;
  // this.onAfterRender = undefined;
  // this.onClear = undefined;
  // this.renderTargetOptions = undefined;
  // this.boundingBoxSize = undefined;
  this.depthStencilTexture = null;
  this.createDepthStencilTexture = function () {};
  this.samples = 1;
  this.resetRefreshCounter = function () {};
  this.refreshRate = 1;
  this.addPostProcess = function () {};
  this.clearPostProcesses = function () {};
  this.removePostProcess = function () {};
  this.getRenderSize = function () {};
  this.getRenderWidth = function () {};
  this.getRenderHeight = function () {};
  this.getRenderLayers = function () {};
  this.canRescale = true;
  this.scale = function () {};
  this.getReflectionTextureMatrix = function () {};
  this.resize = function () {};
  this.render = function () {};
  this.unbindFrameBuffer = function () {};
  this.renderToTarget = function () {};
  this.setRenderingOrder = function () {};
  this.setRenderingAutoClearDepthStencil = function () {};
  this.disposeFramebufferObjects = function () {};
  this.dispose = function () {};
  this.freeRenderingGroups = function () {};
  this.getViewCount = function () {};
  this.noMipmap = true;
  this.isBlocking = true;
  this.samplingMode = 3;
  this.invertY = true;
  this.updateURL = function () {};
  this.delayLoad = function () {};
  this.getTextureMatrix = function () {};
  this.getClassName = function () {};
  this.hasAlpha = false;
  this.coordinatesMode = 4;
  this.isCube = false;
  this.is3D = false;
  this.is2DArray = false;
  this.isRGBD = false;
  this.lodGenerationOffset = 0;
  this.lodGenerationScale = 0;
  this.linearSpecularLOD = false;
  this.irradianceTexture = null;
  this.uid = "914efb34-0a7d-43b8-91f9-4b686b7711ba";
  this.toString = function () {};
  // this.onDispose = undefined;
  this.getScene = function () {};
  this.getInternalTexture = function () {};
  this.isReadyOrNotBlocking = function () {};
  this.isReady = function () {};
  this.getSize = function () {};
  this.getBaseSize = function () {};
  this.updateSamplingMode = function () {};
  this.textureType = 0;
  this.textureFormat = 5;
  this.readPixels = function () {};
  this.releaseInternalTexture = function () {};
  this.gammaSpace = true;
  this.sphericalPolynomial = null;
  this.REFRESHRATE_RENDER_ONCE = 0;
  this.REFRESHRATE_RENDER_ONEVERYFRAME = 1;
  this.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.VideoTexture = function () {
  this.CreateFromStreamAsync = function () {};
  this.CreateFromWebCamAsync = function () {};
  this.CreateFromWebCam = function () {};
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.HtmlElementTexture = function () {
  this.DefaultOptions = {};
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

BABYLON.NodeMaterialConnectionPointCompatibilityStates = {}

BABYLON.NodeMaterialConnectionPointDirection = {}

/** @constructor */
BABYLON.NodeMaterialConnectionPoint = function () {
  this.acceptedConnectionPointTypes = {};
  this.excludedConnectionPointTypes = {};
  this.onConnectionObservable = {};
  // this.name = undefined;
  // this.direction = undefined;
};

/** @constructor */
BABYLON.NodeMaterialBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 0;
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 1;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.getClassName = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.NodeMaterialDefines = function () {
  this.NORMAL = false;
  this.TANGENT = false;
  this.UV1 = false;
  this.NUM_BONE_INFLUENCERS = 0;
  this.BonesPerMesh = 0;
  this.BONETEXTURE = false;
  this.MORPHTARGETS = false;
  this.MORPHTARGETS_NORMAL = false;
  this.MORPHTARGETS_TANGENT = false;
  this.MORPHTARGETS_UV = false;
  this.NUM_MORPH_INFLUENCERS = 0;
  this.IMAGEPROCESSING = false;
  this.VIGNETTE = false;
  this.VIGNETTEBLENDMODEMULTIPLY = false;
  this.VIGNETTEBLENDMODEOPAQUE = false;
  this.TONEMAPPING = false;
  this.TONEMAPPING_ACES = false;
  this.CONTRAST = false;
  this.EXPOSURE = false;
  this.COLORCURVES = false;
  this.COLORGRADING = false;
  this.COLORGRADING3D = false;
  this.SAMPLER3DGREENDEPTH = false;
  this.SAMPLER3DBGRMAP = false;
  this.IMAGEPROCESSINGPOSTPROCESS = false;
  this.BUMPDIRECTUV = 0;
  this.constructor = function () {};
  this.setValue = function () {};
  this.isDirty = true;
  this.markAsProcessed = function () {};
  this.markAsUnprocessed = function () {};
  this.markAllAsDirty = function () {};
  this.markAsImageProcessingDirty = function () {};
  this.markAsLightDirty = function () {};
  this.markAsAttributesDirty = function () {};
  this.markAsTexturesDirty = function () {};
  this.markAsFresnelDirty = function () {};
  this.markAsMiscDirty = function () {};
  this.rebuild = function () {};
  this.isEqual = function () {};
  this.cloneTo = function () {};
  this.reset = function () {};
  this.toString = function () {};
};

/** @constructor */
BABYLON.NodeMaterial = function () {
  this.Parse = function () {};
  this.ParseFromFileAsync = function () {};
  this.ParseFromSnippetAsync = function () {};
  this.CreateDefault = function () {};
  this.EditorURL = "https://unpkg.com/babylonjs-node-editor@4.1.0/babylon.nodeEditor.js";
  this.SnippetUrl = "https://snippet.babylonjs.com";
  this.TriangleFillMode = 0;
  this.WireFrameFillMode = 1;
  this.PointFillMode = 2;
  this.PointListDrawMode = 3;
  this.LineListDrawMode = 4;
  this.LineLoopDrawMode = 5;
  this.LineStripDrawMode = 6;
  this.TriangleStripDrawMode = 7;
  this.TriangleFanDrawMode = 8;
  this.ClockWiseSideOrientation = 0;
  this.CounterClockWiseSideOrientation = 1;
  this.TextureDirtyFlag = 1;
  this.LightDirtyFlag = 2;
  this.FresnelDirtyFlag = 4;
  this.AttributesDirtyFlag = 8;
  this.MiscDirtyFlag = 16;
  this.AllDirtyFlag = 31;
};

/** @constructor */
BABYLON.CustomProceduralTexture = function () {
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.NoiseProceduralTexture = function () {
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.ProceduralTexture = function () {
  this.Parse = function () {};
  this.CreateFromBase64String = function () {};
  this.LoadFromDataString = function () {};
  this.SerializeBuffers = true;
  this.NEAREST_SAMPLINGMODE = 1;
  this.NEAREST_NEAREST_MIPLINEAR = 8;
  this.BILINEAR_SAMPLINGMODE = 2;
  this.LINEAR_LINEAR_MIPNEAREST = 11;
  this.TRILINEAR_SAMPLINGMODE = 3;
  this.LINEAR_LINEAR_MIPLINEAR = 3;
  this.NEAREST_NEAREST_MIPNEAREST = 4;
  this.NEAREST_LINEAR_MIPNEAREST = 5;
  this.NEAREST_LINEAR_MIPLINEAR = 6;
  this.NEAREST_LINEAR = 7;
  this.NEAREST_NEAREST = 1;
  this.LINEAR_NEAREST_MIPNEAREST = 9;
  this.LINEAR_NEAREST_MIPLINEAR = 10;
  this.LINEAR_LINEAR = 2;
  this.LINEAR_NEAREST = 12;
  this.EXPLICIT_MODE = 0;
  this.SPHERICAL_MODE = 1;
  this.PLANAR_MODE = 2;
  this.CUBIC_MODE = 3;
  this.PROJECTION_MODE = 4;
  this.SKYBOX_MODE = 5;
  this.INVCUBIC_MODE = 6;
  this.EQUIRECTANGULAR_MODE = 7;
  this.FIXED_EQUIRECTANGULAR_MODE = 8;
  this.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
  this.CLAMP_ADDRESSMODE = 0;
  this.WRAP_ADDRESSMODE = 1;
  this.MIRROR_ADDRESSMODE = 2;
  this.UseSerializedUrlIfAny = false;
  this.WhenAllReady = function () {};
  this.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
};

/** @constructor */
BABYLON.ProceduralTextureSceneComponent = function () {
};

/** @constructor */
BABYLON.TexturePacker = function () {
  this.LAYOUT_STRIP = 0;
  this.LAYOUT_POWER2 = 1;
  this.LAYOUT_COLNUM = 2;
  this.SUBUV_WRAP = 0;
  this.SUBUV_EXTEND = 1;
  this.SUBUV_COLOR = 2;
};

/** @constructor */
BABYLON.TexturePackerFrame = function () {
  // this.id = undefined;
  // this.scale = undefined;
  // this.offset = undefined;
};

BABYLON.NodeMaterialBlockTargets = {}

BABYLON.NodeMaterialBlockConnectionPointTypes = {}

BABYLON.NodeMaterialBlockConnectionPointMode = {}

BABYLON.NodeMaterialSystemValues = {}

/** @constructor */
BABYLON.MultiplyBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 1;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.AddBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 2;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ScaleBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 3;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.input = {};
  this.factor = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ClampBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 4;
  this.minimum = 0;
  this.maximum = 1;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.value = {};
  this.output = {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.CrossBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 5;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.DotBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 6;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.TransformBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 7;
  this.complementW = 1;
  this.complementZ = 0;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.vector = {};
  this.output = {};
  this.xyz = {};
  this.transform = {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 1;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.RemapBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 8;
  this.sourceRange = {};
  this.targetRange = {};
  this.constructor = function () {};
  this.getClassName = function () {};
  this.input = {};
  this.sourceMin = {};
  this.sourceMax = {};
  this.targetMin = {};
  this.targetMax = {};
  this.output = {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.NormalizeBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 9;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.input = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

BABYLON.TrigonometryBlockOperations = {}

/** @constructor */
BABYLON.TrigonometryBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 10;
  this.operation = 0;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.input = {};
  this.output = {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ColorMergerBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 11;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.rgbIn = {};
  this.r = {};
  this.g = {};
  this.b = {};
  this.a = {};
  this.rgba = {};
  this.rgbOut = {};
  this.rgb = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.VectorMergerBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 12;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.xyzIn = {};
  this.xyIn = {};
  this.x = {};
  this.y = {};
  this.z = {};
  this.w = {};
  this.xyzw = {};
  this.xyzOut = {};
  this.xyOut = {};
  this.xy = {};
  this.xyz = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ColorSplitterBlock = function () {
  this.inputsAreExclusive = true;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 13;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.rgba = {};
  this.rgbIn = {};
  this.rgbOut = {};
  this.r = {};
  this.g = {};
  this.b = {};
  this.a = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.VectorSplitterBlock = function () {
  this.inputsAreExclusive = true;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 14;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.xyzw = {};
  this.xyzIn = {};
  this.xyIn = {};
  this.xyzOut = {};
  this.xyOut = {};
  this.x = {};
  this.y = {};
  this.z = {};
  this.w = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.LerpBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 15;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.gradient = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.DivideBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 16;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.SubtractBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 17;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.StepBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 18;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.value = {};
  this.edge = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.OneMinusBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 19;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.input = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ViewDirectionBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 20;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.worldPosition = {};
  this.cameraPosition = {};
  this.output = {};
  this.autoConfigure = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.FresnelBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 21;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.worldNormal = {};
  this.viewDirection = {};
  this.bias = {};
  this.power = {};
  this.fresnel = {};
  this.autoConfigure = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.MaxBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 22;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.MinBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 23;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.DistanceBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 24;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.LengthBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 25;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.value = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.NegateBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 26;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.value = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.PowBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 27;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.value = {};
  this.power = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.RandomNumberBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 28;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.seed = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ArcTan2Block = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 29;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.x = {};
  this.y = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.SmoothStepBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 30;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.value = {};
  this.edge0 = {};
  this.edge1 = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ReciprocalBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 31;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.input = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ReplaceColorBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 32;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.value = {};
  this.reference = {};
  this.distance = {};
  this.replacement = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.PosterizeBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 33;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.value = {};
  this.steps = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

BABYLON.WaveBlockKind = {}

/** @constructor */
BABYLON.WaveBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 34;
  this.kind = 0;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.input = {};
  this.output = {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.GradientBlockColorStep = function () {
  // this.step = undefined;
  // this.color = undefined;
};

/** @constructor */
BABYLON.GradientBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 35;
  this.colorSteps = {};
  this.constructor = function () {};
  this.getClassName = function () {};
  this.gradient = {};
  this.output = {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.NLerpBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 36;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.left = {};
  this.right = {};
  this.gradient = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.WorleyNoise3DBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 37;
  this.manhattanDistance = false;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.seed = {};
  this.jitter = {};
  this.output = {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.SimplexPerlin3DBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 38;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.seed = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.NormalBlendBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 39;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.normalMap0 = {};
  this.normalMap1 = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.Rotate2dBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 40;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.input = {};
  this.angle = {};
  this.output = {};
  this.autoConfigure = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ReflectBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 41;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.incident = {};
  this.normal = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.RefractBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 42;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.incident = {};
  this.normal = {};
  this.ior = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.DesaturateBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 43;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.color = {};
  this.level = {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 4;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.NodeMaterialOptimizer = function () {
  this.optimize = function () {};
};

/** @constructor */
BABYLON.VertexOutputBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 44;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.vector = {};
  this.isUnique = false;
  this.isFinalMerger = true;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 1;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.BonesBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 45;
  this.constructor = function () {};
  this.initialize = function () {};
  this.getClassName = function () {};
  this.matricesIndices = {};
  this.matricesWeights = {};
  this.matricesIndicesExtra = {};
  this.matricesWeightsExtra = {};
  this.world = {};
  this.output = {};
  this.autoConfigure = function () {};
  this.provideFallbacks = function () {};
  this.bind = function () {};
  this.prepareDefines = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 1;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.initializeDefines = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.InstancesBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 46;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.world0 = {};
  this.world1 = {};
  this.world2 = {};
  this.world3 = {};
  this.world = {};
  this.output = {};
  this.instanceID = {};
  this.autoConfigure = function () {};
  this.prepareDefines = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 1;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.MorphTargetsBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 47;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.position = {};
  this.normal = {};
  this.tangent = {};
  this.uv = {};
  this.positionOutput = {};
  this.normalOutput = {};
  this.tangentOutput = {};
  this.uvOutput = {};
  this.initialize = function () {};
  this.autoConfigure = function () {};
  this.prepareDefines = function () {};
  this.bind = function () {};
  this.replaceRepeatableContent = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 1;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.LightInformationBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 48;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.worldPosition = {};
  this.direction = {};
  this.color = {};
  this.intensity = {};
  this.bind = function () {};
  this.prepareDefines = function () {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 1;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.FragmentOutputBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 49;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.rgba = {};
  this.rgb = {};
  this.a = {};
  this.isUnique = false;
  this.isFinalMerger = true;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 2;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ImageProcessingBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 50;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.color = {};
  this.output = {};
  this.initialize = function () {};
  this.isReady = function () {};
  this.prepareDefines = function () {};
  this.bind = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 2;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.PerturbNormalBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 51;
  this.invertX = false;
  this.invertY = false;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.worldPosition = {};
  this.worldNormal = {};
  this.worldTangent = {};
  this.uv = {};
  this.normalMapColor = {};
  this.strength = {};
  this.output = {};
  this.prepareDefines = function () {};
  this.bind = function () {};
  this.autoConfigure = function () {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 2;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.DiscardBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 52;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.value = {};
  this.cutoff = {};
  this.isUnique = false;
  this.isFinalMerger = true;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 2;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.FrontFacingBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 53;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.output = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 2;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.DerivativeBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 54;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.input = {};
  this.dx = {};
  this.dy = {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 2;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.FogBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 55;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.worldPosition = {};
  this.view = {};
  this.input = {};
  this.fogColor = {};
  this.output = {};
  this.autoConfigure = function () {};
  this.prepareDefines = function () {};
  this.bind = function () {};
  this.isUnique = false;
  this.isFinalMerger = true;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 3;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.LightBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 56;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.worldPosition = {};
  this.worldNormal = {};
  this.cameraPosition = {};
  this.glossiness = {};
  this.glossPower = {};
  this.diffuseColor = {};
  this.specularColor = {};
  this.diffuseOutput = {};
  this.specularOutput = {};
  this.shadow = {};
  this.autoConfigure = function () {};
  this.prepareDefines = function () {};
  this.updateUniformsAndSamples = function () {};
  this.bind = function () {};
  this.serialize = function () {};
  this.isUnique = true;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 3;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.TextureBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 57;
  this.convertToGammaSpace = false;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.uv = {};
  this.rgba = {};
  this.rgb = {};
  this.r = {};
  this.g = {};
  this.b = {};
  this.a = {};
  this.target = 3;
  this.autoConfigure = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.isReady = function () {};
  this.bind = function () {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.replaceRepeatableContent = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.ReflectionTextureBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 58;
  this.constructor = function () {};
  this.getClassName = function () {};
  this.position = {};
  this.worldPosition = {};
  this.worldNormal = {};
  this.world = {};
  this.cameraPosition = {};
  this.view = {};
  this.rgb = {};
  this.r = {};
  this.g = {};
  this.b = {};
  this.autoConfigure = function () {};
  this.prepareDefines = function () {};
  this.isReady = function () {};
  this.bind = function () {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = false;
  // this.buildId = undefined;
  this.target = 3;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.initialize = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.replaceRepeatableContent = function () {};
  this.build = function () {};
  this.clone = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.InputBlock = function () {
  this.inputsAreExclusive = false;
  this.comments = "";
  // this.name = undefined;
  this.uniqueId = 59;
  this.min = 0;
  this.max = 0;
  this.isBoolean = false;
  this.matrixMode = 0;
  this.visibleInInspector = false;
  this.isConstant = false;
  this.groupInInspector = "";
  this.onValueChangedObservable = {};
  this.constructor = function () {};
  this.type = 1024;
  this.output = {};
  this.setAsAttribute = function () {};
  this.setAsSystemValue = function () {};
  // this.value = undefined;
  // this.valueCallback = undefined;
  // this.associatedVariableName = undefined;
  this.animationType = 0;
  this.isUndefined = true;
  this.isUniform = false;
  this.isAttribute = false;
  this.isVarying = false;
  this.isSystemValue = false;
  this.systemValue = null;
  this.getClassName = function () {};
  this.animate = function () {};
  this.initialize = function () {};
  this.setDefaultValue = function () {};
  this.dispose = function () {};
  this.serialize = function () {};
  this.isUnique = false;
  this.isFinalMerger = false;
  this.isInput = true;
  // this.buildId = undefined;
  this.target = 1;
  this.inputs = {};
  this.outputs = {};
  this.getInputByName = function () {};
  this.getOutputByName = function () {};
  this.bind = function () {};
  this.registerInput = function () {};
  this.registerOutput = function () {};
  this.getFirstAvailableInput = function () {};
  this.getFirstAvailableOutput = function () {};
  this.getSiblingOutput = function () {};
  this.connectTo = function () {};
  this.updateUniformsAndSamples = function () {};
  this.provideFallbacks = function () {};
  this.initializeDefines = function () {};
  this.prepareDefines = function () {};
  this.autoConfigure = function () {};
  this.replaceRepeatableContent = function () {};
  this.isReady = function () {};
  this.build = function () {};
  this.clone = function () {};
};

BABYLON.AnimatedInputBlockTypes = {}

/** @constructor */
BABYLON.Scalar = function () {
  this.WithinEpsilon = function () {};
  this.ToHex = function () {};
  this.Sign = function () {};
  this.Clamp = function () {};
  this.Log2 = function () {};
  this.Repeat = function () {};
  this.Normalize = function () {};
  this.Denormalize = function () {};
  this.DeltaAngle = function () {};
  this.PingPong = function () {};
  this.SmoothStep = function () {};
  this.MoveTowards = function () {};
  this.MoveTowardsAngle = function () {};
  this.Lerp = function () {};
  this.LerpAngle = function () {};
  this.InverseLerp = function () {};
  this.Hermite = function () {};
  this.RandomRange = function () {};
  this.RangeToPercent = function () {};
  this.PercentToRange = function () {};
  this.NormalizeRadians = function () {};
  this.TwoPi = 6.283185307179586;
};

BABYLON.Space = {}

/** @constructor */
BABYLON.Axis = function () {
  this.X = {};
  this.Y = {};
  this.Z = {};
};

/** @constructor */
BABYLON.Color3 = function () {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.toString = function () {};
  this.getClassName = function () {};
  this.getHashCode = function () {};
  this.toArray = function () {};
  this.toColor4 = function () {};
  this.asArray = function () {};
  this.toLuminance = function () {};
  this.multiply = function () {};
  this.multiplyToRef = function () {};
  this.equals = function () {};
  this.equalsFloats = function () {};
  this.scale = function () {};
  this.scaleToRef = function () {};
  this.scaleAndAddToRef = function () {};
  this.clampToRef = function () {};
  this.add = function () {};
  this.addToRef = function () {};
  this.subtract = function () {};
  this.subtractToRef = function () {};
  this.clone = function () {};
  this.copyFrom = function () {};
  this.copyFromFloats = function () {};
  this.set = function () {};
  this.toHexString = function () {};
  this.toLinearSpace = function () {};
  this.toHSV = function () {};
  this.toHSVToRef = function () {};
  this.toLinearSpaceToRef = function () {};
  this.toGammaSpace = function () {};
  this.toGammaSpaceToRef = function () {};
  this.HSVtoRGBToRef = function () {};
  this.FromHexString = function () {};
  this.FromArray = function () {};
  this.FromInts = function () {};
  this.Lerp = function () {};
  this.LerpToRef = function () {};
  this.Red = function () {};
  this.Green = function () {};
  this.Blue = function () {};
  this.Black = function () {};
  this.BlackReadOnly = {};
  this.White = function () {};
  this.Purple = function () {};
  this.Magenta = function () {};
  this.Yellow = function () {};
  this.Gray = function () {};
  this.Teal = function () {};
  this.Random = function () {};
};

/** @constructor */
BABYLON.Color4 = function () {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 1;
  this.addInPlace = function () {};
  this.asArray = function () {};
  this.toArray = function () {};
  this.equals = function () {};
  this.add = function () {};
  this.subtract = function () {};
  this.subtractToRef = function () {};
  this.scale = function () {};
  this.scaleToRef = function () {};
  this.scaleAndAddToRef = function () {};
  this.clampToRef = function () {};
  this.multiply = function () {};
  this.multiplyToRef = function () {};
  this.toString = function () {};
  this.getClassName = function () {};
  this.getHashCode = function () {};
  this.clone = function () {};
  this.copyFrom = function () {};
  this.copyFromFloats = function () {};
  this.set = function () {};
  this.toHexString = function () {};
  this.toLinearSpace = function () {};
  this.toLinearSpaceToRef = function () {};
  this.toGammaSpace = function () {};
  this.toGammaSpaceToRef = function () {};
  this.FromHexString = function () {};
  this.Lerp = function () {};
  this.LerpToRef = function () {};
  this.FromColor3 = function () {};
  this.FromArray = function () {};
  this.FromInts = function () {};
  this.CheckColors4 = function () {};
};

/** @constructor */
BABYLON.TmpColors = function () {
  this.Color3 = {};
  this.Color4 = {};
};

BABYLON.ToGammaSpace = 0.45454545454545453;

BABYLON.ToLinearSpace = 2.2;

BABYLON.Epsilon = 0.001;

/** @constructor */
BABYLON.Frustum = function () {
  this.GetPlanes = function () {};
  this.GetNearPlaneToRef = function () {};
  this.GetFarPlaneToRef = function () {};
  this.GetLeftPlaneToRef = function () {};
  this.GetRightPlaneToRef = function () {};
  this.GetTopPlaneToRef = function () {};
  this.GetBottomPlaneToRef = function () {};
  this.GetPlanesToRef = function () {};
};

/** @constructor */
BABYLON.Plane = function () {
  this.normal = {};
  // this.d = undefined;
  this.asArray = function () {};
  this.clone = function () {};
  this.getClassName = function () {};
  this.getHashCode = function () {};
  this.normalize = function () {};
  this.transform = function () {};
  this.dotCoordinate = function () {};
  this.copyFromPoints = function () {};
  this.isFrontFacingTo = function () {};
  this.signedDistanceTo = function () {};
  this.FromArray = function () {};
  this.FromPoints = function () {};
  this.FromPositionAndNormal = function () {};
  this.SignedDistanceToPlaneFromPositionAndNormal = function () {};
};

/** @constructor */
BABYLON.Size = function () {
  // this.width = undefined;
  // this.height = undefined;
  this.toString = function () {};
  this.getClassName = function () {};
  this.getHashCode = function () {};
  this.copyFrom = function () {};
  this.copyFromFloats = function () {};
  this.set = function () {};
  this.multiplyByFloats = function () {};
  this.clone = function () {};
  this.equals = function () {};
  this.surface = NaN;
  this.add = function () {};
  this.subtract = function () {};
  this.Zero = function () {};
  this.Lerp = function () {};
};

/** @constructor */
BABYLON.Vector2 = function () {
  this.x = 0;
  this.y = 0;
  this.toString = function () {};
  this.getClassName = function () {};
  this.getHashCode = function () {};
  this.toArray = function () {};
  this.asArray = function () {};
  this.copyFrom = function () {};
  this.copyFromFloats = function () {};
  this.set = function () {};
  this.add = function () {};
  this.addToRef = function () {};
  this.addInPlace = function () {};
  this.addVector3 = function () {};
  this.subtract = function () {};
  this.subtractToRef = function () {};
  this.subtractInPlace = function () {};
  this.multiplyInPlace = function () {};
  this.multiply = function () {};
  this.multiplyToRef = function () {};
  this.multiplyByFloats = function () {};
  this.divide = function () {};
  this.divideToRef = function () {};
  this.divideInPlace = function () {};
  this.negate = function () {};
  this.negateInPlace = function () {};
  this.negateToRef = function () {};
  this.scaleInPlace = function () {};
  this.scale = function () {};
  this.scaleToRef = function () {};
  this.scaleAndAddToRef = function () {};
  this.equals = function () {};
  this.equalsWithEpsilon = function () {};
  this.floor = function () {};
  this.fract = function () {};
  this.length = function () {};
  this.lengthSquared = function () {};
  this.normalize = function () {};
  this.clone = function () {};
  this.Zero = function () {};
  this.One = function () {};
  this.FromArray = function () {};
  this.FromArrayToRef = function () {};
  this.CatmullRom = function () {};
  this.Clamp = function () {};
  this.Hermite = function () {};
  this.Lerp = function () {};
  this.Dot = function () {};
  this.Normalize = function () {};
  this.Minimize = function () {};
  this.Maximize = function () {};
  this.Transform = function () {};
  this.TransformToRef = function () {};
  this.PointInTriangle = function () {};
  this.Distance = function () {};
  this.DistanceSquared = function () {};
  this.Center = function () {};
  this.DistanceOfPointFromSegment = function () {};
};

/** @constructor */
BABYLON.Vector3 = function () {
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.toString = function () {};
  this.getClassName = function () {};
  this.getHashCode = function () {};
  this.asArray = function () {};
  this.toArray = function () {};
  this.toQuaternion = function () {};
  this.addInPlace = function () {};
  this.addInPlaceFromFloats = function () {};
  this.add = function () {};
  this.addToRef = function () {};
  this.subtractInPlace = function () {};
  this.subtract = function () {};
  this.subtractToRef = function () {};
  this.subtractFromFloats = function () {};
  this.subtractFromFloatsToRef = function () {};
  this.negate = function () {};
  this.negateInPlace = function () {};
  this.negateToRef = function () {};
  this.scaleInPlace = function () {};
  this.scale = function () {};
  this.scaleToRef = function () {};
  this.scaleAndAddToRef = function () {};
  this.equals = function () {};
  this.equalsWithEpsilon = function () {};
  this.equalsToFloats = function () {};
  this.multiplyInPlace = function () {};
  this.multiply = function () {};
  this.multiplyToRef = function () {};
  this.multiplyByFloats = function () {};
  this.divide = function () {};
  this.divideToRef = function () {};
  this.divideInPlace = function () {};
  this.minimizeInPlace = function () {};
  this.maximizeInPlace = function () {};
  this.minimizeInPlaceFromFloats = function () {};
  this.maximizeInPlaceFromFloats = function () {};
  this.isNonUniformWithinEpsilon = function () {};
  this.isNonUniform = false;
  this.floor = function () {};
  this.fract = function () {};
  this.length = function () {};
  this.lengthSquared = function () {};
  this.normalize = function () {};
  this.reorderInPlace = function () {};
  this.rotateByQuaternionToRef = function () {};
  this.rotateByQuaternionAroundPointToRef = function () {};
  this.cross = function () {};
  this.normalizeFromLength = function () {};
  this.normalizeToNew = function () {};
  this.normalizeToRef = function () {};
  this.clone = function () {};
  this.copyFrom = function () {};
  this.copyFromFloats = function () {};
  this.set = function () {};
  this.setAll = function () {};
  this.GetClipFactor = function () {};
  this.GetAngleBetweenVectors = function () {};
  this.FromArray = function () {};
  this.FromFloatArray = function () {};
  this.FromArrayToRef = function () {};
  this.FromFloatArrayToRef = function () {};
  this.FromFloatsToRef = function () {};
  this.Zero = function () {};
  this.One = function () {};
  this.Up = function () {};
  this.UpReadOnly = {};
  this.ZeroReadOnly = {};
  this.Down = function () {};
  this.Forward = function () {};
  this.Backward = function () {};
  this.Right = function () {};
  this.Left = function () {};
  this.TransformCoordinates = function () {};
  this.TransformCoordinatesToRef = function () {};
  this.TransformCoordinatesFromFloatsToRef = function () {};
  this.TransformNormal = function () {};
  this.TransformNormalToRef = function () {};
  this.TransformNormalFromFloatsToRef = function () {};
  this.CatmullRom = function () {};
  this.Clamp = function () {};
  this.ClampToRef = function () {};
  this.CheckExtends = function () {};
  this.Hermite = function () {};
  this.Lerp = function () {};
  this.LerpToRef = function () {};
  this.Dot = function () {};
  this.Cross = function () {};
  this.CrossToRef = function () {};
  this.Normalize = function () {};
  this.NormalizeToRef = function () {};
  this.Project = function () {};
  this.UnprojectFromTransform = function () {};
  this.Unproject = function () {};
  this.UnprojectToRef = function () {};
  this.UnprojectFloatsToRef = function () {};
  this.Minimize = function () {};
  this.Maximize = function () {};
  this.Distance = function () {};
  this.DistanceSquared = function () {};
  this.Center = function () {};
  this.RotationFromAxis = function () {};
  this.RotationFromAxisToRef = function () {};
};

/** @constructor */
BABYLON.Vector4 = function () {
  // this.x = undefined;
  // this.y = undefined;
  // this.z = undefined;
  // this.w = undefined;
  this.toString = function () {};
  this.getClassName = function () {};
  this.getHashCode = function () {};
  this.asArray = function () {};
  this.toArray = function () {};
  this.addInPlace = function () {};
  this.add = function () {};
  this.addToRef = function () {};
  this.subtractInPlace = function () {};
  this.subtract = function () {};
  this.subtractToRef = function () {};
  this.subtractFromFloats = function () {};
  this.subtractFromFloatsToRef = function () {};
  this.negate = function () {};
  this.negateInPlace = function () {};
  this.negateToRef = function () {};
  this.scaleInPlace = function () {};
  this.scale = function () {};
  this.scaleToRef = function () {};
  this.scaleAndAddToRef = function () {};
  this.equals = function () {};
  this.equalsWithEpsilon = function () {};
  this.equalsToFloats = function () {};
  this.multiplyInPlace = function () {};
  this.multiply = function () {};
  this.multiplyToRef = function () {};
  this.multiplyByFloats = function () {};
  this.divide = function () {};
  this.divideToRef = function () {};
  this.divideInPlace = function () {};
  this.minimizeInPlace = function () {};
  this.maximizeInPlace = function () {};
  this.floor = function () {};
  this.fract = function () {};
  this.length = function () {};
  this.lengthSquared = function () {};
  this.normalize = function () {};
  this.toVector3 = function () {};
  this.clone = function () {};
  this.copyFrom = function () {};
  this.copyFromFloats = function () {};
  this.set = function () {};
  this.setAll = function () {};
  this.FromArray = function () {};
  this.FromArrayToRef = function () {};
  this.FromFloatArrayToRef = function () {};
  this.FromFloatsToRef = function () {};
  this.Zero = function () {};
  this.One = function () {};
  this.Normalize = function () {};
  this.NormalizeToRef = function () {};
  this.Minimize = function () {};
  this.Maximize = function () {};
  this.Distance = function () {};
  this.DistanceSquared = function () {};
  this.Center = function () {};
  this.TransformNormal = function () {};
  this.TransformNormalToRef = function () {};
  this.TransformNormalFromFloatsToRef = function () {};
  this.FromVector3 = function () {};
};

/** @constructor */
BABYLON.Quaternion = function () {
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.w = 1;
  this.toString = function () {};
  this.getClassName = function () {};
  this.getHashCode = function () {};
  this.asArray = function () {};
  this.equals = function () {};
  this.equalsWithEpsilon = function () {};
  this.clone = function () {};
  this.copyFrom = function () {};
  this.copyFromFloats = function () {};
  this.set = function () {};
  this.add = function () {};
  this.addInPlace = function () {};
  this.subtract = function () {};
  this.scale = function () {};
  this.scaleToRef = function () {};
  this.scaleInPlace = function () {};
  this.scaleAndAddToRef = function () {};
  this.multiply = function () {};
  this.multiplyToRef = function () {};
  this.multiplyInPlace = function () {};
  this.conjugateToRef = function () {};
  this.conjugateInPlace = function () {};
  this.conjugate = function () {};
  this.length = function () {};
  this.normalize = function () {};
  this.toEulerAngles = function () {};
  this.toEulerAnglesToRef = function () {};
  this.toRotationMatrix = function () {};
  this.fromRotationMatrix = function () {};
  this.FromRotationMatrix = function () {};
  this.FromRotationMatrixToRef = function () {};
  this.Dot = function () {};
  this.AreClose = function () {};
  this.Zero = function () {};
  this.Inverse = function () {};
  this.InverseToRef = function () {};
  this.Identity = function () {};
  this.IsIdentity = function () {};
  this.RotationAxis = function () {};
  this.RotationAxisToRef = function () {};
  this.FromArray = function () {};
  this.FromEulerAngles = function () {};
  this.FromEulerAnglesToRef = function () {};
  this.FromEulerVector = function () {};
  this.FromEulerVectorToRef = function () {};
  this.RotationYawPitchRoll = function () {};
  this.RotationYawPitchRollToRef = function () {};
  this.RotationAlphaBetaGamma = function () {};
  this.RotationAlphaBetaGammaToRef = function () {};
  this.RotationQuaternionFromAxis = function () {};
  this.RotationQuaternionFromAxisToRef = function () {};
  this.Slerp = function () {};
  this.SlerpToRef = function () {};
  this.Hermite = function () {};
};

/** @constructor */
BABYLON.Matrix = function () {
  this.updateFlag = 239;
  this.m = {};
  this.isIdentity = function () {};
  this.isIdentityAs3x2 = function () {};
  this.determinant = function () {};
  this.toArray = function () {};
  this.asArray = function () {};
  this.invert = function () {};
  this.reset = function () {};
  this.add = function () {};
  this.addToRef = function () {};
  this.addToSelf = function () {};
  this.invertToRef = function () {};
  this.addAtIndex = function () {};
  this.multiplyAtIndex = function () {};
  this.setTranslationFromFloats = function () {};
  this.addTranslationFromFloats = function () {};
  this.setTranslation = function () {};
  this.getTranslation = function () {};
  this.getTranslationToRef = function () {};
  this.removeRotationAndScaling = function () {};
  this.multiply = function () {};
  this.copyFrom = function () {};
  this.copyToArray = function () {};
  this.multiplyToRef = function () {};
  this.multiplyToArray = function () {};
  this.equals = function () {};
  this.clone = function () {};
  this.getClassName = function () {};
  this.getHashCode = function () {};
  this.decompose = function () {};
  this.getRow = function () {};
  this.setRow = function () {};
  this.transpose = function () {};
  this.transposeToRef = function () {};
  this.setRowFromFloats = function () {};
  this.scale = function () {};
  this.scaleToRef = function () {};
  this.scaleAndAddToRef = function () {};
  this.toNormalMatrix = function () {};
  this.getRotationMatrix = function () {};
  this.getRotationMatrixToRef = function () {};
  this.toggleModelMatrixHandInPlace = function () {};
  this.toggleProjectionMatrixHandInPlace = function () {};
  this.FromArray = function () {};
  this.FromArrayToRef = function () {};
  this.FromFloat32ArrayToRefScaled = function () {};
  this.IdentityReadOnly = {};
  this.FromValuesToRef = function () {};
  this.FromValues = function () {};
  this.Compose = function () {};
  this.ComposeToRef = function () {};
  this.Identity = function () {};
  this.IdentityToRef = function () {};
  this.Zero = function () {};
  this.RotationX = function () {};
  this.Invert = function () {};
  this.RotationXToRef = function () {};
  this.RotationY = function () {};
  this.RotationYToRef = function () {};
  this.RotationZ = function () {};
  this.RotationZToRef = function () {};
  this.RotationAxis = function () {};
  this.RotationAxisToRef = function () {};
  this.RotationAlignToRef = function () {};
  this.RotationYawPitchRoll = function () {};
  this.RotationYawPitchRollToRef = function () {};
  this.Scaling = function () {};
  this.ScalingToRef = function () {};
  this.Translation = function () {};
  this.TranslationToRef = function () {};
  this.Lerp = function () {};
  this.LerpToRef = function () {};
  this.DecomposeLerp = function () {};
  this.DecomposeLerpToRef = function () {};
  this.LookAtLH = function () {};
  this.LookAtLHToRef = function () {};
  this.LookAtRH = function () {};
  this.LookAtRHToRef = function () {};
  this.OrthoLH = function () {};
  this.OrthoLHToRef = function () {};
  this.OrthoOffCenterLH = function () {};
  this.OrthoOffCenterLHToRef = function () {};
  this.OrthoOffCenterRH = function () {};
  this.OrthoOffCenterRHToRef = function () {};
  this.PerspectiveLH = function () {};
  this.PerspectiveFovLH = function () {};
  this.PerspectiveFovLHToRef = function () {};
  this.PerspectiveFovReverseLHToRef = function () {};
  this.PerspectiveFovRH = function () {};
  this.PerspectiveFovRHToRef = function () {};
  this.PerspectiveFovReverseRHToRef = function () {};
  this.PerspectiveFovWebVRToRef = function () {};
  this.GetFinalMatrix = function () {};
  this.GetAsMatrix2x2 = function () {};
  this.GetAsMatrix3x3 = function () {};
  this.Transpose = function () {};
  this.TransposeToRef = function () {};
  this.Reflection = function () {};
  this.ReflectionToRef = function () {};
  this.FromXYZAxesToRef = function () {};
  this.FromQuaternionToRef = function () {};
};

/** @constructor */
BABYLON.TmpVectors = function () {
  this.Vector2 = {};
  this.Vector3 = {};
  this.Vector4 = {};
  this.Quaternion = {};
  this.Matrix = {};
};

/** @constructor */
BABYLON.Viewport = function () {
  // this.x = undefined;
  // this.y = undefined;
  // this.width = undefined;
  // this.height = undefined;
  this.toGlobal = function () {};
  this.toGlobalToRef = function () {};
  this.clone = function () {};
};

/** @constructor */
BABYLON.SphericalHarmonics = function () {
  this.preScaled = false;
  this.l00 = {};
  this.l1_1 = {};
  this.l10 = {};
  this.l11 = {};
  this.l2_2 = {};
  this.l2_1 = {};
  this.l20 = {};
  this.l21 = {};
  this.l22 = {};
  this.addLight = function () {};
  this.scaleInPlace = function () {};
  this.convertIncidentRadianceToIrradiance = function () {};
  this.convertIrradianceToLambertianRadiance = function () {};
  this.preScaleForRendering = function () {};
  this.FromArray = function () {};
  this.FromPolynomial = function () {};
};

/** @constructor */
BABYLON.SphericalPolynomial = function () {
  this.x = {};
  this.y = {};
  this.z = {};
  this.xx = {};
  this.yy = {};
  this.zz = {};
  this.xy = {};
  this.yz = {};
  this.zx = {};
  this.preScaledHarmonics = {};
  this.addAmbient = function () {};
  this.scaleInPlace = function () {};
  this.FromHarmonics = function () {};
  this.FromArray = function () {};
};

BABYLON.Orientation = {}

/** @constructor */
BABYLON.BezierCurve = function () {
  this.Interpolate = function () {};
};

/** @constructor */
BABYLON.Angle = function () {
  this.degrees = function () {};
  this.radians = function () {};
  this.BetweenTwoPoints = function () {};
  this.FromRadians = function () {};
  this.FromDegrees = function () {};
};

/** @constructor */
BABYLON.Arc2 = function () {
};

/** @constructor */
BABYLON.Path2 = function () {
  this.closed = false;
  this.addLineTo = function () {};
  this.addArcTo = function () {};
  this.close = function () {};
  this.length = function () {};
  this.getPoints = function () {};
  this.getPointAtLengthPosition = function () {};
  this.StartingAt = function () {};
};

/** @constructor */
BABYLON.Path3D = function () {
};

/** @constructor */
BABYLON.Curve3 = function () {
  this.CreateQuadraticBezier = function () {};
  this.CreateCubicBezier = function () {};
  this.CreateHermiteSpline = function () {};
  this.CreateCatmullRomSpline = function () {};
};

/** @constructor */
BABYLON.PositionNormalVertex = function () {
  this.position = {};
  this.normal = {};
  this.clone = function () {};
};

/** @constructor */
BABYLON.PositionNormalTextureVertex = function () {
  this.position = {};
  this.normal = {};
  this.uv = {};
  this.clone = function () {};
};

/** @constructor */
BABYLON.AbstractMesh = function () {
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.OCCLUSION_TYPE_NONE = 0;
  this.OCCLUSION_TYPE_OPTIMISTIC = 1;
  this.OCCLUSION_TYPE_STRICT = 2;
  this.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
  this.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
  this.CULLINGSTRATEGY_STANDARD = 0;
  this.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
  this.Parse = function () {};
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.Buffer = function () {
};

/** @constructor */
BABYLON.VertexBuffer = function () {
  this.DeduceStride = function () {};
  this.GetTypeByteLength = function () {};
  this.ForEach = function () {};
  this.BYTE = 5120;
  this.UNSIGNED_BYTE = 5121;
  this.SHORT = 5122;
  this.UNSIGNED_SHORT = 5123;
  this.INT = 5124;
  this.UNSIGNED_INT = 5125;
  this.FLOAT = 5126;
  this.PositionKind = "position";
  this.NormalKind = "normal";
  this.TangentKind = "tangent";
  this.UVKind = "uv";
  this.UV2Kind = "uv2";
  this.UV3Kind = "uv3";
  this.UV4Kind = "uv4";
  this.UV5Kind = "uv5";
  this.UV6Kind = "uv6";
  this.ColorKind = "color";
  this.MatricesIndicesKind = "matricesIndices";
  this.MatricesWeightsKind = "matricesWeights";
  this.MatricesIndicesExtraKind = "matricesIndicesExtra";
  this.MatricesWeightsExtraKind = "matricesWeightsExtra";
};

/** @constructor */
BABYLON.CSG = function () {
  this.polygons = {};
  this.clone = function () {};
  this.union = function () {};
  this.unionInPlace = function () {};
  this.subtract = function () {};
  this.subtractInPlace = function () {};
  this.intersect = function () {};
  this.intersectInPlace = function () {};
  this.inverse = function () {};
  this.inverseInPlace = function () {};
  this.copyTransformAttributes = function () {};
  this.buildMeshGeometry = function () {};
  this.toMesh = function () {};
  this.FromMesh = function () {};
  this.FromPolygons = function () {};
};

/** @constructor */
BABYLON.Geometry = function () {
  this.CreateGeometryForMesh = function () {};
  this.ExtractFromMesh = function () {};
  this.RandomId = function () {};
  this.Parse = function () {};
};

/** @constructor */
BABYLON.GroundMesh = function () {
  this.Parse = function () {};
  this.CreateRibbon = function () {};
  this.CreateDisc = function () {};
  this.CreateBox = function () {};
  this.CreateSphere = function () {};
  this.CreateHemisphere = function () {};
  this.CreateCylinder = function () {};
  this.CreateTorus = function () {};
  this.CreateTorusKnot = function () {};
  this.CreateLines = function () {};
  this.CreateDashedLines = function () {};
  this.CreatePolygon = function () {};
  this.ExtrudePolygon = function () {};
  this.ExtrudeShape = function () {};
  this.ExtrudeShapeCustom = function () {};
  this.CreateLathe = function () {};
  this.CreatePlane = function () {};
  this.CreateGround = function () {};
  this.CreateTiledGround = function () {};
  this.CreateGroundFromHeightMap = function () {};
  this.CreateTube = function () {};
  this.CreatePolyhedron = function () {};
  this.CreateIcoSphere = function () {};
  this.CreateDecal = function () {};
  this.MinMax = function () {};
  this.Center = function () {};
  this.MergeMeshes = function () {};
  this.FRONTSIDE = 0;
  this.BACKSIDE = 1;
  this.DOUBLESIDE = 2;
  this.DEFAULTSIDE = 0;
  this.NO_CAP = 0;
  this.CAP_START = 1;
  this.CAP_END = 2;
  this.CAP_ALL = 3;
  this.NO_FLIP = 0;
  this.FLIP_TILE = 1;
  this.ROTATE_TILE = 2;
  this.FLIP_ROW = 3;
  this.ROTATE_ROW = 4;
  this.FLIP_N_ROTATE_TILE = 5;
  this.FLIP_N_ROTATE_ROW = 6;
  this.CENTER = 0;
  this.LEFT = 1;
  this.RIGHT = 2;
  this.TOP = 3;
  this.BOTTOM = 4;
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.OCCLUSION_TYPE_NONE = 0;
  this.OCCLUSION_TYPE_OPTIMISTIC = 1;
  this.OCCLUSION_TYPE_STRICT = 2;
  this.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
  this.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
  this.CULLINGSTRATEGY_STANDARD = 0;
  this.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.TrailMesh = function () {
  this.Parse = function () {};
  this.CreateRibbon = function () {};
  this.CreateDisc = function () {};
  this.CreateBox = function () {};
  this.CreateSphere = function () {};
  this.CreateHemisphere = function () {};
  this.CreateCylinder = function () {};
  this.CreateTorus = function () {};
  this.CreateTorusKnot = function () {};
  this.CreateLines = function () {};
  this.CreateDashedLines = function () {};
  this.CreatePolygon = function () {};
  this.ExtrudePolygon = function () {};
  this.ExtrudeShape = function () {};
  this.ExtrudeShapeCustom = function () {};
  this.CreateLathe = function () {};
  this.CreatePlane = function () {};
  this.CreateGround = function () {};
  this.CreateTiledGround = function () {};
  this.CreateGroundFromHeightMap = function () {};
  this.CreateTube = function () {};
  this.CreatePolyhedron = function () {};
  this.CreateIcoSphere = function () {};
  this.CreateDecal = function () {};
  this.MinMax = function () {};
  this.Center = function () {};
  this.MergeMeshes = function () {};
  this.FRONTSIDE = 0;
  this.BACKSIDE = 1;
  this.DOUBLESIDE = 2;
  this.DEFAULTSIDE = 0;
  this.NO_CAP = 0;
  this.CAP_START = 1;
  this.CAP_END = 2;
  this.CAP_ALL = 3;
  this.NO_FLIP = 0;
  this.FLIP_TILE = 1;
  this.ROTATE_TILE = 2;
  this.FLIP_ROW = 3;
  this.ROTATE_ROW = 4;
  this.FLIP_N_ROTATE_TILE = 5;
  this.FLIP_N_ROTATE_ROW = 6;
  this.CENTER = 0;
  this.LEFT = 1;
  this.RIGHT = 2;
  this.TOP = 3;
  this.BOTTOM = 4;
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.OCCLUSION_TYPE_NONE = 0;
  this.OCCLUSION_TYPE_OPTIMISTIC = 1;
  this.OCCLUSION_TYPE_STRICT = 2;
  this.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
  this.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
  this.CULLINGSTRATEGY_STANDARD = 0;
  this.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.InstancedMesh = function () {
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.OCCLUSION_TYPE_NONE = 0;
  this.OCCLUSION_TYPE_OPTIMISTIC = 1;
  this.OCCLUSION_TYPE_STRICT = 2;
  this.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
  this.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
  this.CULLINGSTRATEGY_STANDARD = 0;
  this.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
  this.Parse = function () {};
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.LinesMesh = function () {
  this.Parse = function () {};
  this.CreateRibbon = function () {};
  this.CreateDisc = function () {};
  this.CreateBox = function () {};
  this.CreateSphere = function () {};
  this.CreateHemisphere = function () {};
  this.CreateCylinder = function () {};
  this.CreateTorus = function () {};
  this.CreateTorusKnot = function () {};
  this.CreateLines = function () {};
  this.CreateDashedLines = function () {};
  this.CreatePolygon = function () {};
  this.ExtrudePolygon = function () {};
  this.ExtrudeShape = function () {};
  this.ExtrudeShapeCustom = function () {};
  this.CreateLathe = function () {};
  this.CreatePlane = function () {};
  this.CreateGround = function () {};
  this.CreateTiledGround = function () {};
  this.CreateGroundFromHeightMap = function () {};
  this.CreateTube = function () {};
  this.CreatePolyhedron = function () {};
  this.CreateIcoSphere = function () {};
  this.CreateDecal = function () {};
  this.MinMax = function () {};
  this.Center = function () {};
  this.MergeMeshes = function () {};
  this.FRONTSIDE = 0;
  this.BACKSIDE = 1;
  this.DOUBLESIDE = 2;
  this.DEFAULTSIDE = 0;
  this.NO_CAP = 0;
  this.CAP_START = 1;
  this.CAP_END = 2;
  this.CAP_ALL = 3;
  this.NO_FLIP = 0;
  this.FLIP_TILE = 1;
  this.ROTATE_TILE = 2;
  this.FLIP_ROW = 3;
  this.ROTATE_ROW = 4;
  this.FLIP_N_ROTATE_TILE = 5;
  this.FLIP_N_ROTATE_ROW = 6;
  this.CENTER = 0;
  this.LEFT = 1;
  this.RIGHT = 2;
  this.TOP = 3;
  this.BOTTOM = 4;
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.OCCLUSION_TYPE_NONE = 0;
  this.OCCLUSION_TYPE_OPTIMISTIC = 1;
  this.OCCLUSION_TYPE_STRICT = 2;
  this.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
  this.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
  this.CULLINGSTRATEGY_STANDARD = 0;
  this.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.InstancedLinesMesh = function () {
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.OCCLUSION_TYPE_NONE = 0;
  this.OCCLUSION_TYPE_OPTIMISTIC = 1;
  this.OCCLUSION_TYPE_STRICT = 2;
  this.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
  this.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
  this.CULLINGSTRATEGY_STANDARD = 0;
  this.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
  this.Parse = function () {};
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.Mesh = function () {
  this.Parse = function () {};
  this.CreateRibbon = function () {};
  this.CreateDisc = function () {};
  this.CreateBox = function () {};
  this.CreateSphere = function () {};
  this.CreateHemisphere = function () {};
  this.CreateCylinder = function () {};
  this.CreateTorus = function () {};
  this.CreateTorusKnot = function () {};
  this.CreateLines = function () {};
  this.CreateDashedLines = function () {};
  this.CreatePolygon = function () {};
  this.ExtrudePolygon = function () {};
  this.ExtrudeShape = function () {};
  this.ExtrudeShapeCustom = function () {};
  this.CreateLathe = function () {};
  this.CreatePlane = function () {};
  this.CreateGround = function () {};
  this.CreateTiledGround = function () {};
  this.CreateGroundFromHeightMap = function () {};
  this.CreateTube = function () {};
  this.CreatePolyhedron = function () {};
  this.CreateIcoSphere = function () {};
  this.CreateDecal = function () {};
  this.MinMax = function () {};
  this.Center = function () {};
  this.MergeMeshes = function () {};
  this.FRONTSIDE = 0;
  this.BACKSIDE = 1;
  this.DOUBLESIDE = 2;
  this.DEFAULTSIDE = 0;
  this.NO_CAP = 0;
  this.CAP_START = 1;
  this.CAP_END = 2;
  this.CAP_ALL = 3;
  this.NO_FLIP = 0;
  this.FLIP_TILE = 1;
  this.ROTATE_TILE = 2;
  this.FLIP_ROW = 3;
  this.ROTATE_ROW = 4;
  this.FLIP_N_ROTATE_TILE = 5;
  this.FLIP_N_ROTATE_ROW = 6;
  this.CENTER = 0;
  this.LEFT = 1;
  this.RIGHT = 2;
  this.TOP = 3;
  this.BOTTOM = 4;
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.OCCLUSION_TYPE_NONE = 0;
  this.OCCLUSION_TYPE_OPTIMISTIC = 1;
  this.OCCLUSION_TYPE_STRICT = 2;
  this.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
  this.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
  this.CULLINGSTRATEGY_STANDARD = 0;
  this.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
  this.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.VertexData = function () {
  this.set = function () {};
  this.applyToMesh = function () {};
  this.applyToGeometry = function () {};
  this.updateMesh = function () {};
  this.updateGeometry = function () {};
  this.transform = function () {};
  this.merge = function () {};
  this.serialize = function () {};
  this.ExtractFromMesh = function () {};
  this.ExtractFromGeometry = function () {};
  this.CreateRibbon = function () {};
  this.CreateBox = function () {};
  this.CreateTiledBox = function () {};
  this.CreateTiledPlane = function () {};
  this.CreateSphere = function () {};
  this.CreateCylinder = function () {};
  this.CreateTorus = function () {};
  this.CreateLineSystem = function () {};
  this.CreateDashedLines = function () {};
  this.CreateGround = function () {};
  this.CreateTiledGround = function () {};
  this.CreateGroundFromHeightMap = function () {};
  this.CreatePlane = function () {};
  this.CreateDisc = function () {};
  this.CreatePolygon = function () {};
  this.CreateIcoSphere = function () {};
  this.CreatePolyhedron = function () {};
  this.CreateTorusKnot = function () {};
  this.ComputeNormals = function () {};
  this.ImportVertexData = function () {};
  this.FRONTSIDE = 0;
  this.BACKSIDE = 1;
  this.DOUBLESIDE = 2;
  this.DEFAULTSIDE = 0;
};

/** @constructor */
BABYLON.MeshBuilder = function () {
  this.CreateBox = function () {};
  this.CreateTiledBox = function () {};
  this.CreateSphere = function () {};
  this.CreateDisc = function () {};
  this.CreateIcoSphere = function () {};
  this.CreateRibbon = function () {};
  this.CreateCylinder = function () {};
  this.CreateTorus = function () {};
  this.CreateTorusKnot = function () {};
  this.CreateLineSystem = function () {};
  this.CreateLines = function () {};
  this.CreateDashedLines = function () {};
  this.ExtrudeShape = function () {};
  this.ExtrudeShapeCustom = function () {};
  this.CreateLathe = function () {};
  this.CreateTiledPlane = function () {};
  this.CreatePlane = function () {};
  this.CreateGround = function () {};
  this.CreateTiledGround = function () {};
  this.CreateGroundFromHeightMap = function () {};
  this.CreatePolygon = function () {};
  this.ExtrudePolygon = function () {};
  this.CreateTube = function () {};
  this.CreatePolyhedron = function () {};
  this.CreateDecal = function () {};
};

/** @constructor */
BABYLON.SimplificationSettings = function () {
  // this.quality = undefined;
  // this.distance = undefined;
  // this.optimizeMesh = undefined;
};

/** @constructor */
BABYLON.SimplificationQueue = function () {
  this.running = false;
  this.addTask = function () {};
  this.executeNext = function () {};
  this.runSimplification = function () {};
  this.getSimplifier = function () {};
};

BABYLON.SimplificationType = {}

/** @constructor */
BABYLON.SimplicationQueueSceneComponent = function () {
  this.name = "SimplificationQueue";
  // this.scene = undefined;
  this.register = function () {};
  this.rebuild = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.Polygon = function () {
  this.Rectangle = function () {};
  this.Circle = function () {};
  this.Parse = function () {};
  this.StartingAt = function () {};
};

/** @constructor */
BABYLON.PolygonMeshBuilder = function () {
};

/** @constructor */
BABYLON.BaseSubMesh = function () {
  this.materialDefines = null;
  this.effect = null;
  this.setEffect = function () {};
};

/** @constructor */
BABYLON.SubMesh = function () {
  this.AddToMesh = function () {};
  this.CreateFromIndices = function () {};
};

/** @constructor */
BABYLON.MeshLODLevel = function () {
  // this.distance = undefined;
  // this.mesh = undefined;
};

/** @constructor */
BABYLON.TransformNode = function () {
  this.Parse = function () {};
  this.BILLBOARDMODE_NONE = 0;
  this.BILLBOARDMODE_X = 1;
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_Z = 4;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_USE_POSITION = 128;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.BoxBuilder = function () {
  this.CreateBox = function () {};
};

/** @constructor */
BABYLON.SphereBuilder = function () {
  this.CreateSphere = function () {};
};

/** @constructor */
BABYLON.CylinderBuilder = function () {
  this.CreateCylinder = function () {};
};

/** @constructor */
BABYLON.TorusBuilder = function () {
  this.CreateTorus = function () {};
};

/** @constructor */
BABYLON.LinesBuilder = function () {
  this.CreateLineSystem = function () {};
  this.CreateLines = function () {};
  this.CreateDashedLines = function () {};
};

/** @constructor */
BABYLON.PlaneBuilder = function () {
  this.CreatePlane = function () {};
};

/** @constructor */
BABYLON.GroundBuilder = function () {
  this.CreateGround = function () {};
  this.CreateTiledGround = function () {};
  this.CreateGroundFromHeightMap = function () {};
};

/** @constructor */
BABYLON.DataBuffer = function () {
  this.references = 0;
  this.capacity = 0;
  this.is32Bits = false;
  this.underlyingResource = null;
};

/** @constructor */
BABYLON.WebGLDataBuffer = function () {
  this.references = 0;
  this.capacity = 0;
  this.is32Bits = false;
  this.constructor = function () {};
  // this.underlyingResource = undefined;
};

/** @constructor */
BABYLON.DracoCompression = function () {
  this.dispose = function () {};
  this.whenReadyAsync = function () {};
  this.decodeMeshAsync = function () {};
  this.DecoderAvailable = true;
  this.GetDefaultNumWorkers = function () {};
  this.Default = {};
  this.Configuration = {};
  this.DefaultNumWorkers = 4;
};

/** @constructor */
BABYLON.TiledBoxBuilder = function () {
  this.CreateTiledBox = function () {};
};

/** @constructor */
BABYLON.DiscBuilder = function () {
  this.CreateDisc = function () {};
};

/** @constructor */
BABYLON.RibbonBuilder = function () {
  this.CreateRibbon = function () {};
};

/** @constructor */
BABYLON.HemisphereBuilder = function () {
  this.CreateHemisphere = function () {};
};

/** @constructor */
BABYLON.TorusKnotBuilder = function () {
  this.CreateTorusKnot = function () {};
};

/** @constructor */
BABYLON.PolygonBuilder = function () {
  this.CreatePolygon = function () {};
  this.ExtrudePolygon = function () {};
};

/** @constructor */
BABYLON.ShapeBuilder = function () {
  this.ExtrudeShape = function () {};
  this.ExtrudeShapeCustom = function () {};
};

/** @constructor */
BABYLON.LatheBuilder = function () {
  this.CreateLathe = function () {};
};

/** @constructor */
BABYLON.TiledPlaneBuilder = function () {
  this.CreateTiledPlane = function () {};
};

/** @constructor */
BABYLON.TubeBuilder = function () {
  this.CreateTube = function () {};
};

/** @constructor */
BABYLON.PolyhedronBuilder = function () {
  this.CreatePolyhedron = function () {};
};

/** @constructor */
BABYLON.IcoSphereBuilder = function () {
  this.CreateIcoSphere = function () {};
};

/** @constructor */
BABYLON.DecalBuilder = function () {
  this.CreateDecal = function () {};
};

/** @constructor */
BABYLON.MorphTarget = function () {
  // this.name = undefined;
  this.animations = {};
  this.onInfluenceChanged = {};
  this.influence = 0;
  this.animationPropertiesOverride = null;
  this.uniqueId = 0;
  this.hasPositions = false;
  this.hasNormals = false;
  this.hasTangents = false;
  this.hasUVs = false;
  this.setPositions = function () {};
  this.getPositions = function () {};
  this.setNormals = function () {};
  this.getNormals = function () {};
  this.setTangents = function () {};
  this.getTangents = function () {};
  this.setUVs = function () {};
  this.getUVs = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.getClassName = function () {};
  this.Parse = function () {};
  this.FromMesh = function () {};
};

/** @constructor */
BABYLON.MorphTargetManager = function () {
  this.enableNormalMorphing = true;
  this.enableTangentMorphing = true;
  this.enableUVMorphing = true;
  this.uniqueId = 0;
  this.vertexCount = 0;
  this.supportsNormals = false;
  this.supportsTangents = false;
  this.supportsUVs = false;
  this.numTargets = 0;
  this.numInfluencers = 0;
  // this.influences = undefined;
  this.getActiveTarget = function () {};
  this.getTarget = function () {};
  this.addTarget = function () {};
  this.removeTarget = function () {};
  this.clone = function () {};
  this.serialize = function () {};
  this.synchronize = function () {};
  this.Parse = function () {};
};

/** @constructor */
BABYLON.RecastJSPlugin = function () {
};

/** @constructor */
BABYLON.RecastJSCrowd = function () {
};

/** @constructor */
BABYLON.Node = function () {
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.Database = function () {
  this.IsUASupportingBlobStorage = true;
  this.IDBStorageEnabled = false;
};

/** @constructor */
BABYLON.BaseParticleSystem = function () {
  this.animations = {};
  this.renderingGroupId = 0;
  this.emitter = {};
  this.emitRate = 10;
  this.manualEmitCount = -1;
  this.updateSpeed = 0.01;
  this.targetStopDuration = 0;
  this.disposeOnStop = false;
  this.minEmitPower = 1;
  this.maxEmitPower = 1;
  this.minLifeTime = 1;
  this.maxLifeTime = 1;
  this.minSize = 1;
  this.maxSize = 1;
  this.minScaleX = 1;
  this.maxScaleX = 1;
  this.minScaleY = 1;
  this.maxScaleY = 1;
  this.minInitialRotation = 0;
  this.maxInitialRotation = 0;
  this.minAngularSpeed = 0;
  this.maxAngularSpeed = 0;
  this.layerMask = 268435455;
  this.customShader = null;
  this.preventAutoStart = false;
  this.noiseStrength = {};
  this.onAnimationEnd = null;
  this.blendMode = 0;
  this.forceDepthWrite = false;
  this.preWarmCycles = 0;
  this.preWarmStepOffset = 1;
  this.spriteCellChangeSpeed = 1;
  this.startSpriteCellID = 0;
  this.endSpriteCellID = 0;
  this.spriteCellWidth = 0;
  this.spriteCellHeight = 0;
  this.spriteRandomStartCell = false;
  this.translationPivot = {};
  this.beginAnimationOnStart = false;
  this.beginAnimationFrom = 0;
  this.beginAnimationTo = 60;
  this.beginAnimationLoop = false;
  this.worldOffset = {};
  this.gravity = {};
  this.startDelay = 0;
  this.limitVelocityDamping = 0.4;
  this.color1 = {};
  this.color2 = {};
  this.colorDead = {};
  this.textureMask = {};
  this.billboardMode = 7;
  // this.id = undefined;
  // this.name = undefined;
  // this.noiseTexture = undefined;
  // this.isAnimationSheetEnabled = undefined;
  this.getScene = function () {};
  this.getDragGradients = function () {};
  this.getLimitVelocityGradients = function () {};
  this.getColorGradients = function () {};
  this.getSizeGradients = function () {};
  this.getColorRemapGradients = function () {};
  this.getAlphaRemapGradients = function () {};
  this.getLifeTimeGradients = function () {};
  this.getAngularSpeedGradients = function () {};
  this.getVelocityGradients = function () {};
  this.getStartSizeGradients = function () {};
  this.getEmitRateGradients = function () {};
  this.BLENDMODE_ONEONE = 0;
  this.BLENDMODE_STANDARD = 1;
  this.BLENDMODE_ADD = 2;
  this.BLENDMODE_MULTIPLY = 3;
  this.BLENDMODE_MULTIPLYADD = 4;
};

/** @constructor */
BABYLON.GPUParticleSystem = function () {
  this.IsSupported = false;
  this.Parse = function () {};
  this.BLENDMODE_ONEONE = 0;
  this.BLENDMODE_STANDARD = 1;
  this.BLENDMODE_ADD = 2;
  this.BLENDMODE_MULTIPLY = 3;
  this.BLENDMODE_MULTIPLYADD = 4;
};

/** @constructor */
BABYLON.Particle = function () {
};

/** @constructor */
BABYLON.ParticleHelper = function () {
  this.CreateDefault = function () {};
  this.CreateAsync = function () {};
  this.ExportSet = function () {};
  this.BaseAssetsUrl = "https://assets.babylonjs.com/particles";
};

/** @constructor */
BABYLON.ParticleSystem = function () {
  this.Parse = function () {};
  this.BILLBOARDMODE_Y = 2;
  this.BILLBOARDMODE_ALL = 7;
  this.BILLBOARDMODE_STRETCHED = 8;
  this.BLENDMODE_ONEONE = 0;
  this.BLENDMODE_STANDARD = 1;
  this.BLENDMODE_ADD = 2;
  this.BLENDMODE_MULTIPLY = 3;
  this.BLENDMODE_MULTIPLYADD = 4;
};

/** @constructor */
BABYLON.ParticleSystemSet = function () {
  this.systems = {};
  // this.emitterNode = undefined;
  this.setEmitterAsSphere = function () {};
  this.start = function () {};
  this.dispose = function () {};
  this.serialize = function () {};
  this.Parse = function () {};
  this.BaseAssetsUrl = "https://assets.babylonjs.com/particles";
};

/** @constructor */
BABYLON.SolidParticle = function () {
  // this.idx = undefined;
  // this.id = undefined;
  this.color = {};
  this.position = {};
  this.rotation = {};
  this.scaling = {};
  this.uvs = {};
  this.velocity = {};
  this.pivot = {};
  this.translateFromPivot = false;
  this.alive = true;
  this.isVisible = true;
  // this.shapeId = undefined;
  // this.idxInShape = undefined;
  this.parentId = null;
  this.materialIndex = null;
  this.cullingStrategy = 1;
  this.copyToRef = function () {};
  this.scale = {};
  // this.quaternion = undefined;
  this.intersectsMesh = function () {};
  this.isInFrustum = function () {};
  this.getRotationMatrix = function () {};
};

/** @constructor */
BABYLON.ModelShape = function () {
};

/** @constructor */
BABYLON.DepthSortedParticle = function () {
  // this.ind = undefined;
  // this.indicesLength = undefined;
  this.sqDistance = 0;
  // this.materialIndex = undefined;
};

/** @constructor */
BABYLON.SolidParticleSystem = function () {
};

/** @constructor */
BABYLON.CloudPoint = function () {
  // this.idx = undefined;
  this.color = {};
  this.position = {};
  this.rotation = {};
  this.uv = {};
  this.velocity = {};
  this.pivot = {};
  this.translateFromPivot = false;
  // this.groupId = undefined;
  // this.idxInGroup = undefined;
  this.parentId = null;
};

/** @constructor */
BABYLON.PointsGroup = function () {
  // this.groupID = undefined;
};

BABYLON.PointColor = {}

/** @constructor */
BABYLON.PointsCloudSystem = function () {
  this.particles = {};
  this.nbParticles = 0;
  this.counter = 0;
  this.vars = {};
  // this.name = undefined;
  this.buildMeshAsync = function () {};
  this.addPoints = function () {};
  this.addSurfacePoints = function () {};
  this.addVolumePoints = function () {};
  this.setParticles = function () {};
  this.dispose = function () {};
  this.refreshVisibleSize = function () {};
  this.setVisibilityBox = function () {};
  this.isAlwaysVisible = false;
  // this.computeParticleRotation = undefined;
  this.computeParticleColor = true;
  this.computeParticleTexture = true;
  this.computeBoundingBox = false;
  this.initParticles = function () {};
  this.recycleParticle = function () {};
  this.updateParticle = function () {};
  this.beforeUpdateParticles = function () {};
  this.afterUpdateParticles = function () {};
};

BABYLON.SubEmitterType = {}

/** @constructor */
BABYLON.SubEmitter = function () {
  this.Parse = function () {};
};

/** @constructor */
BABYLON.BoxParticleEmitter = function () {
  this.direction1 = {};
  this.direction2 = {};
  this.minEmitBox = {};
  this.maxEmitBox = {};
  this.startDirectionFunction = function () {};
  this.startPositionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.ConeParticleEmitter = function () {
  this.directionRandomizer = 0;
  this.radiusRange = 1;
  this.heightRange = 1;
  this.emitFromSpawnPointOnly = false;
  this.radius = 1;
  this.angle = 3.141592653589793;
  this.startDirectionFunction = function () {};
  this.startPositionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.CylinderParticleEmitter = function () {
  this.radius = 1;
  this.height = 1;
  this.radiusRange = 1;
  this.directionRandomizer = 0;
  this.startDirectionFunction = function () {};
  this.startPositionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.CylinderDirectedParticleEmitter = function () {
  this.radius = 1;
  this.height = 1;
  this.radiusRange = 1;
  this.directionRandomizer = 0;
  this.direction1 = {};
  this.direction2 = {};
  this.constructor = function () {};
  this.startDirectionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
  this.startPositionFunction = function () {};
};

/** @constructor */
BABYLON.HemisphericParticleEmitter = function () {
  this.radius = 1;
  this.radiusRange = 1;
  this.directionRandomizer = 0;
  this.startDirectionFunction = function () {};
  this.startPositionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.PointParticleEmitter = function () {
  this.direction1 = {};
  this.direction2 = {};
  this.startDirectionFunction = function () {};
  this.startPositionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.SphereParticleEmitter = function () {
  this.radius = 1;
  this.radiusRange = 1;
  this.directionRandomizer = 0;
  this.startDirectionFunction = function () {};
  this.startPositionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.SphereDirectedParticleEmitter = function () {
  this.radius = 1;
  this.radiusRange = 1;
  this.directionRandomizer = 0;
  this.direction1 = {};
  this.direction2 = {};
  this.constructor = function () {};
  this.startDirectionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
  this.startPositionFunction = function () {};
};

/** @constructor */
BABYLON.CustomParticleEmitter = function () {
  this.particlePositionGenerator = function () {};
  this.particleDestinationGenerator = function () {};
  this.startDirectionFunction = function () {};
  this.startPositionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.MeshParticleEmitter = function () {
  // this.mesh = undefined;
  this.direction1 = {};
  this.direction2 = {};
  this.useMeshNormalsForDirection = true;
  this.startDirectionFunction = function () {};
  this.startPositionFunction = function () {};
  this.clone = function () {};
  this.applyToShader = function () {};
  this.getEffectDefines = function () {};
  this.getClassName = function () {};
  this.serialize = function () {};
  this.parse = function () {};
};

/** @constructor */
BABYLON.PhysicsEngine = function () {
  this.DefaultPluginFactory = function () {};
  this.Epsilon = 0.001;
};

/** @constructor */
BABYLON.PhysicsEngineSceneComponent = function () {
};

/** @constructor */
BABYLON.PhysicsHelper = function () {
};

/** @constructor */
BABYLON.PhysicsRadialExplosionEventOptions = function () {
  this.radius = 5;
  this.strength = 10;
  this.falloff = 0;
  this.sphere = {};
};

/** @constructor */
BABYLON.PhysicsUpdraftEventOptions = function () {
  this.radius = 5;
  this.strength = 10;
  this.height = 10;
  this.updraftMode = 0;
};

/** @constructor */
BABYLON.PhysicsVortexEventOptions = function () {
  this.radius = 5;
  this.strength = 10;
  this.height = 10;
  this.centripetalForceThreshold = 0.7;
  this.centripetalForceMultiplier = 5;
  this.centrifugalForceMultiplier = 0.5;
  this.updraftForceMultiplier = 0.02;
};

BABYLON.PhysicsRadialImpulseFalloff = {}

BABYLON.PhysicsUpdraftMode = {}

/** @constructor */
BABYLON.PhysicsImpostor = function () {
  // this.object = undefined;
  // this.type = undefined;
  this.soft = false;
  this.segments = 0;
  this.beforeStep = function () {};
  this.afterStep = function () {};
  this.onCollideEvent = null;
  this.onCollide = function () {};
  this.isDisposed = false;
  this.mass = 0;
  this.friction = 0;
  this.restitution = 0;
  this.pressure = 0;
  this.stiffness = 0;
  this.velocityIterations = 0;
  this.positionIterations = 0;
  this.isBodyInitRequired = function () {};
  this.setScalingUpdated = function () {};
  this.forceUpdate = function () {};
  // this.physicsBody = undefined;
  this.parent = null;
  this.resetUpdateFlags = function () {};
  this.getObjectExtendSize = function () {};
  this.getObjectCenter = function () {};
  this.getParam = function () {};
  this.setParam = function () {};
  this.setMass = function () {};
  this.getLinearVelocity = function () {};
  this.setLinearVelocity = function () {};
  this.getAngularVelocity = function () {};
  this.setAngularVelocity = function () {};
  this.executeNativeFunction = function () {};
  this.registerBeforePhysicsStep = function () {};
  this.unregisterBeforePhysicsStep = function () {};
  this.registerAfterPhysicsStep = function () {};
  this.unregisterAfterPhysicsStep = function () {};
  this.registerOnPhysicsCollide = function () {};
  this.unregisterOnPhysicsCollide = function () {};
  this.getParentsRotation = function () {};
  this.applyForce = function () {};
  this.applyImpulse = function () {};
  this.createJoint = function () {};
  this.addJoint = function () {};
  this.addAnchor = function () {};
  this.addHook = function () {};
  this.sleep = function () {};
  this.wakeUp = function () {};
  this.clone = function () {};
  this.dispose = function () {};
  this.setDeltaPosition = function () {};
  this.setDeltaRotation = function () {};
  this.getBoxSizeToRef = function () {};
  this.getRadius = function () {};
  this.syncBoneWithImpostor = function () {};
  this.syncImpostorWithBone = function () {};
  this.DEFAULT_OBJECT_SIZE = {};
  this.IDENTITY_QUATERNION = {};
  this.NoImpostor = 0;
  this.SphereImpostor = 1;
  this.BoxImpostor = 2;
  this.PlaneImpostor = 3;
  this.MeshImpostor = 4;
  this.CapsuleImpostor = 6;
  this.CylinderImpostor = 7;
  this.ParticleImpostor = 8;
  this.HeightmapImpostor = 9;
  this.ConvexHullImpostor = 10;
  this.CustomImpostor = 100;
  this.RopeImpostor = 101;
  this.ClothImpostor = 102;
  this.SoftbodyImpostor = 103;
};

/** @constructor */
BABYLON.PhysicsJoint = function () {
  this.DistanceJoint = 0;
  this.HingeJoint = 1;
  this.BallAndSocketJoint = 2;
  this.WheelJoint = 3;
  this.SliderJoint = 4;
  this.PrismaticJoint = 5;
  this.UniversalJoint = 6;
  this.Hinge2Joint = 3;
  this.PointToPointJoint = 8;
  this.SpringJoint = 9;
  this.LockJoint = 10;
};

/** @constructor */
BABYLON.DistanceJoint = function () {
  this.DistanceJoint = 0;
  this.HingeJoint = 1;
  this.BallAndSocketJoint = 2;
  this.WheelJoint = 3;
  this.SliderJoint = 4;
  this.PrismaticJoint = 5;
  this.UniversalJoint = 6;
  this.Hinge2Joint = 3;
  this.PointToPointJoint = 8;
  this.SpringJoint = 9;
  this.LockJoint = 10;
};

/** @constructor */
BABYLON.MotorEnabledJoint = function () {
  this.DistanceJoint = 0;
  this.HingeJoint = 1;
  this.BallAndSocketJoint = 2;
  this.WheelJoint = 3;
  this.SliderJoint = 4;
  this.PrismaticJoint = 5;
  this.UniversalJoint = 6;
  this.Hinge2Joint = 3;
  this.PointToPointJoint = 8;
  this.SpringJoint = 9;
  this.LockJoint = 10;
};

/** @constructor */
BABYLON.HingeJoint = function () {
  this.DistanceJoint = 0;
  this.HingeJoint = 1;
  this.BallAndSocketJoint = 2;
  this.WheelJoint = 3;
  this.SliderJoint = 4;
  this.PrismaticJoint = 5;
  this.UniversalJoint = 6;
  this.Hinge2Joint = 3;
  this.PointToPointJoint = 8;
  this.SpringJoint = 9;
  this.LockJoint = 10;
};

/** @constructor */
BABYLON.Hinge2Joint = function () {
  this.DistanceJoint = 0;
  this.HingeJoint = 1;
  this.BallAndSocketJoint = 2;
  this.WheelJoint = 3;
  this.SliderJoint = 4;
  this.PrismaticJoint = 5;
  this.UniversalJoint = 6;
  this.Hinge2Joint = 3;
  this.PointToPointJoint = 8;
  this.SpringJoint = 9;
  this.LockJoint = 10;
};

/** @constructor */
BABYLON.CannonJSPlugin = function () {
};

/** @constructor */
BABYLON.AmmoJSPlugin = function () {
  this.DISABLE_COLLISION_FLAG = 4;
  this.KINEMATIC_FLAG = 2;
  this.DISABLE_DEACTIVATION_FLAG = 4;
};

/** @constructor */
BABYLON.OimoJSPlugin = function () {
};

/** @constructor */
BABYLON.AnaglyphPostProcess = function () {
};

/** @constructor */
BABYLON.BlackAndWhitePostProcess = function () {
};

/** @constructor */
BABYLON.BloomEffect = function () {
};

/** @constructor */
BABYLON.BloomMergePostProcess = function () {
};

/** @constructor */
BABYLON.BlurPostProcess = function () {
  // this.name = undefined;
  this.width = -1;
  this.height = -1;
  this.autoClear = true;
  this.alphaMode = 0;
  this.animations = {};
  this.enablePixelPerfectMode = false;
  this.forceFullscreenViewport = true;
  this.scaleMode = 1;
  this.alwaysForcePOT = false;
  this.adaptScaleToCurrentViewport = false;
  this.onActivateObservable = {};
  this.onSizeChangedObservable = {};
  this.onApplyObservable = {};
  this.onBeforeRenderObservable = {};
  this.onAfterRenderObservable = {};
  this.renderTargetSamplingMode = 2;
  // this.direction = undefined;
  this.blockCompilation = false;
  this.constructor = function () {};
  // this.kernel = undefined;
  this.packedFloat = false;
  this.updateEffect = function () {};
  this.samples = 1;
  this.getEffectName = function () {};
  // this.onActivate = undefined;
  // this.onSizeChanged = undefined;
  // this.onApply = undefined;
  // this.onBeforeRender = undefined;
  // this.onAfterRender = undefined;
  // this.inputTexture = undefined;
  this.getCamera = function () {};
  this.texelSize = {};
  this.getClassName = function () {};
  this.getEngine = function () {};
  this.getEffect = function () {};
  this.shareOutputWith = function () {};
  this.useOwnOutput = function () {};
  this.isReusable = function () {};
  this.markTextureDirty = function () {};
  this.activate = function () {};
};

/** @constructor */
BABYLON.ChromaticAberrationPostProcess = function () {
};

/** @constructor */
BABYLON.CircleOfConfusionPostProcess = function () {
};

/** @constructor */
BABYLON.ColorCorrectionPostProcess = function () {
};

/** @constructor */
BABYLON.ConvolutionPostProcess = function () {
  this.EdgeDetect0Kernel = {};
  this.EdgeDetect1Kernel = {};
  this.EdgeDetect2Kernel = {};
  this.SharpenKernel = {};
  this.EmbossKernel = {};
  this.GaussianKernel = {};
};

/** @constructor */
BABYLON.DepthOfFieldBlurPostProcess = function () {
  // this.name = undefined;
  this.width = -1;
  this.height = -1;
  this.autoClear = true;
  this.alphaMode = 0;
  this.animations = {};
  this.enablePixelPerfectMode = false;
  this.forceFullscreenViewport = true;
  this.scaleMode = 1;
  this.alwaysForcePOT = false;
  this.adaptScaleToCurrentViewport = false;
  this.onActivateObservable = {};
  this.onSizeChangedObservable = {};
  this.onApplyObservable = {};
  this.onBeforeRenderObservable = {};
  this.onAfterRenderObservable = {};
  this.renderTargetSamplingMode = 2;
  // this.direction = undefined;
  this.blockCompilation = false;
  this.constructor = function () {};
  // this.kernel = undefined;
  this.packedFloat = false;
  this.updateEffect = function () {};
  this.samples = 1;
  this.getEffectName = function () {};
  // this.onActivate = undefined;
  // this.onSizeChanged = undefined;
  // this.onApply = undefined;
  // this.onBeforeRender = undefined;
  // this.onAfterRender = undefined;
  // this.inputTexture = undefined;
  this.getCamera = function () {};
  this.texelSize = {};
  this.getClassName = function () {};
  this.getEngine = function () {};
  this.getEffect = function () {};
  this.shareOutputWith = function () {};
  this.useOwnOutput = function () {};
  this.isReusable = function () {};
  this.markTextureDirty = function () {};
  this.activate = function () {};
};

BABYLON.DepthOfFieldEffectBlurLevel = {}

/** @constructor */
BABYLON.DepthOfFieldEffect = function () {
};

/** @constructor */
BABYLON.DepthOfFieldMergePostProcessOptions = function () {
};

/** @constructor */
BABYLON.DepthOfFieldMergePostProcess = function () {
};

/** @constructor */
BABYLON.DisplayPassPostProcess = function () {
};

/** @constructor */
BABYLON.ExtractHighlightsPostProcess = function () {
};

/** @constructor */
BABYLON.FilterPostProcess = function () {
};

/** @constructor */
BABYLON.FxaaPostProcess = function () {
};

/** @constructor */
BABYLON.GrainPostProcess = function () {
};

/** @constructor */
BABYLON.HighlightsPostProcess = function () {
};

/** @constructor */
BABYLON.ImageProcessingPostProcess = function () {
};

/** @constructor */
BABYLON.MotionBlurPostProcess = function () {
};

/** @constructor */
BABYLON.PassPostProcess = function () {
};

/** @constructor */
BABYLON.PassCubePostProcess = function () {
};

/** @constructor */
BABYLON.PostProcess = function () {
};

/** @constructor */
BABYLON.PostProcessManager = function () {
  this.directRender = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.RefractionPostProcess = function () {
};

/** @constructor */
BABYLON.SharpenPostProcess = function () {
};

/** @constructor */
BABYLON.StereoscopicInterlacePostProcessI = function () {
};

/** @constructor */
BABYLON.StereoscopicInterlacePostProcess = function () {
};

BABYLON.TonemappingOperator = {}

/** @constructor */
BABYLON.TonemapPostProcess = function () {
};

/** @constructor */
BABYLON.VolumetricLightScatteringPostProcess = function () {
  this.CreateDefaultMesh = function () {};
};

/** @constructor */
BABYLON.VRDistortionCorrectionPostProcess = function () {
};

/** @constructor */
BABYLON.VRMultiviewToSingleviewPostProcess = function () {
};

/** @constructor */
BABYLON.ScreenSpaceReflectionPostProcess = function () {
};

/** @constructor */
BABYLON.PostProcessRenderEffect = function () {
  this.isSupported = true;
  this.getPostProcesses = function () {};
};

/** @constructor */
BABYLON.PostProcessRenderPipeline = function () {
  // this.engine = undefined;
  // this.name = undefined;
  this.cameras = {};
  this.getClassName = function () {};
  this.isSupported = true;
  this.addEffect = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.PostProcessRenderPipelineManager = function () {
  this.supportedPipelines = {};
  this.addPipeline = function () {};
  this.attachCamerasToRenderPipeline = function () {};
  this.detachCamerasFromRenderPipeline = function () {};
  this.enableEffectInPipeline = function () {};
  this.disableEffectInPipeline = function () {};
  this.update = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.PostProcessRenderPipelineManagerSceneComponent = function () {
  this.name = "PostProcessRenderPipelineManager";
  // this.scene = undefined;
  this.register = function () {};
  this.rebuild = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.DefaultRenderingPipeline = function () {
  this.Parse = function () {};
};

/** @constructor */
BABYLON.LensRenderingPipeline = function () {
};

/** @constructor */
BABYLON.SSAO2RenderingPipeline = function () {
  this.IsSupported = false;
  this.Parse = function () {};
};

/** @constructor */
BABYLON.SSAORenderingPipeline = function () {
};

/** @constructor */
BABYLON.StandardRenderingPipeline = function () {
  this.Parse = function () {};
  this.LuminanceSteps = 6;
};

/** @constructor */
BABYLON.ReflectionProbe = function () {
  this.Parse = function () {};
};

/** @constructor */
BABYLON.BoundingBoxRenderer = function () {
};

/** @constructor */
BABYLON.DepthRenderer = function () {
};

/** @constructor */
BABYLON.DepthRendererSceneComponent = function () {
  this.name = "DepthRenderer";
  // this.scene = undefined;
  this.register = function () {};
  this.rebuild = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.EdgesRenderer = function () {
};

/** @constructor */
BABYLON.LineEdgesRenderer = function () {
};

/** @constructor */
BABYLON.GeometryBufferRenderer = function () {
  this.POSITION_TEXTURE_TYPE = 1;
  this.VELOCITY_TEXTURE_TYPE = 2;
  this.REFLECTIVITY_TEXTURE_TYPE = 3;
};

/** @constructor */
BABYLON.GeometryBufferRendererSceneComponent = function () {
  this.name = "GeometryBufferRenderer";
  // this.scene = undefined;
  this.register = function () {};
  this.rebuild = function () {};
  this.dispose = function () {};
};

/** @constructor */
BABYLON.OutlineRenderer = function () {
};

/** @constructor */
BABYLON.RenderingGroup = function () {
  // this.index = undefined;
  // this.opaqueSortCompareFn = undefined;
  // this.alphaTestSortCompareFn = undefined;
  // this.transparentSortCompareFn = undefined;
  this.render = function () {};
  this.renderOpaqueSorted = function () {};
  this.renderAlphaTestSorted = function () {};
  this.renderTransparentSorted = function () {};
  this.prepare = function () {};
  this.dispose = function () {};
  this.dispatch = function () {};
  this.dispatchSprites = function () {};
  this.dispatchParticles = function () {};
  this.renderSorted = function () {};
  this.renderUnsorted = function () {};
  this.defaultTransparentSortCompare = function () {};
  this.backToFrontSortCompare = function () {};
  this.frontToBackSortCompare = function () {};
};

/** @constructor */
BABYLON.RenderingGroupInfo = function () {
};

/** @constructor */
BABYLON.RenderingManager = function () {
  this.render = function () {};
  this.reset = function () {};
  this.dispose = function () {};
  this.freeRenderingGroups = function () {};
  this.dispatchSprites = function () {};
  this.dispatchParticles = function () {};
  this.dispatch = function () {};
  this.setRenderingOrder = function () {};
  this.setRenderingAutoClearDepthStencil = function () {};
  this.getAutoClearDepthStencilSetup = function () {};
  this.MAX_RENDERINGGROUPS = 4;
  this.MIN_RENDERINGGROUPS = 0;
  this.AUTOCLEAR = true;
};

/** @constructor */
BABYLON.UtilityLayerRenderer = function () {
};

/** @constructor */
BABYLON.Scene = function () {
  this.rootNodes = {};
  this.cameras = {};
  this.lights = {};
  this.meshes = {};
  this.skeletons = {};
  this.particleSystems = {};
  this.animations = {};
  this.animationGroups = {};
  this.multiMaterials = {};
  this.materials = {};
  this.morphTargetManagers = {};
  this.geometries = {};
  this.transformNodes = {};
  this.actionManagers = {};
  this.textures = {};
  this.cameraToUseForPointers = null;
  this.autoClear = true;
  this.autoClearDepthAndStencil = true;
  this.clearColor = {};
  this.ambientColor = {};
  this.animationsEnabled = true;
  this.useConstantAnimationDeltaTime = false;
  this.constantlyUpdateMeshUnderPointer = false;
  this.hoverCursor = "pointer";
  this.defaultCursor = "";
  this.doNotHandleCursors = false;
  this.preventDefaultOnPointerDown = true;
  this.preventDefaultOnPointerUp = true;
  this.metadata = null;
  this.reservedDataStore = null;
  this.disableOfflineSupportExceptionRules = {};
  this.onDisposeObservable = {};
  this.onBeforeRenderObservable = {};
  this.onAfterRenderObservable = {};
  this.onAfterRenderCameraObservable = {};
  this.onBeforeAnimationsObservable = {};
  this.onAfterAnimationsObservable = {};
  this.onBeforeDrawPhaseObservable = {};
  this.onAfterDrawPhaseObservable = {};
  this.onReadyObservable = {};
  this.onBeforeCameraRenderObservable = {};
  this.onAfterCameraRenderObservable = {};
  this.onBeforeActiveMeshesEvaluationObservable = {};
  this.onAfterActiveMeshesEvaluationObservable = {};
  this.onBeforeParticlesRenderingObservable = {};
  this.onAfterParticlesRenderingObservable = {};
  this.onDataLoadedObservable = {};
  this.onNewCameraAddedObservable = {};
  this.onCameraRemovedObservable = {};
  this.onNewLightAddedObservable = {};
  this.onLightRemovedObservable = {};
  this.onNewGeometryAddedObservable = {};
  this.onGeometryRemovedObservable = {};
  this.onNewTransformNodeAddedObservable = {};
  this.onTransformNodeRemovedObservable = {};
  this.onNewMeshAddedObservable = {};
  this.onMeshRemovedObservable = {};
  this.onNewSkeletonAddedObservable = {};
  this.onSkeletonRemovedObservable = {};
  this.onNewMaterialAddedObservable = {};
  this.onMaterialRemovedObservable = {};
  this.onNewTextureAddedObservable = {};
  this.onTextureRemovedObservable = {};
  this.onBeforeRenderTargetsRenderObservable = {};
  this.onAfterRenderTargetsRenderObservable = {};
  this.onBeforeStepObservable = {};
  this.onAfterStepObservable = {};
  this.onActiveCameraChanged = {};
  this.onBeforeRenderingGroupObservable = {};
  this.onAfterRenderingGroupObservable = {};
  this.onMeshImportedObservable = {};
  this.onAnimationFileImportedObservable = {};
  this.onPrePointerObservable = {};
  this.onPointerObservable = {};
  this.onPreKeyboardObservable = {};
  this.onKeyboardObservable = {};
  this.fogColor = {};
  this.fogDensity = 0.1;
  this.fogStart = 0;
  this.fogEnd = 1000;
  this.activeCameras = {};
  this.particlesEnabled = true;
  this.spritesEnabled = true;
  this.lensFlaresEnabled = true;
  this.collisionsEnabled = true;
  this.gravity = {};
  this.postProcessesEnabled = true;
  this.postProcesses = {};
  this.renderTargetsEnabled = true;
  this.dumpNextRenderTargets = false;
  this.customRenderTargets = {};
  this.importedMeshesFiles = {};
  this.probesEnabled = true;
  this.proceduralTexturesEnabled = true;
  this.animationTimeScale = 1;
  this.dispatchAllSubMeshesOfActiveMeshes = false;
  this.requireLightSorting = false;
  this.geometriesByUniqueId = {};
  this.getDeterministicFrameTime = function () {};
  this.postProcessManager = {};
  this.getActiveMeshCandidates = function () {};
  this.getActiveSubMeshCandidates = function () {};
  this.getIntersectingSubMeshCandidates = function () {};
  this.getCollidingSubMeshCandidates = function () {};
  this.useMaterialMeshMap = true;
  this.useClonedMeshMap = true;
  this.constructor = function () {};
  this.environmentTexture = null;
  this.environmentIntensity = 1;
  this.imageProcessingConfiguration = {};
  this.forceWireframe = false;
  this.skipFrustumClipping = false;
  this.forcePointsCloud = false;
  this.animationPropertiesOverride = null;
  // this.onDispose = undefined;
  // this.beforeRender = undefined;
  // this.afterRender = undefined;
  // this.beforeCameraRender = undefined;
  // this.afterCameraRender = undefined;
  this.unTranslatedPointer = {};
  this.useRightHandedSystem = false;
  this.setStepId = function () {};
  this.getStepId = function () {};
  this.getInternalStep = function () {};
  this.fogEnabled = true;
  this.fogMode = 0;
  this.shadowsEnabled = true;
  this.lightsEnabled = true;
  // this.activeCamera = undefined;
  this.defaultMaterial = {};
  this.texturesEnabled = true;
  this.skeletonsEnabled = true;
  this.collisionCoordinator = {};
  // this.frustumPlanes = undefined;
  this.getClassName = function () {};
  this.setDefaultCandidateProviders = function () {};
  // this.meshUnderPointer = undefined;
  this.pointerX = 0;
  this.pointerY = 0;
  this.getCachedMaterial = function () {};
  this.getCachedEffect = function () {};
  this.getCachedVisibility = function () {};
  this.isCachedMaterialInvalid = function () {};
  this.getEngine = function () {};
  this.getTotalVertices = function () {};
  this.totalVerticesPerfCounter = {};
  this.getActiveIndices = function () {};
  this.totalActiveIndicesPerfCounter = {};
  this.getActiveParticles = function () {};
  this.activeParticlesPerfCounter = {};
  this.getActiveBones = function () {};
  this.activeBonesPerfCounter = {};
  this.getActiveMeshes = function () {};
  this.getAnimationRatio = function () {};
  this.getRenderId = function () {};
  this.getFrameId = function () {};
  this.incrementRenderId = function () {};
  this.simulatePointerMove = function () {};
  this.simulatePointerDown = function () {};
  this.simulatePointerUp = function () {};
  this.isPointerCaptured = function () {};
  this.attachControl = function () {};
  this.detachControl = function () {};
  this.isReady = function () {};
  this.resetCachedMaterial = function () {};
  this.registerBeforeRender = function () {};
  this.unregisterBeforeRender = function () {};
  this.registerAfterRender = function () {};
  this.unregisterAfterRender = function () {};
  this.executeOnceBeforeRender = function () {};
  this.getWaitingItemsCount = function () {};
  this.isLoading = false;
  this.executeWhenReady = function () {};
  this.whenReadyAsync = function () {};
  this.animatables = {};
  this.resetLastAnimationTimeFrame = function () {};
  this.getViewMatrix = function () {};
  this.getProjectionMatrix = function () {};
  this.getTransformMatrix = function () {};
  this.setTransformMatrix = function () {};
  this.getSceneUniformBuffer = function () {};
  this.getUniqueId = function () {};
  this.addMesh = function () {};
  this.removeMesh = function () {};
  this.addTransformNode = function () {};
  this.removeTransformNode = function () {};
  this.removeSkeleton = function () {};
  this.removeMorphTargetManager = function () {};
  this.removeLight = function () {};
  this.removeCamera = function () {};
  this.removeParticleSystem = function () {};
  this.removeAnimation = function () {};
  this.stopAnimation = function () {};
  this.removeAnimationGroup = function () {};
  this.removeMultiMaterial = function () {};
  this.removeMaterial = function () {};
  this.removeActionManager = function () {};
  this.removeTexture = function () {};
  this.addLight = function () {};
  this.sortLightsByPriority = function () {};
  this.addCamera = function () {};
  this.addSkeleton = function () {};
  this.addParticleSystem = function () {};
  this.addAnimation = function () {};
  this.addAnimationGroup = function () {};
  this.addMultiMaterial = function () {};
  this.addMaterial = function () {};
  this.addMorphTargetManager = function () {};
  this.addGeometry = function () {};
  this.addActionManager = function () {};
  this.addTexture = function () {};
  this.switchActiveCamera = function () {};
  this.setActiveCameraByID = function () {};
  this.setActiveCameraByName = function () {};
  this.getAnimationGroupByName = function () {};
  this.getMaterialByUniqueID = function () {};
  this.getMaterialByID = function () {};
  this.getLastMaterialByID = function () {};
  this.getMaterialByName = function () {};
  this.getTextureByUniqueID = function () {};
  this.getCameraByID = function () {};
  this.getCameraByUniqueID = function () {};
  this.getCameraByName = function () {};
  this.getBoneByID = function () {};
  this.getBoneByName = function () {};
  this.getLightByName = function () {};
  this.getLightByID = function () {};
  this.getLightByUniqueID = function () {};
  this.getParticleSystemByID = function () {};
  this.getGeometryByID = function () {};
  this.pushGeometry = function () {};
  this.removeGeometry = function () {};
  this.getGeometries = function () {};
  this.getMeshByID = function () {};
  this.getMeshesByID = function () {};
  this.getTransformNodeByID = function () {};
  this.getTransformNodeByUniqueID = function () {};
  this.getTransformNodesByID = function () {};
  this.getMeshByUniqueID = function () {};
  this.getLastMeshByID = function () {};
  this.getLastEntryByID = function () {};
  this.getNodeByID = function () {};
  this.getNodeByName = function () {};
  this.getMeshByName = function () {};
  this.getTransformNodeByName = function () {};
  this.getLastSkeletonByID = function () {};
  this.getSkeletonByUniqueId = function () {};
  this.getSkeletonById = function () {};
  this.getSkeletonByName = function () {};
  this.getMorphTargetManagerById = function () {};
  this.getMorphTargetById = function () {};
  this.isActiveMesh = function () {};
  this.uid = "d76d2ddb-7343-4847-b2a7-a1a235d36994";
  this.addExternalData = function () {};
  this.getExternalData = function () {};
  this.getOrAddExternalDataWithFactory = function () {};
  this.removeExternalData = function () {};
  this.freeProcessedMaterials = function () {};
  this.blockfreeActiveMeshesAndRenderingGroups = false;
  this.freeActiveMeshes = function () {};
  this.freeRenderingGroups = function () {};
  this.freezeActiveMeshes = function () {};
  this.unfreezeActiveMeshes = function () {};
  this.updateTransformMatrix = function () {};
  this.animate = function () {};
  this.render = function () {};
  this.freezeMaterials = function () {};
  this.unfreezeMaterials = function () {};
  this.dispose = function () {};
  this.isDisposed = false;
  this.clearCachedVertexData = function () {};
  this.cleanCachedTextureBuffer = function () {};
  this.getWorldExtends = function () {};
  this.createPickingRay = function () {};
  this.createPickingRayToRef = function () {};
  this.createPickingRayInCameraSpace = function () {};
  this.createPickingRayInCameraSpaceToRef = function () {};
  this.pick = function () {};
  this.pickWithRay = function () {};
  this.multiPick = function () {};
  this.multiPickWithRay = function () {};
  this.setPointerOverMesh = function () {};
  this.getPointerOverMesh = function () {};
  this.getMeshesByTags = function () {};
  this.getCamerasByTags = function () {};
  this.getLightsByTags = function () {};
  this.getMaterialByTags = function () {};
  this.setRenderingOrder = function () {};
  this.setRenderingAutoClearDepthStencil = function () {};
  this.getAutoClearDepthStencilSetup = function () {};
  this.blockMaterialDirtyMechanism = false;
  this.markAllMaterialsAsDirty = function () {};
  this.beginWeightedAnimation = function () {};
  this.beginAnimation = function () {};
  this.beginHierarchyAnimation = function () {};
  this.beginDirectAnimation = function () {};
  this.beginDirectHierarchyAnimation = function () {};
  this.getAnimatableByTarget = function () {};
  this.getAllAnimatablesByTarget = function () {};
  this.stopAllAnimations = function () {};
  this.mainSoundTrack = {};
  this.getSoundByName = function () {};
  this.audioEnabled = true;
  this.headphone = false;
  this.audioListenerPositionProvider = null;
  this.audioPositioningRefreshRate = 500;
  this.gamepadManager = {};
  this.createOrUpdateSelectionOctree = function () {};
  // this.selectionOctree = undefined;
  this.debugLayer = {};
  this.createDefaultLight = function () {};
  this.createDefaultCamera = function () {};
  this.createDefaultCameraOrLight = function () {};
  this.createDefaultSkybox = function () {};
  this.createDefaultEnvironment = function () {};
  this.createDefaultVRExperience = function () {};
  this.createDefaultXRExperienceAsync = function () {};
  this.simplificationQueue = {};
  this.getPhysicsEngine = function () {};
  this.enablePhysics = function () {};
  this.disablePhysicsEngine = function () {};
  this.isPhysicsEnabled = function () {};
  this.deleteCompoundImpostor = function () {};
  // this.geometryBufferRenderer = undefined;
  this.enableGeometryBufferRenderer = function () {};
  this.disableGeometryBufferRenderer = function () {};
  this.postProcessRenderPipelineManager = {};
  this.forceShowBoundingBoxes = false;
  this.getBoundingBoxRenderer = function () {};
  this.enableDepthRenderer = function () {};
  this.disableDepthRenderer = function () {};
  this.getOutlineRenderer = function () {};
  this.pickSprite = function () {};
  this.pickSpriteWithRay = function () {};
  this.multiPickSprite = function () {};
  this.multiPickSpriteWithRay = function () {};
  this.setPointerOverSprite = function () {};
  this.getPointerOverSprite = function () {};
  this.getNodes = function () {};
  this.removeEffectLayer = function () {};
  this.addEffectLayer = function () {};
  this.getGlowLayerByName = function () {};
  this.getHighlightLayerByName = function () {};
  this.getLensFlareSystemByName = function () {};
  this.getLensFlareSystemByID = function () {};
  this.removeLensFlareSystem = function () {};
  this.addLensFlareSystem = function () {};
  this.removeReflectionProbe = function () {};
  this.addReflectionProbe = function () {};
  this.DefaultMaterialFactory = function () {};
  this.CollisionCoordinatorFactory = function () {};
  this.DragMovementThreshold = 10;
  this.LongPressDelay = 500;
  this.DoubleClickDelay = 300;
  this.ExclusiveDoubleClickMode = false;
  this.FOGMODE_NONE = 0;
  this.FOGMODE_EXP = 1;
  this.FOGMODE_EXP2 = 2;
  this.FOGMODE_LINEAR = 3;
  this.MinDeltaTime = 1;
  this.MaxDeltaTime = 1000;
  this.AddParser = function () {};
  this.GetParser = function () {};
  this.AddIndividualParser = function () {};
  this.GetIndividualParser = function () {};
  this.Parse = function () {};
};

/** @constructor */
BABYLON.SceneComponentConstants = function () {
  this.NAME_EFFECTLAYER = "EffectLayer";
  this.NAME_LAYER = "Layer";
  this.NAME_LENSFLARESYSTEM = "LensFlareSystem";
  this.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer";
  this.NAME_PARTICLESYSTEM = "ParticleSystem";
  this.NAME_GAMEPAD = "Gamepad";
  this.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue";
  this.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer";
  this.NAME_DEPTHRENDERER = "DepthRenderer";
  this.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager";
  this.NAME_SPRITE = "Sprite";
  this.NAME_OUTLINERENDERER = "Outline";
  this.NAME_PROCEDURALTEXTURE = "ProceduralTexture";
  this.NAME_SHADOWGENERATOR = "ShadowGenerator";
  this.NAME_OCTREE = "Octree";
  this.NAME_PHYSICSENGINE = "PhysicsEngine";
  this.NAME_AUDIO = "Audio";
  this.STEP_ISREADYFORMESH_EFFECTLAYER = 0;
  this.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0;
  this.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0;
  this.STEP_ACTIVEMESH_BOUNDINGBOXRENDERER = 0;
  this.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1;
  this.STEP_BEFORECAMERADRAW_EFFECTLAYER = 0;
  this.STEP_BEFORECAMERADRAW_LAYER = 1;
  this.STEP_BEFORERENDERTARGETDRAW_LAYER = 0;
  this.STEP_BEFORERENDERINGMESH_OUTLINE = 0;
  this.STEP_AFTERRENDERINGMESH_OUTLINE = 0;
  this.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0;
  this.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1;
  this.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0;
  this.STEP_BEFORECAMERAUPDATE_GAMEPAD = 1;
  this.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0;
  this.STEP_AFTERRENDERTARGETDRAW_LAYER = 0;
  this.STEP_AFTERCAMERADRAW_EFFECTLAYER = 0;
  this.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 1;
  this.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 2;
  this.STEP_AFTERCAMERADRAW_LAYER = 3;
  this.STEP_AFTERRENDER_AUDIO = 0;
  this.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0;
  this.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1;
  this.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2;
  this.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3;
  this.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0;
  this.STEP_POINTERMOVE_SPRITE = 0;
  this.STEP_POINTERDOWN_SPRITE = 0;
  this.STEP_POINTERUP_SPRITE = 0;
};

/** @constructor */
BABYLON.Stage = function () {
  this.Create = function () {};
};

/** @constructor */
BABYLON.Sprite = function () {
};

/** @constructor */
BABYLON.SpriteManager = function () {
};

/** @constructor */
BABYLON.SpriteMap = function () {
};

/** @constructor */
BABYLON.SpritePackedManager = function () {
};

/** @constructor */
BABYLON.SpriteSceneComponent = function () {
};

/** @constructor */
BABYLON.AlphaState = function () {
  this.isDirty = true;
  this.alphaBlend = false;
  this.setAlphaBlendConstants = function () {};
  this.setAlphaBlendFunctionParameters = function () {};
  this.setAlphaEquationParameters = function () {};
  this.reset = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.DepthCullingState = function () {
  this.isDirty = true;
  this.zOffset = 0;
  this.cullFace = null;
  this.cull = null;
  this.depthFunc = null;
  this.depthMask = true;
  this.depthTest = true;
  this.frontFace = null;
  this.reset = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.StencilState = function () {
  this.isDirty = true;
  this.stencilFunc = 519;
  this.stencilFuncRef = 1;
  this.stencilFuncMask = 255;
  this.stencilOpStencilFail = 7680;
  this.stencilOpDepthFail = 7680;
  this.stencilOpStencilDepthPass = 7681;
  this.stencilMask = 255;
  this.stencilTest = false;
  this.reset = function () {};
  this.apply = function () {};
  this.ALWAYS = 519;
  this.KEEP = 7680;
  this.REPLACE = 7681;
};

/** @constructor */
BABYLON.AndOrNotEvaluator = function () {
  this.Eval = function () {};
};

BABYLON.AssetTaskState = {}

/** @constructor */
BABYLON.AbstractAssetTask = function () {
  // this.name = undefined;
  this.isCompleted = false;
  this.taskState = 0;
  // this.errorObject = undefined;
  this.run = function () {};
  this.runTask = function () {};
  this.reset = function () {};
  this.onErrorCallback = function () {};
  this.onDoneCallback = function () {};
};

/** @constructor */
BABYLON.AssetsProgressEvent = function () {
  // this.remainingCount = undefined;
  // this.totalCount = undefined;
  // this.task = undefined;
};

/** @constructor */
BABYLON.MeshAssetTask = function () {
  // this.name = undefined;
  // this.meshesNames = undefined;
  // this.rootUrl = undefined;
  // this.sceneFilename = undefined;
  this.constructor = function () {};
  this.runTask = function () {};
  this.isCompleted = false;
  this.taskState = 0;
  // this.errorObject = undefined;
  this.run = function () {};
  this.reset = function () {};
  this.onErrorCallback = function () {};
  this.onDoneCallback = function () {};
};

/** @constructor */
BABYLON.TextFileAssetTask = function () {
  // this.name = undefined;
  // this.url = undefined;
  this.constructor = function () {};
  this.runTask = function () {};
  this.isCompleted = false;
  this.taskState = 0;
  // this.errorObject = undefined;
  this.run = function () {};
  this.reset = function () {};
  this.onErrorCallback = function () {};
  this.onDoneCallback = function () {};
};

/** @constructor */
BABYLON.BinaryFileAssetTask = function () {
  // this.name = undefined;
  // this.url = undefined;
  this.constructor = function () {};
  this.runTask = function () {};
  this.isCompleted = false;
  this.taskState = 0;
  // this.errorObject = undefined;
  this.run = function () {};
  this.reset = function () {};
  this.onErrorCallback = function () {};
  this.onDoneCallback = function () {};
};

/** @constructor */
BABYLON.ImageAssetTask = function () {
  // this.name = undefined;
  // this.url = undefined;
  this.constructor = function () {};
  this.runTask = function () {};
  this.isCompleted = false;
  this.taskState = 0;
  // this.errorObject = undefined;
  this.run = function () {};
  this.reset = function () {};
  this.onErrorCallback = function () {};
  this.onDoneCallback = function () {};
};

/** @constructor */
BABYLON.TextureAssetTask = function () {
  // this.name = undefined;
  // this.url = undefined;
  // this.noMipmap = undefined;
  // this.invertY = undefined;
  this.samplingMode = 3;
  this.constructor = function () {};
  this.runTask = function () {};
  this.isCompleted = false;
  this.taskState = 0;
  // this.errorObject = undefined;
  this.run = function () {};
  this.reset = function () {};
  this.onErrorCallback = function () {};
  this.onDoneCallback = function () {};
};

/** @constructor */
BABYLON.CubeTextureAssetTask = function () {
  // this.name = undefined;
  // this.url = undefined;
  // this.extensions = undefined;
  // this.noMipmap = undefined;
  // this.files = undefined;
  this.constructor = function () {};
  this.runTask = function () {};
  this.isCompleted = false;
  this.taskState = 0;
  // this.errorObject = undefined;
  this.run = function () {};
  this.reset = function () {};
  this.onErrorCallback = function () {};
  this.onDoneCallback = function () {};
};

/** @constructor */
BABYLON.HDRCubeTextureAssetTask = function () {
  // this.name = undefined;
  // this.url = undefined;
  // this.size = undefined;
  this.noMipmap = false;
  this.generateHarmonics = true;
  this.gammaSpace = false;
  this.reserved = false;
  this.constructor = function () {};
  this.runTask = function () {};
  this.isCompleted = false;
  this.taskState = 0;
  // this.errorObject = undefined;
  this.run = function () {};
  this.reset = function () {};
  this.onErrorCallback = function () {};
  this.onDoneCallback = function () {};
};

/** @constructor */
BABYLON.EquiRectangularCubeTextureAssetTask = function () {
  // this.name = undefined;
  // this.url = undefined;
  // this.size = undefined;
  this.noMipmap = false;
  this.gammaSpace = true;
  this.constructor = function () {};
  this.runTask = function () {};
  this.isCompleted = false;
  this.taskState = 0;
  // this.errorObject = undefined;
  this.run = function () {};
  this.reset = function () {};
  this.onErrorCallback = function () {};
  this.onDoneCallback = function () {};
};

/** @constructor */
BABYLON.AssetsManager = function () {
  this.onTaskSuccessObservable = {};
  this.onTaskErrorObservable = {};
  this.onTasksDoneObservable = {};
  this.onProgressObservable = {};
  this.useDefaultLoadingScreen = true;
  this.autoHideLoadingUI = true;
  this.addMeshTask = function () {};
  this.addTextFileTask = function () {};
  this.addBinaryFileTask = function () {};
  this.addImageTask = function () {};
  this.addTextureTask = function () {};
  this.addCubeTextureTask = function () {};
  this.addHDRCubeTextureTask = function () {};
  this.addEquiRectangularCubeTextureAssetTask = function () {};
  this.removeTask = function () {};
  this.reset = function () {};
  this.load = function () {};
  this.loadAsync = function () {};
};

/** @constructor */
BABYLON.BasisTranscodeConfiguration = function () {
};

/** @constructor */
BABYLON.BasisTools = function () {
  this.GetInternalFormatFromBasisFormat = function () {};
  this.TranscodeAsync = function () {};
  this.LoadTextureFromTranscodeResult = function () {};
  this.JSModuleURL = "https://preview.babylonjs.com/basisTranscoder/basis_transcoder.js";
  this.WasmModuleURL = "https://preview.babylonjs.com/basisTranscoder/basis_transcoder.wasm";
};

/** @constructor */
BABYLON.DDSTools = function () {
  this.GetDDSInfo = function () {};
  this.UploadDDSLevels = function () {};
  this.StoreLODInAlphaChannel = false;
};

/** @constructor */
BABYLON.expandToProperty = function () {
};

/** @constructor */
BABYLON.serialize = function () {
};

/** @constructor */
BABYLON.serializeAsTexture = function () {
};

/** @constructor */
BABYLON.serializeAsColor3 = function () {
};

/** @constructor */
BABYLON.serializeAsFresnelParameters = function () {
};

/** @constructor */
BABYLON.serializeAsVector2 = function () {
};

/** @constructor */
BABYLON.serializeAsVector3 = function () {
};

/** @constructor */
BABYLON.serializeAsMeshReference = function () {
};

/** @constructor */
BABYLON.serializeAsColorCurves = function () {
};

/** @constructor */
BABYLON.serializeAsColor4 = function () {
};

/** @constructor */
BABYLON.serializeAsImageProcessingConfiguration = function () {
};

/** @constructor */
BABYLON.serializeAsQuaternion = function () {
};

/** @constructor */
BABYLON.serializeAsMatrix = function () {
};

/** @constructor */
BABYLON.serializeAsCameraReference = function () {
};

/** @constructor */
BABYLON.SerializationHelper = function () {
  this.AppendSerializedAnimations = function () {};
  this.Serialize = function () {};
  this.Parse = function () {};
  this.Clone = function () {};
  this.Instanciate = function () {};
};

/** @constructor */
BABYLON.Deferred = function () {
  this.promise = {};
  this.resolve = function () {};
  this.reject = function () {};
};

/** @constructor */
BABYLON.EnvironmentTextureTools = function () {
  this.GetEnvInfo = function () {};
  this.CreateEnvTextureAsync = function () {};
  this.CreateImageDataArrayBufferViews = function () {};
  this.UploadEnvLevelsAsync = function () {};
  this.UploadLevelsAsync = function () {};
  this.UploadEnvSpherical = function () {};
};

/** @constructor */
BABYLON.MeshExploder = function () {
};

/** @constructor */
BABYLON.FilesInput = function () {
  this.onProcessFileCallback = function () {};
  this.monitorElementForDragNDrop = function () {};
  this.dispose = function () {};
  this.renderFunction = function () {};
  this.drag = function () {};
  this.drop = function () {};
  this.loadFiles = function () {};
  this.reload = function () {};
  this.FilesToLoad = {};
};

/** @constructor */
BABYLON.KhronosTextureContainer = function () {
  this.IsValid = function () {};
  this.HEADER_LEN = 64;
  this.COMPRESSED_2D = 0;
  this.COMPRESSED_3D = 1;
  this.TEX_2D = 2;
  this.TEX_3D = 3;
};

/** @constructor */
BABYLON.EventState = function () {
  // this.mask = undefined;
  this.skipNextObservers = false;
  // this.target = undefined;
  // this.currentTarget = undefined;
  this.initalize = function () {};
};

/** @constructor */
BABYLON.Observer = function () {
  // this.callback = undefined;
  // this.mask = undefined;
  this.scope = null;
  this.unregisterOnNextCall = false;
};

/** @constructor */
BABYLON.MultiObserver = function () {
  this.dispose = function () {};
  this.Watch = function () {};
};

/** @constructor */
BABYLON.Observable = function () {
  this.observers = {};
  this.add = function () {};
  this.addOnce = function () {};
  this.remove = function () {};
  this.removeCallback = function () {};
  this.makeObserverTopPriority = function () {};
  this.makeObserverBottomPriority = function () {};
  this.notifyObservers = function () {};
  this.notifyObserversWithPromise = function () {};
  this.notifyObserver = function () {};
  this.hasObservers = function () {};
  this.clear = function () {};
  this.clone = function () {};
  this.hasSpecificMask = function () {};
};

/** @constructor */
BABYLON.PerformanceMonitor = function () {
  this.sampleFrame = function () {};
  this.averageFrameTime = 0;
  this.averageFrameTimeVariance = 0;
  this.instantaneousFrameTime = 0;
  this.averageFPS = Infinity;
  this.instantaneousFPS = 0;
  this.isSaturated = false;
  this.enable = function () {};
  this.disable = function () {};
  this.isEnabled = true;
  this.reset = function () {};
};

/** @constructor */
BABYLON.RollingAverage = function () {
  this.average = 0;
  this.variance = 0;
  this.add = function () {};
  this.history = function () {};
  this.isSaturated = function () {};
  this.reset = function () {};
};

/** @constructor */
BABYLON.PromisePolyfill = function () {
  this.Apply = function () {};
};

/** @constructor */
BABYLON.SceneOptimization = function () {
  this.priority = 0;
  this.getDescription = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.TextureOptimization = function () {
  this.priority = 0;
  this.maximumSize = 1024;
  this.step = 0.5;
  this.constructor = function () {};
  this.getDescription = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.HardwareScalingOptimization = function () {
  this.priority = 0;
  this.maximumScale = 2;
  this.step = 0.25;
  this.constructor = function () {};
  this.getDescription = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.ShadowsOptimization = function () {
  this.priority = 0;
  this.constructor = function () {};
  this.getDescription = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.PostProcessesOptimization = function () {
  this.priority = 0;
  this.constructor = function () {};
  this.getDescription = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.LensFlaresOptimization = function () {
  this.priority = 0;
  this.constructor = function () {};
  this.getDescription = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.CustomOptimization = function () {
  this.priority = 0;
  this.constructor = function () {};
  this.getDescription = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.ParticlesOptimization = function () {
  this.priority = 0;
  this.constructor = function () {};
  this.getDescription = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.RenderTargetsOptimization = function () {
  this.priority = 0;
  this.constructor = function () {};
  this.getDescription = function () {};
  this.apply = function () {};
};

/** @constructor */
BABYLON.MergeMeshesOptimization = function () {
  this.priority = 0;
  this.constructor = function () {};
  this.getDescription = function () {};
  this.apply = function () {};
  this.UpdateSelectionTree = false;
};

/** @constructor */
BABYLON.SceneOptimizerOptions = function () {
  this.targetFrameRate = 60;
  this.trackerDuration = 2000;
  this.optimizations = {};
  this.addOptimization = function () {};
  this.addCustomOptimization = function () {};
  this.LowDegradationAllowed = function () {};
  this.ModerateDegradationAllowed = function () {};
  this.HighDegradationAllowed = function () {};
};

/** @constructor */
BABYLON.SceneOptimizer = function () {
  this.onSuccessObservable = {};
  this.onNewOptimizationAppliedObservable = {};
  this.onFailureObservable = {};
  this.isInImprovementMode = false;
  this.currentPriorityLevel = 0;
  this.currentFrameRate = 0;
  this.targetFrameRate = 60;
  this.trackerDuration = 2000;
  this.optimizations = {};
  this.stop = function () {};
  this.reset = function () {};
  this.start = function () {};
  this.dispose = function () {};
  this.OptimizeAsync = function () {};
};

/** @constructor */
BABYLON.SceneSerializer = function () {
  this.ClearCache = function () {};
  this.Serialize = function () {};
  this.SerializeMesh = function () {};
};

/** @constructor */
BABYLON.SmartArray = function () {
  this.length = 0;
  this.data = {};
  this.push = function () {};
  this.forEach = function () {};
  this.sort = function () {};
  this.reset = function () {};
  this.dispose = function () {};
  this.concat = function () {};
  this.indexOf = function () {};
  this.contains = function () {};
};

/** @constructor */
BABYLON.SmartArrayNoDuplicate = function () {
  this.length = 0;
  this.data = {};
  this.constructor = function () {};
  this.push = function () {};
  this.pushNoDuplicate = function () {};
  this.reset = function () {};
  this.concatWithNoDuplicate = function () {};
  this.forEach = function () {};
  this.sort = function () {};
  this.dispose = function () {};
  this.concat = function () {};
  this.indexOf = function () {};
  this.contains = function () {};
};

/** @constructor */
BABYLON.StringDictionary = function () {
  this.copyFrom = function () {};
  this.get = function () {};
  this.getOrAddWithFactory = function () {};
  this.getOrAdd = function () {};
  this.contains = function () {};
  this.add = function () {};
  this.set = function () {};
  this.getAndRemove = function () {};
  this.remove = function () {};
  this.clear = function () {};
  this.count = 0;
  this.forEach = function () {};
  this.first = function () {};
};

/** @constructor */
BABYLON.Tags = function () {
  this.EnableFor = function () {};
  this.DisableFor = function () {};
  this.HasTags = function () {};
  this.GetTags = function () {};
  this.AddTagsTo = function () {};
  this.RemoveTagsFrom = function () {};
  this.MatchesQuery = function () {};
};

/** @constructor */
BABYLON.TextureTools = function () {
  this.CreateResizedCopy = function () {};
};

/** @constructor */
BABYLON.TGATools = function () {
  this.GetTGAHeader = function () {};
  this.UploadContent = function () {};
};

/** @constructor */
BABYLON.Tools = function () {
  this.BaseUrl = "";
  this.DefaultRetryStrategy = function () {};
  this.UseFallbackTexture = true;
  this.RegisteredExternalClasses = {};
  this.fallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z";
  this.FetchToRef = function () {};
  this.Mix = function () {};
  this.Instantiate = function () {};
  this.Slice = function () {};
  this.SetImmediate = function () {};
  this.IsExponentOfTwo = function () {};
  this.FloatRound = function () {};
  this.GetFilename = function () {};
  this.GetFolderPath = function () {};
  this.ToDegrees = function () {};
  this.ToRadians = function () {};
  this.MakeArray = function () {};
  this.GetPointerPrefix = function () {};
  this.SetCorsBehavior = function () {};
  this.CleanUrl = function () {};
  this.PreprocessUrl = function () {};
  this.LoadImage = function () {};
  this.LoadFile = function () {};
  this.LoadFileAsync = function () {};
  this.LoadScript = function () {};
  this.LoadScriptAsync = function () {};
  this.ReadFileAsDataURL = function () {};
  this.ReadFile = function () {};
  this.FileAsURL = function () {};
  this.Format = function () {};
  this.DeepCopy = function () {};
  this.IsEmpty = function () {};
  this.RegisterTopRootEvents = function () {};
  this.UnregisterTopRootEvents = function () {};
  this.DumpFramebuffer = function () {};
  this.ToBlob = function () {};
  this.EncodeScreenshotCanvasData = function () {};
  this.Download = function () {};
  this.CreateScreenshot = function () {};
  this.CreateScreenshotAsync = function () {};
  this.CreateScreenshotUsingRenderTarget = function () {};
  this.CreateScreenshotUsingRenderTargetAsync = function () {};
  this.RandomId = function () {};
  this.IsBase64 = function () {};
  this.DecodeBase64 = function () {};
  this.GetAbsoluteUrl = function () {};
  this.errorsCount = 1;
  this.Log = function () {};
  this.Warn = function () {};
  this.Error = function () {};
  this.LogCache = "<div style='color:red'>[09:38:34]: No object was provided. A physics object is obligatory</div><br><div style='color:white'>[09:38:34]: Babylon.js v4.1.0 - Null engine</div><br>";
  this.ClearLogCache = function () {};
  // this.LogLevels = undefined;
  // this.PerformanceLogLevel = undefined;
  this.Now = 230.087121;
  this.GetClassName = function () {};
  this.First = function () {};
  this.getFullClassName = function () {};
  this.DelayAsync = function () {};
  this.IsSafari = function () {};
  this.UseCustomRequestHeaders = false;
  this.CustomRequestHeaders = {};
  this.CorsBehavior = "anonymous";
  this.GetDOMTextContent = function () {};
  this.NoneLogLevel = 0;
  this.MessageLogLevel = 1;
  this.WarningLogLevel = 2;
  this.ErrorLogLevel = 4;
  this.AllLogLevel = 7;
  this.IsWindowObjectExist = function () {};
  this.PerformanceNoneLogLevel = 0;
  this.PerformanceUserMarkLogLevel = 1;
  this.PerformanceConsoleLogLevel = 2;
  this.StartPerformanceCounter = function () {};
  this.EndPerformanceCounter = function () {};
};

/** @constructor */
BABYLON.className = function () {
};

/** @constructor */
BABYLON.AsyncLoop = function () {
  // this.iterations = undefined;
  this.index = -1;
  this.executeNext = function () {};
  this.breakLoop = function () {};
  this.Run = function () {};
  this.SyncAsyncForLoop = function () {};
};

/** @constructor */
BABYLON.VideoRecorder = function () {
  this.IsSupported = function () {};
};

BABYLON.JoystickAxis = {}

/** @constructor */
BABYLON.VirtualJoystick = function () {
  this.Canvas = {};
  this.vjCanvasWidth = 1024;
  this.vjCanvasHeight = 768;
};

/** @constructor */
BABYLON.WorkerPool = function () {
};

/** @constructor */
BABYLON.Logger = function () {
  this.LogCache = "<div style='color:red'>[09:38:34]: No object was provided. A physics object is obligatory</div><br><div style='color:white'>[09:38:34]: Babylon.js v4.1.0 - Null engine</div><br>";
  this.ClearLogCache = function () {};
  // this.LogLevels = undefined;
  this.NoneLogLevel = 0;
  this.MessageLogLevel = 1;
  this.WarningLogLevel = 2;
  this.ErrorLogLevel = 4;
  this.AllLogLevel = 7;
  this.errorsCount = 1;
  this.Log = function () {};
  this.Warn = function () {};
  this.Error = function () {};
};

/** @constructor */
BABYLON.FilesInputStore = function () {
  this.FilesToLoad = {};
};

/** @constructor */
BABYLON.DeepCopier = function () {
  this.DeepCopy = function () {};
};

/** @constructor */
BABYLON.PivotTools = function () {
};

/** @constructor */
BABYLON.PrecisionDate = function () {
  this.Now = 236.84591;
};

/** @constructor */
BABYLON.ScreenshotTools = function () {
  this.CreateScreenshot = function () {};
  this.CreateScreenshotAsync = function () {};
  this.CreateScreenshotUsingRenderTarget = function () {};
  this.CreateScreenshotUsingRenderTargetAsync = function () {};
};

/** @constructor */
BABYLON.WebRequest = function () {
  this.onprogress = null;
  this.readyState = 0;
  this.status = 0;
  this.statusText = "";
  this.response = "";
  this.responseURL = "";
  this.responseText = "";
  this.responseType = "";
  this.addEventListener = function () {};
  this.removeEventListener = function () {};
  this.abort = function () {};
  this.send = function () {};
  this.open = function () {};
  this.setRequestHeader = function () {};
  this.getResponseHeader = function () {};
  this.CustomRequestHeaders = {};
  this.CustomRequestModifiers = {};
};

BABYLON.InspectableType = {}

/** @constructor */
BABYLON.BRDFTextureTools = function () {
  this.GetEnvironmentBRDFTexture = function () {};
};

/** @constructor */
BABYLON.RGBDTextureTools = function () {
  this.ExpandRGBDTexture = function () {};
};

/** @constructor */
BABYLON.ColorGradient = function () {
  this.getColorToRef = function () {};
};

/** @constructor */
BABYLON.Color3Gradient = function () {
};

/** @constructor */
BABYLON.FactorGradient = function () {
  this.getFactor = function () {};
};

/** @constructor */
BABYLON.GradientHelper = function () {
  this.GetCurrentGradient = function () {};
};

/** @constructor */
BABYLON.PerfCounter = function () {
  this.min = 0;
  this.max = 0;
  this.average = 0;
  this.lastSecAverage = 0;
  this.current = 0;
  this.total = 0;
  this.count = 0;
  this.fetchNewFrame = function () {};
  this.addCount = function () {};
  this.beginMonitoring = function () {};
  this.endMonitoring = function () {};
  this.Enabled = true;
};

/** @constructor */
BABYLON.RetryStrategy = function () {
  this.ExponentialBackoff = function () {};
};

/** @constructor */
BABYLON.CanvasGenerator = function () {
  this.CreateCanvas = function () {};
};

/** @constructor */
BABYLON.LoadFileError = function () {
  this.name = "LoadFileError";
  // this.file = undefined;
  this.constructor = function () {};
  this.stackTraceLimit = 10;
};

/** @constructor */
BABYLON.RequestFileError = function () {
  // this.request = undefined;
  this.name = "RequestFileError";
  this.constructor = function () {};
  this.stackTraceLimit = 10;
};

/** @constructor */
BABYLON.ReadFileError = function () {
  // this.file = undefined;
  this.name = "ReadFileError";
  this.constructor = function () {};
  this.stackTraceLimit = 10;
};

/** @constructor */
BABYLON.FileTools = function () {
  this.SetCorsBehavior = function () {};
  this.LoadImage = function () {};
  this.ReadFile = function () {};
  this.LoadFile = function () {};
  this.RequestFile = function () {};
  this.IsFileURL = function () {};
  this.DefaultRetryStrategy = function () {};
  this.BaseUrl = "";
  this.CorsBehavior = "anonymous";
  this.PreprocessUrl = function () {};
};

/** @constructor */
BABYLON.StringTools = function () {
  this.EndsWith = function () {};
  this.StartsWith = function () {};
  this.Decode = function () {};
  this.EncodeArrayBufferToBase64 = function () {};
};

/** @constructor */
BABYLON.DataReader = function () {
  this.byteOffset = 0;
  // this.buffer = undefined;
  this.loadAsync = function () {};
  this.readUint32 = function () {};
  this.readUint8Array = function () {};
  this.readString = function () {};
  this.skipBytes = function () {};
};

/** @constructor */
BABYLON.MinMaxReducer = function () {
};

/** @constructor */
BABYLON.DepthReducer = function () {
};

/** @constructor */
BABYLON.CubeMapToSphericalPolynomialTools = function () {
  this.ConvertCubeMapTextureToSphericalPolynomial = function () {};
  this.ConvertCubeMapToSphericalPolynomial = function () {};
  this.FileFaces = {};
};

/** @constructor */
BABYLON.HDRTools = function () {
  this.Ldexp = function () {};
  this.Rgbe2float = function () {};
  this.readStringLine = function () {};
  this.RGBE_ReadHeader = function () {};
  this.GetCubeMapTextureData = function () {};
  this.RGBE_ReadPixels = function () {};
  this.RGBE_ReadPixels_RLE = function () {};
};

/** @constructor */
BABYLON.PanoramaToCubeMapTools = function () {
  this.ConvertPanoramaToCubemap = function () {};
  this.CreateCubemapTexture = function () {};
  this.CalcProjectionSpherical = function () {};
  this.FACE_FRONT = {};
  this.FACE_BACK = {};
  this.FACE_RIGHT = {};
  this.FACE_LEFT = {};
  this.FACE_DOWN = {};
  this.FACE_UP = {};
};

/** @constructor */
BABYLON.WebXRCamera = function () {
  this.GetConstructorFromName = function () {};
  this.Parse = function () {};
  this.PERSPECTIVE_CAMERA = 0;
  this.ORTHOGRAPHIC_CAMERA = 1;
  this.FOVMODE_VERTICAL_FIXED = 0;
  this.FOVMODE_HORIZONTAL_FIXED = 1;
  this.RIG_MODE_NONE = 0;
  this.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
  this.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
  this.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
  this.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
  this.RIG_MODE_VR = 20;
  this.RIG_MODE_WEBVR = 21;
  this.RIG_MODE_CUSTOM = 22;
  this.ForceAttachControlToAlwaysPreventDefault = false;
  this.AddNodeConstructor = function () {};
  this.Construct = function () {};
  this.ParseAnimationRanges = function () {};
};

/** @constructor */
BABYLON.WebXREnterExitUIButton = function () {
  // this.element = undefined;
  // this.sessionMode = undefined;
  // this.referenceSpaceType = undefined;
  this.update = function () {};
};

/** @constructor */
BABYLON.WebXREnterExitUIOptions = function () {
};

/** @constructor */
BABYLON.WebXREnterExitUI = function () {
  this.CreateAsync = function () {};
};

/** @constructor */
BABYLON.WebXRExperienceHelper = function () {
  this.CreateAsync = function () {};
};

/** @constructor */
BABYLON.WebXRInput = function () {
};

/** @constructor */
BABYLON.WebXRInputSource = function () {
};

/** @constructor */
BABYLON.WebXRManagedOutputCanvasOptions = function () {
  this.GetDefaults = function () {};
};

/** @constructor */
BABYLON.WebXRManagedOutputCanvas = function () {
};

BABYLON.WebXRState = {}

/** @constructor */
BABYLON.WebXRSessionManager = function () {
  // this.scene = undefined;
  this.baseLayer = null;
  this.currentTimestamp = -1;
  this.defaultHeightCompensation = 1.7;
  this.onXRFrameObservable = {};
  this.onXRReferenceSpaceChanged = {};
  this.onXRSessionEnded = {};
  this.onXRSessionInit = {};
  // this.referenceSpace = undefined;
  this.dispose = function () {};
  this.exitXRAsync = function () {};
  this.getRenderTargetTextureForEye = function () {};
  this.getWebXRRenderTarget = function () {};
  this.initializeAsync = function () {};
  this.initializeSessionAsync = function () {};
  this.isSessionSupportedAsync = function () {};
  this.resetReferenceSpace = function () {};
  this.runXRRenderLoop = function () {};
  this.setReferenceSpaceTypeAsync = function () {};
  this.updateRenderStateAsync = function () {};
  this.IsSessionSupportedAsync = function () {};
};

/** @constructor */
BABYLON.WebXRDefaultExperienceOptions = function () {
};

/** @constructor */
BABYLON.WebXRDefaultExperience = function () {
  this.dispose = function () {};
  this.CreateAsync = function () {};
};

/** @constructor */
BABYLON.WebXRFeatureName = function () {
  this.ANCHOR_SYSTEM = "xr-anchor-system";
  this.BACKGROUND_REMOVER = "xr-background-remover";
  this.HIT_TEST = "xr-hit-test";
  this.PHYSICS_CONTROLLERS = "xr-physics-controller";
  this.PLANE_DETECTION = "xr-plane-detection";
  this.POINTER_SELECTION = "xr-controller-pointer-selection";
  this.TELEPORTATION = "xr-controller-teleportation";
};

/** @constructor */
BABYLON.WebXRFeaturesManager = function () {
  this.AddWebXRFeature = function () {};
  this.ConstructFeature = function () {};
  this.GetAvailableFeatures = function () {};
  this.GetAvailableVersions = function () {};
  this.GetLatestVersionOfFeature = function () {};
  this.GetStableVersionOfFeature = function () {};
};

/** @constructor */
BABYLON.WebXRHitTestLegacy = function () {
  this.disableAutoAttach = false;
  this.options = {};
  this.lastNativeXRHitResults = {};
  this.onHitTestResultObservable = {};
  this.constructor = function () {};
  this.attach = function () {};
  this.detach = function () {};
  this.dispose = function () {};
  this.attached = false;
  this.XRHitTestWithRay = function () {};
  this.XRHitTestWithSelectEvent = function () {};
  this.Name = "xr-hit-test";
  this.Version = 1;
};

/** @constructor */
BABYLON.WebXRAnchorSystem = function () {
  this.disableAutoAttach = false;
  this.onAnchorAddedObservable = {};
  this.onAnchorRemovedObservable = {};
  this.onAnchorUpdatedObservable = {};
  this.constructor = function () {};
  this.addAnchorAtRigidTransformation = function () {};
  this.attach = function () {};
  this.detach = function () {};
  this.dispose = function () {};
  this.setHitTestModule = function () {};
  this.setPlaneDetector = function () {};
  this.attached = false;
  this.Name = "xr-anchor-system";
  this.Version = 1;
};

/** @constructor */
BABYLON.WebXRPlaneDetector = function () {
  this.Name = "xr-plane-detection";
  this.Version = 1;
};

/** @constructor */
BABYLON.WebXRBackgroundRemover = function () {
  this.disableAutoAttach = false;
  this.options = {};
  this.onBackgroundStateChangedObservable = {};
  this.constructor = function () {};
  this.attach = function () {};
  this.detach = function () {};
  this.dispose = function () {};
  this.attached = false;
  this.Name = "xr-background-remover";
  this.Version = 1;
};

/** @constructor */
BABYLON.WebXRMotionControllerTeleportation = function () {
  this.Name = "xr-controller-teleportation";
  this.Version = 1;
};

/** @constructor */
BABYLON.WebXRControllerPointerSelection = function () {
  this.Name = "xr-controller-pointer-selection";
  this.Version = 1;
};

/** @constructor */
BABYLON.IWebXRControllerPhysicsOptions = function () {
};

/** @constructor */
BABYLON.WebXRControllerPhysics = function () {
  this.Name = "xr-physics-controller";
  this.Version = 1;
};

/** @constructor */
BABYLON.WebXRAbstractMotionController = function () {
};

/** @constructor */
BABYLON.WebXRControllerComponent = function () {
  // this.id = undefined;
  // this.type = undefined;
  this.onAxisValueChangedObservable = {};
  this.onButtonStateChangedObservable = {};
  this.axes = {};
  this.changes = {};
  this.hasChanges = false;
  this.pressed = false;
  this.touched = false;
  this.value = 0;
  this.dispose = function () {};
  this.isAxes = function () {};
  this.isButton = function () {};
  this.update = function () {};
  this.BUTTON_TYPE = "button";
  this.SQUEEZE_TYPE = "squeeze";
  this.THUMBSTICK_TYPE = "thumbstick";
  this.TOUCHPAD_TYPE = "touchpad";
  this.TRIGGER_TYPE = "trigger";
};

/** @constructor */
BABYLON.WebXRGenericTriggerMotionController = function () {
  this.ProfileId = "generic-trigger";
};

/** @constructor */
BABYLON.WebXRMicrosoftMixedRealityController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/microsoft/";
  this.MODEL_LEFT_FILENAME = "left.glb";
  this.MODEL_RIGHT_FILENAME = "right.glb";
};

/** @constructor */
BABYLON.WebXRMotionControllerManager = function () {
  this.ClearProfilesCache = function () {};
  this.DefaultFallbacks = function () {};
  this.FindFallbackWithProfileId = function () {};
  this.GetMotionControllerWithXRInput = function () {};
  this.RegisterController = function () {};
  this.RegisterFallbacksForProfileId = function () {};
  this.UpdateProfilesList = function () {};
  this.BaseRepositoryUrl = "https://immersive-web.github.io/webxr-input-profiles/packages/viewer/dist";
  this.PrioritizeOnlineRepository = true;
  this.UseOnlineRepository = true;
};

/** @constructor */
BABYLON.WebXROculusTouchMotionController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/oculus/";
  this.MODEL_LEFT_FILENAME = "left.babylon";
  this.MODEL_RIGHT_FILENAME = "right.babylon";
  this.QUEST_MODEL_BASE_URL = "https://controllers.babylonjs.com/oculusQuest/";
};

/** @constructor */
BABYLON.WebXRHTCViveMotionController = function () {
  this.MODEL_BASE_URL = "https://controllers.babylonjs.com/vive/";
  this.MODEL_FILENAME = "wand.babylon";
};

/** @constructor */
BABYLON.WebXRProfiledMotionController = function () {
};