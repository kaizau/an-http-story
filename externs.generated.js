const BABYLON = {};

BABYLON.Debug = {}

/** @constructor */
BABYLON.AbstractScene = function () {}
BABYLON.AbstractScene.rootNodes = {};
BABYLON.AbstractScene.cameras = {};
BABYLON.AbstractScene.lights = {};
BABYLON.AbstractScene.meshes = {};
BABYLON.AbstractScene.skeletons = {};
BABYLON.AbstractScene.particleSystems = {};
BABYLON.AbstractScene.animations = {};
BABYLON.AbstractScene.animationGroups = {};
BABYLON.AbstractScene.multiMaterials = {};
BABYLON.AbstractScene.materials = {};
BABYLON.AbstractScene.morphTargetManagers = {};
BABYLON.AbstractScene.geometries = {};
BABYLON.AbstractScene.transformNodes = {};
BABYLON.AbstractScene.actionManagers = {};
BABYLON.AbstractScene.textures = {};
BABYLON.AbstractScene.environmentTexture = null;
BABYLON.AbstractScene.prototype.getNodes = function () {};
BABYLON.AbstractScene.prototype.removeEffectLayer = function () {};
BABYLON.AbstractScene.prototype.addEffectLayer = function () {};
BABYLON.AbstractScene.prototype.getGlowLayerByName = function () {};
BABYLON.AbstractScene.prototype.getHighlightLayerByName = function () {};
BABYLON.AbstractScene.prototype.getLensFlareSystemByName = function () {};
BABYLON.AbstractScene.prototype.getLensFlareSystemByID = function () {};
BABYLON.AbstractScene.prototype.removeLensFlareSystem = function () {};
BABYLON.AbstractScene.prototype.addLensFlareSystem = function () {};
BABYLON.AbstractScene.prototype.removeReflectionProbe = function () {};
BABYLON.AbstractScene.prototype.addReflectionProbe = function () {};


/** @constructor */
BABYLON.AbstractActionManager = function () {}
BABYLON.AbstractActionManager.hoverCursor = "";
BABYLON.AbstractActionManager.actions = {};
BABYLON.AbstractActionManager.isRecursive = false;


/** @constructor */
BABYLON.Action = function () {}


/** @constructor */
BABYLON.ActionEvent = function () {}
// BABYLON.ActionEvent.source = undefined;
// BABYLON.ActionEvent.pointerX = undefined;
// BABYLON.ActionEvent.pointerY = undefined;
// BABYLON.ActionEvent.meshUnderPointer = undefined;
// BABYLON.ActionEvent.sourceEvent = undefined;
// BABYLON.ActionEvent.additionalData = undefined;


/** @constructor */
BABYLON.ActionManager = function () {}
BABYLON.ActionManager.Parse = function () {};
BABYLON.ActionManager.GetTriggerName = function () {};
BABYLON.ActionManager.NothingTrigger = 0;
BABYLON.ActionManager.OnPickTrigger = 1;
BABYLON.ActionManager.OnLeftPickTrigger = 2;
BABYLON.ActionManager.OnRightPickTrigger = 3;
BABYLON.ActionManager.OnCenterPickTrigger = 4;
BABYLON.ActionManager.OnPickDownTrigger = 5;
BABYLON.ActionManager.OnDoublePickTrigger = 6;
BABYLON.ActionManager.OnPickUpTrigger = 7;
BABYLON.ActionManager.OnPickOutTrigger = 16;
BABYLON.ActionManager.OnLongPressTrigger = 8;
BABYLON.ActionManager.OnPointerOverTrigger = 9;
BABYLON.ActionManager.OnPointerOutTrigger = 10;
BABYLON.ActionManager.OnEveryFrameTrigger = 11;
BABYLON.ActionManager.OnIntersectionEnterTrigger = 12;
BABYLON.ActionManager.OnIntersectionExitTrigger = 13;
BABYLON.ActionManager.OnKeyDownTrigger = 14;
BABYLON.ActionManager.OnKeyUpTrigger = 15;
BABYLON.ActionManager.prototype.HasTriggers = false;
BABYLON.ActionManager.prototype.HasPickTriggers = false;
BABYLON.ActionManager.prototype.HasSpecificTrigger = function () {};
BABYLON.ActionManager.prototype.Triggers = {};


/** @constructor */
BABYLON.Condition = function () {}
BABYLON.Condition.prototype.isValid = function () {};
BABYLON.Condition.prototype.serialize = function () {};


/** @constructor */
BABYLON.ValueCondition = function () {}
BABYLON.ValueCondition.IsEqual = 0;
BABYLON.ValueCondition.IsDifferent = 1;
BABYLON.ValueCondition.IsGreater = 2;
BABYLON.ValueCondition.IsLesser = 3;
BABYLON.ValueCondition.GetOperatorName = function () {};


/** @constructor */
BABYLON.PredicateCondition = function () {}
// BABYLON.PredicateCondition.predicate = undefined;
BABYLON.PredicateCondition.prototype.constructor = function () {};
BABYLON.PredicateCondition.prototype.isValid = function () {};
BABYLON.PredicateCondition.prototype.serialize = function () {};


/** @constructor */
BABYLON.StateCondition = function () {}
// BABYLON.StateCondition.value = undefined;
BABYLON.StateCondition.prototype.constructor = function () {};
BABYLON.StateCondition.prototype.isValid = function () {};
BABYLON.StateCondition.prototype.serialize = function () {};


/** @constructor */
BABYLON.SwitchBooleanAction = function () {}


/** @constructor */
BABYLON.SetStateAction = function () {}


/** @constructor */
BABYLON.SetValueAction = function () {}


/** @constructor */
BABYLON.IncrementValueAction = function () {}


/** @constructor */
BABYLON.PlayAnimationAction = function () {}


/** @constructor */
BABYLON.StopAnimationAction = function () {}


/** @constructor */
BABYLON.DoNothingAction = function () {}
BABYLON.DoNothingAction.triggerOptions = 0;
BABYLON.DoNothingAction.onBeforeExecuteObservable = {};
BABYLON.DoNothingAction.trigger = 0;
BABYLON.DoNothingAction.prototype.constructor = function () {};
BABYLON.DoNothingAction.prototype.execute = function () {};
BABYLON.DoNothingAction.prototype.serialize = function () {};
BABYLON.DoNothingAction.prototype.getTriggerParameter = function () {};
BABYLON.DoNothingAction.prototype.skipToNextActiveAction = function () {};
BABYLON.DoNothingAction.prototype.then = function () {};


/** @constructor */
BABYLON.CombineAction = function () {}


/** @constructor */
BABYLON.ExecuteCodeAction = function () {}


/** @constructor */
BABYLON.SetParentAction = function () {}


/** @constructor */
BABYLON.PlaySoundAction = function () {}


/** @constructor */
BABYLON.StopSoundAction = function () {}


/** @constructor */
BABYLON.InterpolateValueAction = function () {}


/** @constructor */
BABYLON.Animatable = function () {}


/** @constructor */
BABYLON.Animation = function () {}
BABYLON.Animation.CreateAnimation = function () {};
BABYLON.Animation.CreateAndStartAnimation = function () {};
BABYLON.Animation.CreateAndStartHierarchyAnimation = function () {};
BABYLON.Animation.CreateMergeAndStartAnimation = function () {};
BABYLON.Animation.TransitionTo = function () {};
BABYLON.Animation.Parse = function () {};
BABYLON.Animation.AppendSerializedAnimations = function () {};
BABYLON.Animation.AllowMatricesInterpolation = false;
BABYLON.Animation.AllowMatrixDecomposeForInterpolation = true;
BABYLON.Animation.ANIMATIONTYPE_FLOAT = 0;
BABYLON.Animation.ANIMATIONTYPE_VECTOR3 = 1;
BABYLON.Animation.ANIMATIONTYPE_QUATERNION = 2;
BABYLON.Animation.ANIMATIONTYPE_MATRIX = 3;
BABYLON.Animation.ANIMATIONTYPE_COLOR3 = 4;
BABYLON.Animation.ANIMATIONTYPE_COLOR4 = 7;
BABYLON.Animation.ANIMATIONTYPE_VECTOR2 = 5;
BABYLON.Animation.ANIMATIONTYPE_SIZE = 6;
BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE = 0;
BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE = 1;
BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT = 2;


/** @constructor */
BABYLON.TargetedAnimation = function () {}
BABYLON.TargetedAnimation.prototype.serialize = function () {};


/** @constructor */
BABYLON.AnimationGroup = function () {}
BABYLON.AnimationGroup.Parse = function () {};


/** @constructor */
BABYLON.AnimationPropertiesOverride = function () {}
BABYLON.AnimationPropertiesOverride.enableBlending = false;
BABYLON.AnimationPropertiesOverride.blendingSpeed = 0.01;
BABYLON.AnimationPropertiesOverride.loopMode = 1;


/** @constructor */
BABYLON.EasingFunction = function () {}
BABYLON.EasingFunction.prototype.setEasingMode = function () {};
BABYLON.EasingFunction.prototype.getEasingMode = function () {};
BABYLON.EasingFunction.prototype.easeInCore = function () {};
BABYLON.EasingFunction.prototype.ease = function () {};


/** @constructor */
BABYLON.CircleEase = function () {}
BABYLON.CircleEase.prototype.constructor = function () {};
BABYLON.CircleEase.prototype.easeInCore = function () {};
BABYLON.CircleEase.prototype.setEasingMode = function () {};
BABYLON.CircleEase.prototype.getEasingMode = function () {};
BABYLON.CircleEase.prototype.ease = function () {};


/** @constructor */
BABYLON.BackEase = function () {}
BABYLON.BackEase.amplitude = 1;
BABYLON.BackEase.prototype.constructor = function () {};
BABYLON.BackEase.prototype.easeInCore = function () {};
BABYLON.BackEase.prototype.setEasingMode = function () {};
BABYLON.BackEase.prototype.getEasingMode = function () {};
BABYLON.BackEase.prototype.ease = function () {};


/** @constructor */
BABYLON.BounceEase = function () {}
BABYLON.BounceEase.bounces = 3;
BABYLON.BounceEase.bounciness = 2;
BABYLON.BounceEase.prototype.constructor = function () {};
BABYLON.BounceEase.prototype.easeInCore = function () {};
BABYLON.BounceEase.prototype.setEasingMode = function () {};
BABYLON.BounceEase.prototype.getEasingMode = function () {};
BABYLON.BounceEase.prototype.ease = function () {};


/** @constructor */
BABYLON.CubicEase = function () {}
BABYLON.CubicEase.prototype.constructor = function () {};
BABYLON.CubicEase.prototype.easeInCore = function () {};
BABYLON.CubicEase.prototype.setEasingMode = function () {};
BABYLON.CubicEase.prototype.getEasingMode = function () {};
BABYLON.CubicEase.prototype.ease = function () {};


/** @constructor */
BABYLON.ElasticEase = function () {}
BABYLON.ElasticEase.oscillations = 3;
BABYLON.ElasticEase.springiness = 3;
BABYLON.ElasticEase.prototype.constructor = function () {};
BABYLON.ElasticEase.prototype.easeInCore = function () {};
BABYLON.ElasticEase.prototype.setEasingMode = function () {};
BABYLON.ElasticEase.prototype.getEasingMode = function () {};
BABYLON.ElasticEase.prototype.ease = function () {};


/** @constructor */
BABYLON.ExponentialEase = function () {}
BABYLON.ExponentialEase.exponent = 2;
BABYLON.ExponentialEase.prototype.constructor = function () {};
BABYLON.ExponentialEase.prototype.easeInCore = function () {};
BABYLON.ExponentialEase.prototype.setEasingMode = function () {};
BABYLON.ExponentialEase.prototype.getEasingMode = function () {};
BABYLON.ExponentialEase.prototype.ease = function () {};


/** @constructor */
BABYLON.PowerEase = function () {}
BABYLON.PowerEase.power = 2;
BABYLON.PowerEase.prototype.constructor = function () {};
BABYLON.PowerEase.prototype.easeInCore = function () {};
BABYLON.PowerEase.prototype.setEasingMode = function () {};
BABYLON.PowerEase.prototype.getEasingMode = function () {};
BABYLON.PowerEase.prototype.ease = function () {};


/** @constructor */
BABYLON.QuadraticEase = function () {}
BABYLON.QuadraticEase.prototype.constructor = function () {};
BABYLON.QuadraticEase.prototype.easeInCore = function () {};
BABYLON.QuadraticEase.prototype.setEasingMode = function () {};
BABYLON.QuadraticEase.prototype.getEasingMode = function () {};
BABYLON.QuadraticEase.prototype.ease = function () {};


/** @constructor */
BABYLON.QuarticEase = function () {}
BABYLON.QuarticEase.prototype.constructor = function () {};
BABYLON.QuarticEase.prototype.easeInCore = function () {};
BABYLON.QuarticEase.prototype.setEasingMode = function () {};
BABYLON.QuarticEase.prototype.getEasingMode = function () {};
BABYLON.QuarticEase.prototype.ease = function () {};


/** @constructor */
BABYLON.QuinticEase = function () {}
BABYLON.QuinticEase.prototype.constructor = function () {};
BABYLON.QuinticEase.prototype.easeInCore = function () {};
BABYLON.QuinticEase.prototype.setEasingMode = function () {};
BABYLON.QuinticEase.prototype.getEasingMode = function () {};
BABYLON.QuinticEase.prototype.ease = function () {};


/** @constructor */
BABYLON.SineEase = function () {}
BABYLON.SineEase.prototype.constructor = function () {};
BABYLON.SineEase.prototype.easeInCore = function () {};
BABYLON.SineEase.prototype.setEasingMode = function () {};
BABYLON.SineEase.prototype.getEasingMode = function () {};
BABYLON.SineEase.prototype.ease = function () {};


/** @constructor */
BABYLON.BezierCurveEase = function () {}
BABYLON.BezierCurveEase.x1 = 0;
BABYLON.BezierCurveEase.y1 = 0;
BABYLON.BezierCurveEase.x2 = 1;
BABYLON.BezierCurveEase.y2 = 1;
BABYLON.BezierCurveEase.prototype.constructor = function () {};
BABYLON.BezierCurveEase.prototype.easeInCore = function () {};
BABYLON.BezierCurveEase.prototype.setEasingMode = function () {};
BABYLON.BezierCurveEase.prototype.getEasingMode = function () {};
BABYLON.BezierCurveEase.prototype.ease = function () {};


/** @constructor */
BABYLON.RuntimeAnimation = function () {}


/** @constructor */
BABYLON.AnimationEvent = function () {}
// BABYLON.AnimationEvent.frame = undefined;
// BABYLON.AnimationEvent.action = undefined;
// BABYLON.AnimationEvent.onlyOnce = undefined;
BABYLON.AnimationEvent.isDone = false;


BABYLON.AnimationKeyInterpolation = {}

/** @constructor */
BABYLON.AnimationRange = function () {}
// BABYLON.AnimationRange.name = undefined;
// BABYLON.AnimationRange.from = undefined;
// BABYLON.AnimationRange.to = undefined;
BABYLON.AnimationRange.prototype.clone = function () {};


/** @constructor */
BABYLON.KeepAssets = function () {}
BABYLON.KeepAssets.rootNodes = {};
BABYLON.KeepAssets.cameras = {};
BABYLON.KeepAssets.lights = {};
BABYLON.KeepAssets.meshes = {};
BABYLON.KeepAssets.skeletons = {};
BABYLON.KeepAssets.particleSystems = {};
BABYLON.KeepAssets.animations = {};
BABYLON.KeepAssets.animationGroups = {};
BABYLON.KeepAssets.multiMaterials = {};
BABYLON.KeepAssets.materials = {};
BABYLON.KeepAssets.morphTargetManagers = {};
BABYLON.KeepAssets.geometries = {};
BABYLON.KeepAssets.transformNodes = {};
BABYLON.KeepAssets.actionManagers = {};
BABYLON.KeepAssets.textures = {};
BABYLON.KeepAssets.environmentTexture = null;
BABYLON.KeepAssets.prototype.constructor = function () {};
BABYLON.KeepAssets.prototype.getNodes = function () {};
BABYLON.KeepAssets.prototype.removeEffectLayer = function () {};
BABYLON.KeepAssets.prototype.addEffectLayer = function () {};
BABYLON.KeepAssets.prototype.getGlowLayerByName = function () {};
BABYLON.KeepAssets.prototype.getHighlightLayerByName = function () {};
BABYLON.KeepAssets.prototype.getLensFlareSystemByName = function () {};
BABYLON.KeepAssets.prototype.getLensFlareSystemByID = function () {};
BABYLON.KeepAssets.prototype.removeLensFlareSystem = function () {};
BABYLON.KeepAssets.prototype.addLensFlareSystem = function () {};
BABYLON.KeepAssets.prototype.removeReflectionProbe = function () {};
BABYLON.KeepAssets.prototype.addReflectionProbe = function () {};


/** @constructor */
BABYLON.InstantiatedEntries = function () {}
BABYLON.InstantiatedEntries.rootNodes = {};
BABYLON.InstantiatedEntries.skeletons = {};
BABYLON.InstantiatedEntries.animationGroups = {};


/** @constructor */
BABYLON.AssetContainer = function () {}
BABYLON.AssetContainer.prototype.AddParser = function () {};
BABYLON.AssetContainer.prototype.GetParser = function () {};
BABYLON.AssetContainer.prototype.AddIndividualParser = function () {};
BABYLON.AssetContainer.prototype.GetIndividualParser = function () {};
BABYLON.AssetContainer.prototype.Parse = function () {};


/** @constructor */
BABYLON.Analyser = function () {}


/** @constructor */
BABYLON.AudioEngine = function () {}
BABYLON.AudioEngine.canUseWebAudio = false;
BABYLON.AudioEngine.WarnedWebAudioUnsupported = false;
BABYLON.AudioEngine.isMP3supported = false;
BABYLON.AudioEngine.isOGGsupported = false;
BABYLON.AudioEngine.unlocked = true;
BABYLON.AudioEngine.useCustomUnlockedButton = false;
BABYLON.AudioEngine.onAudioUnlockedObservable = {};
BABYLON.AudioEngine.onAudioLockedObservable = {};
// BABYLON.AudioEngine.prototype.audioContext = undefined;
BABYLON.AudioEngine.prototype.lock = function () {};
BABYLON.AudioEngine.prototype.unlock = function () {};
BABYLON.AudioEngine.prototype.dispose = function () {};
BABYLON.AudioEngine.prototype.getGlobalVolume = function () {};
BABYLON.AudioEngine.prototype.setGlobalVolume = function () {};
BABYLON.AudioEngine.prototype.connectToAnalyser = function () {};


/** @constructor */
BABYLON.AudioSceneComponent = function () {}


/** @constructor */
BABYLON.Sound = function () {}
BABYLON.Sound.Parse = function () {};


/** @constructor */
BABYLON.SoundTrack = function () {}


/** @constructor */
BABYLON.WeightedSound = function () {}


/** @constructor */
BABYLON.AutoRotationBehavior = function () {}
BABYLON.AutoRotationBehavior.prototype.name = "AutoRotation";
// BABYLON.AutoRotationBehavior.prototype.zoomStopsAnimation = undefined;
// BABYLON.AutoRotationBehavior.prototype.idleRotationSpeed = undefined;
// BABYLON.AutoRotationBehavior.prototype.idleRotationWaitTime = undefined;
// BABYLON.AutoRotationBehavior.prototype.idleRotationSpinupTime = undefined;
BABYLON.AutoRotationBehavior.prototype.rotationInProgress = false;
BABYLON.AutoRotationBehavior.prototype.init = function () {};
BABYLON.AutoRotationBehavior.prototype.attach = function () {};
BABYLON.AutoRotationBehavior.prototype.detach = function () {};


/** @constructor */
BABYLON.BouncingBehavior = function () {}
BABYLON.BouncingBehavior.transitionDuration = 450;
BABYLON.BouncingBehavior.lowerRadiusTransitionRange = 2;
BABYLON.BouncingBehavior.upperRadiusTransitionRange = -2;
BABYLON.BouncingBehavior.prototype.name = "Bouncing";
// BABYLON.BouncingBehavior.prototype.autoTransitionRange = undefined;
BABYLON.BouncingBehavior.prototype.init = function () {};
BABYLON.BouncingBehavior.prototype.attach = function () {};
BABYLON.BouncingBehavior.prototype.detach = function () {};
BABYLON.BouncingBehavior.prototype.stopAllAnimations = function () {};


/** @constructor */
BABYLON.FramingBehavior = function () {}
BABYLON.FramingBehavior.autoCorrectCameraLimitsAndSensibility = true;
BABYLON.FramingBehavior.prototype.name = "Framing";
// BABYLON.FramingBehavior.prototype.mode = undefined;
// BABYLON.FramingBehavior.prototype.radiusScale = undefined;
// BABYLON.FramingBehavior.prototype.positionScale = undefined;
// BABYLON.FramingBehavior.prototype.defaultElevation = undefined;
// BABYLON.FramingBehavior.prototype.elevationReturnTime = undefined;
// BABYLON.FramingBehavior.prototype.elevationReturnWaitTime = undefined;
// BABYLON.FramingBehavior.prototype.zoomStopsAnimation = undefined;
// BABYLON.FramingBehavior.prototype.framingTime = undefined;
BABYLON.FramingBehavior.prototype.init = function () {};
BABYLON.FramingBehavior.prototype.attach = function () {};
BABYLON.FramingBehavior.prototype.detach = function () {};
BABYLON.FramingBehavior.prototype.zoomOnMesh = function () {};
BABYLON.FramingBehavior.prototype.zoomOnMeshHierarchy = function () {};
BABYLON.FramingBehavior.prototype.zoomOnMeshesHierarchy = function () {};
BABYLON.FramingBehavior.prototype.zoomOnBoundingInfo = function () {};
BABYLON.FramingBehavior.prototype.stopAllAnimations = function () {};
BABYLON.FramingBehavior.prototype.isUserIsMoving = false;


/** @constructor */
BABYLON.AttachToBoxBehavior = function () {}
// BABYLON.AttachToBoxBehavior.ui = undefined;
BABYLON.AttachToBoxBehavior.name = "AttachToBoxBehavior";
BABYLON.AttachToBoxBehavior.distanceAwayFromFace = 0.15;
BABYLON.AttachToBoxBehavior.distanceAwayFromBottomOfFace = 0.15;
BABYLON.AttachToBoxBehavior.prototype.init = function () {};
BABYLON.AttachToBoxBehavior.prototype.attach = function () {};
BABYLON.AttachToBoxBehavior.prototype.detach = function () {};


/** @constructor */
BABYLON.FadeInOutBehavior = function () {}
BABYLON.FadeInOutBehavior.delay = 0;
BABYLON.FadeInOutBehavior.fadeInTime = 300;
BABYLON.FadeInOutBehavior.prototype.name = "FadeInOut";
BABYLON.FadeInOutBehavior.prototype.init = function () {};
BABYLON.FadeInOutBehavior.prototype.attach = function () {};
BABYLON.FadeInOutBehavior.prototype.detach = function () {};
BABYLON.FadeInOutBehavior.prototype.fadeIn = function () {};


/** @constructor */
BABYLON.MultiPointerScaleBehavior = function () {}
BABYLON.MultiPointerScaleBehavior.prototype.name = "MultiPointerScale";
BABYLON.MultiPointerScaleBehavior.prototype.init = function () {};
BABYLON.MultiPointerScaleBehavior.prototype.attach = function () {};
BABYLON.MultiPointerScaleBehavior.prototype.detach = function () {};


/** @constructor */
BABYLON.PointerDragBehavior = function () {}
BABYLON.PointerDragBehavior.maxDragAngle = 0;
BABYLON.PointerDragBehavior.currentDraggingPointerID = -1;
BABYLON.PointerDragBehavior.dragging = false;
BABYLON.PointerDragBehavior.dragDeltaRatio = 0.2;
BABYLON.PointerDragBehavior.updateDragPlane = true;
BABYLON.PointerDragBehavior.onDragObservable = {};
BABYLON.PointerDragBehavior.onDragStartObservable = {};
BABYLON.PointerDragBehavior.onDragEndObservable = {};
BABYLON.PointerDragBehavior.moveAttached = true;
BABYLON.PointerDragBehavior.enabled = true;
BABYLON.PointerDragBehavior.startAndReleaseDragOnPointerEvents = true;
BABYLON.PointerDragBehavior.detachCameraControls = true;
BABYLON.PointerDragBehavior.useObjectOrientationForDragging = true;
BABYLON.PointerDragBehavior.validateDrag = function () {};
// BABYLON.PointerDragBehavior.prototype.options = undefined;
BABYLON.PointerDragBehavior.prototype.name = "PointerDrag";
BABYLON.PointerDragBehavior.prototype.init = function () {};
BABYLON.PointerDragBehavior.prototype.attach = function () {};
BABYLON.PointerDragBehavior.prototype.releaseDrag = function () {};
BABYLON.PointerDragBehavior.prototype.startDrag = function () {};
BABYLON.PointerDragBehavior.prototype.detach = function () {};


/** @constructor */
BABYLON.SixDofDragBehavior = function () {}
BABYLON.SixDofDragBehavior.zDragFactor = 3;
BABYLON.SixDofDragBehavior.rotateDraggedObject = true;
BABYLON.SixDofDragBehavior.dragging = false;
BABYLON.SixDofDragBehavior.dragDeltaRatio = 0.2;
BABYLON.SixDofDragBehavior.currentDraggingPointerID = -1;
BABYLON.SixDofDragBehavior.detachCameraControls = true;
BABYLON.SixDofDragBehavior.onDragStartObservable = {};
BABYLON.SixDofDragBehavior.onDragEndObservable = {};
BABYLON.SixDofDragBehavior.prototype.name = "SixDofDrag";
BABYLON.SixDofDragBehavior.prototype.init = function () {};
BABYLON.SixDofDragBehavior.prototype.attach = function () {};
BABYLON.SixDofDragBehavior.prototype.detach = function () {};


/** @constructor */
BABYLON.Bone = function () {}
BABYLON.Bone.prototype.AddNodeConstructor = function () {};
BABYLON.Bone.prototype.Construct = function () {};
BABYLON.Bone.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.BoneIKController = function () {}


/** @constructor */
BABYLON.BoneLookController = function () {}


/** @constructor */
BABYLON.Skeleton = function () {}
BABYLON.Skeleton.Parse = function () {};


BABYLON.CameraInputTypes = {}

/** @constructor */
BABYLON.CameraInputsManager = function () {}
BABYLON.CameraInputsManager.attached = {};
// BABYLON.CameraInputsManager.camera = undefined;
BABYLON.CameraInputsManager.checkInputs = function () {};
BABYLON.CameraInputsManager.prototype.add = function () {};
BABYLON.CameraInputsManager.prototype.remove = function () {};
BABYLON.CameraInputsManager.prototype.removeByType = function () {};
BABYLON.CameraInputsManager.prototype.attachInput = function () {};
BABYLON.CameraInputsManager.prototype.attachElement = function () {};
BABYLON.CameraInputsManager.prototype.detachElement = function () {};
BABYLON.CameraInputsManager.prototype.rebuildInputCheck = function () {};
BABYLON.CameraInputsManager.prototype.clear = function () {};
BABYLON.CameraInputsManager.prototype.serialize = function () {};
BABYLON.CameraInputsManager.prototype.parse = function () {};


/** @constructor */
BABYLON.Camera = function () {}
BABYLON.Camera.GetConstructorFromName = function () {};
BABYLON.Camera.Parse = function () {};
BABYLON.Camera.PERSPECTIVE_CAMERA = 0;
BABYLON.Camera.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.Camera.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.Camera.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.Camera.RIG_MODE_NONE = 0;
BABYLON.Camera.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.Camera.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.Camera.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.Camera.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.Camera.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.Camera.RIG_MODE_VR = 20;
BABYLON.Camera.RIG_MODE_WEBVR = 21;
BABYLON.Camera.RIG_MODE_CUSTOM = 22;
BABYLON.Camera.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.Camera.prototype.AddNodeConstructor = function () {};
BABYLON.Camera.prototype.Construct = function () {};
BABYLON.Camera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.TargetCamera = function () {}
BABYLON.TargetCamera.prototype.GetConstructorFromName = function () {};
BABYLON.TargetCamera.prototype.Parse = function () {};
BABYLON.TargetCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.TargetCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.TargetCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.TargetCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.TargetCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.TargetCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.TargetCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.TargetCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.TargetCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.TargetCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.TargetCamera.prototype.RIG_MODE_VR = 20;
BABYLON.TargetCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.TargetCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.TargetCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.TargetCamera.prototype.AddNodeConstructor = function () {};
BABYLON.TargetCamera.prototype.Construct = function () {};
BABYLON.TargetCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.FreeCamera = function () {}
BABYLON.FreeCamera.prototype.GetConstructorFromName = function () {};
BABYLON.FreeCamera.prototype.Parse = function () {};
BABYLON.FreeCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.FreeCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.FreeCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.FreeCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.FreeCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.FreeCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.FreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.FreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.FreeCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.FreeCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.FreeCamera.prototype.RIG_MODE_VR = 20;
BABYLON.FreeCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.FreeCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.FreeCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.FreeCamera.prototype.AddNodeConstructor = function () {};
BABYLON.FreeCamera.prototype.Construct = function () {};
BABYLON.FreeCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.FreeCameraInputsManager = function () {}
BABYLON.FreeCameraInputsManager.attached = {};
// BABYLON.FreeCameraInputsManager.camera = undefined;
BABYLON.FreeCameraInputsManager.checkInputs = function () {};
BABYLON.FreeCameraInputsManager.prototype.constructor = function () {};
BABYLON.FreeCameraInputsManager.prototype.addKeyboard = function () {};
BABYLON.FreeCameraInputsManager.prototype.addMouse = function () {};
BABYLON.FreeCameraInputsManager.prototype.removeMouse = function () {};
BABYLON.FreeCameraInputsManager.prototype.addTouch = function () {};
BABYLON.FreeCameraInputsManager.prototype.clear = function () {};
BABYLON.FreeCameraInputsManager.prototype.addDeviceOrientation = function () {};
BABYLON.FreeCameraInputsManager.prototype.addVirtualJoystick = function () {};
BABYLON.FreeCameraInputsManager.prototype.addGamepad = function () {};
BABYLON.FreeCameraInputsManager.prototype.add = function () {};
BABYLON.FreeCameraInputsManager.prototype.remove = function () {};
BABYLON.FreeCameraInputsManager.prototype.removeByType = function () {};
BABYLON.FreeCameraInputsManager.prototype.attachInput = function () {};
BABYLON.FreeCameraInputsManager.prototype.attachElement = function () {};
BABYLON.FreeCameraInputsManager.prototype.detachElement = function () {};
BABYLON.FreeCameraInputsManager.prototype.rebuildInputCheck = function () {};
BABYLON.FreeCameraInputsManager.prototype.serialize = function () {};
BABYLON.FreeCameraInputsManager.prototype.parse = function () {};


/** @constructor */
BABYLON.TouchCamera = function () {}
BABYLON.TouchCamera.prototype.GetConstructorFromName = function () {};
BABYLON.TouchCamera.prototype.Parse = function () {};
BABYLON.TouchCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.TouchCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.TouchCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.TouchCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.TouchCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.TouchCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.TouchCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.TouchCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.TouchCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.TouchCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.TouchCamera.prototype.RIG_MODE_VR = 20;
BABYLON.TouchCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.TouchCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.TouchCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.TouchCamera.prototype.AddNodeConstructor = function () {};
BABYLON.TouchCamera.prototype.Construct = function () {};
BABYLON.TouchCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.ArcRotateCamera = function () {}
BABYLON.ArcRotateCamera.prototype.GetConstructorFromName = function () {};
BABYLON.ArcRotateCamera.prototype.Parse = function () {};
BABYLON.ArcRotateCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.ArcRotateCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.ArcRotateCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.ArcRotateCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.ArcRotateCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.ArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.ArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.ArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.ArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.ArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.ArcRotateCamera.prototype.RIG_MODE_VR = 20;
BABYLON.ArcRotateCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.ArcRotateCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.ArcRotateCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.ArcRotateCamera.prototype.AddNodeConstructor = function () {};
BABYLON.ArcRotateCamera.prototype.Construct = function () {};
BABYLON.ArcRotateCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.ArcRotateCameraInputsManager = function () {}
BABYLON.ArcRotateCameraInputsManager.attached = {};
// BABYLON.ArcRotateCameraInputsManager.camera = undefined;
BABYLON.ArcRotateCameraInputsManager.checkInputs = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.constructor = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.addMouseWheel = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.addPointers = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.addKeyboard = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.addVRDeviceOrientation = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.addGamepad = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.add = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.remove = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.removeByType = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.attachInput = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.attachElement = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.detachElement = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.rebuildInputCheck = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.clear = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.serialize = function () {};
BABYLON.ArcRotateCameraInputsManager.prototype.parse = function () {};


/** @constructor */
BABYLON.DeviceOrientationCamera = function () {}
BABYLON.DeviceOrientationCamera.prototype.GetConstructorFromName = function () {};
BABYLON.DeviceOrientationCamera.prototype.Parse = function () {};
BABYLON.DeviceOrientationCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.DeviceOrientationCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.DeviceOrientationCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.DeviceOrientationCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.DeviceOrientationCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.DeviceOrientationCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.DeviceOrientationCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.DeviceOrientationCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.DeviceOrientationCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.DeviceOrientationCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.DeviceOrientationCamera.prototype.RIG_MODE_VR = 20;
BABYLON.DeviceOrientationCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.DeviceOrientationCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.DeviceOrientationCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.DeviceOrientationCamera.prototype.AddNodeConstructor = function () {};
BABYLON.DeviceOrientationCamera.prototype.Construct = function () {};
BABYLON.DeviceOrientationCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.FlyCamera = function () {}
BABYLON.FlyCamera.prototype.GetConstructorFromName = function () {};
BABYLON.FlyCamera.prototype.Parse = function () {};
BABYLON.FlyCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.FlyCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.FlyCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.FlyCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.FlyCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.FlyCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.FlyCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.FlyCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.FlyCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.FlyCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.FlyCamera.prototype.RIG_MODE_VR = 20;
BABYLON.FlyCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.FlyCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.FlyCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.FlyCamera.prototype.AddNodeConstructor = function () {};
BABYLON.FlyCamera.prototype.Construct = function () {};
BABYLON.FlyCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.FlyCameraInputsManager = function () {}
BABYLON.FlyCameraInputsManager.attached = {};
// BABYLON.FlyCameraInputsManager.camera = undefined;
BABYLON.FlyCameraInputsManager.checkInputs = function () {};
BABYLON.FlyCameraInputsManager.prototype.constructor = function () {};
BABYLON.FlyCameraInputsManager.prototype.addKeyboard = function () {};
BABYLON.FlyCameraInputsManager.prototype.addMouse = function () {};
BABYLON.FlyCameraInputsManager.prototype.add = function () {};
BABYLON.FlyCameraInputsManager.prototype.remove = function () {};
BABYLON.FlyCameraInputsManager.prototype.removeByType = function () {};
BABYLON.FlyCameraInputsManager.prototype.attachInput = function () {};
BABYLON.FlyCameraInputsManager.prototype.attachElement = function () {};
BABYLON.FlyCameraInputsManager.prototype.detachElement = function () {};
BABYLON.FlyCameraInputsManager.prototype.rebuildInputCheck = function () {};
BABYLON.FlyCameraInputsManager.prototype.clear = function () {};
BABYLON.FlyCameraInputsManager.prototype.serialize = function () {};
BABYLON.FlyCameraInputsManager.prototype.parse = function () {};


/** @constructor */
BABYLON.FollowCamera = function () {}
BABYLON.FollowCamera.prototype.GetConstructorFromName = function () {};
BABYLON.FollowCamera.prototype.Parse = function () {};
BABYLON.FollowCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.FollowCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.FollowCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.FollowCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.FollowCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.FollowCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.FollowCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.FollowCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.FollowCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.FollowCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.FollowCamera.prototype.RIG_MODE_VR = 20;
BABYLON.FollowCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.FollowCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.FollowCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.FollowCamera.prototype.AddNodeConstructor = function () {};
BABYLON.FollowCamera.prototype.Construct = function () {};
BABYLON.FollowCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.ArcFollowCamera = function () {}
BABYLON.ArcFollowCamera.prototype.GetConstructorFromName = function () {};
BABYLON.ArcFollowCamera.prototype.Parse = function () {};
BABYLON.ArcFollowCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.ArcFollowCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.ArcFollowCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.ArcFollowCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.ArcFollowCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.ArcFollowCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.ArcFollowCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.ArcFollowCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.ArcFollowCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.ArcFollowCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.ArcFollowCamera.prototype.RIG_MODE_VR = 20;
BABYLON.ArcFollowCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.ArcFollowCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.ArcFollowCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.ArcFollowCamera.prototype.AddNodeConstructor = function () {};
BABYLON.ArcFollowCamera.prototype.Construct = function () {};
BABYLON.ArcFollowCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.FollowCameraInputsManager = function () {}
BABYLON.FollowCameraInputsManager.attached = {};
// BABYLON.FollowCameraInputsManager.camera = undefined;
BABYLON.FollowCameraInputsManager.checkInputs = function () {};
BABYLON.FollowCameraInputsManager.prototype.constructor = function () {};
BABYLON.FollowCameraInputsManager.prototype.addKeyboard = function () {};
BABYLON.FollowCameraInputsManager.prototype.addMouseWheel = function () {};
BABYLON.FollowCameraInputsManager.prototype.addPointers = function () {};
BABYLON.FollowCameraInputsManager.prototype.addVRDeviceOrientation = function () {};
BABYLON.FollowCameraInputsManager.prototype.add = function () {};
BABYLON.FollowCameraInputsManager.prototype.remove = function () {};
BABYLON.FollowCameraInputsManager.prototype.removeByType = function () {};
BABYLON.FollowCameraInputsManager.prototype.attachInput = function () {};
BABYLON.FollowCameraInputsManager.prototype.attachElement = function () {};
BABYLON.FollowCameraInputsManager.prototype.detachElement = function () {};
BABYLON.FollowCameraInputsManager.prototype.rebuildInputCheck = function () {};
BABYLON.FollowCameraInputsManager.prototype.clear = function () {};
BABYLON.FollowCameraInputsManager.prototype.serialize = function () {};
BABYLON.FollowCameraInputsManager.prototype.parse = function () {};


/** @constructor */
BABYLON.GamepadCamera = function () {}
BABYLON.GamepadCamera.prototype.GetConstructorFromName = function () {};
BABYLON.GamepadCamera.prototype.Parse = function () {};
BABYLON.GamepadCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.GamepadCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.GamepadCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.GamepadCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.GamepadCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.GamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.GamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.GamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.GamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.GamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.GamepadCamera.prototype.RIG_MODE_VR = 20;
BABYLON.GamepadCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.GamepadCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.GamepadCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.GamepadCamera.prototype.AddNodeConstructor = function () {};
BABYLON.GamepadCamera.prototype.Construct = function () {};
BABYLON.GamepadCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.UniversalCamera = function () {}
BABYLON.UniversalCamera.prototype.GetConstructorFromName = function () {};
BABYLON.UniversalCamera.prototype.Parse = function () {};
BABYLON.UniversalCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.UniversalCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.UniversalCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.UniversalCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.UniversalCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.UniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.UniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.UniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.UniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.UniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.UniversalCamera.prototype.RIG_MODE_VR = 20;
BABYLON.UniversalCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.UniversalCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.UniversalCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.UniversalCamera.prototype.AddNodeConstructor = function () {};
BABYLON.UniversalCamera.prototype.Construct = function () {};
BABYLON.UniversalCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.VirtualJoysticksCamera = function () {}
BABYLON.VirtualJoysticksCamera.prototype.GetConstructorFromName = function () {};
BABYLON.VirtualJoysticksCamera.prototype.Parse = function () {};
BABYLON.VirtualJoysticksCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.VirtualJoysticksCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.VirtualJoysticksCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.VirtualJoysticksCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.VirtualJoysticksCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.VirtualJoysticksCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.VirtualJoysticksCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.VirtualJoysticksCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.VirtualJoysticksCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.VirtualJoysticksCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.VirtualJoysticksCamera.prototype.RIG_MODE_VR = 20;
BABYLON.VirtualJoysticksCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.VirtualJoysticksCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.VirtualJoysticksCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.VirtualJoysticksCamera.prototype.AddNodeConstructor = function () {};
BABYLON.VirtualJoysticksCamera.prototype.Construct = function () {};
BABYLON.VirtualJoysticksCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.ArcRotateCameraGamepadInput = function () {}
BABYLON.ArcRotateCameraGamepadInput.gamepadRotationSensibility = 80;
BABYLON.ArcRotateCameraGamepadInput.gamepadMoveSensibility = 40;
BABYLON.ArcRotateCameraGamepadInput.prototype.invertYAxis = true;
BABYLON.ArcRotateCameraGamepadInput.prototype.attachControl = function () {};
BABYLON.ArcRotateCameraGamepadInput.prototype.detachControl = function () {};
BABYLON.ArcRotateCameraGamepadInput.prototype.checkInputs = function () {};
BABYLON.ArcRotateCameraGamepadInput.prototype.getClassName = function () {};
BABYLON.ArcRotateCameraGamepadInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.ArcRotateCameraKeyboardMoveInput = function () {}
BABYLON.ArcRotateCameraKeyboardMoveInput.keysUp = {};
BABYLON.ArcRotateCameraKeyboardMoveInput.keysDown = {};
BABYLON.ArcRotateCameraKeyboardMoveInput.keysLeft = {};
BABYLON.ArcRotateCameraKeyboardMoveInput.keysRight = {};
BABYLON.ArcRotateCameraKeyboardMoveInput.keysReset = {};
BABYLON.ArcRotateCameraKeyboardMoveInput.panningSensibility = 50;
BABYLON.ArcRotateCameraKeyboardMoveInput.zoomingSensibility = 25;
BABYLON.ArcRotateCameraKeyboardMoveInput.useAltToZoom = true;
BABYLON.ArcRotateCameraKeyboardMoveInput.angularSpeed = 0.01;
BABYLON.ArcRotateCameraKeyboardMoveInput.prototype.attachControl = function () {};
BABYLON.ArcRotateCameraKeyboardMoveInput.prototype.detachControl = function () {};
BABYLON.ArcRotateCameraKeyboardMoveInput.prototype.checkInputs = function () {};
BABYLON.ArcRotateCameraKeyboardMoveInput.prototype.getClassName = function () {};
BABYLON.ArcRotateCameraKeyboardMoveInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.ArcRotateCameraMouseWheelInput = function () {}
BABYLON.ArcRotateCameraMouseWheelInput.wheelPrecision = 3;
BABYLON.ArcRotateCameraMouseWheelInput.wheelDeltaPercentage = 0;
BABYLON.ArcRotateCameraMouseWheelInput.prototype.computeDeltaFromMouseWheelLegacyEvent = function () {};
BABYLON.ArcRotateCameraMouseWheelInput.prototype.attachControl = function () {};
BABYLON.ArcRotateCameraMouseWheelInput.prototype.detachControl = function () {};
BABYLON.ArcRotateCameraMouseWheelInput.prototype.getClassName = function () {};
BABYLON.ArcRotateCameraMouseWheelInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.ArcRotateCameraPointersInput = function () {}
BABYLON.ArcRotateCameraPointersInput.buttons = {};
BABYLON.ArcRotateCameraPointersInput.angularSensibilityX = 1000;
BABYLON.ArcRotateCameraPointersInput.angularSensibilityY = 1000;
BABYLON.ArcRotateCameraPointersInput.pinchPrecision = 12;
BABYLON.ArcRotateCameraPointersInput.pinchDeltaPercentage = 0;
BABYLON.ArcRotateCameraPointersInput.useNaturalPinchZoom = false;
BABYLON.ArcRotateCameraPointersInput.panningSensibility = 1000;
BABYLON.ArcRotateCameraPointersInput.multiTouchPanning = true;
BABYLON.ArcRotateCameraPointersInput.multiTouchPanAndZoom = true;
BABYLON.ArcRotateCameraPointersInput.pinchInwards = true;
BABYLON.ArcRotateCameraPointersInput.prototype.constructor = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.getClassName = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.onTouch = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.onDoubleTap = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.onMultiTouch = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.onButtonDown = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.onButtonUp = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.onLostFocus = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.attachControl = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.detachControl = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.getSimpleName = function () {};
BABYLON.ArcRotateCameraPointersInput.prototype.onContextMenu = function () {};


/** @constructor */
BABYLON.ArcRotateCameraVRDeviceOrientationInput = function () {}
BABYLON.ArcRotateCameraVRDeviceOrientationInput.alphaCorrection = 1;
BABYLON.ArcRotateCameraVRDeviceOrientationInput.gammaCorrection = 1;
BABYLON.ArcRotateCameraVRDeviceOrientationInput.prototype.attachControl = function () {};
BABYLON.ArcRotateCameraVRDeviceOrientationInput.prototype.checkInputs = function () {};
BABYLON.ArcRotateCameraVRDeviceOrientationInput.prototype.detachControl = function () {};
BABYLON.ArcRotateCameraVRDeviceOrientationInput.prototype.getClassName = function () {};
BABYLON.ArcRotateCameraVRDeviceOrientationInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.FlyCameraKeyboardInput = function () {}
BABYLON.FlyCameraKeyboardInput.keysForward = {};
BABYLON.FlyCameraKeyboardInput.keysBackward = {};
BABYLON.FlyCameraKeyboardInput.keysUp = {};
BABYLON.FlyCameraKeyboardInput.keysDown = {};
BABYLON.FlyCameraKeyboardInput.keysRight = {};
BABYLON.FlyCameraKeyboardInput.keysLeft = {};
BABYLON.FlyCameraKeyboardInput.prototype.attachControl = function () {};
BABYLON.FlyCameraKeyboardInput.prototype.detachControl = function () {};
BABYLON.FlyCameraKeyboardInput.prototype.getClassName = function () {};
BABYLON.FlyCameraKeyboardInput.prototype.getSimpleName = function () {};
BABYLON.FlyCameraKeyboardInput.prototype.checkInputs = function () {};


/** @constructor */
BABYLON.FlyCameraMouseInput = function () {}
BABYLON.FlyCameraMouseInput.buttons = {};
BABYLON.FlyCameraMouseInput.buttonsYaw = {};
BABYLON.FlyCameraMouseInput.buttonsPitch = {};
BABYLON.FlyCameraMouseInput.buttonsRoll = {};
BABYLON.FlyCameraMouseInput.activeButton = -1;
BABYLON.FlyCameraMouseInput.angularSensibility = 1000;
BABYLON.FlyCameraMouseInput.previousPosition = null;
BABYLON.FlyCameraMouseInput.prototype.attachControl = function () {};
BABYLON.FlyCameraMouseInput.prototype.detachControl = function () {};
BABYLON.FlyCameraMouseInput.prototype.getClassName = function () {};
BABYLON.FlyCameraMouseInput.prototype.getSimpleName = function () {};
BABYLON.FlyCameraMouseInput.prototype.rotateCamera = function () {};


/** @constructor */
BABYLON.FollowCameraKeyboardMoveInput = function () {}
BABYLON.FollowCameraKeyboardMoveInput.keysHeightOffsetIncr = {};
BABYLON.FollowCameraKeyboardMoveInput.keysHeightOffsetDecr = {};
BABYLON.FollowCameraKeyboardMoveInput.keysHeightOffsetModifierAlt = false;
BABYLON.FollowCameraKeyboardMoveInput.keysHeightOffsetModifierCtrl = false;
BABYLON.FollowCameraKeyboardMoveInput.keysHeightOffsetModifierShift = false;
BABYLON.FollowCameraKeyboardMoveInput.keysRotationOffsetIncr = {};
BABYLON.FollowCameraKeyboardMoveInput.keysRotationOffsetDecr = {};
BABYLON.FollowCameraKeyboardMoveInput.keysRotationOffsetModifierAlt = false;
BABYLON.FollowCameraKeyboardMoveInput.keysRotationOffsetModifierCtrl = false;
BABYLON.FollowCameraKeyboardMoveInput.keysRotationOffsetModifierShift = false;
BABYLON.FollowCameraKeyboardMoveInput.keysRadiusIncr = {};
BABYLON.FollowCameraKeyboardMoveInput.keysRadiusDecr = {};
BABYLON.FollowCameraKeyboardMoveInput.keysRadiusModifierAlt = true;
BABYLON.FollowCameraKeyboardMoveInput.keysRadiusModifierCtrl = false;
BABYLON.FollowCameraKeyboardMoveInput.keysRadiusModifierShift = false;
BABYLON.FollowCameraKeyboardMoveInput.heightSensibility = 1;
BABYLON.FollowCameraKeyboardMoveInput.rotationSensibility = 1;
BABYLON.FollowCameraKeyboardMoveInput.radiusSensibility = 1;
BABYLON.FollowCameraKeyboardMoveInput.prototype.attachControl = function () {};
BABYLON.FollowCameraKeyboardMoveInput.prototype.detachControl = function () {};
BABYLON.FollowCameraKeyboardMoveInput.prototype.checkInputs = function () {};
BABYLON.FollowCameraKeyboardMoveInput.prototype.getClassName = function () {};
BABYLON.FollowCameraKeyboardMoveInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.FollowCameraMouseWheelInput = function () {}
BABYLON.FollowCameraMouseWheelInput.axisControlRadius = true;
BABYLON.FollowCameraMouseWheelInput.axisControlHeight = false;
BABYLON.FollowCameraMouseWheelInput.axisControlRotation = false;
BABYLON.FollowCameraMouseWheelInput.wheelPrecision = 3;
BABYLON.FollowCameraMouseWheelInput.wheelDeltaPercentage = 0;
BABYLON.FollowCameraMouseWheelInput.prototype.attachControl = function () {};
BABYLON.FollowCameraMouseWheelInput.prototype.detachControl = function () {};
BABYLON.FollowCameraMouseWheelInput.prototype.getClassName = function () {};
BABYLON.FollowCameraMouseWheelInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.FollowCameraPointersInput = function () {}
BABYLON.FollowCameraPointersInput.buttons = {};
BABYLON.FollowCameraPointersInput.angularSensibilityX = 1;
BABYLON.FollowCameraPointersInput.angularSensibilityY = 1;
BABYLON.FollowCameraPointersInput.pinchPrecision = 10000;
BABYLON.FollowCameraPointersInput.pinchDeltaPercentage = 0;
BABYLON.FollowCameraPointersInput.axisXControlRadius = false;
BABYLON.FollowCameraPointersInput.axisXControlHeight = false;
BABYLON.FollowCameraPointersInput.axisXControlRotation = true;
BABYLON.FollowCameraPointersInput.axisYControlRadius = false;
BABYLON.FollowCameraPointersInput.axisYControlHeight = true;
BABYLON.FollowCameraPointersInput.axisYControlRotation = false;
BABYLON.FollowCameraPointersInput.axisPinchControlRadius = true;
BABYLON.FollowCameraPointersInput.axisPinchControlHeight = false;
BABYLON.FollowCameraPointersInput.axisPinchControlRotation = false;
BABYLON.FollowCameraPointersInput.warningEnable = true;
BABYLON.FollowCameraPointersInput.prototype.constructor = function () {};
BABYLON.FollowCameraPointersInput.prototype.getClassName = function () {};
BABYLON.FollowCameraPointersInput.prototype.onTouch = function () {};
BABYLON.FollowCameraPointersInput.prototype.onMultiTouch = function () {};
BABYLON.FollowCameraPointersInput.prototype.attachControl = function () {};
BABYLON.FollowCameraPointersInput.prototype.detachControl = function () {};
BABYLON.FollowCameraPointersInput.prototype.getSimpleName = function () {};
BABYLON.FollowCameraPointersInput.prototype.onDoubleTap = function () {};
BABYLON.FollowCameraPointersInput.prototype.onContextMenu = function () {};
BABYLON.FollowCameraPointersInput.prototype.onButtonDown = function () {};
BABYLON.FollowCameraPointersInput.prototype.onButtonUp = function () {};
BABYLON.FollowCameraPointersInput.prototype.onLostFocus = function () {};


/** @constructor */
BABYLON.FreeCameraDeviceOrientationInput = function () {}
// BABYLON.FreeCameraDeviceOrientationInput.prototype.camera = undefined;
BABYLON.FreeCameraDeviceOrientationInput.prototype.attachControl = function () {};
BABYLON.FreeCameraDeviceOrientationInput.prototype.detachControl = function () {};
BABYLON.FreeCameraDeviceOrientationInput.prototype.checkInputs = function () {};
BABYLON.FreeCameraDeviceOrientationInput.prototype.getClassName = function () {};
BABYLON.FreeCameraDeviceOrientationInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.FreeCameraGamepadInput = function () {}
BABYLON.FreeCameraGamepadInput.gamepadAngularSensibility = 200;
BABYLON.FreeCameraGamepadInput.gamepadMoveSensibility = 40;
BABYLON.FreeCameraGamepadInput.prototype.invertYAxis = true;
BABYLON.FreeCameraGamepadInput.prototype.attachControl = function () {};
BABYLON.FreeCameraGamepadInput.prototype.detachControl = function () {};
BABYLON.FreeCameraGamepadInput.prototype.checkInputs = function () {};
BABYLON.FreeCameraGamepadInput.prototype.getClassName = function () {};
BABYLON.FreeCameraGamepadInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.FreeCameraKeyboardMoveInput = function () {}
BABYLON.FreeCameraKeyboardMoveInput.keysUp = {};
BABYLON.FreeCameraKeyboardMoveInput.keysDown = {};
BABYLON.FreeCameraKeyboardMoveInput.keysLeft = {};
BABYLON.FreeCameraKeyboardMoveInput.keysRight = {};
BABYLON.FreeCameraKeyboardMoveInput.prototype.attachControl = function () {};
BABYLON.FreeCameraKeyboardMoveInput.prototype.detachControl = function () {};
BABYLON.FreeCameraKeyboardMoveInput.prototype.checkInputs = function () {};
BABYLON.FreeCameraKeyboardMoveInput.prototype.getClassName = function () {};
BABYLON.FreeCameraKeyboardMoveInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.FreeCameraMouseInput = function () {}
BABYLON.FreeCameraMouseInput.touchEnabled = true;
BABYLON.FreeCameraMouseInput.buttons = {};
BABYLON.FreeCameraMouseInput.angularSensibility = 2000;
BABYLON.FreeCameraMouseInput.previousPosition = null;
BABYLON.FreeCameraMouseInput.onPointerMovedObservable = {};
BABYLON.FreeCameraMouseInput.prototype.attachControl = function () {};
BABYLON.FreeCameraMouseInput.prototype.onContextMenu = function () {};
BABYLON.FreeCameraMouseInput.prototype.detachControl = function () {};
BABYLON.FreeCameraMouseInput.prototype.getClassName = function () {};
BABYLON.FreeCameraMouseInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.FreeCameraTouchInput = function () {}
BABYLON.FreeCameraTouchInput.touchAngularSensibility = 200000;
BABYLON.FreeCameraTouchInput.touchMoveSensibility = 250;
BABYLON.FreeCameraTouchInput.prototype.attachControl = function () {};
BABYLON.FreeCameraTouchInput.prototype.detachControl = function () {};
BABYLON.FreeCameraTouchInput.prototype.checkInputs = function () {};
BABYLON.FreeCameraTouchInput.prototype.getClassName = function () {};
BABYLON.FreeCameraTouchInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.FreeCameraVirtualJoystickInput = function () {}
BABYLON.FreeCameraVirtualJoystickInput.prototype.getLeftJoystick = function () {};
BABYLON.FreeCameraVirtualJoystickInput.prototype.getRightJoystick = function () {};
BABYLON.FreeCameraVirtualJoystickInput.prototype.checkInputs = function () {};
BABYLON.FreeCameraVirtualJoystickInput.prototype.attachControl = function () {};
BABYLON.FreeCameraVirtualJoystickInput.prototype.detachControl = function () {};
BABYLON.FreeCameraVirtualJoystickInput.prototype.getClassName = function () {};
BABYLON.FreeCameraVirtualJoystickInput.prototype.getSimpleName = function () {};


/** @constructor */
BABYLON.AnaglyphArcRotateCamera = function () {}
BABYLON.AnaglyphArcRotateCamera.prototype.GetConstructorFromName = function () {};
BABYLON.AnaglyphArcRotateCamera.prototype.Parse = function () {};
BABYLON.AnaglyphArcRotateCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.AnaglyphArcRotateCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.AnaglyphArcRotateCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.AnaglyphArcRotateCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.AnaglyphArcRotateCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.AnaglyphArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.AnaglyphArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.AnaglyphArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.AnaglyphArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.AnaglyphArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.AnaglyphArcRotateCamera.prototype.RIG_MODE_VR = 20;
BABYLON.AnaglyphArcRotateCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.AnaglyphArcRotateCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.AnaglyphArcRotateCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.AnaglyphArcRotateCamera.prototype.AddNodeConstructor = function () {};
BABYLON.AnaglyphArcRotateCamera.prototype.Construct = function () {};
BABYLON.AnaglyphArcRotateCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.AnaglyphFreeCamera = function () {}
BABYLON.AnaglyphFreeCamera.prototype.GetConstructorFromName = function () {};
BABYLON.AnaglyphFreeCamera.prototype.Parse = function () {};
BABYLON.AnaglyphFreeCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.AnaglyphFreeCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.AnaglyphFreeCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.AnaglyphFreeCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.AnaglyphFreeCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.AnaglyphFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.AnaglyphFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.AnaglyphFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.AnaglyphFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.AnaglyphFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.AnaglyphFreeCamera.prototype.RIG_MODE_VR = 20;
BABYLON.AnaglyphFreeCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.AnaglyphFreeCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.AnaglyphFreeCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.AnaglyphFreeCamera.prototype.AddNodeConstructor = function () {};
BABYLON.AnaglyphFreeCamera.prototype.Construct = function () {};
BABYLON.AnaglyphFreeCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.AnaglyphGamepadCamera = function () {}
BABYLON.AnaglyphGamepadCamera.prototype.GetConstructorFromName = function () {};
BABYLON.AnaglyphGamepadCamera.prototype.Parse = function () {};
BABYLON.AnaglyphGamepadCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.AnaglyphGamepadCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.AnaglyphGamepadCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.AnaglyphGamepadCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.AnaglyphGamepadCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.AnaglyphGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.AnaglyphGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.AnaglyphGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.AnaglyphGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.AnaglyphGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.AnaglyphGamepadCamera.prototype.RIG_MODE_VR = 20;
BABYLON.AnaglyphGamepadCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.AnaglyphGamepadCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.AnaglyphGamepadCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.AnaglyphGamepadCamera.prototype.AddNodeConstructor = function () {};
BABYLON.AnaglyphGamepadCamera.prototype.Construct = function () {};
BABYLON.AnaglyphGamepadCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.AnaglyphUniversalCamera = function () {}
BABYLON.AnaglyphUniversalCamera.prototype.GetConstructorFromName = function () {};
BABYLON.AnaglyphUniversalCamera.prototype.Parse = function () {};
BABYLON.AnaglyphUniversalCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.AnaglyphUniversalCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.AnaglyphUniversalCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.AnaglyphUniversalCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.AnaglyphUniversalCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.AnaglyphUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.AnaglyphUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.AnaglyphUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.AnaglyphUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.AnaglyphUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.AnaglyphUniversalCamera.prototype.RIG_MODE_VR = 20;
BABYLON.AnaglyphUniversalCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.AnaglyphUniversalCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.AnaglyphUniversalCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.AnaglyphUniversalCamera.prototype.AddNodeConstructor = function () {};
BABYLON.AnaglyphUniversalCamera.prototype.Construct = function () {};
BABYLON.AnaglyphUniversalCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.StereoscopicArcRotateCamera = function () {}
BABYLON.StereoscopicArcRotateCamera.prototype.GetConstructorFromName = function () {};
BABYLON.StereoscopicArcRotateCamera.prototype.Parse = function () {};
BABYLON.StereoscopicArcRotateCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.StereoscopicArcRotateCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.StereoscopicArcRotateCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.StereoscopicArcRotateCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.StereoscopicArcRotateCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.StereoscopicArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.StereoscopicArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.StereoscopicArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.StereoscopicArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.StereoscopicArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.StereoscopicArcRotateCamera.prototype.RIG_MODE_VR = 20;
BABYLON.StereoscopicArcRotateCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.StereoscopicArcRotateCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.StereoscopicArcRotateCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.StereoscopicArcRotateCamera.prototype.AddNodeConstructor = function () {};
BABYLON.StereoscopicArcRotateCamera.prototype.Construct = function () {};
BABYLON.StereoscopicArcRotateCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.StereoscopicFreeCamera = function () {}
BABYLON.StereoscopicFreeCamera.prototype.GetConstructorFromName = function () {};
BABYLON.StereoscopicFreeCamera.prototype.Parse = function () {};
BABYLON.StereoscopicFreeCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.StereoscopicFreeCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.StereoscopicFreeCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.StereoscopicFreeCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.StereoscopicFreeCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.StereoscopicFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.StereoscopicFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.StereoscopicFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.StereoscopicFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.StereoscopicFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.StereoscopicFreeCamera.prototype.RIG_MODE_VR = 20;
BABYLON.StereoscopicFreeCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.StereoscopicFreeCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.StereoscopicFreeCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.StereoscopicFreeCamera.prototype.AddNodeConstructor = function () {};
BABYLON.StereoscopicFreeCamera.prototype.Construct = function () {};
BABYLON.StereoscopicFreeCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.StereoscopicGamepadCamera = function () {}
BABYLON.StereoscopicGamepadCamera.prototype.GetConstructorFromName = function () {};
BABYLON.StereoscopicGamepadCamera.prototype.Parse = function () {};
BABYLON.StereoscopicGamepadCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.StereoscopicGamepadCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.StereoscopicGamepadCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.StereoscopicGamepadCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.StereoscopicGamepadCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.StereoscopicGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.StereoscopicGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.StereoscopicGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.StereoscopicGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.StereoscopicGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.StereoscopicGamepadCamera.prototype.RIG_MODE_VR = 20;
BABYLON.StereoscopicGamepadCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.StereoscopicGamepadCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.StereoscopicGamepadCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.StereoscopicGamepadCamera.prototype.AddNodeConstructor = function () {};
BABYLON.StereoscopicGamepadCamera.prototype.Construct = function () {};
BABYLON.StereoscopicGamepadCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.StereoscopicUniversalCamera = function () {}
BABYLON.StereoscopicUniversalCamera.prototype.GetConstructorFromName = function () {};
BABYLON.StereoscopicUniversalCamera.prototype.Parse = function () {};
BABYLON.StereoscopicUniversalCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.StereoscopicUniversalCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.StereoscopicUniversalCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.StereoscopicUniversalCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.StereoscopicUniversalCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.StereoscopicUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.StereoscopicUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.StereoscopicUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.StereoscopicUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.StereoscopicUniversalCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.StereoscopicUniversalCamera.prototype.RIG_MODE_VR = 20;
BABYLON.StereoscopicUniversalCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.StereoscopicUniversalCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.StereoscopicUniversalCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.StereoscopicUniversalCamera.prototype.AddNodeConstructor = function () {};
BABYLON.StereoscopicUniversalCamera.prototype.Construct = function () {};
BABYLON.StereoscopicUniversalCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.VRCameraMetrics = function () {}
BABYLON.VRCameraMetrics.compensateDistortion = true;
BABYLON.VRCameraMetrics.multiviewEnabled = false;
BABYLON.VRCameraMetrics.prototype.aspectRatio = NaN;
BABYLON.VRCameraMetrics.prototype.aspectRatioFov = NaN;
BABYLON.VRCameraMetrics.prototype.leftHMatrix = {};
BABYLON.VRCameraMetrics.prototype.rightHMatrix = {};
BABYLON.VRCameraMetrics.prototype.leftPreViewMatrix = {};
BABYLON.VRCameraMetrics.prototype.rightPreViewMatrix = {};


/** @constructor */
BABYLON.VRDeviceOrientationArcRotateCamera = function () {}
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.GetConstructorFromName = function () {};
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.Parse = function () {};
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.RIG_MODE_VR = 20;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.AddNodeConstructor = function () {};
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.Construct = function () {};
BABYLON.VRDeviceOrientationArcRotateCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.VRDeviceOrientationFreeCamera = function () {}
BABYLON.VRDeviceOrientationFreeCamera.prototype.GetConstructorFromName = function () {};
BABYLON.VRDeviceOrientationFreeCamera.prototype.Parse = function () {};
BABYLON.VRDeviceOrientationFreeCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.VRDeviceOrientationFreeCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.VRDeviceOrientationFreeCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.VRDeviceOrientationFreeCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.VRDeviceOrientationFreeCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.VRDeviceOrientationFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.VRDeviceOrientationFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.VRDeviceOrientationFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.VRDeviceOrientationFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.VRDeviceOrientationFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.VRDeviceOrientationFreeCamera.prototype.RIG_MODE_VR = 20;
BABYLON.VRDeviceOrientationFreeCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.VRDeviceOrientationFreeCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.VRDeviceOrientationFreeCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.VRDeviceOrientationFreeCamera.prototype.AddNodeConstructor = function () {};
BABYLON.VRDeviceOrientationFreeCamera.prototype.Construct = function () {};
BABYLON.VRDeviceOrientationFreeCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.VRDeviceOrientationGamepadCamera = function () {}
BABYLON.VRDeviceOrientationGamepadCamera.prototype.GetConstructorFromName = function () {};
BABYLON.VRDeviceOrientationGamepadCamera.prototype.Parse = function () {};
BABYLON.VRDeviceOrientationGamepadCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.RIG_MODE_VR = 20;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.VRDeviceOrientationGamepadCamera.prototype.AddNodeConstructor = function () {};
BABYLON.VRDeviceOrientationGamepadCamera.prototype.Construct = function () {};
BABYLON.VRDeviceOrientationGamepadCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.OnAfterEnteringVRObservableEvent = function () {}


/** @constructor */
BABYLON.VRExperienceHelper = function () {}
BABYLON.VRExperienceHelper.TELEPORTATIONMODE_CONSTANTTIME = 0;
BABYLON.VRExperienceHelper.TELEPORTATIONMODE_CONSTANTSPEED = 1;


/** @constructor */
BABYLON.WebVRFreeCamera = function () {}
BABYLON.WebVRFreeCamera.prototype.GetConstructorFromName = function () {};
BABYLON.WebVRFreeCamera.prototype.Parse = function () {};
BABYLON.WebVRFreeCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.WebVRFreeCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.WebVRFreeCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.WebVRFreeCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.WebVRFreeCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.WebVRFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.WebVRFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.WebVRFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.WebVRFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.WebVRFreeCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.WebVRFreeCamera.prototype.RIG_MODE_VR = 20;
BABYLON.WebVRFreeCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.WebVRFreeCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.WebVRFreeCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.WebVRFreeCamera.prototype.AddNodeConstructor = function () {};
BABYLON.WebVRFreeCamera.prototype.Construct = function () {};
BABYLON.WebVRFreeCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.Collider = function () {}
// BABYLON.Collider.prototype.collisionMask = undefined;
// BABYLON.Collider.prototype.slidePlaneNormal = undefined;


/** @constructor */
BABYLON.DefaultCollisionCoordinator = function () {}
BABYLON.DefaultCollisionCoordinator.prototype.getNewPosition = function () {};
BABYLON.DefaultCollisionCoordinator.prototype.createCollider = function () {};
BABYLON.DefaultCollisionCoordinator.prototype.init = function () {};


/** @constructor */
BABYLON.PickingInfo = function () {}
BABYLON.PickingInfo.hit = false;
BABYLON.PickingInfo.distance = 0;
BABYLON.PickingInfo.pickedPoint = null;
BABYLON.PickingInfo.pickedMesh = null;
BABYLON.PickingInfo.bu = 0;
BABYLON.PickingInfo.bv = 0;
BABYLON.PickingInfo.faceId = -1;
BABYLON.PickingInfo.subMeshId = 0;
BABYLON.PickingInfo.pickedSprite = null;
BABYLON.PickingInfo.originMesh = null;
BABYLON.PickingInfo.ray = null;
BABYLON.PickingInfo.prototype.getNormal = function () {};
BABYLON.PickingInfo.prototype.getTextureCoordinates = function () {};


/** @constructor */
BABYLON.IntersectionInfo = function () {}
// BABYLON.IntersectionInfo.bu = undefined;
// BABYLON.IntersectionInfo.bv = undefined;
// BABYLON.IntersectionInfo.distance = undefined;
BABYLON.IntersectionInfo.faceId = 0;
BABYLON.IntersectionInfo.subMeshId = 0;


/** @constructor */
BABYLON.BoundingBox = function () {}
BABYLON.BoundingBox.Intersects = function () {};
BABYLON.BoundingBox.IntersectsSphere = function () {};
BABYLON.BoundingBox.IsCompletelyInFrustum = function () {};
BABYLON.BoundingBox.IsInFrustum = function () {};
BABYLON.BoundingBox.TmpVector3 = {};


/** @constructor */
BABYLON.BoundingInfo = function () {}
BABYLON.BoundingInfo.TmpVector3 = {};


/** @constructor */
BABYLON.BoundingSphere = function () {}
BABYLON.BoundingSphere.Intersects = function () {};
BABYLON.BoundingSphere.TmpVector3 = {};


/** @constructor */
BABYLON.Ray = function () {}
// BABYLON.Ray.origin = undefined;
// BABYLON.Ray.direction = undefined;
BABYLON.Ray.length = 1.7976931348623157e+308;
BABYLON.Ray.prototype.intersectsBoxMinMax = function () {};
BABYLON.Ray.prototype.intersectsBox = function () {};
BABYLON.Ray.prototype.intersectsSphere = function () {};
BABYLON.Ray.prototype.intersectsTriangle = function () {};
BABYLON.Ray.prototype.intersectsPlane = function () {};
BABYLON.Ray.prototype.intersectsAxis = function () {};
BABYLON.Ray.prototype.intersectsMesh = function () {};
BABYLON.Ray.prototype.intersectsMeshes = function () {};
BABYLON.Ray.prototype.intersectionSegment = function () {};
BABYLON.Ray.prototype.update = function () {};
BABYLON.Ray.prototype.unprojectRayToRef = function () {};


/** @constructor */
BABYLON.Octree = function () {}
BABYLON.Octree.maxDepth = 2;
BABYLON.Octree.dynamicContent = {};
BABYLON.Octree.prototype.update = function () {};
BABYLON.Octree.prototype.addMesh = function () {};
BABYLON.Octree.prototype.removeMesh = function () {};
BABYLON.Octree.prototype.select = function () {};
BABYLON.Octree.prototype.intersects = function () {};
BABYLON.Octree.prototype.intersectsRay = function () {};


/** @constructor */
BABYLON.OctreeBlock = function () {}


/** @constructor */
BABYLON.OctreeSceneComponent = function () {}


/** @constructor */
BABYLON.AxesViewer = function () {}


/** @constructor */
BABYLON.BoneAxesViewer = function () {}


BABYLON.DebugLayerTab = {}

/** @constructor */
BABYLON.DebugLayer = function () {}
BABYLON.DebugLayer.InspectorURL = "https://unpkg.com/babylonjs-inspector@4.1.0/babylon.inspector.bundle.js";


/** @constructor */
BABYLON.PhysicsViewer = function () {}


/** @constructor */
BABYLON.RayHelper = function () {}
// BABYLON.RayHelper.ray = undefined;
BABYLON.RayHelper.prototype.show = function () {};
BABYLON.RayHelper.prototype.hide = function () {};
BABYLON.RayHelper.prototype.attachToMesh = function () {};
BABYLON.RayHelper.prototype.detachFromMesh = function () {};
BABYLON.RayHelper.prototype.dispose = function () {};


/** @constructor */
BABYLON.SkeletonViewer = function () {}


/** @constructor */
BABYLON.Constants = function () {}


/** @constructor */
BABYLON.ThinEngine = function () {}
BABYLON.ThinEngine.forcePOTTextures = false;
BABYLON.ThinEngine.isFullscreen = false;
BABYLON.ThinEngine.cullBackFaces = true;
BABYLON.ThinEngine.renderEvenInBackground = true;
BABYLON.ThinEngine.preventCacheWipeBetweenFrames = false;
BABYLON.ThinEngine.validateShaderPrograms = false;
BABYLON.ThinEngine.useReverseDepthBuffer = false;
BABYLON.ThinEngine.disableUniformBuffers = false;
BABYLON.ThinEngine.onContextLostObservable = {};
BABYLON.ThinEngine.onContextRestoredObservable = {};
BABYLON.ThinEngine.disableVertexArrayObjects = false;
BABYLON.ThinEngine.premultipliedAlpha = true;
BABYLON.ThinEngine.onBeforeTextureInitObservable = {};
BABYLON.ThinEngine.enableUnpackFlipYCached = true;
// BABYLON.ThinEngine.prototype.description = undefined;
BABYLON.ThinEngine.prototype.supportsUniformBuffers = false;
// BABYLON.ThinEngine.prototype.needPOTTextures = undefined;
// BABYLON.ThinEngine.prototype.doNotHandleContextLost = undefined;
// BABYLON.ThinEngine.prototype.framebufferDimensionsObject = undefined;
// BABYLON.ThinEngine.prototype.texturesSupported = undefined;
// BABYLON.ThinEngine.prototype.textureFormatInUse = undefined;
// BABYLON.ThinEngine.prototype.currentViewport = undefined;
// BABYLON.ThinEngine.prototype.emptyTexture = undefined;
// BABYLON.ThinEngine.prototype.emptyTexture3D = undefined;
// BABYLON.ThinEngine.prototype.emptyTexture2DArray = undefined;
// BABYLON.ThinEngine.prototype.emptyCubeTexture = undefined;
BABYLON.ThinEngine.prototype.areAllEffectsReady = function () {};
// BABYLON.ThinEngine.prototype.webGLVersion = undefined;
BABYLON.ThinEngine.prototype.getClassName = function () {};
// BABYLON.ThinEngine.prototype.isStencilEnable = undefined;
BABYLON.ThinEngine.prototype.resetTextureCache = function () {};
BABYLON.ThinEngine.prototype.getGlInfo = function () {};
BABYLON.ThinEngine.prototype.setHardwareScalingLevel = function () {};
BABYLON.ThinEngine.prototype.getHardwareScalingLevel = function () {};
BABYLON.ThinEngine.prototype.getLoadedTexturesCache = function () {};
BABYLON.ThinEngine.prototype.getCaps = function () {};
BABYLON.ThinEngine.prototype.stopRenderLoop = function () {};
BABYLON.ThinEngine.prototype.getRenderingCanvas = function () {};
BABYLON.ThinEngine.prototype.getHostWindow = function () {};
BABYLON.ThinEngine.prototype.getRenderWidth = function () {};
BABYLON.ThinEngine.prototype.getRenderHeight = function () {};
BABYLON.ThinEngine.prototype.runRenderLoop = function () {};
BABYLON.ThinEngine.prototype.clear = function () {};
BABYLON.ThinEngine.prototype.setViewport = function () {};
BABYLON.ThinEngine.prototype.beginFrame = function () {};
BABYLON.ThinEngine.prototype.endFrame = function () {};
BABYLON.ThinEngine.prototype.resize = function () {};
BABYLON.ThinEngine.prototype.setSize = function () {};
BABYLON.ThinEngine.prototype.bindFramebuffer = function () {};
BABYLON.ThinEngine.prototype.unBindFramebuffer = function () {};
BABYLON.ThinEngine.prototype.flushFramebuffer = function () {};
BABYLON.ThinEngine.prototype.restoreDefaultFramebuffer = function () {};
BABYLON.ThinEngine.prototype.createVertexBuffer = function () {};
BABYLON.ThinEngine.prototype.createDynamicVertexBuffer = function () {};
BABYLON.ThinEngine.prototype.createIndexBuffer = function () {};
BABYLON.ThinEngine.prototype.bindArrayBuffer = function () {};
BABYLON.ThinEngine.prototype.bindUniformBlock = function () {};
BABYLON.ThinEngine.prototype.bindIndexBuffer = function () {};
BABYLON.ThinEngine.prototype.bindBuffer = function () {};
BABYLON.ThinEngine.prototype.updateArrayBuffer = function () {};
BABYLON.ThinEngine.prototype.recordVertexArrayObject = function () {};
BABYLON.ThinEngine.prototype.bindVertexArrayObject = function () {};
BABYLON.ThinEngine.prototype.bindBuffersDirectly = function () {};
BABYLON.ThinEngine.prototype.bindBuffers = function () {};
BABYLON.ThinEngine.prototype.unbindInstanceAttributes = function () {};
BABYLON.ThinEngine.prototype.releaseVertexArrayObject = function () {};
BABYLON.ThinEngine.prototype.updateAndBindInstancesBuffer = function () {};
BABYLON.ThinEngine.prototype.bindInstancesBuffer = function () {};
BABYLON.ThinEngine.prototype.disableInstanceAttributeByName = function () {};
BABYLON.ThinEngine.prototype.disableInstanceAttribute = function () {};
BABYLON.ThinEngine.prototype.disableAttributeByIndex = function () {};
BABYLON.ThinEngine.prototype.draw = function () {};
BABYLON.ThinEngine.prototype.drawPointClouds = function () {};
BABYLON.ThinEngine.prototype.drawUnIndexed = function () {};
BABYLON.ThinEngine.prototype.drawElementsType = function () {};
BABYLON.ThinEngine.prototype.drawArraysType = function () {};
BABYLON.ThinEngine.prototype.createEffect = function () {};
BABYLON.ThinEngine.prototype.createRawShaderProgram = function () {};
BABYLON.ThinEngine.prototype.createShaderProgram = function () {};
BABYLON.ThinEngine.prototype.createPipelineContext = function () {};
BABYLON.ThinEngine.prototype.getUniforms = function () {};
BABYLON.ThinEngine.prototype.getAttributes = function () {};
BABYLON.ThinEngine.prototype.enableEffect = function () {};
BABYLON.ThinEngine.prototype.setInt = function () {};
BABYLON.ThinEngine.prototype.setIntArray = function () {};
BABYLON.ThinEngine.prototype.setIntArray2 = function () {};
BABYLON.ThinEngine.prototype.setIntArray3 = function () {};
BABYLON.ThinEngine.prototype.setIntArray4 = function () {};
BABYLON.ThinEngine.prototype.setArray = function () {};
BABYLON.ThinEngine.prototype.setArray2 = function () {};
BABYLON.ThinEngine.prototype.setArray3 = function () {};
BABYLON.ThinEngine.prototype.setArray4 = function () {};
BABYLON.ThinEngine.prototype.setMatrices = function () {};
BABYLON.ThinEngine.prototype.setMatrix3x3 = function () {};
BABYLON.ThinEngine.prototype.setMatrix2x2 = function () {};
BABYLON.ThinEngine.prototype.setFloat = function () {};
BABYLON.ThinEngine.prototype.setFloat2 = function () {};
BABYLON.ThinEngine.prototype.setFloat3 = function () {};
BABYLON.ThinEngine.prototype.setFloat4 = function () {};
BABYLON.ThinEngine.prototype.applyStates = function () {};
BABYLON.ThinEngine.prototype.setColorWrite = function () {};
BABYLON.ThinEngine.prototype.getColorWrite = function () {};
// BABYLON.ThinEngine.prototype.depthCullingState = undefined;
// BABYLON.ThinEngine.prototype.alphaState = undefined;
// BABYLON.ThinEngine.prototype.stencilState = undefined;
BABYLON.ThinEngine.prototype.clearInternalTexturesCache = function () {};
BABYLON.ThinEngine.prototype.wipeCaches = function () {};
BABYLON.ThinEngine.prototype.createTexture = function () {};
BABYLON.ThinEngine.prototype.createRawTexture = function () {};
BABYLON.ThinEngine.prototype.createRawCubeTexture = function () {};
BABYLON.ThinEngine.prototype.createRawTexture3D = function () {};
BABYLON.ThinEngine.prototype.createRawTexture2DArray = function () {};
BABYLON.ThinEngine.prototype.updateTextureSamplingMode = function () {};
BABYLON.ThinEngine.prototype.updateTextureWrappingMode = function () {};
BABYLON.ThinEngine.prototype.updateTextureData = function () {};
BABYLON.ThinEngine.prototype.bindSamplers = function () {};
BABYLON.ThinEngine.prototype.unbindAllTextures = function () {};
BABYLON.ThinEngine.prototype.setTexture = function () {};
BABYLON.ThinEngine.prototype.setTextureArray = function () {};
BABYLON.ThinEngine.prototype.unbindAllAttributes = function () {};
BABYLON.ThinEngine.prototype.releaseEffects = function () {};
BABYLON.ThinEngine.prototype.dispose = function () {};
BABYLON.ThinEngine.prototype.attachContextLostEvent = function () {};
BABYLON.ThinEngine.prototype.attachContextRestoredEvent = function () {};
BABYLON.ThinEngine.prototype.getError = function () {};
BABYLON.ThinEngine.prototype.readPixels = function () {};
BABYLON.ThinEngine.prototype.getHostDocument = function () {};
BABYLON.ThinEngine.prototype.setAlphaConstants = function () {};
BABYLON.ThinEngine.prototype.setAlphaMode = function () {};
BABYLON.ThinEngine.prototype.getAlphaMode = function () {};
BABYLON.ThinEngine.prototype.setAlphaEquation = function () {};
BABYLON.ThinEngine.prototype.getAlphaEquation = function () {};
BABYLON.ThinEngine.prototype.createUniformBuffer = function () {};
BABYLON.ThinEngine.prototype.createDynamicUniformBuffer = function () {};
BABYLON.ThinEngine.prototype.updateUniformBuffer = function () {};
BABYLON.ThinEngine.prototype.bindUniformBuffer = function () {};
BABYLON.ThinEngine.prototype.bindUniformBufferBase = function () {};
BABYLON.ThinEngine.prototype.createRenderTargetTexture = function () {};
BABYLON.ThinEngine.prototype.createDepthStencilTexture = function () {};
BABYLON.ThinEngine.prototype.createRenderTargetCubeTexture = function () {};
BABYLON.ThinEngine.prototype.createDynamicTexture = function () {};
BABYLON.ThinEngine.prototype.updateDynamicTexture = function () {};
BABYLON.ThinEngine.prototype.createCubeTexture = function () {};
BABYLON.ThinEngine.prototype.createPrefilteredCubeTexture = function () {};
BABYLON.ThinEngine.prototype.updateVideoTexture = function () {};
BABYLON.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function () {};
BABYLON.ThinEngine.prototype.createMultipleRenderTarget = function () {};
BABYLON.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function () {};


/** @constructor */
BABYLON.Engine = function () {}
BABYLON.Engine.forcePOTTextures = false;
BABYLON.Engine.isFullscreen = false;
BABYLON.Engine.cullBackFaces = true;
BABYLON.Engine.renderEvenInBackground = true;
BABYLON.Engine.preventCacheWipeBetweenFrames = false;
BABYLON.Engine.validateShaderPrograms = false;
BABYLON.Engine.useReverseDepthBuffer = false;
BABYLON.Engine.disableUniformBuffers = false;
BABYLON.Engine.onContextLostObservable = {};
BABYLON.Engine.onContextRestoredObservable = {};
BABYLON.Engine.disableVertexArrayObjects = false;
BABYLON.Engine.premultipliedAlpha = true;
BABYLON.Engine.onBeforeTextureInitObservable = {};
BABYLON.Engine.enableUnpackFlipYCached = true;
BABYLON.Engine.enableOfflineSupport = false;
BABYLON.Engine.disableManifestCheck = false;
BABYLON.Engine.scenes = {};
BABYLON.Engine.onNewSceneAddedObservable = {};
BABYLON.Engine.postProcesses = {};
BABYLON.Engine.isPointerLock = false;
BABYLON.Engine.onResizeObservable = {};
BABYLON.Engine.onCanvasBlurObservable = {};
BABYLON.Engine.onCanvasFocusObservable = {};
BABYLON.Engine.onCanvasPointerOutObservable = {};
BABYLON.Engine.onBeginFrameObservable = {};
BABYLON.Engine.customAnimationFrameRequester = null;
BABYLON.Engine.onEndFrameObservable = {};
BABYLON.Engine.onBeforeShaderCompilationObservable = {};
BABYLON.Engine.onAfterShaderCompilationObservable = {};
BABYLON.Engine.canvasTabIndex = 1;
BABYLON.Engine.disablePerformanceMonitorInBackground = false;
BABYLON.Engine.prototype.constructor = function () {};
// BABYLON.Engine.prototype.performanceMonitor = undefined;
BABYLON.Engine.prototype.getInputElement = function () {};
BABYLON.Engine.prototype.getAspectRatio = function () {};
BABYLON.Engine.prototype.getScreenAspectRatio = function () {};
BABYLON.Engine.prototype.getRenderingCanvasClientRect = function () {};
BABYLON.Engine.prototype.getInputElementClientRect = function () {};
BABYLON.Engine.prototype.isDeterministicLockStep = function () {};
BABYLON.Engine.prototype.getLockstepMaxSteps = function () {};
BABYLON.Engine.prototype.getTimeStep = function () {};
BABYLON.Engine.prototype.generateMipMapsForCubemap = function () {};
BABYLON.Engine.prototype.setState = function () {};
BABYLON.Engine.prototype.setZOffset = function () {};
BABYLON.Engine.prototype.getZOffset = function () {};
BABYLON.Engine.prototype.setDepthBuffer = function () {};
BABYLON.Engine.prototype.getDepthWrite = function () {};
BABYLON.Engine.prototype.setDepthWrite = function () {};
BABYLON.Engine.prototype.getStencilBuffer = function () {};
BABYLON.Engine.prototype.setStencilBuffer = function () {};
BABYLON.Engine.prototype.getStencilMask = function () {};
BABYLON.Engine.prototype.setStencilMask = function () {};
BABYLON.Engine.prototype.getStencilFunction = function () {};
BABYLON.Engine.prototype.getStencilFunctionReference = function () {};
BABYLON.Engine.prototype.getStencilFunctionMask = function () {};
BABYLON.Engine.prototype.setStencilFunction = function () {};
BABYLON.Engine.prototype.setStencilFunctionReference = function () {};
BABYLON.Engine.prototype.setStencilFunctionMask = function () {};
BABYLON.Engine.prototype.getStencilOperationFail = function () {};
BABYLON.Engine.prototype.getStencilOperationDepthFail = function () {};
BABYLON.Engine.prototype.getStencilOperationPass = function () {};
BABYLON.Engine.prototype.setStencilOperationFail = function () {};
BABYLON.Engine.prototype.setStencilOperationDepthFail = function () {};
BABYLON.Engine.prototype.setStencilOperationPass = function () {};
BABYLON.Engine.prototype.setDitheringState = function () {};
BABYLON.Engine.prototype.setRasterizerState = function () {};
BABYLON.Engine.prototype.getDepthFunction = function () {};
BABYLON.Engine.prototype.setDepthFunction = function () {};
BABYLON.Engine.prototype.setDepthFunctionToGreater = function () {};
BABYLON.Engine.prototype.setDepthFunctionToGreaterOrEqual = function () {};
BABYLON.Engine.prototype.setDepthFunctionToLess = function () {};
BABYLON.Engine.prototype.setDepthFunctionToLessOrEqual = function () {};
BABYLON.Engine.prototype.cacheStencilState = function () {};
BABYLON.Engine.prototype.restoreStencilState = function () {};
BABYLON.Engine.prototype.setDirectViewport = function () {};
BABYLON.Engine.prototype.scissorClear = function () {};
BABYLON.Engine.prototype.enableScissor = function () {};
BABYLON.Engine.prototype.disableScissor = function () {};
BABYLON.Engine.prototype.initWebVR = function () {};
BABYLON.Engine.prototype.disableVR = function () {};
BABYLON.Engine.prototype.isVRPresenting = function () {};
BABYLON.Engine.prototype.getVertexShaderSource = function () {};
BABYLON.Engine.prototype.getFragmentShaderSource = function () {};
BABYLON.Engine.prototype.setDepthStencilTexture = function () {};
BABYLON.Engine.prototype.setTextureFromPostProcess = function () {};
BABYLON.Engine.prototype.setTextureFromPostProcessOutput = function () {};
BABYLON.Engine.prototype.switchFullscreen = function () {};
BABYLON.Engine.prototype.enterFullscreen = function () {};
BABYLON.Engine.prototype.exitFullscreen = function () {};
BABYLON.Engine.prototype.enterPointerlock = function () {};
BABYLON.Engine.prototype.exitPointerlock = function () {};
BABYLON.Engine.prototype.beginFrame = function () {};
BABYLON.Engine.prototype.endFrame = function () {};
BABYLON.Engine.prototype.resize = function () {};
BABYLON.Engine.prototype.setSize = function () {};
BABYLON.Engine.prototype.updateDynamicVertexBuffer = function () {};
BABYLON.Engine.prototype.createShaderProgram = function () {};
BABYLON.Engine.prototype.getFps = function () {};
BABYLON.Engine.prototype.getDeltaTime = function () {};
BABYLON.Engine.prototype.updateDynamicIndexBuffer = function () {};
BABYLON.Engine.prototype.updateRenderTargetTextureSampleCount = function () {};
BABYLON.Engine.prototype.updateTextureComparisonFunction = function () {};
BABYLON.Engine.prototype.createInstancesBuffer = function () {};
BABYLON.Engine.prototype.deleteInstancesBuffer = function () {};
BABYLON.Engine.prototype.dispose = function () {};
BABYLON.Engine.prototype.displayLoadingUI = function () {};
BABYLON.Engine.prototype.hideLoadingUI = function () {};
// BABYLON.Engine.prototype.loadingScreen = undefined;
// BABYLON.Engine.prototype.loadingUIText = undefined;
// BABYLON.Engine.prototype.loadingUIBackgroundColor = undefined;
BABYLON.Engine.prototype.updateRawTexture = function () {};
BABYLON.Engine.prototype.createRawTexture = function () {};
BABYLON.Engine.prototype.createRawCubeTexture = function () {};
BABYLON.Engine.prototype.updateRawCubeTexture = function () {};
BABYLON.Engine.prototype.createRawCubeTextureFromUrl = function () {};
BABYLON.Engine.prototype.createRawTexture2DArray = function () {};
BABYLON.Engine.prototype.createRawTexture3D = function () {};
BABYLON.Engine.prototype.updateRawTexture2DArray = function () {};
BABYLON.Engine.prototype.updateRawTexture3D = function () {};
BABYLON.Engine.prototype.createMultiviewRenderTargetTexture = function () {};
BABYLON.Engine.prototype.bindMultiviewFramebuffer = function () {};
// BABYLON.Engine.prototype.isInVRExclusivePointerMode = undefined;
BABYLON.Engine.prototype.isVRDevicePresent = function () {};
BABYLON.Engine.prototype.getVRDevice = function () {};
BABYLON.Engine.prototype.initWebVRAsync = function () {};
BABYLON.Engine.prototype.enableVR = function () {};
BABYLON.Engine.prototype.createQuery = function () {};
BABYLON.Engine.prototype.deleteQuery = function () {};
BABYLON.Engine.prototype.isQueryResultAvailable = function () {};
BABYLON.Engine.prototype.getQueryResult = function () {};
BABYLON.Engine.prototype.beginOcclusionQuery = function () {};
BABYLON.Engine.prototype.endOcclusionQuery = function () {};
BABYLON.Engine.prototype.startTimeQuery = function () {};
BABYLON.Engine.prototype.endTimeQuery = function () {};
BABYLON.Engine.prototype.createTransformFeedback = function () {};
BABYLON.Engine.prototype.deleteTransformFeedback = function () {};
BABYLON.Engine.prototype.bindTransformFeedback = function () {};
BABYLON.Engine.prototype.beginTransformFeedback = function () {};
BABYLON.Engine.prototype.endTransformFeedback = function () {};
BABYLON.Engine.prototype.setTranformFeedbackVaryings = function () {};
BABYLON.Engine.prototype.bindTransformFeedbackBuffer = function () {};
BABYLON.Engine.prototype.registerView = function () {};
BABYLON.Engine.prototype.unRegisterView = function () {};
BABYLON.Engine.prototype.createEffectForParticles = function () {};
// BABYLON.Engine.prototype.description = undefined;
BABYLON.Engine.prototype.supportsUniformBuffers = false;
// BABYLON.Engine.prototype.needPOTTextures = undefined;
// BABYLON.Engine.prototype.doNotHandleContextLost = undefined;
// BABYLON.Engine.prototype.framebufferDimensionsObject = undefined;
// BABYLON.Engine.prototype.texturesSupported = undefined;
// BABYLON.Engine.prototype.textureFormatInUse = undefined;
// BABYLON.Engine.prototype.currentViewport = undefined;
// BABYLON.Engine.prototype.emptyTexture = undefined;
// BABYLON.Engine.prototype.emptyTexture3D = undefined;
// BABYLON.Engine.prototype.emptyTexture2DArray = undefined;
// BABYLON.Engine.prototype.emptyCubeTexture = undefined;
BABYLON.Engine.prototype.areAllEffectsReady = function () {};
// BABYLON.Engine.prototype.webGLVersion = undefined;
BABYLON.Engine.prototype.getClassName = function () {};
// BABYLON.Engine.prototype.isStencilEnable = undefined;
BABYLON.Engine.prototype.resetTextureCache = function () {};
BABYLON.Engine.prototype.getGlInfo = function () {};
BABYLON.Engine.prototype.setHardwareScalingLevel = function () {};
BABYLON.Engine.prototype.getHardwareScalingLevel = function () {};
BABYLON.Engine.prototype.getLoadedTexturesCache = function () {};
BABYLON.Engine.prototype.getCaps = function () {};
BABYLON.Engine.prototype.stopRenderLoop = function () {};
BABYLON.Engine.prototype.getRenderingCanvas = function () {};
BABYLON.Engine.prototype.getHostWindow = function () {};
BABYLON.Engine.prototype.getRenderWidth = function () {};
BABYLON.Engine.prototype.getRenderHeight = function () {};
BABYLON.Engine.prototype.runRenderLoop = function () {};
BABYLON.Engine.prototype.clear = function () {};
BABYLON.Engine.prototype.setViewport = function () {};
BABYLON.Engine.prototype.bindFramebuffer = function () {};
BABYLON.Engine.prototype.unBindFramebuffer = function () {};
BABYLON.Engine.prototype.flushFramebuffer = function () {};
BABYLON.Engine.prototype.restoreDefaultFramebuffer = function () {};
BABYLON.Engine.prototype.createVertexBuffer = function () {};
BABYLON.Engine.prototype.createDynamicVertexBuffer = function () {};
BABYLON.Engine.prototype.createIndexBuffer = function () {};
BABYLON.Engine.prototype.bindArrayBuffer = function () {};
BABYLON.Engine.prototype.bindUniformBlock = function () {};
BABYLON.Engine.prototype.bindIndexBuffer = function () {};
BABYLON.Engine.prototype.bindBuffer = function () {};
BABYLON.Engine.prototype.updateArrayBuffer = function () {};
BABYLON.Engine.prototype.recordVertexArrayObject = function () {};
BABYLON.Engine.prototype.bindVertexArrayObject = function () {};
BABYLON.Engine.prototype.bindBuffersDirectly = function () {};
BABYLON.Engine.prototype.bindBuffers = function () {};
BABYLON.Engine.prototype.unbindInstanceAttributes = function () {};
BABYLON.Engine.prototype.releaseVertexArrayObject = function () {};
BABYLON.Engine.prototype.updateAndBindInstancesBuffer = function () {};
BABYLON.Engine.prototype.bindInstancesBuffer = function () {};
BABYLON.Engine.prototype.disableInstanceAttributeByName = function () {};
BABYLON.Engine.prototype.disableInstanceAttribute = function () {};
BABYLON.Engine.prototype.disableAttributeByIndex = function () {};
BABYLON.Engine.prototype.draw = function () {};
BABYLON.Engine.prototype.drawPointClouds = function () {};
BABYLON.Engine.prototype.drawUnIndexed = function () {};
BABYLON.Engine.prototype.drawElementsType = function () {};
BABYLON.Engine.prototype.drawArraysType = function () {};
BABYLON.Engine.prototype.createEffect = function () {};
BABYLON.Engine.prototype.createRawShaderProgram = function () {};
BABYLON.Engine.prototype.createPipelineContext = function () {};
BABYLON.Engine.prototype.getUniforms = function () {};
BABYLON.Engine.prototype.getAttributes = function () {};
BABYLON.Engine.prototype.enableEffect = function () {};
BABYLON.Engine.prototype.setInt = function () {};
BABYLON.Engine.prototype.setIntArray = function () {};
BABYLON.Engine.prototype.setIntArray2 = function () {};
BABYLON.Engine.prototype.setIntArray3 = function () {};
BABYLON.Engine.prototype.setIntArray4 = function () {};
BABYLON.Engine.prototype.setArray = function () {};
BABYLON.Engine.prototype.setArray2 = function () {};
BABYLON.Engine.prototype.setArray3 = function () {};
BABYLON.Engine.prototype.setArray4 = function () {};
BABYLON.Engine.prototype.setMatrices = function () {};
BABYLON.Engine.prototype.setMatrix3x3 = function () {};
BABYLON.Engine.prototype.setMatrix2x2 = function () {};
BABYLON.Engine.prototype.setFloat = function () {};
BABYLON.Engine.prototype.setFloat2 = function () {};
BABYLON.Engine.prototype.setFloat3 = function () {};
BABYLON.Engine.prototype.setFloat4 = function () {};
BABYLON.Engine.prototype.applyStates = function () {};
BABYLON.Engine.prototype.setColorWrite = function () {};
BABYLON.Engine.prototype.getColorWrite = function () {};
// BABYLON.Engine.prototype.depthCullingState = undefined;
// BABYLON.Engine.prototype.alphaState = undefined;
// BABYLON.Engine.prototype.stencilState = undefined;
BABYLON.Engine.prototype.clearInternalTexturesCache = function () {};
BABYLON.Engine.prototype.wipeCaches = function () {};
BABYLON.Engine.prototype.createTexture = function () {};
BABYLON.Engine.prototype.updateTextureSamplingMode = function () {};
BABYLON.Engine.prototype.updateTextureWrappingMode = function () {};
BABYLON.Engine.prototype.updateTextureData = function () {};
BABYLON.Engine.prototype.bindSamplers = function () {};
BABYLON.Engine.prototype.unbindAllTextures = function () {};
BABYLON.Engine.prototype.setTexture = function () {};
BABYLON.Engine.prototype.setTextureArray = function () {};
BABYLON.Engine.prototype.unbindAllAttributes = function () {};
BABYLON.Engine.prototype.releaseEffects = function () {};
BABYLON.Engine.prototype.attachContextLostEvent = function () {};
BABYLON.Engine.prototype.attachContextRestoredEvent = function () {};
BABYLON.Engine.prototype.getError = function () {};
BABYLON.Engine.prototype.readPixels = function () {};
BABYLON.Engine.prototype.getHostDocument = function () {};
BABYLON.Engine.prototype.setAlphaConstants = function () {};
BABYLON.Engine.prototype.setAlphaMode = function () {};
BABYLON.Engine.prototype.getAlphaMode = function () {};
BABYLON.Engine.prototype.setAlphaEquation = function () {};
BABYLON.Engine.prototype.getAlphaEquation = function () {};
BABYLON.Engine.prototype.createUniformBuffer = function () {};
BABYLON.Engine.prototype.createDynamicUniformBuffer = function () {};
BABYLON.Engine.prototype.updateUniformBuffer = function () {};
BABYLON.Engine.prototype.bindUniformBuffer = function () {};
BABYLON.Engine.prototype.bindUniformBufferBase = function () {};
BABYLON.Engine.prototype.createRenderTargetTexture = function () {};
BABYLON.Engine.prototype.createDepthStencilTexture = function () {};
BABYLON.Engine.prototype.createRenderTargetCubeTexture = function () {};
BABYLON.Engine.prototype.createDynamicTexture = function () {};
BABYLON.Engine.prototype.updateDynamicTexture = function () {};
BABYLON.Engine.prototype.createCubeTexture = function () {};
BABYLON.Engine.prototype.createPrefilteredCubeTexture = function () {};
BABYLON.Engine.prototype.updateVideoTexture = function () {};
BABYLON.Engine.prototype.unBindMultiColorAttachmentFramebuffer = function () {};
BABYLON.Engine.prototype.createMultipleRenderTarget = function () {};
BABYLON.Engine.prototype.updateMultipleRenderTargetTextureSampleCount = function () {};


/** @constructor */
BABYLON.EngineStore = function () {}


/** @constructor */
BABYLON.NullEngineOptions = function () {}
BABYLON.NullEngineOptions.renderWidth = 512;
BABYLON.NullEngineOptions.renderHeight = 256;
BABYLON.NullEngineOptions.textureSize = 512;
BABYLON.NullEngineOptions.deterministicLockstep = false;
BABYLON.NullEngineOptions.lockstepMaxSteps = 4;


/** @constructor */
BABYLON.NullEngine = function () {}
BABYLON.NullEngine.forcePOTTextures = false;
BABYLON.NullEngine.isFullscreen = false;
BABYLON.NullEngine.cullBackFaces = true;
BABYLON.NullEngine.renderEvenInBackground = true;
BABYLON.NullEngine.preventCacheWipeBetweenFrames = false;
BABYLON.NullEngine.validateShaderPrograms = false;
BABYLON.NullEngine.useReverseDepthBuffer = false;
BABYLON.NullEngine.disableUniformBuffers = false;
BABYLON.NullEngine.onContextLostObservable = {};
BABYLON.NullEngine.onContextRestoredObservable = {};
BABYLON.NullEngine.disableVertexArrayObjects = false;
BABYLON.NullEngine.premultipliedAlpha = true;
BABYLON.NullEngine.onBeforeTextureInitObservable = {};
BABYLON.NullEngine.enableUnpackFlipYCached = true;
BABYLON.NullEngine.enableOfflineSupport = false;
BABYLON.NullEngine.disableManifestCheck = false;
BABYLON.NullEngine.scenes = {};
BABYLON.NullEngine.onNewSceneAddedObservable = {};
BABYLON.NullEngine.postProcesses = {};
BABYLON.NullEngine.isPointerLock = false;
BABYLON.NullEngine.onResizeObservable = {};
BABYLON.NullEngine.onCanvasBlurObservable = {};
BABYLON.NullEngine.onCanvasFocusObservable = {};
BABYLON.NullEngine.onCanvasPointerOutObservable = {};
BABYLON.NullEngine.onBeginFrameObservable = {};
BABYLON.NullEngine.customAnimationFrameRequester = null;
BABYLON.NullEngine.onEndFrameObservable = {};
BABYLON.NullEngine.onBeforeShaderCompilationObservable = {};
BABYLON.NullEngine.onAfterShaderCompilationObservable = {};
BABYLON.NullEngine.canvasTabIndex = 1;
BABYLON.NullEngine.disablePerformanceMonitorInBackground = false;
BABYLON.NullEngine.prototype.constructor = function () {};
BABYLON.NullEngine.prototype.isDeterministicLockStep = function () {};
BABYLON.NullEngine.prototype.getLockstepMaxSteps = function () {};
BABYLON.NullEngine.prototype.getHardwareScalingLevel = function () {};
BABYLON.NullEngine.prototype.createVertexBuffer = function () {};
BABYLON.NullEngine.prototype.createIndexBuffer = function () {};
BABYLON.NullEngine.prototype.clear = function () {};
BABYLON.NullEngine.prototype.getRenderWidth = function () {};
BABYLON.NullEngine.prototype.getRenderHeight = function () {};
BABYLON.NullEngine.prototype.setViewport = function () {};
BABYLON.NullEngine.prototype.createShaderProgram = function () {};
BABYLON.NullEngine.prototype.getUniforms = function () {};
BABYLON.NullEngine.prototype.getAttributes = function () {};
BABYLON.NullEngine.prototype.bindSamplers = function () {};
BABYLON.NullEngine.prototype.enableEffect = function () {};
BABYLON.NullEngine.prototype.setState = function () {};
BABYLON.NullEngine.prototype.setIntArray = function () {};
BABYLON.NullEngine.prototype.setIntArray2 = function () {};
BABYLON.NullEngine.prototype.setIntArray3 = function () {};
BABYLON.NullEngine.prototype.setIntArray4 = function () {};
BABYLON.NullEngine.prototype.setFloatArray = function () {};
BABYLON.NullEngine.prototype.setFloatArray2 = function () {};
BABYLON.NullEngine.prototype.setFloatArray3 = function () {};
BABYLON.NullEngine.prototype.setFloatArray4 = function () {};
BABYLON.NullEngine.prototype.setArray = function () {};
BABYLON.NullEngine.prototype.setArray2 = function () {};
BABYLON.NullEngine.prototype.setArray3 = function () {};
BABYLON.NullEngine.prototype.setArray4 = function () {};
BABYLON.NullEngine.prototype.setMatrices = function () {};
BABYLON.NullEngine.prototype.setMatrix3x3 = function () {};
BABYLON.NullEngine.prototype.setMatrix2x2 = function () {};
BABYLON.NullEngine.prototype.setFloat = function () {};
BABYLON.NullEngine.prototype.setFloat2 = function () {};
BABYLON.NullEngine.prototype.setFloat3 = function () {};
BABYLON.NullEngine.prototype.setBool = function () {};
BABYLON.NullEngine.prototype.setFloat4 = function () {};
BABYLON.NullEngine.prototype.setAlphaMode = function () {};
BABYLON.NullEngine.prototype.bindBuffers = function () {};
BABYLON.NullEngine.prototype.wipeCaches = function () {};
BABYLON.NullEngine.prototype.draw = function () {};
BABYLON.NullEngine.prototype.drawElementsType = function () {};
BABYLON.NullEngine.prototype.drawArraysType = function () {};
BABYLON.NullEngine.prototype.createTexture = function () {};
BABYLON.NullEngine.prototype.createRenderTargetTexture = function () {};
BABYLON.NullEngine.prototype.updateTextureSamplingMode = function () {};
BABYLON.NullEngine.prototype.bindFramebuffer = function () {};
BABYLON.NullEngine.prototype.unBindFramebuffer = function () {};
BABYLON.NullEngine.prototype.createDynamicVertexBuffer = function () {};
BABYLON.NullEngine.prototype.updateDynamicTexture = function () {};
BABYLON.NullEngine.prototype.areAllEffectsReady = function () {};
BABYLON.NullEngine.prototype.getError = function () {};
BABYLON.NullEngine.prototype.updateDynamicIndexBuffer = function () {};
BABYLON.NullEngine.prototype.updateDynamicVertexBuffer = function () {};
BABYLON.NullEngine.prototype.releaseEffects = function () {};
BABYLON.NullEngine.prototype.displayLoadingUI = function () {};
BABYLON.NullEngine.prototype.hideLoadingUI = function () {};
// BABYLON.NullEngine.prototype.performanceMonitor = undefined;
BABYLON.NullEngine.prototype.getInputElement = function () {};
BABYLON.NullEngine.prototype.getAspectRatio = function () {};
BABYLON.NullEngine.prototype.getScreenAspectRatio = function () {};
BABYLON.NullEngine.prototype.getRenderingCanvasClientRect = function () {};
BABYLON.NullEngine.prototype.getInputElementClientRect = function () {};
BABYLON.NullEngine.prototype.getTimeStep = function () {};
BABYLON.NullEngine.prototype.generateMipMapsForCubemap = function () {};
BABYLON.NullEngine.prototype.setZOffset = function () {};
BABYLON.NullEngine.prototype.getZOffset = function () {};
BABYLON.NullEngine.prototype.setDepthBuffer = function () {};
BABYLON.NullEngine.prototype.getDepthWrite = function () {};
BABYLON.NullEngine.prototype.setDepthWrite = function () {};
BABYLON.NullEngine.prototype.getStencilBuffer = function () {};
BABYLON.NullEngine.prototype.setStencilBuffer = function () {};
BABYLON.NullEngine.prototype.getStencilMask = function () {};
BABYLON.NullEngine.prototype.setStencilMask = function () {};
BABYLON.NullEngine.prototype.getStencilFunction = function () {};
BABYLON.NullEngine.prototype.getStencilFunctionReference = function () {};
BABYLON.NullEngine.prototype.getStencilFunctionMask = function () {};
BABYLON.NullEngine.prototype.setStencilFunction = function () {};
BABYLON.NullEngine.prototype.setStencilFunctionReference = function () {};
BABYLON.NullEngine.prototype.setStencilFunctionMask = function () {};
BABYLON.NullEngine.prototype.getStencilOperationFail = function () {};
BABYLON.NullEngine.prototype.getStencilOperationDepthFail = function () {};
BABYLON.NullEngine.prototype.getStencilOperationPass = function () {};
BABYLON.NullEngine.prototype.setStencilOperationFail = function () {};
BABYLON.NullEngine.prototype.setStencilOperationDepthFail = function () {};
BABYLON.NullEngine.prototype.setStencilOperationPass = function () {};
BABYLON.NullEngine.prototype.setDitheringState = function () {};
BABYLON.NullEngine.prototype.setRasterizerState = function () {};
BABYLON.NullEngine.prototype.getDepthFunction = function () {};
BABYLON.NullEngine.prototype.setDepthFunction = function () {};
BABYLON.NullEngine.prototype.setDepthFunctionToGreater = function () {};
BABYLON.NullEngine.prototype.setDepthFunctionToGreaterOrEqual = function () {};
BABYLON.NullEngine.prototype.setDepthFunctionToLess = function () {};
BABYLON.NullEngine.prototype.setDepthFunctionToLessOrEqual = function () {};
BABYLON.NullEngine.prototype.cacheStencilState = function () {};
BABYLON.NullEngine.prototype.restoreStencilState = function () {};
BABYLON.NullEngine.prototype.setDirectViewport = function () {};
BABYLON.NullEngine.prototype.scissorClear = function () {};
BABYLON.NullEngine.prototype.enableScissor = function () {};
BABYLON.NullEngine.prototype.disableScissor = function () {};
BABYLON.NullEngine.prototype.initWebVR = function () {};
BABYLON.NullEngine.prototype.disableVR = function () {};
BABYLON.NullEngine.prototype.isVRPresenting = function () {};
BABYLON.NullEngine.prototype.getVertexShaderSource = function () {};
BABYLON.NullEngine.prototype.getFragmentShaderSource = function () {};
BABYLON.NullEngine.prototype.setDepthStencilTexture = function () {};
BABYLON.NullEngine.prototype.setTextureFromPostProcess = function () {};
BABYLON.NullEngine.prototype.setTextureFromPostProcessOutput = function () {};
BABYLON.NullEngine.prototype.switchFullscreen = function () {};
BABYLON.NullEngine.prototype.enterFullscreen = function () {};
BABYLON.NullEngine.prototype.exitFullscreen = function () {};
BABYLON.NullEngine.prototype.enterPointerlock = function () {};
BABYLON.NullEngine.prototype.exitPointerlock = function () {};
BABYLON.NullEngine.prototype.beginFrame = function () {};
BABYLON.NullEngine.prototype.endFrame = function () {};
BABYLON.NullEngine.prototype.resize = function () {};
BABYLON.NullEngine.prototype.setSize = function () {};
BABYLON.NullEngine.prototype.getFps = function () {};
BABYLON.NullEngine.prototype.getDeltaTime = function () {};
BABYLON.NullEngine.prototype.updateRenderTargetTextureSampleCount = function () {};
BABYLON.NullEngine.prototype.updateTextureComparisonFunction = function () {};
BABYLON.NullEngine.prototype.createInstancesBuffer = function () {};
BABYLON.NullEngine.prototype.deleteInstancesBuffer = function () {};
BABYLON.NullEngine.prototype.dispose = function () {};
// BABYLON.NullEngine.prototype.loadingScreen = undefined;
// BABYLON.NullEngine.prototype.loadingUIText = undefined;
// BABYLON.NullEngine.prototype.loadingUIBackgroundColor = undefined;
BABYLON.NullEngine.prototype.updateRawTexture = function () {};
BABYLON.NullEngine.prototype.createRawTexture = function () {};
BABYLON.NullEngine.prototype.createRawCubeTexture = function () {};
BABYLON.NullEngine.prototype.updateRawCubeTexture = function () {};
BABYLON.NullEngine.prototype.createRawCubeTextureFromUrl = function () {};
BABYLON.NullEngine.prototype.createRawTexture2DArray = function () {};
BABYLON.NullEngine.prototype.createRawTexture3D = function () {};
BABYLON.NullEngine.prototype.updateRawTexture2DArray = function () {};
BABYLON.NullEngine.prototype.updateRawTexture3D = function () {};
BABYLON.NullEngine.prototype.createMultiviewRenderTargetTexture = function () {};
BABYLON.NullEngine.prototype.bindMultiviewFramebuffer = function () {};
// BABYLON.NullEngine.prototype.isInVRExclusivePointerMode = undefined;
BABYLON.NullEngine.prototype.isVRDevicePresent = function () {};
BABYLON.NullEngine.prototype.getVRDevice = function () {};
BABYLON.NullEngine.prototype.initWebVRAsync = function () {};
BABYLON.NullEngine.prototype.enableVR = function () {};
BABYLON.NullEngine.prototype.createQuery = function () {};
BABYLON.NullEngine.prototype.deleteQuery = function () {};
BABYLON.NullEngine.prototype.isQueryResultAvailable = function () {};
BABYLON.NullEngine.prototype.getQueryResult = function () {};
BABYLON.NullEngine.prototype.beginOcclusionQuery = function () {};
BABYLON.NullEngine.prototype.endOcclusionQuery = function () {};
BABYLON.NullEngine.prototype.startTimeQuery = function () {};
BABYLON.NullEngine.prototype.endTimeQuery = function () {};
BABYLON.NullEngine.prototype.createTransformFeedback = function () {};
BABYLON.NullEngine.prototype.deleteTransformFeedback = function () {};
BABYLON.NullEngine.prototype.bindTransformFeedback = function () {};
BABYLON.NullEngine.prototype.beginTransformFeedback = function () {};
BABYLON.NullEngine.prototype.endTransformFeedback = function () {};
BABYLON.NullEngine.prototype.setTranformFeedbackVaryings = function () {};
BABYLON.NullEngine.prototype.bindTransformFeedbackBuffer = function () {};
BABYLON.NullEngine.prototype.registerView = function () {};
BABYLON.NullEngine.prototype.unRegisterView = function () {};
BABYLON.NullEngine.prototype.createEffectForParticles = function () {};
// BABYLON.NullEngine.prototype.description = undefined;
BABYLON.NullEngine.prototype.supportsUniformBuffers = false;
// BABYLON.NullEngine.prototype.needPOTTextures = undefined;
// BABYLON.NullEngine.prototype.doNotHandleContextLost = undefined;
// BABYLON.NullEngine.prototype.framebufferDimensionsObject = undefined;
// BABYLON.NullEngine.prototype.texturesSupported = undefined;
// BABYLON.NullEngine.prototype.textureFormatInUse = undefined;
// BABYLON.NullEngine.prototype.currentViewport = undefined;
// BABYLON.NullEngine.prototype.emptyTexture = undefined;
// BABYLON.NullEngine.prototype.emptyTexture3D = undefined;
// BABYLON.NullEngine.prototype.emptyTexture2DArray = undefined;
// BABYLON.NullEngine.prototype.emptyCubeTexture = undefined;
// BABYLON.NullEngine.prototype.webGLVersion = undefined;
BABYLON.NullEngine.prototype.getClassName = function () {};
// BABYLON.NullEngine.prototype.isStencilEnable = undefined;
BABYLON.NullEngine.prototype.resetTextureCache = function () {};
BABYLON.NullEngine.prototype.getGlInfo = function () {};
BABYLON.NullEngine.prototype.setHardwareScalingLevel = function () {};
BABYLON.NullEngine.prototype.getLoadedTexturesCache = function () {};
BABYLON.NullEngine.prototype.getCaps = function () {};
BABYLON.NullEngine.prototype.stopRenderLoop = function () {};
BABYLON.NullEngine.prototype.getRenderingCanvas = function () {};
BABYLON.NullEngine.prototype.getHostWindow = function () {};
BABYLON.NullEngine.prototype.runRenderLoop = function () {};
BABYLON.NullEngine.prototype.flushFramebuffer = function () {};
BABYLON.NullEngine.prototype.restoreDefaultFramebuffer = function () {};
BABYLON.NullEngine.prototype.bindArrayBuffer = function () {};
BABYLON.NullEngine.prototype.bindUniformBlock = function () {};
BABYLON.NullEngine.prototype.bindIndexBuffer = function () {};
BABYLON.NullEngine.prototype.bindBuffer = function () {};
BABYLON.NullEngine.prototype.updateArrayBuffer = function () {};
BABYLON.NullEngine.prototype.recordVertexArrayObject = function () {};
BABYLON.NullEngine.prototype.bindVertexArrayObject = function () {};
BABYLON.NullEngine.prototype.bindBuffersDirectly = function () {};
BABYLON.NullEngine.prototype.unbindInstanceAttributes = function () {};
BABYLON.NullEngine.prototype.releaseVertexArrayObject = function () {};
BABYLON.NullEngine.prototype.updateAndBindInstancesBuffer = function () {};
BABYLON.NullEngine.prototype.bindInstancesBuffer = function () {};
BABYLON.NullEngine.prototype.disableInstanceAttributeByName = function () {};
BABYLON.NullEngine.prototype.disableInstanceAttribute = function () {};
BABYLON.NullEngine.prototype.disableAttributeByIndex = function () {};
BABYLON.NullEngine.prototype.drawPointClouds = function () {};
BABYLON.NullEngine.prototype.drawUnIndexed = function () {};
BABYLON.NullEngine.prototype.createEffect = function () {};
BABYLON.NullEngine.prototype.createRawShaderProgram = function () {};
BABYLON.NullEngine.prototype.createPipelineContext = function () {};
BABYLON.NullEngine.prototype.setInt = function () {};
BABYLON.NullEngine.prototype.applyStates = function () {};
BABYLON.NullEngine.prototype.setColorWrite = function () {};
BABYLON.NullEngine.prototype.getColorWrite = function () {};
// BABYLON.NullEngine.prototype.depthCullingState = undefined;
// BABYLON.NullEngine.prototype.alphaState = undefined;
// BABYLON.NullEngine.prototype.stencilState = undefined;
BABYLON.NullEngine.prototype.clearInternalTexturesCache = function () {};
BABYLON.NullEngine.prototype.updateTextureWrappingMode = function () {};
BABYLON.NullEngine.prototype.updateTextureData = function () {};
BABYLON.NullEngine.prototype.unbindAllTextures = function () {};
BABYLON.NullEngine.prototype.setTexture = function () {};
BABYLON.NullEngine.prototype.setTextureArray = function () {};
BABYLON.NullEngine.prototype.unbindAllAttributes = function () {};
BABYLON.NullEngine.prototype.attachContextLostEvent = function () {};
BABYLON.NullEngine.prototype.attachContextRestoredEvent = function () {};
BABYLON.NullEngine.prototype.readPixels = function () {};
BABYLON.NullEngine.prototype.getHostDocument = function () {};
BABYLON.NullEngine.prototype.setAlphaConstants = function () {};
BABYLON.NullEngine.prototype.getAlphaMode = function () {};
BABYLON.NullEngine.prototype.setAlphaEquation = function () {};
BABYLON.NullEngine.prototype.getAlphaEquation = function () {};
BABYLON.NullEngine.prototype.createUniformBuffer = function () {};
BABYLON.NullEngine.prototype.createDynamicUniformBuffer = function () {};
BABYLON.NullEngine.prototype.updateUniformBuffer = function () {};
BABYLON.NullEngine.prototype.bindUniformBuffer = function () {};
BABYLON.NullEngine.prototype.bindUniformBufferBase = function () {};
BABYLON.NullEngine.prototype.createDepthStencilTexture = function () {};
BABYLON.NullEngine.prototype.createRenderTargetCubeTexture = function () {};
BABYLON.NullEngine.prototype.createDynamicTexture = function () {};
BABYLON.NullEngine.prototype.createCubeTexture = function () {};
BABYLON.NullEngine.prototype.createPrefilteredCubeTexture = function () {};
BABYLON.NullEngine.prototype.updateVideoTexture = function () {};
BABYLON.NullEngine.prototype.unBindMultiColorAttachmentFramebuffer = function () {};
BABYLON.NullEngine.prototype.createMultipleRenderTarget = function () {};
BABYLON.NullEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function () {};


/** @constructor */
BABYLON.WebGLPipelineContext = function () {}
BABYLON.WebGLPipelineContext.vertexCompilationError = null;
BABYLON.WebGLPipelineContext.fragmentCompilationError = null;
BABYLON.WebGLPipelineContext.programLinkError = null;
BABYLON.WebGLPipelineContext.programValidationError = null;
// BABYLON.WebGLPipelineContext.prototype.isAsync = undefined;
BABYLON.WebGLPipelineContext.prototype.isReady = false;


/** @constructor */
BABYLON.WebGL2ShaderProcessor = function () {}
BABYLON.WebGL2ShaderProcessor.prototype.attributeProcessor = function () {};
BABYLON.WebGL2ShaderProcessor.prototype.varyingProcessor = function () {};
BABYLON.WebGL2ShaderProcessor.prototype.postProcessor = function () {};


/** @constructor */
BABYLON.NativeEngine = function () {}
BABYLON.NativeEngine.prototype.NpmPackage = "babylonjs@4.1.0";
BABYLON.NativeEngine.prototype.Version = "4.1.0";
BABYLON.NativeEngine.prototype.Instances = {};
BABYLON.NativeEngine.prototype.LastCreatedEngine = {};
BABYLON.NativeEngine.prototype.LastCreatedScene = null;
BABYLON.NativeEngine.prototype.MarkAllMaterialsAsDirty = function () {};
BABYLON.NativeEngine.prototype.DefaultLoadingScreenFactory = function () {};
BABYLON.NativeEngine.prototype.ALPHA_DISABLE = 0;
BABYLON.NativeEngine.prototype.ALPHA_ADD = 1;
BABYLON.NativeEngine.prototype.ALPHA_COMBINE = 2;
BABYLON.NativeEngine.prototype.ALPHA_SUBTRACT = 3;
BABYLON.NativeEngine.prototype.ALPHA_MULTIPLY = 4;
BABYLON.NativeEngine.prototype.ALPHA_MAXIMIZED = 5;
BABYLON.NativeEngine.prototype.ALPHA_ONEONE = 6;
BABYLON.NativeEngine.prototype.ALPHA_PREMULTIPLIED = 7;
BABYLON.NativeEngine.prototype.ALPHA_PREMULTIPLIED_PORTERDUFF = 8;
BABYLON.NativeEngine.prototype.ALPHA_INTERPOLATE = 9;
BABYLON.NativeEngine.prototype.ALPHA_SCREENMODE = 10;
BABYLON.NativeEngine.prototype.DELAYLOADSTATE_NONE = 0;
BABYLON.NativeEngine.prototype.DELAYLOADSTATE_LOADED = 1;
BABYLON.NativeEngine.prototype.DELAYLOADSTATE_LOADING = 2;
BABYLON.NativeEngine.prototype.DELAYLOADSTATE_NOTLOADED = 4;
BABYLON.NativeEngine.prototype.NEVER = 512;
BABYLON.NativeEngine.prototype.ALWAYS = 519;
BABYLON.NativeEngine.prototype.LESS = 513;
BABYLON.NativeEngine.prototype.EQUAL = 514;
BABYLON.NativeEngine.prototype.LEQUAL = 515;
BABYLON.NativeEngine.prototype.GREATER = 516;
BABYLON.NativeEngine.prototype.GEQUAL = 518;
BABYLON.NativeEngine.prototype.NOTEQUAL = 517;
BABYLON.NativeEngine.prototype.KEEP = 7680;
BABYLON.NativeEngine.prototype.REPLACE = 7681;
BABYLON.NativeEngine.prototype.INCR = 7682;
BABYLON.NativeEngine.prototype.DECR = 7683;
BABYLON.NativeEngine.prototype.INVERT = 5386;
BABYLON.NativeEngine.prototype.INCR_WRAP = 34055;
BABYLON.NativeEngine.prototype.DECR_WRAP = 34056;
BABYLON.NativeEngine.prototype.TEXTURE_CLAMP_ADDRESSMODE = 0;
BABYLON.NativeEngine.prototype.TEXTURE_WRAP_ADDRESSMODE = 1;
BABYLON.NativeEngine.prototype.TEXTURE_MIRROR_ADDRESSMODE = 2;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_ALPHA = 0;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_LUMINANCE = 1;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_LUMINANCE_ALPHA = 2;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_RGB = 4;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_RGBA = 5;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_RED = 6;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_R = 6;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_RG = 7;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_RED_INTEGER = 8;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_R_INTEGER = 8;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_RG_INTEGER = 9;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_RGB_INTEGER = 10;
BABYLON.NativeEngine.prototype.TEXTUREFORMAT_RGBA_INTEGER = 11;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_BYTE = 0;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_INT = 0;
BABYLON.NativeEngine.prototype.TEXTURETYPE_FLOAT = 1;
BABYLON.NativeEngine.prototype.TEXTURETYPE_HALF_FLOAT = 2;
BABYLON.NativeEngine.prototype.TEXTURETYPE_BYTE = 3;
BABYLON.NativeEngine.prototype.TEXTURETYPE_SHORT = 4;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_SHORT = 5;
BABYLON.NativeEngine.prototype.TEXTURETYPE_INT = 6;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_INTEGER = 7;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_INT_24_8 = 12;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13;
BABYLON.NativeEngine.prototype.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14;
BABYLON.NativeEngine.prototype.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15;
BABYLON.NativeEngine.prototype.TEXTURE_NEAREST_SAMPLINGMODE = 1;
BABYLON.NativeEngine.prototype.TEXTURE_BILINEAR_SAMPLINGMODE = 2;
BABYLON.NativeEngine.prototype.TEXTURE_TRILINEAR_SAMPLINGMODE = 3;
BABYLON.NativeEngine.prototype.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.NativeEngine.prototype.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.NativeEngine.prototype.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.NativeEngine.prototype.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.NativeEngine.prototype.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.NativeEngine.prototype.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.NativeEngine.prototype.TEXTURE_NEAREST_LINEAR = 7;
BABYLON.NativeEngine.prototype.TEXTURE_NEAREST_NEAREST = 1;
BABYLON.NativeEngine.prototype.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.NativeEngine.prototype.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.NativeEngine.prototype.TEXTURE_LINEAR_LINEAR = 2;
BABYLON.NativeEngine.prototype.TEXTURE_LINEAR_NEAREST = 12;
BABYLON.NativeEngine.prototype.TEXTURE_EXPLICIT_MODE = 0;
BABYLON.NativeEngine.prototype.TEXTURE_SPHERICAL_MODE = 1;
BABYLON.NativeEngine.prototype.TEXTURE_PLANAR_MODE = 2;
BABYLON.NativeEngine.prototype.TEXTURE_CUBIC_MODE = 3;
BABYLON.NativeEngine.prototype.TEXTURE_PROJECTION_MODE = 4;
BABYLON.NativeEngine.prototype.TEXTURE_SKYBOX_MODE = 5;
BABYLON.NativeEngine.prototype.TEXTURE_INVCUBIC_MODE = 6;
BABYLON.NativeEngine.prototype.TEXTURE_EQUIRECTANGULAR_MODE = 7;
BABYLON.NativeEngine.prototype.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.NativeEngine.prototype.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.NativeEngine.prototype.SCALEMODE_FLOOR = 1;
BABYLON.NativeEngine.prototype.SCALEMODE_NEAREST = 2;
BABYLON.NativeEngine.prototype.SCALEMODE_CEILING = 3;
BABYLON.NativeEngine.prototype.AudioEngineFactory = function () {};
BABYLON.NativeEngine.prototype.OfflineProviderFactory = function () {};
BABYLON.NativeEngine.prototype.ShadersRepository = "src/Shaders/";
BABYLON.NativeEngine.prototype.isSupported = function () {};
BABYLON.NativeEngine.prototype.CeilingPOT = function () {};
BABYLON.NativeEngine.prototype.FloorPOT = function () {};
BABYLON.NativeEngine.prototype.NearestPOT = function () {};
BABYLON.NativeEngine.prototype.GetExponentOfTwo = function () {};
BABYLON.NativeEngine.prototype.QueueNewFrame = function () {};
BABYLON.NativeEngine.prototype.ExceptionList = {};
BABYLON.NativeEngine.prototype.CollisionsEpsilon = 0.001;


/** @constructor */
BABYLON.EngineView = function () {}


/** @constructor */
BABYLON.KeyboardEventTypes = function () {}


/** @constructor */
BABYLON.KeyboardInfo = function () {}
// BABYLON.KeyboardInfo.type = undefined;
// BABYLON.KeyboardInfo.event = undefined;


/** @constructor */
BABYLON.KeyboardInfoPre = function () {}
// BABYLON.KeyboardInfoPre.type = undefined;
// BABYLON.KeyboardInfoPre.event = undefined;
BABYLON.KeyboardInfoPre.skipOnPointerObservable = false;
BABYLON.KeyboardInfoPre.prototype.constructor = function () {};


/** @constructor */
BABYLON.PointerEventTypes = function () {}


/** @constructor */
BABYLON.PointerInfoBase = function () {}
// BABYLON.PointerInfoBase.type = undefined;
// BABYLON.PointerInfoBase.event = undefined;


/** @constructor */
BABYLON.PointerInfoPre = function () {}
// BABYLON.PointerInfoPre.type = undefined;
// BABYLON.PointerInfoPre.event = undefined;
BABYLON.PointerInfoPre.ray = null;
BABYLON.PointerInfoPre.skipOnPointerObservable = false;
BABYLON.PointerInfoPre.localPosition = {};
BABYLON.PointerInfoPre.prototype.constructor = function () {};


/** @constructor */
BABYLON.PointerInfo = function () {}
// BABYLON.PointerInfo.type = undefined;
// BABYLON.PointerInfo.event = undefined;
// BABYLON.PointerInfo.pickInfo = undefined;
BABYLON.PointerInfo.prototype.constructor = function () {};


/** @constructor */
BABYLON.ClipboardEventTypes = function () {}


/** @constructor */
BABYLON.ClipboardInfo = function () {}
// BABYLON.ClipboardInfo.type = undefined;
// BABYLON.ClipboardInfo.event = undefined;


/** @constructor */
BABYLON.StickValues = function () {}
// BABYLON.StickValues.x = undefined;
// BABYLON.StickValues.y = undefined;


/** @constructor */
BABYLON.Gamepad = function () {}
BABYLON.Gamepad.GAMEPAD = 0;
BABYLON.Gamepad.GENERIC = 1;
BABYLON.Gamepad.XBOX = 2;
BABYLON.Gamepad.POSE_ENABLED = 3;
BABYLON.Gamepad.DUALSHOCK = 4;


/** @constructor */
BABYLON.GenericPad = function () {}
BABYLON.GenericPad.prototype.GAMEPAD = 0;
BABYLON.GenericPad.prototype.GENERIC = 1;
BABYLON.GenericPad.prototype.XBOX = 2;
BABYLON.GenericPad.prototype.POSE_ENABLED = 3;
BABYLON.GenericPad.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.GamepadManager = function () {}
BABYLON.GamepadManager.onGamepadDisconnectedObservable = {};
BABYLON.GamepadManager.onGamepadConnectedObservable = {};
// BABYLON.GamepadManager.prototype.gamepads = undefined;
BABYLON.GamepadManager.prototype.getGamepadByType = function () {};
BABYLON.GamepadManager.prototype.dispose = function () {};


/** @constructor */
BABYLON.GamepadSystemSceneComponent = function () {}
BABYLON.GamepadSystemSceneComponent.name = "Gamepad";
// BABYLON.GamepadSystemSceneComponent.scene = undefined;
BABYLON.GamepadSystemSceneComponent.prototype.register = function () {};
BABYLON.GamepadSystemSceneComponent.prototype.rebuild = function () {};
BABYLON.GamepadSystemSceneComponent.prototype.dispose = function () {};


BABYLON.Xbox360Button = {}

BABYLON.Xbox360Dpad = {}

/** @constructor */
BABYLON.Xbox360Pad = function () {}
BABYLON.Xbox360Pad.prototype.GAMEPAD = 0;
BABYLON.Xbox360Pad.prototype.GENERIC = 1;
BABYLON.Xbox360Pad.prototype.XBOX = 2;
BABYLON.Xbox360Pad.prototype.POSE_ENABLED = 3;
BABYLON.Xbox360Pad.prototype.DUALSHOCK = 4;


BABYLON.DualShockButton = {}

BABYLON.DualShockDpad = {}

/** @constructor */
BABYLON.DualShockPad = function () {}
BABYLON.DualShockPad.prototype.GAMEPAD = 0;
BABYLON.DualShockPad.prototype.GENERIC = 1;
BABYLON.DualShockPad.prototype.XBOX = 2;
BABYLON.DualShockPad.prototype.POSE_ENABLED = 3;
BABYLON.DualShockPad.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.DaydreamController = function () {}
BABYLON.DaydreamController.MODEL_BASE_URL = "https://controllers.babylonjs.com/generic/";
BABYLON.DaydreamController.MODEL_FILENAME = "generic.babylon";
BABYLON.DaydreamController.GAMEPAD_ID_PREFIX = "Daydream";
BABYLON.DaydreamController.prototype.POINTING_POSE = "POINTING_POSE";
BABYLON.DaydreamController.prototype.GAMEPAD = 0;
BABYLON.DaydreamController.prototype.GENERIC = 1;
BABYLON.DaydreamController.prototype.XBOX = 2;
BABYLON.DaydreamController.prototype.POSE_ENABLED = 3;
BABYLON.DaydreamController.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.GearVRController = function () {}
BABYLON.GearVRController.MODEL_BASE_URL = "https://controllers.babylonjs.com/generic/";
BABYLON.GearVRController.MODEL_FILENAME = "generic.babylon";
BABYLON.GearVRController.GAMEPAD_ID_PREFIX = "Gear VR";
BABYLON.GearVRController.prototype.POINTING_POSE = "POINTING_POSE";
BABYLON.GearVRController.prototype.GAMEPAD = 0;
BABYLON.GearVRController.prototype.GENERIC = 1;
BABYLON.GearVRController.prototype.XBOX = 2;
BABYLON.GearVRController.prototype.POSE_ENABLED = 3;
BABYLON.GearVRController.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.GenericController = function () {}
BABYLON.GenericController.MODEL_BASE_URL = "https://controllers.babylonjs.com/generic/";
BABYLON.GenericController.MODEL_FILENAME = "generic.babylon";
BABYLON.GenericController.prototype.POINTING_POSE = "POINTING_POSE";
BABYLON.GenericController.prototype.GAMEPAD = 0;
BABYLON.GenericController.prototype.GENERIC = 1;
BABYLON.GenericController.prototype.XBOX = 2;
BABYLON.GenericController.prototype.POSE_ENABLED = 3;
BABYLON.GenericController.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.OculusTouchController = function () {}
BABYLON.OculusTouchController.MODEL_BASE_URL = "https://controllers.babylonjs.com/oculus/";
BABYLON.OculusTouchController.MODEL_LEFT_FILENAME = "left.babylon";
BABYLON.OculusTouchController.MODEL_RIGHT_FILENAME = "right.babylon";
BABYLON.OculusTouchController.QUEST_MODEL_BASE_URL = "https://controllers.babylonjs.com/oculusQuest/";
BABYLON.OculusTouchController.prototype.POINTING_POSE = "POINTING_POSE";
BABYLON.OculusTouchController.prototype.GAMEPAD = 0;
BABYLON.OculusTouchController.prototype.GENERIC = 1;
BABYLON.OculusTouchController.prototype.XBOX = 2;
BABYLON.OculusTouchController.prototype.POSE_ENABLED = 3;
BABYLON.OculusTouchController.prototype.DUALSHOCK = 4;


BABYLON.PoseEnabledControllerType = {}

/** @constructor */
BABYLON.PoseEnabledControllerHelper = function () {}


/** @constructor */
BABYLON.PoseEnabledController = function () {}
BABYLON.PoseEnabledController.POINTING_POSE = "POINTING_POSE";
BABYLON.PoseEnabledController.prototype.GAMEPAD = 0;
BABYLON.PoseEnabledController.prototype.GENERIC = 1;
BABYLON.PoseEnabledController.prototype.XBOX = 2;
BABYLON.PoseEnabledController.prototype.POSE_ENABLED = 3;
BABYLON.PoseEnabledController.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.ViveController = function () {}
BABYLON.ViveController.MODEL_BASE_URL = "https://controllers.babylonjs.com/vive/";
BABYLON.ViveController.MODEL_FILENAME = "wand.babylon";
BABYLON.ViveController.prototype.POINTING_POSE = "POINTING_POSE";
BABYLON.ViveController.prototype.GAMEPAD = 0;
BABYLON.ViveController.prototype.GENERIC = 1;
BABYLON.ViveController.prototype.XBOX = 2;
BABYLON.ViveController.prototype.POSE_ENABLED = 3;
BABYLON.ViveController.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.WebVRController = function () {}
BABYLON.WebVRController.prototype.POINTING_POSE = "POINTING_POSE";
BABYLON.WebVRController.prototype.GAMEPAD = 0;
BABYLON.WebVRController.prototype.GENERIC = 1;
BABYLON.WebVRController.prototype.XBOX = 2;
BABYLON.WebVRController.prototype.POSE_ENABLED = 3;
BABYLON.WebVRController.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.WindowsMotionController = function () {}
BABYLON.WindowsMotionController.MODEL_BASE_URL = "https://controllers.babylonjs.com/microsoft/";
BABYLON.WindowsMotionController.MODEL_LEFT_FILENAME = "left.glb";
BABYLON.WindowsMotionController.MODEL_RIGHT_FILENAME = "right.glb";
BABYLON.WindowsMotionController.GAMEPAD_ID_PREFIX = "Spatial Controller (Spatial Interaction Source) ";
BABYLON.WindowsMotionController.GAMEPAD_ID_PATTERN = {};
BABYLON.WindowsMotionController.prototype.POINTING_POSE = "POINTING_POSE";
BABYLON.WindowsMotionController.prototype.GAMEPAD = 0;
BABYLON.WindowsMotionController.prototype.GENERIC = 1;
BABYLON.WindowsMotionController.prototype.XBOX = 2;
BABYLON.WindowsMotionController.prototype.POSE_ENABLED = 3;
BABYLON.WindowsMotionController.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.XRWindowsMotionController = function () {}
BABYLON.XRWindowsMotionController.prototype.MODEL_BASE_URL = "https://controllers.babylonjs.com/microsoft/";
BABYLON.XRWindowsMotionController.prototype.MODEL_LEFT_FILENAME = "left.glb";
BABYLON.XRWindowsMotionController.prototype.MODEL_RIGHT_FILENAME = "right.glb";
BABYLON.XRWindowsMotionController.prototype.GAMEPAD_ID_PREFIX = "Spatial Controller (Spatial Interaction Source) ";
BABYLON.XRWindowsMotionController.prototype.GAMEPAD_ID_PATTERN = {};
BABYLON.XRWindowsMotionController.prototype.POINTING_POSE = "POINTING_POSE";
BABYLON.XRWindowsMotionController.prototype.GAMEPAD = 0;
BABYLON.XRWindowsMotionController.prototype.GENERIC = 1;
BABYLON.XRWindowsMotionController.prototype.XBOX = 2;
BABYLON.XRWindowsMotionController.prototype.POSE_ENABLED = 3;
BABYLON.XRWindowsMotionController.prototype.DUALSHOCK = 4;


/** @constructor */
BABYLON.AxisDragGizmo = function () {}


/** @constructor */
BABYLON.AxisScaleGizmo = function () {}


/** @constructor */
BABYLON.BoundingBoxGizmo = function () {}
BABYLON.BoundingBoxGizmo.MakeNotPickableAndWrapInBoundingBox = function () {};


/** @constructor */
BABYLON.Gizmo = function () {}


/** @constructor */
BABYLON.GizmoManager = function () {}


/** @constructor */
BABYLON.PlaneRotationGizmo = function () {}


/** @constructor */
BABYLON.PositionGizmo = function () {}


/** @constructor */
BABYLON.RotationGizmo = function () {}


/** @constructor */
BABYLON.ScaleGizmo = function () {}


/** @constructor */
BABYLON.LightGizmo = function () {}


/** @constructor */
BABYLON.PlaneDragGizmo = function () {}


/** @constructor */
BABYLON.EnvironmentHelper = function () {}


/** @constructor */
BABYLON.PhotoDome = function () {}
BABYLON.PhotoDome.MODE_MONOSCOPIC = 0;
BABYLON.PhotoDome.MODE_TOPBOTTOM = 1;
BABYLON.PhotoDome.MODE_SIDEBYSIDE = 2;
BABYLON.PhotoDome.prototype.Parse = function () {};
BABYLON.PhotoDome.prototype.BILLBOARDMODE_NONE = 0;
BABYLON.PhotoDome.prototype.BILLBOARDMODE_X = 1;
BABYLON.PhotoDome.prototype.BILLBOARDMODE_Y = 2;
BABYLON.PhotoDome.prototype.BILLBOARDMODE_Z = 4;
BABYLON.PhotoDome.prototype.BILLBOARDMODE_ALL = 7;
BABYLON.PhotoDome.prototype.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.PhotoDome.prototype.AddNodeConstructor = function () {};
BABYLON.PhotoDome.prototype.Construct = function () {};
BABYLON.PhotoDome.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.VideoDome = function () {}
BABYLON.VideoDome.MODE_MONOSCOPIC = 0;
BABYLON.VideoDome.MODE_TOPBOTTOM = 1;
BABYLON.VideoDome.MODE_SIDEBYSIDE = 2;
BABYLON.VideoDome.prototype.Parse = function () {};
BABYLON.VideoDome.prototype.BILLBOARDMODE_NONE = 0;
BABYLON.VideoDome.prototype.BILLBOARDMODE_X = 1;
BABYLON.VideoDome.prototype.BILLBOARDMODE_Y = 2;
BABYLON.VideoDome.prototype.BILLBOARDMODE_Z = 4;
BABYLON.VideoDome.prototype.BILLBOARDMODE_ALL = 7;
BABYLON.VideoDome.prototype.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.VideoDome.prototype.AddNodeConstructor = function () {};
BABYLON.VideoDome.prototype.Construct = function () {};
BABYLON.VideoDome.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.EngineInstrumentation = function () {}
// BABYLON.EngineInstrumentation.engine = undefined;
// BABYLON.EngineInstrumentation.prototype.gpuFrameTimeCounter = undefined;
// BABYLON.EngineInstrumentation.prototype.captureGPUFrameTime = undefined;
// BABYLON.EngineInstrumentation.prototype.shaderCompilationTimeCounter = undefined;
// BABYLON.EngineInstrumentation.prototype.captureShaderCompilationTime = undefined;
BABYLON.EngineInstrumentation.prototype.dispose = function () {};


/** @constructor */
BABYLON.SceneInstrumentation = function () {}


/** @constructor */
BABYLON.EffectLayer = function () {}
BABYLON.EffectLayer.Parse = function () {};


/** @constructor */
BABYLON.EffectLayerSceneComponent = function () {}


/** @constructor */
BABYLON.GlowLayer = function () {}
BABYLON.GlowLayer.Parse = function () {};
BABYLON.GlowLayer.EffectName = "GlowLayer";
BABYLON.GlowLayer.DefaultBlurKernelSize = 32;
BABYLON.GlowLayer.DefaultTextureRatio = 0.5;


/** @constructor */
BABYLON.HighlightLayer = function () {}
BABYLON.HighlightLayer.Parse = function () {};
BABYLON.HighlightLayer.EffectName = "HighlightLayer";
BABYLON.HighlightLayer.NeutralColor = {};
BABYLON.HighlightLayer.GlowingMeshStencilReference = 2;
BABYLON.HighlightLayer.NormalMeshStencilReference = 1;


/** @constructor */
BABYLON.Layer = function () {}


/** @constructor */
BABYLON.LayerSceneComponent = function () {}


/** @constructor */
BABYLON.LensFlare = function () {}
BABYLON.LensFlare.AddFlare = function () {};


/** @constructor */
BABYLON.LensFlareSystem = function () {}
BABYLON.LensFlareSystem.Parse = function () {};


/** @constructor */
BABYLON.LensFlareSystemSceneComponent = function () {}


/** @constructor */
BABYLON.Light = function () {}
BABYLON.Light.CompareLightsPriority = function () {};
BABYLON.Light.GetConstructorFromName = function () {};
BABYLON.Light.Parse = function () {};
BABYLON.Light.FALLOFF_DEFAULT = 0;
BABYLON.Light.FALLOFF_PHYSICAL = 1;
BABYLON.Light.FALLOFF_GLTF = 2;
BABYLON.Light.FALLOFF_STANDARD = 3;
BABYLON.Light.LIGHTMAP_DEFAULT = 0;
BABYLON.Light.LIGHTMAP_SPECULAR = 1;
BABYLON.Light.LIGHTMAP_SHADOWSONLY = 2;
BABYLON.Light.INTENSITYMODE_AUTOMATIC = 0;
BABYLON.Light.INTENSITYMODE_LUMINOUSPOWER = 1;
BABYLON.Light.INTENSITYMODE_LUMINOUSINTENSITY = 2;
BABYLON.Light.INTENSITYMODE_ILLUMINANCE = 3;
BABYLON.Light.INTENSITYMODE_LUMINANCE = 4;
BABYLON.Light.LIGHTTYPEID_POINTLIGHT = 0;
BABYLON.Light.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
BABYLON.Light.LIGHTTYPEID_SPOTLIGHT = 2;
BABYLON.Light.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
BABYLON.Light.prototype.AddNodeConstructor = function () {};
BABYLON.Light.prototype.Construct = function () {};
BABYLON.Light.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.ShadowLight = function () {}
BABYLON.ShadowLight.prototype.CompareLightsPriority = function () {};
BABYLON.ShadowLight.prototype.GetConstructorFromName = function () {};
BABYLON.ShadowLight.prototype.Parse = function () {};
BABYLON.ShadowLight.prototype.FALLOFF_DEFAULT = 0;
BABYLON.ShadowLight.prototype.FALLOFF_PHYSICAL = 1;
BABYLON.ShadowLight.prototype.FALLOFF_GLTF = 2;
BABYLON.ShadowLight.prototype.FALLOFF_STANDARD = 3;
BABYLON.ShadowLight.prototype.LIGHTMAP_DEFAULT = 0;
BABYLON.ShadowLight.prototype.LIGHTMAP_SPECULAR = 1;
BABYLON.ShadowLight.prototype.LIGHTMAP_SHADOWSONLY = 2;
BABYLON.ShadowLight.prototype.INTENSITYMODE_AUTOMATIC = 0;
BABYLON.ShadowLight.prototype.INTENSITYMODE_LUMINOUSPOWER = 1;
BABYLON.ShadowLight.prototype.INTENSITYMODE_LUMINOUSINTENSITY = 2;
BABYLON.ShadowLight.prototype.INTENSITYMODE_ILLUMINANCE = 3;
BABYLON.ShadowLight.prototype.INTENSITYMODE_LUMINANCE = 4;
BABYLON.ShadowLight.prototype.LIGHTTYPEID_POINTLIGHT = 0;
BABYLON.ShadowLight.prototype.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
BABYLON.ShadowLight.prototype.LIGHTTYPEID_SPOTLIGHT = 2;
BABYLON.ShadowLight.prototype.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
BABYLON.ShadowLight.prototype.AddNodeConstructor = function () {};
BABYLON.ShadowLight.prototype.Construct = function () {};
BABYLON.ShadowLight.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.DirectionalLight = function () {}
BABYLON.DirectionalLight.prototype.CompareLightsPriority = function () {};
BABYLON.DirectionalLight.prototype.GetConstructorFromName = function () {};
BABYLON.DirectionalLight.prototype.Parse = function () {};
BABYLON.DirectionalLight.prototype.FALLOFF_DEFAULT = 0;
BABYLON.DirectionalLight.prototype.FALLOFF_PHYSICAL = 1;
BABYLON.DirectionalLight.prototype.FALLOFF_GLTF = 2;
BABYLON.DirectionalLight.prototype.FALLOFF_STANDARD = 3;
BABYLON.DirectionalLight.prototype.LIGHTMAP_DEFAULT = 0;
BABYLON.DirectionalLight.prototype.LIGHTMAP_SPECULAR = 1;
BABYLON.DirectionalLight.prototype.LIGHTMAP_SHADOWSONLY = 2;
BABYLON.DirectionalLight.prototype.INTENSITYMODE_AUTOMATIC = 0;
BABYLON.DirectionalLight.prototype.INTENSITYMODE_LUMINOUSPOWER = 1;
BABYLON.DirectionalLight.prototype.INTENSITYMODE_LUMINOUSINTENSITY = 2;
BABYLON.DirectionalLight.prototype.INTENSITYMODE_ILLUMINANCE = 3;
BABYLON.DirectionalLight.prototype.INTENSITYMODE_LUMINANCE = 4;
BABYLON.DirectionalLight.prototype.LIGHTTYPEID_POINTLIGHT = 0;
BABYLON.DirectionalLight.prototype.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
BABYLON.DirectionalLight.prototype.LIGHTTYPEID_SPOTLIGHT = 2;
BABYLON.DirectionalLight.prototype.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
BABYLON.DirectionalLight.prototype.AddNodeConstructor = function () {};
BABYLON.DirectionalLight.prototype.Construct = function () {};
BABYLON.DirectionalLight.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.HemisphericLight = function () {}
BABYLON.HemisphericLight.prototype.CompareLightsPriority = function () {};
BABYLON.HemisphericLight.prototype.GetConstructorFromName = function () {};
BABYLON.HemisphericLight.prototype.Parse = function () {};
BABYLON.HemisphericLight.prototype.FALLOFF_DEFAULT = 0;
BABYLON.HemisphericLight.prototype.FALLOFF_PHYSICAL = 1;
BABYLON.HemisphericLight.prototype.FALLOFF_GLTF = 2;
BABYLON.HemisphericLight.prototype.FALLOFF_STANDARD = 3;
BABYLON.HemisphericLight.prototype.LIGHTMAP_DEFAULT = 0;
BABYLON.HemisphericLight.prototype.LIGHTMAP_SPECULAR = 1;
BABYLON.HemisphericLight.prototype.LIGHTMAP_SHADOWSONLY = 2;
BABYLON.HemisphericLight.prototype.INTENSITYMODE_AUTOMATIC = 0;
BABYLON.HemisphericLight.prototype.INTENSITYMODE_LUMINOUSPOWER = 1;
BABYLON.HemisphericLight.prototype.INTENSITYMODE_LUMINOUSINTENSITY = 2;
BABYLON.HemisphericLight.prototype.INTENSITYMODE_ILLUMINANCE = 3;
BABYLON.HemisphericLight.prototype.INTENSITYMODE_LUMINANCE = 4;
BABYLON.HemisphericLight.prototype.LIGHTTYPEID_POINTLIGHT = 0;
BABYLON.HemisphericLight.prototype.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
BABYLON.HemisphericLight.prototype.LIGHTTYPEID_SPOTLIGHT = 2;
BABYLON.HemisphericLight.prototype.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
BABYLON.HemisphericLight.prototype.AddNodeConstructor = function () {};
BABYLON.HemisphericLight.prototype.Construct = function () {};
BABYLON.HemisphericLight.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.PointLight = function () {}
BABYLON.PointLight.prototype.CompareLightsPriority = function () {};
BABYLON.PointLight.prototype.GetConstructorFromName = function () {};
BABYLON.PointLight.prototype.Parse = function () {};
BABYLON.PointLight.prototype.FALLOFF_DEFAULT = 0;
BABYLON.PointLight.prototype.FALLOFF_PHYSICAL = 1;
BABYLON.PointLight.prototype.FALLOFF_GLTF = 2;
BABYLON.PointLight.prototype.FALLOFF_STANDARD = 3;
BABYLON.PointLight.prototype.LIGHTMAP_DEFAULT = 0;
BABYLON.PointLight.prototype.LIGHTMAP_SPECULAR = 1;
BABYLON.PointLight.prototype.LIGHTMAP_SHADOWSONLY = 2;
BABYLON.PointLight.prototype.INTENSITYMODE_AUTOMATIC = 0;
BABYLON.PointLight.prototype.INTENSITYMODE_LUMINOUSPOWER = 1;
BABYLON.PointLight.prototype.INTENSITYMODE_LUMINOUSINTENSITY = 2;
BABYLON.PointLight.prototype.INTENSITYMODE_ILLUMINANCE = 3;
BABYLON.PointLight.prototype.INTENSITYMODE_LUMINANCE = 4;
BABYLON.PointLight.prototype.LIGHTTYPEID_POINTLIGHT = 0;
BABYLON.PointLight.prototype.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
BABYLON.PointLight.prototype.LIGHTTYPEID_SPOTLIGHT = 2;
BABYLON.PointLight.prototype.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
BABYLON.PointLight.prototype.AddNodeConstructor = function () {};
BABYLON.PointLight.prototype.Construct = function () {};
BABYLON.PointLight.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.SpotLight = function () {}
BABYLON.SpotLight.prototype.CompareLightsPriority = function () {};
BABYLON.SpotLight.prototype.GetConstructorFromName = function () {};
BABYLON.SpotLight.prototype.Parse = function () {};
BABYLON.SpotLight.prototype.FALLOFF_DEFAULT = 0;
BABYLON.SpotLight.prototype.FALLOFF_PHYSICAL = 1;
BABYLON.SpotLight.prototype.FALLOFF_GLTF = 2;
BABYLON.SpotLight.prototype.FALLOFF_STANDARD = 3;
BABYLON.SpotLight.prototype.LIGHTMAP_DEFAULT = 0;
BABYLON.SpotLight.prototype.LIGHTMAP_SPECULAR = 1;
BABYLON.SpotLight.prototype.LIGHTMAP_SHADOWSONLY = 2;
BABYLON.SpotLight.prototype.INTENSITYMODE_AUTOMATIC = 0;
BABYLON.SpotLight.prototype.INTENSITYMODE_LUMINOUSPOWER = 1;
BABYLON.SpotLight.prototype.INTENSITYMODE_LUMINOUSINTENSITY = 2;
BABYLON.SpotLight.prototype.INTENSITYMODE_ILLUMINANCE = 3;
BABYLON.SpotLight.prototype.INTENSITYMODE_LUMINANCE = 4;
BABYLON.SpotLight.prototype.LIGHTTYPEID_POINTLIGHT = 0;
BABYLON.SpotLight.prototype.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
BABYLON.SpotLight.prototype.LIGHTTYPEID_SPOTLIGHT = 2;
BABYLON.SpotLight.prototype.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
BABYLON.SpotLight.prototype.AddNodeConstructor = function () {};
BABYLON.SpotLight.prototype.Construct = function () {};
BABYLON.SpotLight.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.ShadowGenerator = function () {}
BABYLON.ShadowGenerator.Parse = function () {};
BABYLON.ShadowGenerator.CLASSNAME = "ShadowGenerator";
BABYLON.ShadowGenerator.FILTER_NONE = 0;
BABYLON.ShadowGenerator.FILTER_EXPONENTIALSHADOWMAP = 1;
BABYLON.ShadowGenerator.FILTER_POISSONSAMPLING = 2;
BABYLON.ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP = 3;
BABYLON.ShadowGenerator.FILTER_CLOSEEXPONENTIALSHADOWMAP = 4;
BABYLON.ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP = 5;
BABYLON.ShadowGenerator.FILTER_PCF = 6;
BABYLON.ShadowGenerator.FILTER_PCSS = 7;
BABYLON.ShadowGenerator.QUALITY_HIGH = 0;
BABYLON.ShadowGenerator.QUALITY_MEDIUM = 1;
BABYLON.ShadowGenerator.QUALITY_LOW = 2;


/** @constructor */
BABYLON.CascadedShadowGenerator = function () {}
BABYLON.CascadedShadowGenerator.Parse = function () {};
BABYLON.CascadedShadowGenerator.frustumCornersNDCSpace = {};
BABYLON.CascadedShadowGenerator.CLASSNAME = "CascadedShadowGenerator";
BABYLON.CascadedShadowGenerator.DEFAULT_CASCADES_COUNT = 4;
BABYLON.CascadedShadowGenerator.MIN_CASCADES_COUNT = 2;
BABYLON.CascadedShadowGenerator.MAX_CASCADES_COUNT = 4;
BABYLON.CascadedShadowGenerator.prototype.FILTER_NONE = 0;
BABYLON.CascadedShadowGenerator.prototype.FILTER_EXPONENTIALSHADOWMAP = 1;
BABYLON.CascadedShadowGenerator.prototype.FILTER_POISSONSAMPLING = 2;
BABYLON.CascadedShadowGenerator.prototype.FILTER_BLUREXPONENTIALSHADOWMAP = 3;
BABYLON.CascadedShadowGenerator.prototype.FILTER_CLOSEEXPONENTIALSHADOWMAP = 4;
BABYLON.CascadedShadowGenerator.prototype.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP = 5;
BABYLON.CascadedShadowGenerator.prototype.FILTER_PCF = 6;
BABYLON.CascadedShadowGenerator.prototype.FILTER_PCSS = 7;
BABYLON.CascadedShadowGenerator.prototype.QUALITY_HIGH = 0;
BABYLON.CascadedShadowGenerator.prototype.QUALITY_MEDIUM = 1;
BABYLON.CascadedShadowGenerator.prototype.QUALITY_LOW = 2;


/** @constructor */
BABYLON.ShadowGeneratorSceneComponent = function () {}
BABYLON.ShadowGeneratorSceneComponent.name = "ShadowGenerator";
// BABYLON.ShadowGeneratorSceneComponent.scene = undefined;
BABYLON.ShadowGeneratorSceneComponent.prototype.register = function () {};
BABYLON.ShadowGeneratorSceneComponent.prototype.rebuild = function () {};
BABYLON.ShadowGeneratorSceneComponent.prototype.serialize = function () {};
BABYLON.ShadowGeneratorSceneComponent.prototype.addFromContainer = function () {};
BABYLON.ShadowGeneratorSceneComponent.prototype.removeFromContainer = function () {};
BABYLON.ShadowGeneratorSceneComponent.prototype.dispose = function () {};


/** @constructor */
BABYLON.DefaultLoadingScreen = function () {}
BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI = function () {};
BABYLON.DefaultLoadingScreen.prototype.hideLoadingUI = function () {};
// BABYLON.DefaultLoadingScreen.prototype.loadingUIText = undefined;
// BABYLON.DefaultLoadingScreen.prototype.loadingUIBackgroundColor = undefined;


/** @constructor */
BABYLON.SceneLoaderProgressEvent = function () {}
// BABYLON.SceneLoaderProgressEvent.lengthComputable = undefined;
// BABYLON.SceneLoaderProgressEvent.loaded = undefined;
// BABYLON.SceneLoaderProgressEvent.total = undefined;


BABYLON.SceneLoaderAnimationGroupLoadingMode = {}

/** @constructor */
BABYLON.SceneLoader = function () {}


/** @constructor */
BABYLON.SceneLoaderFlags = function () {}


/** @constructor */
BABYLON.BabylonFileLoaderConfiguration = function () {}


/** @constructor */
BABYLON.ColorCurves = function () {}
// BABYLON.ColorCurves.prototype.globalHue = undefined;
// BABYLON.ColorCurves.prototype.globalDensity = undefined;
// BABYLON.ColorCurves.prototype.globalSaturation = undefined;
// BABYLON.ColorCurves.prototype.globalExposure = undefined;
// BABYLON.ColorCurves.prototype.highlightsHue = undefined;
// BABYLON.ColorCurves.prototype.highlightsDensity = undefined;
// BABYLON.ColorCurves.prototype.highlightsSaturation = undefined;
// BABYLON.ColorCurves.prototype.highlightsExposure = undefined;
// BABYLON.ColorCurves.prototype.midtonesHue = undefined;
// BABYLON.ColorCurves.prototype.midtonesDensity = undefined;
// BABYLON.ColorCurves.prototype.midtonesSaturation = undefined;
// BABYLON.ColorCurves.prototype.midtonesExposure = undefined;
// BABYLON.ColorCurves.prototype.shadowsHue = undefined;
// BABYLON.ColorCurves.prototype.shadowsDensity = undefined;
// BABYLON.ColorCurves.prototype.shadowsSaturation = undefined;
// BABYLON.ColorCurves.prototype.shadowsExposure = undefined;
BABYLON.ColorCurves.prototype.getClassName = function () {};
BABYLON.ColorCurves.prototype.getColorGradingDataToRef = function () {};
BABYLON.ColorCurves.prototype.clone = function () {};
BABYLON.ColorCurves.prototype.serialize = function () {};


/** @constructor */
BABYLON.EffectFallbacks = function () {}
BABYLON.EffectFallbacks.prototype.unBindMesh = function () {};
BABYLON.EffectFallbacks.prototype.addFallback = function () {};
BABYLON.EffectFallbacks.prototype.addCPUSkinningFallback = function () {};
BABYLON.EffectFallbacks.prototype.hasMoreFallbacks = false;
BABYLON.EffectFallbacks.prototype.reduce = function () {};


/** @constructor */
BABYLON.Effect = function () {}
BABYLON.Effect.RegisterShader = function () {};
BABYLON.Effect.ResetCache = function () {};
BABYLON.Effect.ShadersRepository = "src/Shaders/";
BABYLON.Effect.ShadersStore = {};
BABYLON.Effect.IncludesShadersStore = {};


/** @constructor */
BABYLON.FresnelParameters = function () {}
BABYLON.FresnelParameters.leftColor = {};
BABYLON.FresnelParameters.rightColor = {};
BABYLON.FresnelParameters.bias = 0;
BABYLON.FresnelParameters.power = 1;
// BABYLON.FresnelParameters.prototype.isEnabled = undefined;
BABYLON.FresnelParameters.prototype.clone = function () {};
BABYLON.FresnelParameters.prototype.serialize = function () {};


/** @constructor */
BABYLON.ImageProcessingConfigurationDefines = function () {}
BABYLON.ImageProcessingConfigurationDefines.IMAGEPROCESSING = false;
BABYLON.ImageProcessingConfigurationDefines.VIGNETTE = false;
BABYLON.ImageProcessingConfigurationDefines.VIGNETTEBLENDMODEMULTIPLY = false;
BABYLON.ImageProcessingConfigurationDefines.VIGNETTEBLENDMODEOPAQUE = false;
BABYLON.ImageProcessingConfigurationDefines.TONEMAPPING = false;
BABYLON.ImageProcessingConfigurationDefines.TONEMAPPING_ACES = false;
BABYLON.ImageProcessingConfigurationDefines.CONTRAST = false;
BABYLON.ImageProcessingConfigurationDefines.COLORCURVES = false;
BABYLON.ImageProcessingConfigurationDefines.COLORGRADING = false;
BABYLON.ImageProcessingConfigurationDefines.COLORGRADING3D = false;
BABYLON.ImageProcessingConfigurationDefines.SAMPLER3DGREENDEPTH = false;
BABYLON.ImageProcessingConfigurationDefines.SAMPLER3DBGRMAP = false;
BABYLON.ImageProcessingConfigurationDefines.IMAGEPROCESSINGPOSTPROCESS = false;
BABYLON.ImageProcessingConfigurationDefines.EXPOSURE = false;
BABYLON.ImageProcessingConfigurationDefines.prototype.constructor = function () {};
// BABYLON.ImageProcessingConfigurationDefines.prototype.isDirty = undefined;
BABYLON.ImageProcessingConfigurationDefines.prototype.markAsProcessed = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.markAsUnprocessed = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.markAllAsDirty = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.markAsImageProcessingDirty = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.markAsLightDirty = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.markAsAttributesDirty = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.markAsTexturesDirty = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.markAsFresnelDirty = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.markAsMiscDirty = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.rebuild = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.isEqual = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.cloneTo = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.reset = function () {};
BABYLON.ImageProcessingConfigurationDefines.prototype.toString = function () {};


/** @constructor */
BABYLON.ImageProcessingConfiguration = function () {}
BABYLON.ImageProcessingConfiguration.colorCurves = {};
BABYLON.ImageProcessingConfiguration.vignetteStretch = 0;
BABYLON.ImageProcessingConfiguration.vignetteCentreX = 0;
BABYLON.ImageProcessingConfiguration.vignetteCentreY = 0;
BABYLON.ImageProcessingConfiguration.vignetteWeight = 1.5;
BABYLON.ImageProcessingConfiguration.vignetteColor = {};
BABYLON.ImageProcessingConfiguration.vignetteCameraFov = 0.5;
BABYLON.ImageProcessingConfiguration.onUpdateParameters = {};
// BABYLON.ImageProcessingConfiguration.prototype.colorCurvesEnabled = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.colorGradingTexture = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.colorGradingEnabled = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.colorGradingWithGreenDepth = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.colorGradingBGR = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.exposure = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.toneMappingEnabled = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.toneMappingType = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.contrast = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.vignetteBlendMode = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.vignetteEnabled = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.applyByPostProcess = undefined;
// BABYLON.ImageProcessingConfiguration.prototype.isEnabled = undefined;
BABYLON.ImageProcessingConfiguration.prototype.getClassName = function () {};
BABYLON.ImageProcessingConfiguration.prototype.prepareDefines = function () {};
BABYLON.ImageProcessingConfiguration.prototype.isReady = function () {};
BABYLON.ImageProcessingConfiguration.prototype.bind = function () {};
BABYLON.ImageProcessingConfiguration.prototype.clone = function () {};
BABYLON.ImageProcessingConfiguration.prototype.serialize = function () {};


/** @constructor */
BABYLON.Material = function () {}
BABYLON.Material.Parse = function () {};
BABYLON.Material.TriangleFillMode = 0;
BABYLON.Material.WireFrameFillMode = 1;
BABYLON.Material.PointFillMode = 2;
BABYLON.Material.PointListDrawMode = 3;
BABYLON.Material.LineListDrawMode = 4;
BABYLON.Material.LineLoopDrawMode = 5;
BABYLON.Material.LineStripDrawMode = 6;
BABYLON.Material.TriangleStripDrawMode = 7;
BABYLON.Material.TriangleFanDrawMode = 8;
BABYLON.Material.ClockWiseSideOrientation = 0;
BABYLON.Material.CounterClockWiseSideOrientation = 1;
BABYLON.Material.TextureDirtyFlag = 1;
BABYLON.Material.LightDirtyFlag = 2;
BABYLON.Material.FresnelDirtyFlag = 4;
BABYLON.Material.AttributesDirtyFlag = 8;
BABYLON.Material.MiscDirtyFlag = 16;
BABYLON.Material.AllDirtyFlag = 31;


/** @constructor */
BABYLON.MaterialDefines = function () {}
// BABYLON.MaterialDefines.prototype.isDirty = undefined;
BABYLON.MaterialDefines.prototype.markAsProcessed = function () {};
BABYLON.MaterialDefines.prototype.markAsUnprocessed = function () {};
BABYLON.MaterialDefines.prototype.markAllAsDirty = function () {};
BABYLON.MaterialDefines.prototype.markAsImageProcessingDirty = function () {};
BABYLON.MaterialDefines.prototype.markAsLightDirty = function () {};
BABYLON.MaterialDefines.prototype.markAsAttributesDirty = function () {};
BABYLON.MaterialDefines.prototype.markAsTexturesDirty = function () {};
BABYLON.MaterialDefines.prototype.markAsFresnelDirty = function () {};
BABYLON.MaterialDefines.prototype.markAsMiscDirty = function () {};
BABYLON.MaterialDefines.prototype.rebuild = function () {};
BABYLON.MaterialDefines.prototype.isEqual = function () {};
BABYLON.MaterialDefines.prototype.cloneTo = function () {};
BABYLON.MaterialDefines.prototype.reset = function () {};
BABYLON.MaterialDefines.prototype.toString = function () {};


/** @constructor */
BABYLON.MaterialHelper = function () {}


/** @constructor */
BABYLON.MultiMaterial = function () {}
BABYLON.MultiMaterial.ParseMultiMaterial = function () {};
BABYLON.MultiMaterial.prototype.Parse = function () {};
BABYLON.MultiMaterial.prototype.TriangleFillMode = 0;
BABYLON.MultiMaterial.prototype.WireFrameFillMode = 1;
BABYLON.MultiMaterial.prototype.PointFillMode = 2;
BABYLON.MultiMaterial.prototype.PointListDrawMode = 3;
BABYLON.MultiMaterial.prototype.LineListDrawMode = 4;
BABYLON.MultiMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.MultiMaterial.prototype.LineStripDrawMode = 6;
BABYLON.MultiMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.MultiMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.MultiMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.MultiMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.MultiMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.MultiMaterial.prototype.LightDirtyFlag = 2;
BABYLON.MultiMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.MultiMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.MultiMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.MultiMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.PBRMaterial = function () {}
BABYLON.PBRMaterial.Parse = function () {};
BABYLON.PBRMaterial.PBRMATERIAL_OPAQUE = 0;
BABYLON.PBRMaterial.PBRMATERIAL_ALPHATEST = 1;
BABYLON.PBRMaterial.PBRMATERIAL_ALPHABLEND = 2;
BABYLON.PBRMaterial.PBRMATERIAL_ALPHATESTANDBLEND = 3;
BABYLON.PBRMaterial.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
BABYLON.PBRMaterial.prototype.LIGHTFALLOFF_PHYSICAL = 0;
BABYLON.PBRMaterial.prototype.LIGHTFALLOFF_GLTF = 1;
BABYLON.PBRMaterial.prototype.LIGHTFALLOFF_STANDARD = 2;
BABYLON.PBRMaterial.prototype.TriangleFillMode = 0;
BABYLON.PBRMaterial.prototype.WireFrameFillMode = 1;
BABYLON.PBRMaterial.prototype.PointFillMode = 2;
BABYLON.PBRMaterial.prototype.PointListDrawMode = 3;
BABYLON.PBRMaterial.prototype.LineListDrawMode = 4;
BABYLON.PBRMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.PBRMaterial.prototype.LineStripDrawMode = 6;
BABYLON.PBRMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.PBRMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.PBRMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.PBRMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.PBRMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.PBRMaterial.prototype.LightDirtyFlag = 2;
BABYLON.PBRMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.PBRMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.PBRMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.PBRMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.PushMaterial = function () {}
BABYLON.PushMaterial.prototype.Parse = function () {};
BABYLON.PushMaterial.prototype.TriangleFillMode = 0;
BABYLON.PushMaterial.prototype.WireFrameFillMode = 1;
BABYLON.PushMaterial.prototype.PointFillMode = 2;
BABYLON.PushMaterial.prototype.PointListDrawMode = 3;
BABYLON.PushMaterial.prototype.LineListDrawMode = 4;
BABYLON.PushMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.PushMaterial.prototype.LineStripDrawMode = 6;
BABYLON.PushMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.PushMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.PushMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.PushMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.PushMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.PushMaterial.prototype.LightDirtyFlag = 2;
BABYLON.PushMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.PushMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.PushMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.PushMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.ShaderMaterial = function () {}
BABYLON.ShaderMaterial.Parse = function () {};
BABYLON.ShaderMaterial.prototype.TriangleFillMode = 0;
BABYLON.ShaderMaterial.prototype.WireFrameFillMode = 1;
BABYLON.ShaderMaterial.prototype.PointFillMode = 2;
BABYLON.ShaderMaterial.prototype.PointListDrawMode = 3;
BABYLON.ShaderMaterial.prototype.LineListDrawMode = 4;
BABYLON.ShaderMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.ShaderMaterial.prototype.LineStripDrawMode = 6;
BABYLON.ShaderMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.ShaderMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.ShaderMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.ShaderMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.ShaderMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.ShaderMaterial.prototype.LightDirtyFlag = 2;
BABYLON.ShaderMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.ShaderMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.ShaderMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.ShaderMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.StandardMaterialDefines = function () {}
BABYLON.StandardMaterialDefines.MAINUV1 = false;
BABYLON.StandardMaterialDefines.MAINUV2 = false;
BABYLON.StandardMaterialDefines.DIFFUSE = false;
BABYLON.StandardMaterialDefines.DIFFUSEDIRECTUV = 0;
BABYLON.StandardMaterialDefines.AMBIENT = false;
BABYLON.StandardMaterialDefines.AMBIENTDIRECTUV = 0;
BABYLON.StandardMaterialDefines.OPACITY = false;
BABYLON.StandardMaterialDefines.OPACITYDIRECTUV = 0;
BABYLON.StandardMaterialDefines.OPACITYRGB = false;
BABYLON.StandardMaterialDefines.REFLECTION = false;
BABYLON.StandardMaterialDefines.EMISSIVE = false;
BABYLON.StandardMaterialDefines.EMISSIVEDIRECTUV = 0;
BABYLON.StandardMaterialDefines.SPECULAR = false;
BABYLON.StandardMaterialDefines.SPECULARDIRECTUV = 0;
BABYLON.StandardMaterialDefines.BUMP = false;
BABYLON.StandardMaterialDefines.BUMPDIRECTUV = 0;
BABYLON.StandardMaterialDefines.PARALLAX = false;
BABYLON.StandardMaterialDefines.PARALLAXOCCLUSION = false;
BABYLON.StandardMaterialDefines.SPECULAROVERALPHA = false;
BABYLON.StandardMaterialDefines.CLIPPLANE = false;
BABYLON.StandardMaterialDefines.CLIPPLANE2 = false;
BABYLON.StandardMaterialDefines.CLIPPLANE3 = false;
BABYLON.StandardMaterialDefines.CLIPPLANE4 = false;
BABYLON.StandardMaterialDefines.CLIPPLANE5 = false;
BABYLON.StandardMaterialDefines.CLIPPLANE6 = false;
BABYLON.StandardMaterialDefines.ALPHATEST = false;
BABYLON.StandardMaterialDefines.DEPTHPREPASS = false;
BABYLON.StandardMaterialDefines.ALPHAFROMDIFFUSE = false;
BABYLON.StandardMaterialDefines.POINTSIZE = false;
BABYLON.StandardMaterialDefines.FOG = false;
BABYLON.StandardMaterialDefines.SPECULARTERM = false;
BABYLON.StandardMaterialDefines.DIFFUSEFRESNEL = false;
BABYLON.StandardMaterialDefines.OPACITYFRESNEL = false;
BABYLON.StandardMaterialDefines.REFLECTIONFRESNEL = false;
BABYLON.StandardMaterialDefines.REFRACTIONFRESNEL = false;
BABYLON.StandardMaterialDefines.EMISSIVEFRESNEL = false;
BABYLON.StandardMaterialDefines.FRESNEL = false;
BABYLON.StandardMaterialDefines.NORMAL = false;
BABYLON.StandardMaterialDefines.UV1 = false;
BABYLON.StandardMaterialDefines.UV2 = false;
BABYLON.StandardMaterialDefines.VERTEXCOLOR = false;
BABYLON.StandardMaterialDefines.VERTEXALPHA = false;
BABYLON.StandardMaterialDefines.NUM_BONE_INFLUENCERS = 0;
BABYLON.StandardMaterialDefines.BonesPerMesh = 0;
BABYLON.StandardMaterialDefines.BONETEXTURE = false;
BABYLON.StandardMaterialDefines.INSTANCES = false;
BABYLON.StandardMaterialDefines.GLOSSINESS = false;
BABYLON.StandardMaterialDefines.ROUGHNESS = false;
BABYLON.StandardMaterialDefines.EMISSIVEASILLUMINATION = false;
BABYLON.StandardMaterialDefines.LINKEMISSIVEWITHDIFFUSE = false;
BABYLON.StandardMaterialDefines.REFLECTIONFRESNELFROMSPECULAR = false;
BABYLON.StandardMaterialDefines.LIGHTMAP = false;
BABYLON.StandardMaterialDefines.LIGHTMAPDIRECTUV = 0;
BABYLON.StandardMaterialDefines.OBJECTSPACE_NORMALMAP = false;
BABYLON.StandardMaterialDefines.USELIGHTMAPASSHADOWMAP = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_3D = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_SPHERICAL = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_PLANAR = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_CUBIC = false;
BABYLON.StandardMaterialDefines.USE_LOCAL_REFLECTIONMAP_CUBIC = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_PROJECTION = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_SKYBOX = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_EXPLICIT = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_EQUIRECTANGULAR = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
BABYLON.StandardMaterialDefines.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
BABYLON.StandardMaterialDefines.INVERTCUBICMAP = false;
BABYLON.StandardMaterialDefines.LOGARITHMICDEPTH = false;
BABYLON.StandardMaterialDefines.REFRACTION = false;
BABYLON.StandardMaterialDefines.REFRACTIONMAP_3D = false;
BABYLON.StandardMaterialDefines.REFLECTIONOVERALPHA = false;
BABYLON.StandardMaterialDefines.TWOSIDEDLIGHTING = false;
BABYLON.StandardMaterialDefines.SHADOWFLOAT = false;
BABYLON.StandardMaterialDefines.MORPHTARGETS = false;
BABYLON.StandardMaterialDefines.MORPHTARGETS_NORMAL = false;
BABYLON.StandardMaterialDefines.MORPHTARGETS_TANGENT = false;
BABYLON.StandardMaterialDefines.MORPHTARGETS_UV = false;
BABYLON.StandardMaterialDefines.NUM_MORPH_INFLUENCERS = 0;
BABYLON.StandardMaterialDefines.NONUNIFORMSCALING = false;
BABYLON.StandardMaterialDefines.PREMULTIPLYALPHA = false;
BABYLON.StandardMaterialDefines.IMAGEPROCESSING = false;
BABYLON.StandardMaterialDefines.VIGNETTE = false;
BABYLON.StandardMaterialDefines.VIGNETTEBLENDMODEMULTIPLY = false;
BABYLON.StandardMaterialDefines.VIGNETTEBLENDMODEOPAQUE = false;
BABYLON.StandardMaterialDefines.TONEMAPPING = false;
BABYLON.StandardMaterialDefines.TONEMAPPING_ACES = false;
BABYLON.StandardMaterialDefines.CONTRAST = false;
BABYLON.StandardMaterialDefines.COLORCURVES = false;
BABYLON.StandardMaterialDefines.COLORGRADING = false;
BABYLON.StandardMaterialDefines.COLORGRADING3D = false;
BABYLON.StandardMaterialDefines.SAMPLER3DGREENDEPTH = false;
BABYLON.StandardMaterialDefines.SAMPLER3DBGRMAP = false;
BABYLON.StandardMaterialDefines.IMAGEPROCESSINGPOSTPROCESS = false;
BABYLON.StandardMaterialDefines.MULTIVIEW = false;
BABYLON.StandardMaterialDefines.IS_REFLECTION_LINEAR = false;
BABYLON.StandardMaterialDefines.IS_REFRACTION_LINEAR = false;
BABYLON.StandardMaterialDefines.EXPOSURE = false;
BABYLON.StandardMaterialDefines.prototype.constructor = function () {};
BABYLON.StandardMaterialDefines.prototype.setReflectionMode = function () {};
// BABYLON.StandardMaterialDefines.prototype.isDirty = undefined;
BABYLON.StandardMaterialDefines.prototype.markAsProcessed = function () {};
BABYLON.StandardMaterialDefines.prototype.markAsUnprocessed = function () {};
BABYLON.StandardMaterialDefines.prototype.markAllAsDirty = function () {};
BABYLON.StandardMaterialDefines.prototype.markAsImageProcessingDirty = function () {};
BABYLON.StandardMaterialDefines.prototype.markAsLightDirty = function () {};
BABYLON.StandardMaterialDefines.prototype.markAsAttributesDirty = function () {};
BABYLON.StandardMaterialDefines.prototype.markAsTexturesDirty = function () {};
BABYLON.StandardMaterialDefines.prototype.markAsFresnelDirty = function () {};
BABYLON.StandardMaterialDefines.prototype.markAsMiscDirty = function () {};
BABYLON.StandardMaterialDefines.prototype.rebuild = function () {};
BABYLON.StandardMaterialDefines.prototype.isEqual = function () {};
BABYLON.StandardMaterialDefines.prototype.cloneTo = function () {};
BABYLON.StandardMaterialDefines.prototype.reset = function () {};
BABYLON.StandardMaterialDefines.prototype.toString = function () {};


/** @constructor */
BABYLON.StandardMaterial = function () {}
BABYLON.StandardMaterial.Parse = function () {};
BABYLON.StandardMaterial.DiffuseTextureEnabled = true;
BABYLON.StandardMaterial.AmbientTextureEnabled = true;
BABYLON.StandardMaterial.OpacityTextureEnabled = true;
BABYLON.StandardMaterial.ReflectionTextureEnabled = true;
BABYLON.StandardMaterial.EmissiveTextureEnabled = true;
BABYLON.StandardMaterial.SpecularTextureEnabled = true;
BABYLON.StandardMaterial.BumpTextureEnabled = true;
BABYLON.StandardMaterial.LightmapTextureEnabled = true;
BABYLON.StandardMaterial.RefractionTextureEnabled = true;
BABYLON.StandardMaterial.ColorGradingTextureEnabled = true;
BABYLON.StandardMaterial.FresnelEnabled = true;
BABYLON.StandardMaterial.prototype.TriangleFillMode = 0;
BABYLON.StandardMaterial.prototype.WireFrameFillMode = 1;
BABYLON.StandardMaterial.prototype.PointFillMode = 2;
BABYLON.StandardMaterial.prototype.PointListDrawMode = 3;
BABYLON.StandardMaterial.prototype.LineListDrawMode = 4;
BABYLON.StandardMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.StandardMaterial.prototype.LineStripDrawMode = 6;
BABYLON.StandardMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.StandardMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.StandardMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.StandardMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.StandardMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.StandardMaterial.prototype.LightDirtyFlag = 2;
BABYLON.StandardMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.StandardMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.StandardMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.StandardMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.BaseTexture = function () {}
BABYLON.BaseTexture.metadata = null;
BABYLON.BaseTexture.reservedDataStore = null;
BABYLON.BaseTexture.getAlphaFromRGB = false;
BABYLON.BaseTexture.level = 1;
BABYLON.BaseTexture.coordinatesIndex = 0;
BABYLON.BaseTexture.wrapU = 1;
BABYLON.BaseTexture.wrapV = 1;
BABYLON.BaseTexture.wrapR = 1;
BABYLON.BaseTexture.anisotropicFilteringLevel = 4;
BABYLON.BaseTexture.invertZ = false;
BABYLON.BaseTexture.lodLevelInAlpha = false;
BABYLON.BaseTexture.isRenderTarget = false;
BABYLON.BaseTexture.animations = {};
BABYLON.BaseTexture.onDisposeObservable = {};
BABYLON.BaseTexture.delayLoadState = 0;
// BABYLON.BaseTexture.prototype.hasAlpha = undefined;
// BABYLON.BaseTexture.prototype.coordinatesMode = undefined;
BABYLON.BaseTexture.prototype.isCube = false;
BABYLON.BaseTexture.prototype.is3D = false;
BABYLON.BaseTexture.prototype.is2DArray = false;
BABYLON.BaseTexture.prototype.isRGBD = false;
BABYLON.BaseTexture.prototype.noMipmap = false;
BABYLON.BaseTexture.prototype.lodGenerationOffset = 0;
BABYLON.BaseTexture.prototype.lodGenerationScale = 0;
BABYLON.BaseTexture.prototype.linearSpecularLOD = false;
BABYLON.BaseTexture.prototype.irradianceTexture = null;
BABYLON.BaseTexture.prototype.uid = "0fa69376-1fcf-422f-b5d9-12134e2ced93";
BABYLON.BaseTexture.prototype.toString = function () {};
BABYLON.BaseTexture.prototype.getClassName = function () {};
// BABYLON.BaseTexture.prototype.onDispose = undefined;
BABYLON.BaseTexture.prototype.isBlocking = true;
BABYLON.BaseTexture.prototype.getScene = function () {};
BABYLON.BaseTexture.prototype.getTextureMatrix = function () {};
BABYLON.BaseTexture.prototype.getReflectionTextureMatrix = function () {};
BABYLON.BaseTexture.prototype.getInternalTexture = function () {};
BABYLON.BaseTexture.prototype.isReadyOrNotBlocking = function () {};
BABYLON.BaseTexture.prototype.isReady = function () {};
BABYLON.BaseTexture.prototype.getSize = function () {};
BABYLON.BaseTexture.prototype.getBaseSize = function () {};
BABYLON.BaseTexture.prototype.updateSamplingMode = function () {};
BABYLON.BaseTexture.prototype.scale = function () {};
BABYLON.BaseTexture.prototype.canRescale = false;
BABYLON.BaseTexture.prototype.delayLoad = function () {};
BABYLON.BaseTexture.prototype.clone = function () {};
BABYLON.BaseTexture.prototype.textureType = 0;
BABYLON.BaseTexture.prototype.textureFormat = 5;
BABYLON.BaseTexture.prototype.readPixels = function () {};
BABYLON.BaseTexture.prototype.releaseInternalTexture = function () {};
BABYLON.BaseTexture.prototype.dispose = function () {};
BABYLON.BaseTexture.prototype.serialize = function () {};
// BABYLON.BaseTexture.prototype.gammaSpace = undefined;
BABYLON.BaseTexture.prototype.sphericalPolynomial = null;


/** @constructor */
BABYLON.CubeTexture = function () {}
BABYLON.CubeTexture.metadata = null;
BABYLON.CubeTexture.reservedDataStore = null;
BABYLON.CubeTexture.getAlphaFromRGB = false;
BABYLON.CubeTexture.level = 1;
BABYLON.CubeTexture.coordinatesIndex = 0;
BABYLON.CubeTexture.wrapU = 1;
BABYLON.CubeTexture.wrapV = 1;
BABYLON.CubeTexture.wrapR = 1;
BABYLON.CubeTexture.anisotropicFilteringLevel = 4;
BABYLON.CubeTexture.invertZ = false;
BABYLON.CubeTexture.lodLevelInAlpha = false;
BABYLON.CubeTexture.isRenderTarget = false;
BABYLON.CubeTexture.animations = {};
BABYLON.CubeTexture.onDisposeObservable = {};
BABYLON.CubeTexture.delayLoadState = 0;
BABYLON.CubeTexture.onLoadObservable = {};
BABYLON.CubeTexture.boundingBoxPosition = {};
// BABYLON.CubeTexture.name = undefined;
// BABYLON.CubeTexture.url = undefined;
BABYLON.CubeTexture.prototype.constructor = function () {};
// BABYLON.CubeTexture.prototype.boundingBoxSize = undefined;
// BABYLON.CubeTexture.prototype.rotationY = undefined;
// BABYLON.CubeTexture.prototype.noMipmap = undefined;
// BABYLON.CubeTexture.prototype.isPrefiltered = undefined;
BABYLON.CubeTexture.prototype.getClassName = function () {};
BABYLON.CubeTexture.prototype.updateURL = function () {};
BABYLON.CubeTexture.prototype.delayLoad = function () {};
BABYLON.CubeTexture.prototype.getReflectionTextureMatrix = function () {};
BABYLON.CubeTexture.prototype.setReflectionTextureMatrix = function () {};
BABYLON.CubeTexture.prototype.clone = function () {};
// BABYLON.CubeTexture.prototype.hasAlpha = undefined;
// BABYLON.CubeTexture.prototype.coordinatesMode = undefined;
BABYLON.CubeTexture.prototype.isCube = false;
BABYLON.CubeTexture.prototype.is3D = false;
BABYLON.CubeTexture.prototype.is2DArray = false;
BABYLON.CubeTexture.prototype.isRGBD = false;
BABYLON.CubeTexture.prototype.lodGenerationOffset = 0;
BABYLON.CubeTexture.prototype.lodGenerationScale = 0;
BABYLON.CubeTexture.prototype.linearSpecularLOD = false;
BABYLON.CubeTexture.prototype.irradianceTexture = null;
BABYLON.CubeTexture.prototype.uid = "0fa69376-1fcf-422f-b5d9-12134e2ced93";
BABYLON.CubeTexture.prototype.toString = function () {};
// BABYLON.CubeTexture.prototype.onDispose = undefined;
BABYLON.CubeTexture.prototype.isBlocking = true;
BABYLON.CubeTexture.prototype.getScene = function () {};
BABYLON.CubeTexture.prototype.getTextureMatrix = function () {};
BABYLON.CubeTexture.prototype.getInternalTexture = function () {};
BABYLON.CubeTexture.prototype.isReadyOrNotBlocking = function () {};
BABYLON.CubeTexture.prototype.isReady = function () {};
BABYLON.CubeTexture.prototype.getSize = function () {};
BABYLON.CubeTexture.prototype.getBaseSize = function () {};
BABYLON.CubeTexture.prototype.updateSamplingMode = function () {};
BABYLON.CubeTexture.prototype.scale = function () {};
BABYLON.CubeTexture.prototype.canRescale = false;
BABYLON.CubeTexture.prototype.textureType = 0;
BABYLON.CubeTexture.prototype.textureFormat = 5;
BABYLON.CubeTexture.prototype.readPixels = function () {};
BABYLON.CubeTexture.prototype.releaseInternalTexture = function () {};
BABYLON.CubeTexture.prototype.dispose = function () {};
BABYLON.CubeTexture.prototype.serialize = function () {};
// BABYLON.CubeTexture.prototype.gammaSpace = undefined;
BABYLON.CubeTexture.prototype.sphericalPolynomial = null;


/** @constructor */
BABYLON.DynamicTexture = function () {}
BABYLON.DynamicTexture.prototype.Parse = function () {};
BABYLON.DynamicTexture.prototype.CreateFromBase64String = function () {};
BABYLON.DynamicTexture.prototype.LoadFromDataString = function () {};
BABYLON.DynamicTexture.prototype.SerializeBuffers = true;
BABYLON.DynamicTexture.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.DynamicTexture.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.DynamicTexture.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.DynamicTexture.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.DynamicTexture.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.DynamicTexture.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.DynamicTexture.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.DynamicTexture.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.DynamicTexture.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.DynamicTexture.prototype.NEAREST_LINEAR = 7;
BABYLON.DynamicTexture.prototype.NEAREST_NEAREST = 1;
BABYLON.DynamicTexture.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.DynamicTexture.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.DynamicTexture.prototype.LINEAR_LINEAR = 2;
BABYLON.DynamicTexture.prototype.LINEAR_NEAREST = 12;
BABYLON.DynamicTexture.prototype.EXPLICIT_MODE = 0;
BABYLON.DynamicTexture.prototype.SPHERICAL_MODE = 1;
BABYLON.DynamicTexture.prototype.PLANAR_MODE = 2;
BABYLON.DynamicTexture.prototype.CUBIC_MODE = 3;
BABYLON.DynamicTexture.prototype.PROJECTION_MODE = 4;
BABYLON.DynamicTexture.prototype.SKYBOX_MODE = 5;
BABYLON.DynamicTexture.prototype.INVCUBIC_MODE = 6;
BABYLON.DynamicTexture.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.DynamicTexture.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.DynamicTexture.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.DynamicTexture.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.DynamicTexture.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.DynamicTexture.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.DynamicTexture.prototype.UseSerializedUrlIfAny = false;
BABYLON.DynamicTexture.prototype.WhenAllReady = function () {};
BABYLON.DynamicTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.EquiRectangularCubeTexture = function () {}
BABYLON.EquiRectangularCubeTexture.prototype.WhenAllReady = function () {};
BABYLON.EquiRectangularCubeTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.HDRCubeTexture = function () {}
BABYLON.HDRCubeTexture.metadata = null;
BABYLON.HDRCubeTexture.reservedDataStore = null;
BABYLON.HDRCubeTexture.getAlphaFromRGB = false;
BABYLON.HDRCubeTexture.level = 1;
BABYLON.HDRCubeTexture.coordinatesIndex = 0;
BABYLON.HDRCubeTexture.wrapU = 1;
BABYLON.HDRCubeTexture.wrapV = 1;
BABYLON.HDRCubeTexture.wrapR = 1;
BABYLON.HDRCubeTexture.anisotropicFilteringLevel = 4;
BABYLON.HDRCubeTexture.invertZ = false;
BABYLON.HDRCubeTexture.lodLevelInAlpha = false;
BABYLON.HDRCubeTexture.isRenderTarget = false;
BABYLON.HDRCubeTexture.animations = {};
BABYLON.HDRCubeTexture.onDisposeObservable = {};
BABYLON.HDRCubeTexture.delayLoadState = 0;
BABYLON.HDRCubeTexture.boundingBoxPosition = {};
BABYLON.HDRCubeTexture.prototype.constructor = function () {};
// BABYLON.HDRCubeTexture.prototype.isBlocking = undefined;
// BABYLON.HDRCubeTexture.prototype.rotationY = undefined;
// BABYLON.HDRCubeTexture.prototype.boundingBoxSize = undefined;
BABYLON.HDRCubeTexture.prototype.getClassName = function () {};
BABYLON.HDRCubeTexture.prototype.loadTexture = function () {};
BABYLON.HDRCubeTexture.prototype.clone = function () {};
BABYLON.HDRCubeTexture.prototype.delayLoad = function () {};
BABYLON.HDRCubeTexture.prototype.getReflectionTextureMatrix = function () {};
BABYLON.HDRCubeTexture.prototype.setReflectionTextureMatrix = function () {};
BABYLON.HDRCubeTexture.prototype.serialize = function () {};
// BABYLON.HDRCubeTexture.prototype.hasAlpha = undefined;
// BABYLON.HDRCubeTexture.prototype.coordinatesMode = undefined;
BABYLON.HDRCubeTexture.prototype.isCube = false;
BABYLON.HDRCubeTexture.prototype.is3D = false;
BABYLON.HDRCubeTexture.prototype.is2DArray = false;
BABYLON.HDRCubeTexture.prototype.isRGBD = false;
BABYLON.HDRCubeTexture.prototype.noMipmap = false;
BABYLON.HDRCubeTexture.prototype.lodGenerationOffset = 0;
BABYLON.HDRCubeTexture.prototype.lodGenerationScale = 0;
BABYLON.HDRCubeTexture.prototype.linearSpecularLOD = false;
BABYLON.HDRCubeTexture.prototype.irradianceTexture = null;
BABYLON.HDRCubeTexture.prototype.uid = "0fa69376-1fcf-422f-b5d9-12134e2ced93";
BABYLON.HDRCubeTexture.prototype.toString = function () {};
// BABYLON.HDRCubeTexture.prototype.onDispose = undefined;
BABYLON.HDRCubeTexture.prototype.getScene = function () {};
BABYLON.HDRCubeTexture.prototype.getTextureMatrix = function () {};
BABYLON.HDRCubeTexture.prototype.getInternalTexture = function () {};
BABYLON.HDRCubeTexture.prototype.isReadyOrNotBlocking = function () {};
BABYLON.HDRCubeTexture.prototype.isReady = function () {};
BABYLON.HDRCubeTexture.prototype.getSize = function () {};
BABYLON.HDRCubeTexture.prototype.getBaseSize = function () {};
BABYLON.HDRCubeTexture.prototype.updateSamplingMode = function () {};
BABYLON.HDRCubeTexture.prototype.scale = function () {};
BABYLON.HDRCubeTexture.prototype.canRescale = false;
BABYLON.HDRCubeTexture.prototype.textureType = 0;
BABYLON.HDRCubeTexture.prototype.textureFormat = 5;
BABYLON.HDRCubeTexture.prototype.readPixels = function () {};
BABYLON.HDRCubeTexture.prototype.releaseInternalTexture = function () {};
BABYLON.HDRCubeTexture.prototype.dispose = function () {};
// BABYLON.HDRCubeTexture.prototype.gammaSpace = undefined;
BABYLON.HDRCubeTexture.prototype.sphericalPolynomial = null;


BABYLON.InternalTextureSource = {}

/** @constructor */
BABYLON.InternalTexture = function () {}


/** @constructor */
BABYLON.MirrorTexture = function () {}
BABYLON.MirrorTexture.prototype.REFRESHRATE_RENDER_ONCE = 0;
BABYLON.MirrorTexture.prototype.REFRESHRATE_RENDER_ONEVERYFRAME = 1;
BABYLON.MirrorTexture.prototype.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
BABYLON.MirrorTexture.prototype.Parse = function () {};
BABYLON.MirrorTexture.prototype.CreateFromBase64String = function () {};
BABYLON.MirrorTexture.prototype.LoadFromDataString = function () {};
BABYLON.MirrorTexture.prototype.SerializeBuffers = true;
BABYLON.MirrorTexture.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.MirrorTexture.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.MirrorTexture.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.MirrorTexture.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.MirrorTexture.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.MirrorTexture.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.MirrorTexture.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.MirrorTexture.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.MirrorTexture.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.MirrorTexture.prototype.NEAREST_LINEAR = 7;
BABYLON.MirrorTexture.prototype.NEAREST_NEAREST = 1;
BABYLON.MirrorTexture.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.MirrorTexture.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.MirrorTexture.prototype.LINEAR_LINEAR = 2;
BABYLON.MirrorTexture.prototype.LINEAR_NEAREST = 12;
BABYLON.MirrorTexture.prototype.EXPLICIT_MODE = 0;
BABYLON.MirrorTexture.prototype.SPHERICAL_MODE = 1;
BABYLON.MirrorTexture.prototype.PLANAR_MODE = 2;
BABYLON.MirrorTexture.prototype.CUBIC_MODE = 3;
BABYLON.MirrorTexture.prototype.PROJECTION_MODE = 4;
BABYLON.MirrorTexture.prototype.SKYBOX_MODE = 5;
BABYLON.MirrorTexture.prototype.INVCUBIC_MODE = 6;
BABYLON.MirrorTexture.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.MirrorTexture.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.MirrorTexture.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.MirrorTexture.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.MirrorTexture.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.MirrorTexture.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.MirrorTexture.prototype.UseSerializedUrlIfAny = false;
BABYLON.MirrorTexture.prototype.WhenAllReady = function () {};
BABYLON.MirrorTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.MultiRenderTarget = function () {}
BABYLON.MultiRenderTarget.prototype.REFRESHRATE_RENDER_ONCE = 0;
BABYLON.MultiRenderTarget.prototype.REFRESHRATE_RENDER_ONEVERYFRAME = 1;
BABYLON.MultiRenderTarget.prototype.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
BABYLON.MultiRenderTarget.prototype.Parse = function () {};
BABYLON.MultiRenderTarget.prototype.CreateFromBase64String = function () {};
BABYLON.MultiRenderTarget.prototype.LoadFromDataString = function () {};
BABYLON.MultiRenderTarget.prototype.SerializeBuffers = true;
BABYLON.MultiRenderTarget.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.MultiRenderTarget.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.MultiRenderTarget.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.MultiRenderTarget.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.MultiRenderTarget.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.MultiRenderTarget.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.MultiRenderTarget.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.MultiRenderTarget.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.MultiRenderTarget.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.MultiRenderTarget.prototype.NEAREST_LINEAR = 7;
BABYLON.MultiRenderTarget.prototype.NEAREST_NEAREST = 1;
BABYLON.MultiRenderTarget.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.MultiRenderTarget.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.MultiRenderTarget.prototype.LINEAR_LINEAR = 2;
BABYLON.MultiRenderTarget.prototype.LINEAR_NEAREST = 12;
BABYLON.MultiRenderTarget.prototype.EXPLICIT_MODE = 0;
BABYLON.MultiRenderTarget.prototype.SPHERICAL_MODE = 1;
BABYLON.MultiRenderTarget.prototype.PLANAR_MODE = 2;
BABYLON.MultiRenderTarget.prototype.CUBIC_MODE = 3;
BABYLON.MultiRenderTarget.prototype.PROJECTION_MODE = 4;
BABYLON.MultiRenderTarget.prototype.SKYBOX_MODE = 5;
BABYLON.MultiRenderTarget.prototype.INVCUBIC_MODE = 6;
BABYLON.MultiRenderTarget.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.MultiRenderTarget.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.MultiRenderTarget.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.MultiRenderTarget.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.MultiRenderTarget.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.MultiRenderTarget.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.MultiRenderTarget.prototype.UseSerializedUrlIfAny = false;
BABYLON.MultiRenderTarget.prototype.WhenAllReady = function () {};
BABYLON.MultiRenderTarget.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.RawTexture = function () {}
BABYLON.RawTexture.CreateLuminanceTexture = function () {};
BABYLON.RawTexture.CreateLuminanceAlphaTexture = function () {};
BABYLON.RawTexture.CreateAlphaTexture = function () {};
BABYLON.RawTexture.CreateRGBTexture = function () {};
BABYLON.RawTexture.CreateRGBATexture = function () {};
BABYLON.RawTexture.CreateRTexture = function () {};
BABYLON.RawTexture.prototype.Parse = function () {};
BABYLON.RawTexture.prototype.CreateFromBase64String = function () {};
BABYLON.RawTexture.prototype.LoadFromDataString = function () {};
BABYLON.RawTexture.prototype.SerializeBuffers = true;
BABYLON.RawTexture.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.RawTexture.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.RawTexture.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.RawTexture.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.RawTexture.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.RawTexture.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.RawTexture.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.RawTexture.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.RawTexture.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.RawTexture.prototype.NEAREST_LINEAR = 7;
BABYLON.RawTexture.prototype.NEAREST_NEAREST = 1;
BABYLON.RawTexture.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.RawTexture.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.RawTexture.prototype.LINEAR_LINEAR = 2;
BABYLON.RawTexture.prototype.LINEAR_NEAREST = 12;
BABYLON.RawTexture.prototype.EXPLICIT_MODE = 0;
BABYLON.RawTexture.prototype.SPHERICAL_MODE = 1;
BABYLON.RawTexture.prototype.PLANAR_MODE = 2;
BABYLON.RawTexture.prototype.CUBIC_MODE = 3;
BABYLON.RawTexture.prototype.PROJECTION_MODE = 4;
BABYLON.RawTexture.prototype.SKYBOX_MODE = 5;
BABYLON.RawTexture.prototype.INVCUBIC_MODE = 6;
BABYLON.RawTexture.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.RawTexture.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.RawTexture.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.RawTexture.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.RawTexture.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.RawTexture.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.RawTexture.prototype.UseSerializedUrlIfAny = false;
BABYLON.RawTexture.prototype.WhenAllReady = function () {};
BABYLON.RawTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.RenderTargetTexture = function () {}
BABYLON.RenderTargetTexture.metadata = null;
BABYLON.RenderTargetTexture.reservedDataStore = null;
BABYLON.RenderTargetTexture.getAlphaFromRGB = false;
BABYLON.RenderTargetTexture.level = 1;
BABYLON.RenderTargetTexture.coordinatesIndex = 0;
BABYLON.RenderTargetTexture.wrapU = 1;
BABYLON.RenderTargetTexture.wrapV = 1;
BABYLON.RenderTargetTexture.wrapR = 1;
BABYLON.RenderTargetTexture.anisotropicFilteringLevel = 4;
BABYLON.RenderTargetTexture.invertZ = false;
BABYLON.RenderTargetTexture.lodLevelInAlpha = false;
BABYLON.RenderTargetTexture.isRenderTarget = false;
BABYLON.RenderTargetTexture.animations = {};
BABYLON.RenderTargetTexture.onDisposeObservable = {};
BABYLON.RenderTargetTexture.delayLoadState = 0;
BABYLON.RenderTargetTexture.url = null;
BABYLON.RenderTargetTexture.uOffset = 0;
BABYLON.RenderTargetTexture.vOffset = 0;
BABYLON.RenderTargetTexture.uScale = 1;
BABYLON.RenderTargetTexture.vScale = 1;
BABYLON.RenderTargetTexture.uAng = 0;
BABYLON.RenderTargetTexture.vAng = 0;
BABYLON.RenderTargetTexture.wAng = 0;
BABYLON.RenderTargetTexture.uRotationCenter = 0.5;
BABYLON.RenderTargetTexture.vRotationCenter = 0.5;
BABYLON.RenderTargetTexture.wRotationCenter = 0.5;
BABYLON.RenderTargetTexture.inspectableCustomProperties = null;
BABYLON.RenderTargetTexture.onLoadObservable = {};
BABYLON.RenderTargetTexture.name = "";
BABYLON.RenderTargetTexture.renderParticles = true;
BABYLON.RenderTargetTexture.renderSprites = false;
BABYLON.RenderTargetTexture.ignoreCameraViewport = false;
BABYLON.RenderTargetTexture.onBeforeBindObservable = {};
BABYLON.RenderTargetTexture.onAfterUnbindObservable = {};
BABYLON.RenderTargetTexture.onBeforeRenderObservable = {};
BABYLON.RenderTargetTexture.onAfterRenderObservable = {};
BABYLON.RenderTargetTexture.onClearObservable = {};
BABYLON.RenderTargetTexture.onResizeObservable = {};
BABYLON.RenderTargetTexture.boundingBoxPosition = {};
BABYLON.RenderTargetTexture.prototype.constructor = function () {};
// BABYLON.RenderTargetTexture.prototype.renderList = undefined;
// BABYLON.RenderTargetTexture.prototype.onAfterUnbind = undefined;
// BABYLON.RenderTargetTexture.prototype.onBeforeRender = undefined;
// BABYLON.RenderTargetTexture.prototype.onAfterRender = undefined;
// BABYLON.RenderTargetTexture.prototype.onClear = undefined;
// BABYLON.RenderTargetTexture.prototype.renderTargetOptions = undefined;
// BABYLON.RenderTargetTexture.prototype.boundingBoxSize = undefined;
BABYLON.RenderTargetTexture.prototype.depthStencilTexture = null;
BABYLON.RenderTargetTexture.prototype.createDepthStencilTexture = function () {};
// BABYLON.RenderTargetTexture.prototype.samples = undefined;
BABYLON.RenderTargetTexture.prototype.resetRefreshCounter = function () {};
// BABYLON.RenderTargetTexture.prototype.refreshRate = undefined;
BABYLON.RenderTargetTexture.prototype.addPostProcess = function () {};
BABYLON.RenderTargetTexture.prototype.clearPostProcesses = function () {};
BABYLON.RenderTargetTexture.prototype.removePostProcess = function () {};
BABYLON.RenderTargetTexture.prototype.getRenderSize = function () {};
BABYLON.RenderTargetTexture.prototype.getRenderWidth = function () {};
BABYLON.RenderTargetTexture.prototype.getRenderHeight = function () {};
BABYLON.RenderTargetTexture.prototype.getRenderLayers = function () {};
BABYLON.RenderTargetTexture.prototype.canRescale = true;
BABYLON.RenderTargetTexture.prototype.scale = function () {};
BABYLON.RenderTargetTexture.prototype.getReflectionTextureMatrix = function () {};
BABYLON.RenderTargetTexture.prototype.resize = function () {};
BABYLON.RenderTargetTexture.prototype.render = function () {};
BABYLON.RenderTargetTexture.prototype.unbindFrameBuffer = function () {};
BABYLON.RenderTargetTexture.prototype.renderToTarget = function () {};
BABYLON.RenderTargetTexture.prototype.setRenderingOrder = function () {};
BABYLON.RenderTargetTexture.prototype.setRenderingAutoClearDepthStencil = function () {};
BABYLON.RenderTargetTexture.prototype.clone = function () {};
BABYLON.RenderTargetTexture.prototype.serialize = function () {};
BABYLON.RenderTargetTexture.prototype.disposeFramebufferObjects = function () {};
BABYLON.RenderTargetTexture.prototype.dispose = function () {};
BABYLON.RenderTargetTexture.prototype.freeRenderingGroups = function () {};
BABYLON.RenderTargetTexture.prototype.getViewCount = function () {};
// BABYLON.RenderTargetTexture.prototype.noMipmap = undefined;
// BABYLON.RenderTargetTexture.prototype.isBlocking = undefined;
// BABYLON.RenderTargetTexture.prototype.samplingMode = undefined;
// BABYLON.RenderTargetTexture.prototype.invertY = undefined;
BABYLON.RenderTargetTexture.prototype.updateURL = function () {};
BABYLON.RenderTargetTexture.prototype.delayLoad = function () {};
BABYLON.RenderTargetTexture.prototype.getTextureMatrix = function () {};
BABYLON.RenderTargetTexture.prototype.getClassName = function () {};
// BABYLON.RenderTargetTexture.prototype.hasAlpha = undefined;
// BABYLON.RenderTargetTexture.prototype.coordinatesMode = undefined;
BABYLON.RenderTargetTexture.prototype.isCube = false;
BABYLON.RenderTargetTexture.prototype.is3D = false;
BABYLON.RenderTargetTexture.prototype.is2DArray = false;
BABYLON.RenderTargetTexture.prototype.isRGBD = false;
BABYLON.RenderTargetTexture.prototype.lodGenerationOffset = 0;
BABYLON.RenderTargetTexture.prototype.lodGenerationScale = 0;
BABYLON.RenderTargetTexture.prototype.linearSpecularLOD = false;
BABYLON.RenderTargetTexture.prototype.irradianceTexture = null;
BABYLON.RenderTargetTexture.prototype.uid = "0fa69376-1fcf-422f-b5d9-12134e2ced93";
BABYLON.RenderTargetTexture.prototype.toString = function () {};
// BABYLON.RenderTargetTexture.prototype.onDispose = undefined;
BABYLON.RenderTargetTexture.prototype.getScene = function () {};
BABYLON.RenderTargetTexture.prototype.getInternalTexture = function () {};
BABYLON.RenderTargetTexture.prototype.isReadyOrNotBlocking = function () {};
BABYLON.RenderTargetTexture.prototype.isReady = function () {};
BABYLON.RenderTargetTexture.prototype.getSize = function () {};
BABYLON.RenderTargetTexture.prototype.getBaseSize = function () {};
BABYLON.RenderTargetTexture.prototype.updateSamplingMode = function () {};
BABYLON.RenderTargetTexture.prototype.textureType = 0;
BABYLON.RenderTargetTexture.prototype.textureFormat = 5;
BABYLON.RenderTargetTexture.prototype.readPixels = function () {};
BABYLON.RenderTargetTexture.prototype.releaseInternalTexture = function () {};
// BABYLON.RenderTargetTexture.prototype.gammaSpace = undefined;
BABYLON.RenderTargetTexture.prototype.sphericalPolynomial = null;


/** @constructor */
BABYLON.Texture = function () {}
BABYLON.Texture.metadata = null;
BABYLON.Texture.reservedDataStore = null;
BABYLON.Texture.getAlphaFromRGB = false;
BABYLON.Texture.level = 1;
BABYLON.Texture.coordinatesIndex = 0;
BABYLON.Texture.wrapU = 1;
BABYLON.Texture.wrapV = 1;
BABYLON.Texture.wrapR = 1;
BABYLON.Texture.anisotropicFilteringLevel = 4;
BABYLON.Texture.invertZ = false;
BABYLON.Texture.lodLevelInAlpha = false;
BABYLON.Texture.isRenderTarget = false;
BABYLON.Texture.animations = {};
BABYLON.Texture.onDisposeObservable = {};
BABYLON.Texture.delayLoadState = 0;
// BABYLON.Texture.url = undefined;
BABYLON.Texture.uOffset = 0;
BABYLON.Texture.vOffset = 0;
BABYLON.Texture.uScale = 1;
BABYLON.Texture.vScale = 1;
BABYLON.Texture.uAng = 0;
BABYLON.Texture.vAng = 0;
BABYLON.Texture.wAng = 0;
BABYLON.Texture.uRotationCenter = 0.5;
BABYLON.Texture.vRotationCenter = 0.5;
BABYLON.Texture.wRotationCenter = 0.5;
BABYLON.Texture.inspectableCustomProperties = null;
BABYLON.Texture.onLoadObservable = {};
BABYLON.Texture.name = "";
BABYLON.Texture.prototype.constructor = function () {};
// BABYLON.Texture.prototype.noMipmap = undefined;
// BABYLON.Texture.prototype.isBlocking = undefined;
// BABYLON.Texture.prototype.samplingMode = undefined;
// BABYLON.Texture.prototype.invertY = undefined;
BABYLON.Texture.prototype.updateURL = function () {};
BABYLON.Texture.prototype.delayLoad = function () {};
BABYLON.Texture.prototype.getTextureMatrix = function () {};
BABYLON.Texture.prototype.getReflectionTextureMatrix = function () {};
BABYLON.Texture.prototype.clone = function () {};
BABYLON.Texture.prototype.serialize = function () {};
BABYLON.Texture.prototype.getClassName = function () {};
BABYLON.Texture.prototype.dispose = function () {};
// BABYLON.Texture.prototype.hasAlpha = undefined;
// BABYLON.Texture.prototype.coordinatesMode = undefined;
BABYLON.Texture.prototype.isCube = false;
BABYLON.Texture.prototype.is3D = false;
BABYLON.Texture.prototype.is2DArray = false;
BABYLON.Texture.prototype.isRGBD = false;
BABYLON.Texture.prototype.lodGenerationOffset = 0;
BABYLON.Texture.prototype.lodGenerationScale = 0;
BABYLON.Texture.prototype.linearSpecularLOD = false;
BABYLON.Texture.prototype.irradianceTexture = null;
BABYLON.Texture.prototype.uid = "0fa69376-1fcf-422f-b5d9-12134e2ced93";
BABYLON.Texture.prototype.toString = function () {};
// BABYLON.Texture.prototype.onDispose = undefined;
BABYLON.Texture.prototype.getScene = function () {};
BABYLON.Texture.prototype.getInternalTexture = function () {};
BABYLON.Texture.prototype.isReadyOrNotBlocking = function () {};
BABYLON.Texture.prototype.isReady = function () {};
BABYLON.Texture.prototype.getSize = function () {};
BABYLON.Texture.prototype.getBaseSize = function () {};
BABYLON.Texture.prototype.updateSamplingMode = function () {};
BABYLON.Texture.prototype.scale = function () {};
BABYLON.Texture.prototype.canRescale = false;
BABYLON.Texture.prototype.textureType = 0;
BABYLON.Texture.prototype.textureFormat = 5;
BABYLON.Texture.prototype.readPixels = function () {};
BABYLON.Texture.prototype.releaseInternalTexture = function () {};
// BABYLON.Texture.prototype.gammaSpace = undefined;
BABYLON.Texture.prototype.sphericalPolynomial = null;


/** @constructor */
BABYLON.UniformBuffer = function () {}


/** @constructor */
BABYLON.MaterialFlags = function () {}


/** @constructor */
BABYLON.EffectRenderer = function () {}


/** @constructor */
BABYLON.EffectWrapper = function () {}


/** @constructor */
BABYLON.BackgroundMaterial = function () {}
BABYLON.BackgroundMaterial.Parse = function () {};
BABYLON.BackgroundMaterial.StandardReflectance0 = 0.05;
BABYLON.BackgroundMaterial.StandardReflectance90 = 0.5;
BABYLON.BackgroundMaterial.prototype.TriangleFillMode = 0;
BABYLON.BackgroundMaterial.prototype.WireFrameFillMode = 1;
BABYLON.BackgroundMaterial.prototype.PointFillMode = 2;
BABYLON.BackgroundMaterial.prototype.PointListDrawMode = 3;
BABYLON.BackgroundMaterial.prototype.LineListDrawMode = 4;
BABYLON.BackgroundMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.BackgroundMaterial.prototype.LineStripDrawMode = 6;
BABYLON.BackgroundMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.BackgroundMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.BackgroundMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.BackgroundMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.BackgroundMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.BackgroundMaterial.prototype.LightDirtyFlag = 2;
BABYLON.BackgroundMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.BackgroundMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.BackgroundMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.BackgroundMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.PBRMaterialDefines = function () {}
BABYLON.PBRMaterialDefines.PBR = true;
BABYLON.PBRMaterialDefines.MAINUV1 = false;
BABYLON.PBRMaterialDefines.MAINUV2 = false;
BABYLON.PBRMaterialDefines.UV1 = false;
BABYLON.PBRMaterialDefines.UV2 = false;
BABYLON.PBRMaterialDefines.ALBEDO = false;
BABYLON.PBRMaterialDefines.GAMMAALBEDO = false;
BABYLON.PBRMaterialDefines.ALBEDODIRECTUV = 0;
BABYLON.PBRMaterialDefines.VERTEXCOLOR = false;
BABYLON.PBRMaterialDefines.AMBIENT = false;
BABYLON.PBRMaterialDefines.AMBIENTDIRECTUV = 0;
BABYLON.PBRMaterialDefines.AMBIENTINGRAYSCALE = false;
BABYLON.PBRMaterialDefines.OPACITY = false;
BABYLON.PBRMaterialDefines.VERTEXALPHA = false;
BABYLON.PBRMaterialDefines.OPACITYDIRECTUV = 0;
BABYLON.PBRMaterialDefines.OPACITYRGB = false;
BABYLON.PBRMaterialDefines.ALPHATEST = false;
BABYLON.PBRMaterialDefines.DEPTHPREPASS = false;
BABYLON.PBRMaterialDefines.ALPHABLEND = false;
BABYLON.PBRMaterialDefines.ALPHAFROMALBEDO = false;
BABYLON.PBRMaterialDefines.ALPHATESTVALUE = "0.5";
BABYLON.PBRMaterialDefines.SPECULAROVERALPHA = false;
BABYLON.PBRMaterialDefines.RADIANCEOVERALPHA = false;
BABYLON.PBRMaterialDefines.ALPHAFRESNEL = false;
BABYLON.PBRMaterialDefines.LINEARALPHAFRESNEL = false;
BABYLON.PBRMaterialDefines.PREMULTIPLYALPHA = false;
BABYLON.PBRMaterialDefines.EMISSIVE = false;
BABYLON.PBRMaterialDefines.EMISSIVEDIRECTUV = 0;
BABYLON.PBRMaterialDefines.REFLECTIVITY = false;
BABYLON.PBRMaterialDefines.REFLECTIVITYDIRECTUV = 0;
BABYLON.PBRMaterialDefines.SPECULARTERM = false;
BABYLON.PBRMaterialDefines.MICROSURFACEFROMREFLECTIVITYMAP = false;
BABYLON.PBRMaterialDefines.MICROSURFACEAUTOMATIC = false;
BABYLON.PBRMaterialDefines.LODBASEDMICROSFURACE = false;
BABYLON.PBRMaterialDefines.MICROSURFACEMAP = false;
BABYLON.PBRMaterialDefines.MICROSURFACEMAPDIRECTUV = 0;
BABYLON.PBRMaterialDefines.METALLICWORKFLOW = false;
BABYLON.PBRMaterialDefines.ROUGHNESSSTOREINMETALMAPALPHA = false;
BABYLON.PBRMaterialDefines.ROUGHNESSSTOREINMETALMAPGREEN = false;
BABYLON.PBRMaterialDefines.METALLNESSSTOREINMETALMAPBLUE = false;
BABYLON.PBRMaterialDefines.AOSTOREINMETALMAPRED = false;
BABYLON.PBRMaterialDefines.METALLICF0FACTORFROMMETALLICMAP = false;
BABYLON.PBRMaterialDefines.ENVIRONMENTBRDF = false;
BABYLON.PBRMaterialDefines.ENVIRONMENTBRDF_RGBD = false;
BABYLON.PBRMaterialDefines.NORMAL = false;
BABYLON.PBRMaterialDefines.TANGENT = false;
BABYLON.PBRMaterialDefines.BUMP = false;
BABYLON.PBRMaterialDefines.BUMPDIRECTUV = 0;
BABYLON.PBRMaterialDefines.OBJECTSPACE_NORMALMAP = false;
BABYLON.PBRMaterialDefines.PARALLAX = false;
BABYLON.PBRMaterialDefines.PARALLAXOCCLUSION = false;
BABYLON.PBRMaterialDefines.NORMALXYSCALE = true;
BABYLON.PBRMaterialDefines.LIGHTMAP = false;
BABYLON.PBRMaterialDefines.LIGHTMAPDIRECTUV = 0;
BABYLON.PBRMaterialDefines.USELIGHTMAPASSHADOWMAP = false;
BABYLON.PBRMaterialDefines.GAMMALIGHTMAP = false;
BABYLON.PBRMaterialDefines.RGBDLIGHTMAP = false;
BABYLON.PBRMaterialDefines.REFLECTION = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_3D = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_SPHERICAL = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_PLANAR = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_CUBIC = false;
BABYLON.PBRMaterialDefines.USE_LOCAL_REFLECTIONMAP_CUBIC = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_PROJECTION = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_SKYBOX = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_EXPLICIT = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_EQUIRECTANGULAR = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
BABYLON.PBRMaterialDefines.INVERTCUBICMAP = false;
BABYLON.PBRMaterialDefines.USESPHERICALFROMREFLECTIONMAP = false;
BABYLON.PBRMaterialDefines.USEIRRADIANCEMAP = false;
BABYLON.PBRMaterialDefines.SPHERICAL_HARMONICS = false;
BABYLON.PBRMaterialDefines.USESPHERICALINVERTEX = false;
BABYLON.PBRMaterialDefines.REFLECTIONMAP_OPPOSITEZ = false;
BABYLON.PBRMaterialDefines.LODINREFLECTIONALPHA = false;
BABYLON.PBRMaterialDefines.GAMMAREFLECTION = false;
BABYLON.PBRMaterialDefines.RGBDREFLECTION = false;
BABYLON.PBRMaterialDefines.LINEARSPECULARREFLECTION = false;
BABYLON.PBRMaterialDefines.RADIANCEOCCLUSION = false;
BABYLON.PBRMaterialDefines.HORIZONOCCLUSION = false;
BABYLON.PBRMaterialDefines.INSTANCES = false;
BABYLON.PBRMaterialDefines.NUM_BONE_INFLUENCERS = 0;
BABYLON.PBRMaterialDefines.BonesPerMesh = 0;
BABYLON.PBRMaterialDefines.BONETEXTURE = false;
BABYLON.PBRMaterialDefines.NONUNIFORMSCALING = false;
BABYLON.PBRMaterialDefines.MORPHTARGETS = false;
BABYLON.PBRMaterialDefines.MORPHTARGETS_NORMAL = false;
BABYLON.PBRMaterialDefines.MORPHTARGETS_TANGENT = false;
BABYLON.PBRMaterialDefines.MORPHTARGETS_UV = false;
BABYLON.PBRMaterialDefines.NUM_MORPH_INFLUENCERS = 0;
BABYLON.PBRMaterialDefines.IMAGEPROCESSING = false;
BABYLON.PBRMaterialDefines.VIGNETTE = false;
BABYLON.PBRMaterialDefines.VIGNETTEBLENDMODEMULTIPLY = false;
BABYLON.PBRMaterialDefines.VIGNETTEBLENDMODEOPAQUE = false;
BABYLON.PBRMaterialDefines.TONEMAPPING = false;
BABYLON.PBRMaterialDefines.TONEMAPPING_ACES = false;
BABYLON.PBRMaterialDefines.CONTRAST = false;
BABYLON.PBRMaterialDefines.COLORCURVES = false;
BABYLON.PBRMaterialDefines.COLORGRADING = false;
BABYLON.PBRMaterialDefines.COLORGRADING3D = false;
BABYLON.PBRMaterialDefines.SAMPLER3DGREENDEPTH = false;
BABYLON.PBRMaterialDefines.SAMPLER3DBGRMAP = false;
BABYLON.PBRMaterialDefines.IMAGEPROCESSINGPOSTPROCESS = false;
BABYLON.PBRMaterialDefines.EXPOSURE = false;
BABYLON.PBRMaterialDefines.MULTIVIEW = false;
BABYLON.PBRMaterialDefines.USEPHYSICALLIGHTFALLOFF = false;
BABYLON.PBRMaterialDefines.USEGLTFLIGHTFALLOFF = false;
BABYLON.PBRMaterialDefines.TWOSIDEDLIGHTING = false;
BABYLON.PBRMaterialDefines.SHADOWFLOAT = false;
BABYLON.PBRMaterialDefines.CLIPPLANE = false;
BABYLON.PBRMaterialDefines.CLIPPLANE2 = false;
BABYLON.PBRMaterialDefines.CLIPPLANE3 = false;
BABYLON.PBRMaterialDefines.CLIPPLANE4 = false;
BABYLON.PBRMaterialDefines.CLIPPLANE5 = false;
BABYLON.PBRMaterialDefines.CLIPPLANE6 = false;
BABYLON.PBRMaterialDefines.POINTSIZE = false;
BABYLON.PBRMaterialDefines.FOG = false;
BABYLON.PBRMaterialDefines.LOGARITHMICDEPTH = false;
BABYLON.PBRMaterialDefines.FORCENORMALFORWARD = false;
BABYLON.PBRMaterialDefines.SPECULARAA = false;
BABYLON.PBRMaterialDefines.CLEARCOAT = false;
BABYLON.PBRMaterialDefines.CLEARCOAT_DEFAULTIOR = false;
BABYLON.PBRMaterialDefines.CLEARCOAT_TEXTURE = false;
BABYLON.PBRMaterialDefines.CLEARCOAT_TEXTUREDIRECTUV = 0;
BABYLON.PBRMaterialDefines.CLEARCOAT_BUMP = false;
BABYLON.PBRMaterialDefines.CLEARCOAT_BUMPDIRECTUV = 0;
BABYLON.PBRMaterialDefines.CLEARCOAT_TINT = false;
BABYLON.PBRMaterialDefines.CLEARCOAT_TINT_TEXTURE = false;
BABYLON.PBRMaterialDefines.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0;
BABYLON.PBRMaterialDefines.ANISOTROPIC = false;
BABYLON.PBRMaterialDefines.ANISOTROPIC_TEXTURE = false;
BABYLON.PBRMaterialDefines.ANISOTROPIC_TEXTUREDIRECTUV = 0;
BABYLON.PBRMaterialDefines.BRDF_V_HEIGHT_CORRELATED = false;
BABYLON.PBRMaterialDefines.MS_BRDF_ENERGY_CONSERVATION = false;
BABYLON.PBRMaterialDefines.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = false;
BABYLON.PBRMaterialDefines.SHEEN = false;
BABYLON.PBRMaterialDefines.SHEEN_TEXTURE = false;
BABYLON.PBRMaterialDefines.SHEEN_TEXTUREDIRECTUV = 0;
BABYLON.PBRMaterialDefines.SHEEN_LINKWITHALBEDO = false;
BABYLON.PBRMaterialDefines.SUBSURFACE = false;
BABYLON.PBRMaterialDefines.SS_REFRACTION = false;
BABYLON.PBRMaterialDefines.SS_TRANSLUCENCY = false;
BABYLON.PBRMaterialDefines.SS_SCATERRING = false;
BABYLON.PBRMaterialDefines.SS_THICKNESSANDMASK_TEXTURE = false;
BABYLON.PBRMaterialDefines.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0;
BABYLON.PBRMaterialDefines.SS_REFRACTIONMAP_3D = false;
BABYLON.PBRMaterialDefines.SS_REFRACTIONMAP_OPPOSITEZ = false;
BABYLON.PBRMaterialDefines.SS_LODINREFRACTIONALPHA = false;
BABYLON.PBRMaterialDefines.SS_GAMMAREFRACTION = false;
BABYLON.PBRMaterialDefines.SS_RGBDREFRACTION = false;
BABYLON.PBRMaterialDefines.SS_LINEARSPECULARREFRACTION = false;
BABYLON.PBRMaterialDefines.SS_LINKREFRACTIONTOTRANSPARENCY = false;
BABYLON.PBRMaterialDefines.SS_MASK_FROM_THICKNESS_TEXTURE = false;
BABYLON.PBRMaterialDefines.UNLIT = false;
BABYLON.PBRMaterialDefines.DEBUGMODE = 0;
BABYLON.PBRMaterialDefines.prototype.constructor = function () {};
BABYLON.PBRMaterialDefines.prototype.reset = function () {};
// BABYLON.PBRMaterialDefines.prototype.isDirty = undefined;
BABYLON.PBRMaterialDefines.prototype.markAsProcessed = function () {};
BABYLON.PBRMaterialDefines.prototype.markAsUnprocessed = function () {};
BABYLON.PBRMaterialDefines.prototype.markAllAsDirty = function () {};
BABYLON.PBRMaterialDefines.prototype.markAsImageProcessingDirty = function () {};
BABYLON.PBRMaterialDefines.prototype.markAsLightDirty = function () {};
BABYLON.PBRMaterialDefines.prototype.markAsAttributesDirty = function () {};
BABYLON.PBRMaterialDefines.prototype.markAsTexturesDirty = function () {};
BABYLON.PBRMaterialDefines.prototype.markAsFresnelDirty = function () {};
BABYLON.PBRMaterialDefines.prototype.markAsMiscDirty = function () {};
BABYLON.PBRMaterialDefines.prototype.rebuild = function () {};
BABYLON.PBRMaterialDefines.prototype.isEqual = function () {};
BABYLON.PBRMaterialDefines.prototype.cloneTo = function () {};
BABYLON.PBRMaterialDefines.prototype.toString = function () {};


/** @constructor */
BABYLON.PBRBaseMaterial = function () {}
BABYLON.PBRBaseMaterial.PBRMATERIAL_OPAQUE = 0;
BABYLON.PBRBaseMaterial.PBRMATERIAL_ALPHATEST = 1;
BABYLON.PBRBaseMaterial.PBRMATERIAL_ALPHABLEND = 2;
BABYLON.PBRBaseMaterial.PBRMATERIAL_ALPHATESTANDBLEND = 3;
BABYLON.PBRBaseMaterial.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
BABYLON.PBRBaseMaterial.LIGHTFALLOFF_PHYSICAL = 0;
BABYLON.PBRBaseMaterial.LIGHTFALLOFF_GLTF = 1;
BABYLON.PBRBaseMaterial.LIGHTFALLOFF_STANDARD = 2;
BABYLON.PBRBaseMaterial.prototype.Parse = function () {};
BABYLON.PBRBaseMaterial.prototype.TriangleFillMode = 0;
BABYLON.PBRBaseMaterial.prototype.WireFrameFillMode = 1;
BABYLON.PBRBaseMaterial.prototype.PointFillMode = 2;
BABYLON.PBRBaseMaterial.prototype.PointListDrawMode = 3;
BABYLON.PBRBaseMaterial.prototype.LineListDrawMode = 4;
BABYLON.PBRBaseMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.PBRBaseMaterial.prototype.LineStripDrawMode = 6;
BABYLON.PBRBaseMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.PBRBaseMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.PBRBaseMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.PBRBaseMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.PBRBaseMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.PBRBaseMaterial.prototype.LightDirtyFlag = 2;
BABYLON.PBRBaseMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.PBRBaseMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.PBRBaseMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.PBRBaseMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.PBRBaseSimpleMaterial = function () {}
BABYLON.PBRBaseSimpleMaterial.prototype.PBRMATERIAL_OPAQUE = 0;
BABYLON.PBRBaseSimpleMaterial.prototype.PBRMATERIAL_ALPHATEST = 1;
BABYLON.PBRBaseSimpleMaterial.prototype.PBRMATERIAL_ALPHABLEND = 2;
BABYLON.PBRBaseSimpleMaterial.prototype.PBRMATERIAL_ALPHATESTANDBLEND = 3;
BABYLON.PBRBaseSimpleMaterial.prototype.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
BABYLON.PBRBaseSimpleMaterial.prototype.LIGHTFALLOFF_PHYSICAL = 0;
BABYLON.PBRBaseSimpleMaterial.prototype.LIGHTFALLOFF_GLTF = 1;
BABYLON.PBRBaseSimpleMaterial.prototype.LIGHTFALLOFF_STANDARD = 2;
BABYLON.PBRBaseSimpleMaterial.prototype.Parse = function () {};
BABYLON.PBRBaseSimpleMaterial.prototype.TriangleFillMode = 0;
BABYLON.PBRBaseSimpleMaterial.prototype.WireFrameFillMode = 1;
BABYLON.PBRBaseSimpleMaterial.prototype.PointFillMode = 2;
BABYLON.PBRBaseSimpleMaterial.prototype.PointListDrawMode = 3;
BABYLON.PBRBaseSimpleMaterial.prototype.LineListDrawMode = 4;
BABYLON.PBRBaseSimpleMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.PBRBaseSimpleMaterial.prototype.LineStripDrawMode = 6;
BABYLON.PBRBaseSimpleMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.PBRBaseSimpleMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.PBRBaseSimpleMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.PBRBaseSimpleMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.PBRBaseSimpleMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.PBRBaseSimpleMaterial.prototype.LightDirtyFlag = 2;
BABYLON.PBRBaseSimpleMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.PBRBaseSimpleMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.PBRBaseSimpleMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.PBRBaseSimpleMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.PBRMetallicRoughnessMaterial = function () {}
BABYLON.PBRMetallicRoughnessMaterial.Parse = function () {};
BABYLON.PBRMetallicRoughnessMaterial.prototype.PBRMATERIAL_OPAQUE = 0;
BABYLON.PBRMetallicRoughnessMaterial.prototype.PBRMATERIAL_ALPHATEST = 1;
BABYLON.PBRMetallicRoughnessMaterial.prototype.PBRMATERIAL_ALPHABLEND = 2;
BABYLON.PBRMetallicRoughnessMaterial.prototype.PBRMATERIAL_ALPHATESTANDBLEND = 3;
BABYLON.PBRMetallicRoughnessMaterial.prototype.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
BABYLON.PBRMetallicRoughnessMaterial.prototype.LIGHTFALLOFF_PHYSICAL = 0;
BABYLON.PBRMetallicRoughnessMaterial.prototype.LIGHTFALLOFF_GLTF = 1;
BABYLON.PBRMetallicRoughnessMaterial.prototype.LIGHTFALLOFF_STANDARD = 2;
BABYLON.PBRMetallicRoughnessMaterial.prototype.TriangleFillMode = 0;
BABYLON.PBRMetallicRoughnessMaterial.prototype.WireFrameFillMode = 1;
BABYLON.PBRMetallicRoughnessMaterial.prototype.PointFillMode = 2;
BABYLON.PBRMetallicRoughnessMaterial.prototype.PointListDrawMode = 3;
BABYLON.PBRMetallicRoughnessMaterial.prototype.LineListDrawMode = 4;
BABYLON.PBRMetallicRoughnessMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.PBRMetallicRoughnessMaterial.prototype.LineStripDrawMode = 6;
BABYLON.PBRMetallicRoughnessMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.PBRMetallicRoughnessMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.PBRMetallicRoughnessMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.PBRMetallicRoughnessMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.PBRMetallicRoughnessMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.PBRMetallicRoughnessMaterial.prototype.LightDirtyFlag = 2;
BABYLON.PBRMetallicRoughnessMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.PBRMetallicRoughnessMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.PBRMetallicRoughnessMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.PBRMetallicRoughnessMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.PBRSpecularGlossinessMaterial = function () {}
BABYLON.PBRSpecularGlossinessMaterial.Parse = function () {};
BABYLON.PBRSpecularGlossinessMaterial.prototype.PBRMATERIAL_OPAQUE = 0;
BABYLON.PBRSpecularGlossinessMaterial.prototype.PBRMATERIAL_ALPHATEST = 1;
BABYLON.PBRSpecularGlossinessMaterial.prototype.PBRMATERIAL_ALPHABLEND = 2;
BABYLON.PBRSpecularGlossinessMaterial.prototype.PBRMATERIAL_ALPHATESTANDBLEND = 3;
BABYLON.PBRSpecularGlossinessMaterial.prototype.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
BABYLON.PBRSpecularGlossinessMaterial.prototype.LIGHTFALLOFF_PHYSICAL = 0;
BABYLON.PBRSpecularGlossinessMaterial.prototype.LIGHTFALLOFF_GLTF = 1;
BABYLON.PBRSpecularGlossinessMaterial.prototype.LIGHTFALLOFF_STANDARD = 2;
BABYLON.PBRSpecularGlossinessMaterial.prototype.TriangleFillMode = 0;
BABYLON.PBRSpecularGlossinessMaterial.prototype.WireFrameFillMode = 1;
BABYLON.PBRSpecularGlossinessMaterial.prototype.PointFillMode = 2;
BABYLON.PBRSpecularGlossinessMaterial.prototype.PointListDrawMode = 3;
BABYLON.PBRSpecularGlossinessMaterial.prototype.LineListDrawMode = 4;
BABYLON.PBRSpecularGlossinessMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.PBRSpecularGlossinessMaterial.prototype.LineStripDrawMode = 6;
BABYLON.PBRSpecularGlossinessMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.PBRSpecularGlossinessMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.PBRSpecularGlossinessMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.PBRSpecularGlossinessMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.PBRSpecularGlossinessMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.PBRSpecularGlossinessMaterial.prototype.LightDirtyFlag = 2;
BABYLON.PBRSpecularGlossinessMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.PBRSpecularGlossinessMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.PBRSpecularGlossinessMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.PBRSpecularGlossinessMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.ColorGradingTexture = function () {}
BABYLON.ColorGradingTexture.metadata = null;
BABYLON.ColorGradingTexture.reservedDataStore = null;
BABYLON.ColorGradingTexture.getAlphaFromRGB = false;
BABYLON.ColorGradingTexture.level = 1;
BABYLON.ColorGradingTexture.coordinatesIndex = 0;
BABYLON.ColorGradingTexture.wrapU = 1;
BABYLON.ColorGradingTexture.wrapV = 1;
BABYLON.ColorGradingTexture.wrapR = 1;
BABYLON.ColorGradingTexture.anisotropicFilteringLevel = 4;
BABYLON.ColorGradingTexture.invertZ = false;
BABYLON.ColorGradingTexture.lodLevelInAlpha = false;
BABYLON.ColorGradingTexture.isRenderTarget = false;
BABYLON.ColorGradingTexture.animations = {};
BABYLON.ColorGradingTexture.onDisposeObservable = {};
BABYLON.ColorGradingTexture.delayLoadState = 0;
BABYLON.ColorGradingTexture.prototype.constructor = function () {};
BABYLON.ColorGradingTexture.prototype.getTextureMatrix = function () {};
BABYLON.ColorGradingTexture.prototype.load3dlTexture = function () {};
BABYLON.ColorGradingTexture.prototype.loadTexture = function () {};
BABYLON.ColorGradingTexture.prototype.clone = function () {};
BABYLON.ColorGradingTexture.prototype.delayLoad = function () {};
BABYLON.ColorGradingTexture.prototype.serialize = function () {};
// BABYLON.ColorGradingTexture.prototype.hasAlpha = undefined;
// BABYLON.ColorGradingTexture.prototype.coordinatesMode = undefined;
BABYLON.ColorGradingTexture.prototype.isCube = false;
BABYLON.ColorGradingTexture.prototype.is3D = false;
BABYLON.ColorGradingTexture.prototype.is2DArray = false;
BABYLON.ColorGradingTexture.prototype.isRGBD = false;
BABYLON.ColorGradingTexture.prototype.noMipmap = false;
BABYLON.ColorGradingTexture.prototype.lodGenerationOffset = 0;
BABYLON.ColorGradingTexture.prototype.lodGenerationScale = 0;
BABYLON.ColorGradingTexture.prototype.linearSpecularLOD = false;
BABYLON.ColorGradingTexture.prototype.irradianceTexture = null;
BABYLON.ColorGradingTexture.prototype.uid = "0fa69376-1fcf-422f-b5d9-12134e2ced93";
BABYLON.ColorGradingTexture.prototype.toString = function () {};
BABYLON.ColorGradingTexture.prototype.getClassName = function () {};
// BABYLON.ColorGradingTexture.prototype.onDispose = undefined;
BABYLON.ColorGradingTexture.prototype.isBlocking = true;
BABYLON.ColorGradingTexture.prototype.getScene = function () {};
BABYLON.ColorGradingTexture.prototype.getReflectionTextureMatrix = function () {};
BABYLON.ColorGradingTexture.prototype.getInternalTexture = function () {};
BABYLON.ColorGradingTexture.prototype.isReadyOrNotBlocking = function () {};
BABYLON.ColorGradingTexture.prototype.isReady = function () {};
BABYLON.ColorGradingTexture.prototype.getSize = function () {};
BABYLON.ColorGradingTexture.prototype.getBaseSize = function () {};
BABYLON.ColorGradingTexture.prototype.updateSamplingMode = function () {};
BABYLON.ColorGradingTexture.prototype.scale = function () {};
BABYLON.ColorGradingTexture.prototype.canRescale = false;
BABYLON.ColorGradingTexture.prototype.textureType = 0;
BABYLON.ColorGradingTexture.prototype.textureFormat = 5;
BABYLON.ColorGradingTexture.prototype.readPixels = function () {};
BABYLON.ColorGradingTexture.prototype.releaseInternalTexture = function () {};
BABYLON.ColorGradingTexture.prototype.dispose = function () {};
// BABYLON.ColorGradingTexture.prototype.gammaSpace = undefined;
BABYLON.ColorGradingTexture.prototype.sphericalPolynomial = null;


/** @constructor */
BABYLON.RawCubeTexture = function () {}
BABYLON.RawCubeTexture.prototype.CreateFromImages = function () {};
BABYLON.RawCubeTexture.prototype.CreateFromPrefilteredData = function () {};
BABYLON.RawCubeTexture.prototype.Parse = function () {};
BABYLON.RawCubeTexture.prototype.WhenAllReady = function () {};
BABYLON.RawCubeTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.RawTexture3D = function () {}
BABYLON.RawTexture3D.prototype.Parse = function () {};
BABYLON.RawTexture3D.prototype.CreateFromBase64String = function () {};
BABYLON.RawTexture3D.prototype.LoadFromDataString = function () {};
BABYLON.RawTexture3D.prototype.SerializeBuffers = true;
BABYLON.RawTexture3D.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.RawTexture3D.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.RawTexture3D.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.RawTexture3D.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.RawTexture3D.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.RawTexture3D.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.RawTexture3D.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.RawTexture3D.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.RawTexture3D.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.RawTexture3D.prototype.NEAREST_LINEAR = 7;
BABYLON.RawTexture3D.prototype.NEAREST_NEAREST = 1;
BABYLON.RawTexture3D.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.RawTexture3D.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.RawTexture3D.prototype.LINEAR_LINEAR = 2;
BABYLON.RawTexture3D.prototype.LINEAR_NEAREST = 12;
BABYLON.RawTexture3D.prototype.EXPLICIT_MODE = 0;
BABYLON.RawTexture3D.prototype.SPHERICAL_MODE = 1;
BABYLON.RawTexture3D.prototype.PLANAR_MODE = 2;
BABYLON.RawTexture3D.prototype.CUBIC_MODE = 3;
BABYLON.RawTexture3D.prototype.PROJECTION_MODE = 4;
BABYLON.RawTexture3D.prototype.SKYBOX_MODE = 5;
BABYLON.RawTexture3D.prototype.INVCUBIC_MODE = 6;
BABYLON.RawTexture3D.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.RawTexture3D.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.RawTexture3D.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.RawTexture3D.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.RawTexture3D.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.RawTexture3D.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.RawTexture3D.prototype.UseSerializedUrlIfAny = false;
BABYLON.RawTexture3D.prototype.WhenAllReady = function () {};
BABYLON.RawTexture3D.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.RawTexture2DArray = function () {}
BABYLON.RawTexture2DArray.prototype.Parse = function () {};
BABYLON.RawTexture2DArray.prototype.CreateFromBase64String = function () {};
BABYLON.RawTexture2DArray.prototype.LoadFromDataString = function () {};
BABYLON.RawTexture2DArray.prototype.SerializeBuffers = true;
BABYLON.RawTexture2DArray.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.RawTexture2DArray.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.RawTexture2DArray.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.RawTexture2DArray.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.RawTexture2DArray.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.RawTexture2DArray.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.RawTexture2DArray.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.RawTexture2DArray.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.RawTexture2DArray.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.RawTexture2DArray.prototype.NEAREST_LINEAR = 7;
BABYLON.RawTexture2DArray.prototype.NEAREST_NEAREST = 1;
BABYLON.RawTexture2DArray.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.RawTexture2DArray.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.RawTexture2DArray.prototype.LINEAR_LINEAR = 2;
BABYLON.RawTexture2DArray.prototype.LINEAR_NEAREST = 12;
BABYLON.RawTexture2DArray.prototype.EXPLICIT_MODE = 0;
BABYLON.RawTexture2DArray.prototype.SPHERICAL_MODE = 1;
BABYLON.RawTexture2DArray.prototype.PLANAR_MODE = 2;
BABYLON.RawTexture2DArray.prototype.CUBIC_MODE = 3;
BABYLON.RawTexture2DArray.prototype.PROJECTION_MODE = 4;
BABYLON.RawTexture2DArray.prototype.SKYBOX_MODE = 5;
BABYLON.RawTexture2DArray.prototype.INVCUBIC_MODE = 6;
BABYLON.RawTexture2DArray.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.RawTexture2DArray.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.RawTexture2DArray.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.RawTexture2DArray.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.RawTexture2DArray.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.RawTexture2DArray.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.RawTexture2DArray.prototype.UseSerializedUrlIfAny = false;
BABYLON.RawTexture2DArray.prototype.WhenAllReady = function () {};
BABYLON.RawTexture2DArray.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.RefractionTexture = function () {}
BABYLON.RefractionTexture.metadata = null;
BABYLON.RefractionTexture.reservedDataStore = null;
BABYLON.RefractionTexture.getAlphaFromRGB = false;
BABYLON.RefractionTexture.level = 1;
BABYLON.RefractionTexture.coordinatesIndex = 0;
BABYLON.RefractionTexture.wrapU = 1;
BABYLON.RefractionTexture.wrapV = 1;
BABYLON.RefractionTexture.wrapR = 1;
BABYLON.RefractionTexture.anisotropicFilteringLevel = 4;
BABYLON.RefractionTexture.invertZ = false;
BABYLON.RefractionTexture.lodLevelInAlpha = false;
BABYLON.RefractionTexture.isRenderTarget = false;
BABYLON.RefractionTexture.animations = {};
BABYLON.RefractionTexture.onDisposeObservable = {};
BABYLON.RefractionTexture.delayLoadState = 0;
BABYLON.RefractionTexture.url = null;
BABYLON.RefractionTexture.uOffset = 0;
BABYLON.RefractionTexture.vOffset = 0;
BABYLON.RefractionTexture.uScale = 1;
BABYLON.RefractionTexture.vScale = 1;
BABYLON.RefractionTexture.uAng = 0;
BABYLON.RefractionTexture.vAng = 0;
BABYLON.RefractionTexture.wAng = 0;
BABYLON.RefractionTexture.uRotationCenter = 0.5;
BABYLON.RefractionTexture.vRotationCenter = 0.5;
BABYLON.RefractionTexture.wRotationCenter = 0.5;
BABYLON.RefractionTexture.inspectableCustomProperties = null;
BABYLON.RefractionTexture.onLoadObservable = {};
BABYLON.RefractionTexture.name = "";
BABYLON.RefractionTexture.renderParticles = true;
BABYLON.RefractionTexture.renderSprites = false;
BABYLON.RefractionTexture.ignoreCameraViewport = false;
BABYLON.RefractionTexture.onBeforeBindObservable = {};
BABYLON.RefractionTexture.onAfterUnbindObservable = {};
BABYLON.RefractionTexture.onBeforeRenderObservable = {};
BABYLON.RefractionTexture.onAfterRenderObservable = {};
BABYLON.RefractionTexture.onClearObservable = {};
BABYLON.RefractionTexture.onResizeObservable = {};
BABYLON.RefractionTexture.boundingBoxPosition = {};
BABYLON.RefractionTexture.refractionPlane = {};
BABYLON.RefractionTexture.depth = 2;
BABYLON.RefractionTexture.prototype.constructor = function () {};
BABYLON.RefractionTexture.prototype.clone = function () {};
BABYLON.RefractionTexture.prototype.serialize = function () {};
// BABYLON.RefractionTexture.prototype.renderList = undefined;
// BABYLON.RefractionTexture.prototype.onAfterUnbind = undefined;
// BABYLON.RefractionTexture.prototype.onBeforeRender = undefined;
// BABYLON.RefractionTexture.prototype.onAfterRender = undefined;
// BABYLON.RefractionTexture.prototype.onClear = undefined;
// BABYLON.RefractionTexture.prototype.renderTargetOptions = undefined;
// BABYLON.RefractionTexture.prototype.boundingBoxSize = undefined;
BABYLON.RefractionTexture.prototype.depthStencilTexture = null;
BABYLON.RefractionTexture.prototype.createDepthStencilTexture = function () {};
// BABYLON.RefractionTexture.prototype.samples = undefined;
BABYLON.RefractionTexture.prototype.resetRefreshCounter = function () {};
// BABYLON.RefractionTexture.prototype.refreshRate = undefined;
BABYLON.RefractionTexture.prototype.addPostProcess = function () {};
BABYLON.RefractionTexture.prototype.clearPostProcesses = function () {};
BABYLON.RefractionTexture.prototype.removePostProcess = function () {};
BABYLON.RefractionTexture.prototype.getRenderSize = function () {};
BABYLON.RefractionTexture.prototype.getRenderWidth = function () {};
BABYLON.RefractionTexture.prototype.getRenderHeight = function () {};
BABYLON.RefractionTexture.prototype.getRenderLayers = function () {};
BABYLON.RefractionTexture.prototype.canRescale = true;
BABYLON.RefractionTexture.prototype.scale = function () {};
BABYLON.RefractionTexture.prototype.getReflectionTextureMatrix = function () {};
BABYLON.RefractionTexture.prototype.resize = function () {};
BABYLON.RefractionTexture.prototype.render = function () {};
BABYLON.RefractionTexture.prototype.unbindFrameBuffer = function () {};
BABYLON.RefractionTexture.prototype.renderToTarget = function () {};
BABYLON.RefractionTexture.prototype.setRenderingOrder = function () {};
BABYLON.RefractionTexture.prototype.setRenderingAutoClearDepthStencil = function () {};
BABYLON.RefractionTexture.prototype.disposeFramebufferObjects = function () {};
BABYLON.RefractionTexture.prototype.dispose = function () {};
BABYLON.RefractionTexture.prototype.freeRenderingGroups = function () {};
BABYLON.RefractionTexture.prototype.getViewCount = function () {};
// BABYLON.RefractionTexture.prototype.noMipmap = undefined;
// BABYLON.RefractionTexture.prototype.isBlocking = undefined;
// BABYLON.RefractionTexture.prototype.samplingMode = undefined;
// BABYLON.RefractionTexture.prototype.invertY = undefined;
BABYLON.RefractionTexture.prototype.updateURL = function () {};
BABYLON.RefractionTexture.prototype.delayLoad = function () {};
BABYLON.RefractionTexture.prototype.getTextureMatrix = function () {};
BABYLON.RefractionTexture.prototype.getClassName = function () {};
// BABYLON.RefractionTexture.prototype.hasAlpha = undefined;
// BABYLON.RefractionTexture.prototype.coordinatesMode = undefined;
BABYLON.RefractionTexture.prototype.isCube = false;
BABYLON.RefractionTexture.prototype.is3D = false;
BABYLON.RefractionTexture.prototype.is2DArray = false;
BABYLON.RefractionTexture.prototype.isRGBD = false;
BABYLON.RefractionTexture.prototype.lodGenerationOffset = 0;
BABYLON.RefractionTexture.prototype.lodGenerationScale = 0;
BABYLON.RefractionTexture.prototype.linearSpecularLOD = false;
BABYLON.RefractionTexture.prototype.irradianceTexture = null;
BABYLON.RefractionTexture.prototype.uid = "0fa69376-1fcf-422f-b5d9-12134e2ced93";
BABYLON.RefractionTexture.prototype.toString = function () {};
// BABYLON.RefractionTexture.prototype.onDispose = undefined;
BABYLON.RefractionTexture.prototype.getScene = function () {};
BABYLON.RefractionTexture.prototype.getInternalTexture = function () {};
BABYLON.RefractionTexture.prototype.isReadyOrNotBlocking = function () {};
BABYLON.RefractionTexture.prototype.isReady = function () {};
BABYLON.RefractionTexture.prototype.getSize = function () {};
BABYLON.RefractionTexture.prototype.getBaseSize = function () {};
BABYLON.RefractionTexture.prototype.updateSamplingMode = function () {};
BABYLON.RefractionTexture.prototype.textureType = 0;
BABYLON.RefractionTexture.prototype.textureFormat = 5;
BABYLON.RefractionTexture.prototype.readPixels = function () {};
BABYLON.RefractionTexture.prototype.releaseInternalTexture = function () {};
// BABYLON.RefractionTexture.prototype.gammaSpace = undefined;
BABYLON.RefractionTexture.prototype.sphericalPolynomial = null;


/** @constructor */
BABYLON.VideoTexture = function () {}
BABYLON.VideoTexture.CreateFromStreamAsync = function () {};
BABYLON.VideoTexture.CreateFromWebCamAsync = function () {};
BABYLON.VideoTexture.CreateFromWebCam = function () {};
BABYLON.VideoTexture.prototype.Parse = function () {};
BABYLON.VideoTexture.prototype.CreateFromBase64String = function () {};
BABYLON.VideoTexture.prototype.LoadFromDataString = function () {};
BABYLON.VideoTexture.prototype.SerializeBuffers = true;
BABYLON.VideoTexture.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.VideoTexture.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.VideoTexture.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.VideoTexture.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.VideoTexture.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.VideoTexture.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.VideoTexture.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.VideoTexture.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.VideoTexture.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.VideoTexture.prototype.NEAREST_LINEAR = 7;
BABYLON.VideoTexture.prototype.NEAREST_NEAREST = 1;
BABYLON.VideoTexture.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.VideoTexture.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.VideoTexture.prototype.LINEAR_LINEAR = 2;
BABYLON.VideoTexture.prototype.LINEAR_NEAREST = 12;
BABYLON.VideoTexture.prototype.EXPLICIT_MODE = 0;
BABYLON.VideoTexture.prototype.SPHERICAL_MODE = 1;
BABYLON.VideoTexture.prototype.PLANAR_MODE = 2;
BABYLON.VideoTexture.prototype.CUBIC_MODE = 3;
BABYLON.VideoTexture.prototype.PROJECTION_MODE = 4;
BABYLON.VideoTexture.prototype.SKYBOX_MODE = 5;
BABYLON.VideoTexture.prototype.INVCUBIC_MODE = 6;
BABYLON.VideoTexture.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.VideoTexture.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.VideoTexture.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.VideoTexture.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.VideoTexture.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.VideoTexture.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.VideoTexture.prototype.UseSerializedUrlIfAny = false;
BABYLON.VideoTexture.prototype.WhenAllReady = function () {};
BABYLON.VideoTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.HtmlElementTexture = function () {}
BABYLON.HtmlElementTexture.DefaultOptions = {};
BABYLON.HtmlElementTexture.prototype.WhenAllReady = function () {};
BABYLON.HtmlElementTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


BABYLON.NodeMaterialConnectionPointCompatibilityStates = {}

BABYLON.NodeMaterialConnectionPointDirection = {}

/** @constructor */
BABYLON.NodeMaterialConnectionPoint = function () {}
BABYLON.NodeMaterialConnectionPoint.acceptedConnectionPointTypes = {};
BABYLON.NodeMaterialConnectionPoint.excludedConnectionPointTypes = {};
BABYLON.NodeMaterialConnectionPoint.onConnectionObservable = {};
// BABYLON.NodeMaterialConnectionPoint.name = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.direction = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.associatedVariableName = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.innerType = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.type = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.target = undefined;
BABYLON.NodeMaterialConnectionPoint.prototype.isConnected = true;
// BABYLON.NodeMaterialConnectionPoint.prototype.isConnectedToInputBlock = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.connectInputBlock = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.connectedPoint = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.ownerBlock = undefined;
BABYLON.NodeMaterialConnectionPoint.prototype.sourceBlock = null;
// BABYLON.NodeMaterialConnectionPoint.prototype.connectedBlocks = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.endpoints = undefined;
// BABYLON.NodeMaterialConnectionPoint.prototype.hasEndpoints = undefined;
BABYLON.NodeMaterialConnectionPoint.prototype.isConnectedInVertexShader = false;
BABYLON.NodeMaterialConnectionPoint.prototype.isConnectedInFragmentShader = false;
BABYLON.NodeMaterialConnectionPoint.prototype.getClassName = function () {};
BABYLON.NodeMaterialConnectionPoint.prototype.canConnectTo = function () {};
BABYLON.NodeMaterialConnectionPoint.prototype.checkCompatibilityState = function () {};
BABYLON.NodeMaterialConnectionPoint.prototype.connectTo = function () {};
BABYLON.NodeMaterialConnectionPoint.prototype.disconnectFrom = function () {};
BABYLON.NodeMaterialConnectionPoint.prototype.serialize = function () {};
BABYLON.NodeMaterialConnectionPoint.prototype.dispose = function () {};


/** @constructor */
BABYLON.NodeMaterialBlock = function () {}
BABYLON.NodeMaterialBlock.inputsAreExclusive = false;
BABYLON.NodeMaterialBlock.comments = "";
// BABYLON.NodeMaterialBlock.name = undefined;
BABYLON.NodeMaterialBlock.uniqueId = 0;
// BABYLON.NodeMaterialBlock.prototype.isUnique = undefined;
// BABYLON.NodeMaterialBlock.prototype.isFinalMerger = undefined;
// BABYLON.NodeMaterialBlock.prototype.isInput = undefined;
// BABYLON.NodeMaterialBlock.prototype.buildId = undefined;
// BABYLON.NodeMaterialBlock.prototype.target = undefined;
// BABYLON.NodeMaterialBlock.prototype.inputs = undefined;
// BABYLON.NodeMaterialBlock.prototype.outputs = undefined;
BABYLON.NodeMaterialBlock.prototype.getInputByName = function () {};
BABYLON.NodeMaterialBlock.prototype.getOutputByName = function () {};
BABYLON.NodeMaterialBlock.prototype.initialize = function () {};
BABYLON.NodeMaterialBlock.prototype.bind = function () {};
BABYLON.NodeMaterialBlock.prototype.getClassName = function () {};
BABYLON.NodeMaterialBlock.prototype.registerInput = function () {};
BABYLON.NodeMaterialBlock.prototype.registerOutput = function () {};
BABYLON.NodeMaterialBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.NodeMaterialBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.NodeMaterialBlock.prototype.getSiblingOutput = function () {};
BABYLON.NodeMaterialBlock.prototype.connectTo = function () {};
BABYLON.NodeMaterialBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.NodeMaterialBlock.prototype.provideFallbacks = function () {};
BABYLON.NodeMaterialBlock.prototype.initializeDefines = function () {};
BABYLON.NodeMaterialBlock.prototype.prepareDefines = function () {};
BABYLON.NodeMaterialBlock.prototype.autoConfigure = function () {};
BABYLON.NodeMaterialBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.NodeMaterialBlock.prototype.isReady = function () {};
BABYLON.NodeMaterialBlock.prototype.build = function () {};
BABYLON.NodeMaterialBlock.prototype.clone = function () {};
BABYLON.NodeMaterialBlock.prototype.serialize = function () {};
BABYLON.NodeMaterialBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.NodeMaterialDefines = function () {}
BABYLON.NodeMaterialDefines.NORMAL = false;
BABYLON.NodeMaterialDefines.TANGENT = false;
BABYLON.NodeMaterialDefines.UV1 = false;
BABYLON.NodeMaterialDefines.NUM_BONE_INFLUENCERS = 0;
BABYLON.NodeMaterialDefines.BonesPerMesh = 0;
BABYLON.NodeMaterialDefines.BONETEXTURE = false;
BABYLON.NodeMaterialDefines.MORPHTARGETS = false;
BABYLON.NodeMaterialDefines.MORPHTARGETS_NORMAL = false;
BABYLON.NodeMaterialDefines.MORPHTARGETS_TANGENT = false;
BABYLON.NodeMaterialDefines.MORPHTARGETS_UV = false;
BABYLON.NodeMaterialDefines.NUM_MORPH_INFLUENCERS = 0;
BABYLON.NodeMaterialDefines.IMAGEPROCESSING = false;
BABYLON.NodeMaterialDefines.VIGNETTE = false;
BABYLON.NodeMaterialDefines.VIGNETTEBLENDMODEMULTIPLY = false;
BABYLON.NodeMaterialDefines.VIGNETTEBLENDMODEOPAQUE = false;
BABYLON.NodeMaterialDefines.TONEMAPPING = false;
BABYLON.NodeMaterialDefines.TONEMAPPING_ACES = false;
BABYLON.NodeMaterialDefines.CONTRAST = false;
BABYLON.NodeMaterialDefines.EXPOSURE = false;
BABYLON.NodeMaterialDefines.COLORCURVES = false;
BABYLON.NodeMaterialDefines.COLORGRADING = false;
BABYLON.NodeMaterialDefines.COLORGRADING3D = false;
BABYLON.NodeMaterialDefines.SAMPLER3DGREENDEPTH = false;
BABYLON.NodeMaterialDefines.SAMPLER3DBGRMAP = false;
BABYLON.NodeMaterialDefines.IMAGEPROCESSINGPOSTPROCESS = false;
BABYLON.NodeMaterialDefines.BUMPDIRECTUV = 0;
BABYLON.NodeMaterialDefines.prototype.constructor = function () {};
BABYLON.NodeMaterialDefines.prototype.setValue = function () {};
// BABYLON.NodeMaterialDefines.prototype.isDirty = undefined;
BABYLON.NodeMaterialDefines.prototype.markAsProcessed = function () {};
BABYLON.NodeMaterialDefines.prototype.markAsUnprocessed = function () {};
BABYLON.NodeMaterialDefines.prototype.markAllAsDirty = function () {};
BABYLON.NodeMaterialDefines.prototype.markAsImageProcessingDirty = function () {};
BABYLON.NodeMaterialDefines.prototype.markAsLightDirty = function () {};
BABYLON.NodeMaterialDefines.prototype.markAsAttributesDirty = function () {};
BABYLON.NodeMaterialDefines.prototype.markAsTexturesDirty = function () {};
BABYLON.NodeMaterialDefines.prototype.markAsFresnelDirty = function () {};
BABYLON.NodeMaterialDefines.prototype.markAsMiscDirty = function () {};
BABYLON.NodeMaterialDefines.prototype.rebuild = function () {};
BABYLON.NodeMaterialDefines.prototype.isEqual = function () {};
BABYLON.NodeMaterialDefines.prototype.cloneTo = function () {};
BABYLON.NodeMaterialDefines.prototype.reset = function () {};
BABYLON.NodeMaterialDefines.prototype.toString = function () {};


/** @constructor */
BABYLON.NodeMaterial = function () {}
BABYLON.NodeMaterial.Parse = function () {};
BABYLON.NodeMaterial.ParseFromFileAsync = function () {};
BABYLON.NodeMaterial.ParseFromSnippetAsync = function () {};
BABYLON.NodeMaterial.CreateDefault = function () {};
BABYLON.NodeMaterial.EditorURL = "https://unpkg.com/babylonjs-node-editor@4.1.0/babylon.nodeEditor.js";
BABYLON.NodeMaterial.SnippetUrl = "https://snippet.babylonjs.com";
BABYLON.NodeMaterial.prototype.TriangleFillMode = 0;
BABYLON.NodeMaterial.prototype.WireFrameFillMode = 1;
BABYLON.NodeMaterial.prototype.PointFillMode = 2;
BABYLON.NodeMaterial.prototype.PointListDrawMode = 3;
BABYLON.NodeMaterial.prototype.LineListDrawMode = 4;
BABYLON.NodeMaterial.prototype.LineLoopDrawMode = 5;
BABYLON.NodeMaterial.prototype.LineStripDrawMode = 6;
BABYLON.NodeMaterial.prototype.TriangleStripDrawMode = 7;
BABYLON.NodeMaterial.prototype.TriangleFanDrawMode = 8;
BABYLON.NodeMaterial.prototype.ClockWiseSideOrientation = 0;
BABYLON.NodeMaterial.prototype.CounterClockWiseSideOrientation = 1;
BABYLON.NodeMaterial.prototype.TextureDirtyFlag = 1;
BABYLON.NodeMaterial.prototype.LightDirtyFlag = 2;
BABYLON.NodeMaterial.prototype.FresnelDirtyFlag = 4;
BABYLON.NodeMaterial.prototype.AttributesDirtyFlag = 8;
BABYLON.NodeMaterial.prototype.MiscDirtyFlag = 16;
BABYLON.NodeMaterial.prototype.AllDirtyFlag = 31;


/** @constructor */
BABYLON.CustomProceduralTexture = function () {}
BABYLON.CustomProceduralTexture.prototype.Parse = function () {};
BABYLON.CustomProceduralTexture.prototype.CreateFromBase64String = function () {};
BABYLON.CustomProceduralTexture.prototype.LoadFromDataString = function () {};
BABYLON.CustomProceduralTexture.prototype.SerializeBuffers = true;
BABYLON.CustomProceduralTexture.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.CustomProceduralTexture.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.CustomProceduralTexture.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.CustomProceduralTexture.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.CustomProceduralTexture.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.CustomProceduralTexture.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.CustomProceduralTexture.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.CustomProceduralTexture.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.CustomProceduralTexture.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.CustomProceduralTexture.prototype.NEAREST_LINEAR = 7;
BABYLON.CustomProceduralTexture.prototype.NEAREST_NEAREST = 1;
BABYLON.CustomProceduralTexture.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.CustomProceduralTexture.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.CustomProceduralTexture.prototype.LINEAR_LINEAR = 2;
BABYLON.CustomProceduralTexture.prototype.LINEAR_NEAREST = 12;
BABYLON.CustomProceduralTexture.prototype.EXPLICIT_MODE = 0;
BABYLON.CustomProceduralTexture.prototype.SPHERICAL_MODE = 1;
BABYLON.CustomProceduralTexture.prototype.PLANAR_MODE = 2;
BABYLON.CustomProceduralTexture.prototype.CUBIC_MODE = 3;
BABYLON.CustomProceduralTexture.prototype.PROJECTION_MODE = 4;
BABYLON.CustomProceduralTexture.prototype.SKYBOX_MODE = 5;
BABYLON.CustomProceduralTexture.prototype.INVCUBIC_MODE = 6;
BABYLON.CustomProceduralTexture.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.CustomProceduralTexture.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.CustomProceduralTexture.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.CustomProceduralTexture.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.CustomProceduralTexture.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.CustomProceduralTexture.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.CustomProceduralTexture.prototype.UseSerializedUrlIfAny = false;
BABYLON.CustomProceduralTexture.prototype.WhenAllReady = function () {};
BABYLON.CustomProceduralTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.NoiseProceduralTexture = function () {}
BABYLON.NoiseProceduralTexture.Parse = function () {};
BABYLON.NoiseProceduralTexture.prototype.CreateFromBase64String = function () {};
BABYLON.NoiseProceduralTexture.prototype.LoadFromDataString = function () {};
BABYLON.NoiseProceduralTexture.prototype.SerializeBuffers = true;
BABYLON.NoiseProceduralTexture.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.NoiseProceduralTexture.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.NoiseProceduralTexture.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.NoiseProceduralTexture.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.NoiseProceduralTexture.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.NoiseProceduralTexture.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.NoiseProceduralTexture.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.NoiseProceduralTexture.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.NoiseProceduralTexture.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.NoiseProceduralTexture.prototype.NEAREST_LINEAR = 7;
BABYLON.NoiseProceduralTexture.prototype.NEAREST_NEAREST = 1;
BABYLON.NoiseProceduralTexture.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.NoiseProceduralTexture.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.NoiseProceduralTexture.prototype.LINEAR_LINEAR = 2;
BABYLON.NoiseProceduralTexture.prototype.LINEAR_NEAREST = 12;
BABYLON.NoiseProceduralTexture.prototype.EXPLICIT_MODE = 0;
BABYLON.NoiseProceduralTexture.prototype.SPHERICAL_MODE = 1;
BABYLON.NoiseProceduralTexture.prototype.PLANAR_MODE = 2;
BABYLON.NoiseProceduralTexture.prototype.CUBIC_MODE = 3;
BABYLON.NoiseProceduralTexture.prototype.PROJECTION_MODE = 4;
BABYLON.NoiseProceduralTexture.prototype.SKYBOX_MODE = 5;
BABYLON.NoiseProceduralTexture.prototype.INVCUBIC_MODE = 6;
BABYLON.NoiseProceduralTexture.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.NoiseProceduralTexture.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.NoiseProceduralTexture.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.NoiseProceduralTexture.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.NoiseProceduralTexture.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.NoiseProceduralTexture.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.NoiseProceduralTexture.prototype.UseSerializedUrlIfAny = false;
BABYLON.NoiseProceduralTexture.prototype.WhenAllReady = function () {};
BABYLON.NoiseProceduralTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.ProceduralTexture = function () {}
BABYLON.ProceduralTexture.prototype.Parse = function () {};
BABYLON.ProceduralTexture.prototype.CreateFromBase64String = function () {};
BABYLON.ProceduralTexture.prototype.LoadFromDataString = function () {};
BABYLON.ProceduralTexture.prototype.SerializeBuffers = true;
BABYLON.ProceduralTexture.prototype.NEAREST_SAMPLINGMODE = 1;
BABYLON.ProceduralTexture.prototype.NEAREST_NEAREST_MIPLINEAR = 8;
BABYLON.ProceduralTexture.prototype.BILINEAR_SAMPLINGMODE = 2;
BABYLON.ProceduralTexture.prototype.LINEAR_LINEAR_MIPNEAREST = 11;
BABYLON.ProceduralTexture.prototype.TRILINEAR_SAMPLINGMODE = 3;
BABYLON.ProceduralTexture.prototype.LINEAR_LINEAR_MIPLINEAR = 3;
BABYLON.ProceduralTexture.prototype.NEAREST_NEAREST_MIPNEAREST = 4;
BABYLON.ProceduralTexture.prototype.NEAREST_LINEAR_MIPNEAREST = 5;
BABYLON.ProceduralTexture.prototype.NEAREST_LINEAR_MIPLINEAR = 6;
BABYLON.ProceduralTexture.prototype.NEAREST_LINEAR = 7;
BABYLON.ProceduralTexture.prototype.NEAREST_NEAREST = 1;
BABYLON.ProceduralTexture.prototype.LINEAR_NEAREST_MIPNEAREST = 9;
BABYLON.ProceduralTexture.prototype.LINEAR_NEAREST_MIPLINEAR = 10;
BABYLON.ProceduralTexture.prototype.LINEAR_LINEAR = 2;
BABYLON.ProceduralTexture.prototype.LINEAR_NEAREST = 12;
BABYLON.ProceduralTexture.prototype.EXPLICIT_MODE = 0;
BABYLON.ProceduralTexture.prototype.SPHERICAL_MODE = 1;
BABYLON.ProceduralTexture.prototype.PLANAR_MODE = 2;
BABYLON.ProceduralTexture.prototype.CUBIC_MODE = 3;
BABYLON.ProceduralTexture.prototype.PROJECTION_MODE = 4;
BABYLON.ProceduralTexture.prototype.SKYBOX_MODE = 5;
BABYLON.ProceduralTexture.prototype.INVCUBIC_MODE = 6;
BABYLON.ProceduralTexture.prototype.EQUIRECTANGULAR_MODE = 7;
BABYLON.ProceduralTexture.prototype.FIXED_EQUIRECTANGULAR_MODE = 8;
BABYLON.ProceduralTexture.prototype.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
BABYLON.ProceduralTexture.prototype.CLAMP_ADDRESSMODE = 0;
BABYLON.ProceduralTexture.prototype.WRAP_ADDRESSMODE = 1;
BABYLON.ProceduralTexture.prototype.MIRROR_ADDRESSMODE = 2;
BABYLON.ProceduralTexture.prototype.UseSerializedUrlIfAny = false;
BABYLON.ProceduralTexture.prototype.WhenAllReady = function () {};
BABYLON.ProceduralTexture.prototype.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;


/** @constructor */
BABYLON.ProceduralTextureSceneComponent = function () {}


/** @constructor */
BABYLON.TexturePacker = function () {}
BABYLON.TexturePacker.LAYOUT_STRIP = 0;
BABYLON.TexturePacker.LAYOUT_POWER2 = 1;
BABYLON.TexturePacker.LAYOUT_COLNUM = 2;
BABYLON.TexturePacker.SUBUV_WRAP = 0;
BABYLON.TexturePacker.SUBUV_EXTEND = 1;
BABYLON.TexturePacker.SUBUV_COLOR = 2;


/** @constructor */
BABYLON.TexturePackerFrame = function () {}
// BABYLON.TexturePackerFrame.id = undefined;
// BABYLON.TexturePackerFrame.scale = undefined;
// BABYLON.TexturePackerFrame.offset = undefined;


BABYLON.NodeMaterialBlockTargets = {}

BABYLON.NodeMaterialBlockConnectionPointTypes = {}

BABYLON.NodeMaterialBlockConnectionPointMode = {}

BABYLON.NodeMaterialSystemValues = {}

/** @constructor */
BABYLON.MultiplyBlock = function () {}
BABYLON.MultiplyBlock.inputsAreExclusive = false;
BABYLON.MultiplyBlock.comments = "";
// BABYLON.MultiplyBlock.name = undefined;
BABYLON.MultiplyBlock.uniqueId = 1;
BABYLON.MultiplyBlock.prototype.constructor = function () {};
BABYLON.MultiplyBlock.prototype.getClassName = function () {};
// BABYLON.MultiplyBlock.prototype.left = undefined;
// BABYLON.MultiplyBlock.prototype.right = undefined;
// BABYLON.MultiplyBlock.prototype.output = undefined;
// BABYLON.MultiplyBlock.prototype.isUnique = undefined;
// BABYLON.MultiplyBlock.prototype.isFinalMerger = undefined;
// BABYLON.MultiplyBlock.prototype.isInput = undefined;
// BABYLON.MultiplyBlock.prototype.buildId = undefined;
// BABYLON.MultiplyBlock.prototype.target = undefined;
// BABYLON.MultiplyBlock.prototype.inputs = undefined;
// BABYLON.MultiplyBlock.prototype.outputs = undefined;
BABYLON.MultiplyBlock.prototype.getInputByName = function () {};
BABYLON.MultiplyBlock.prototype.getOutputByName = function () {};
BABYLON.MultiplyBlock.prototype.initialize = function () {};
BABYLON.MultiplyBlock.prototype.bind = function () {};
BABYLON.MultiplyBlock.prototype.registerInput = function () {};
BABYLON.MultiplyBlock.prototype.registerOutput = function () {};
BABYLON.MultiplyBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.MultiplyBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.MultiplyBlock.prototype.getSiblingOutput = function () {};
BABYLON.MultiplyBlock.prototype.connectTo = function () {};
BABYLON.MultiplyBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.MultiplyBlock.prototype.provideFallbacks = function () {};
BABYLON.MultiplyBlock.prototype.initializeDefines = function () {};
BABYLON.MultiplyBlock.prototype.prepareDefines = function () {};
BABYLON.MultiplyBlock.prototype.autoConfigure = function () {};
BABYLON.MultiplyBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.MultiplyBlock.prototype.isReady = function () {};
BABYLON.MultiplyBlock.prototype.build = function () {};
BABYLON.MultiplyBlock.prototype.clone = function () {};
BABYLON.MultiplyBlock.prototype.serialize = function () {};
BABYLON.MultiplyBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.AddBlock = function () {}
BABYLON.AddBlock.inputsAreExclusive = false;
BABYLON.AddBlock.comments = "";
// BABYLON.AddBlock.name = undefined;
BABYLON.AddBlock.uniqueId = 2;
BABYLON.AddBlock.prototype.constructor = function () {};
BABYLON.AddBlock.prototype.getClassName = function () {};
// BABYLON.AddBlock.prototype.left = undefined;
// BABYLON.AddBlock.prototype.right = undefined;
// BABYLON.AddBlock.prototype.output = undefined;
// BABYLON.AddBlock.prototype.isUnique = undefined;
// BABYLON.AddBlock.prototype.isFinalMerger = undefined;
// BABYLON.AddBlock.prototype.isInput = undefined;
// BABYLON.AddBlock.prototype.buildId = undefined;
// BABYLON.AddBlock.prototype.target = undefined;
// BABYLON.AddBlock.prototype.inputs = undefined;
// BABYLON.AddBlock.prototype.outputs = undefined;
BABYLON.AddBlock.prototype.getInputByName = function () {};
BABYLON.AddBlock.prototype.getOutputByName = function () {};
BABYLON.AddBlock.prototype.initialize = function () {};
BABYLON.AddBlock.prototype.bind = function () {};
BABYLON.AddBlock.prototype.registerInput = function () {};
BABYLON.AddBlock.prototype.registerOutput = function () {};
BABYLON.AddBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.AddBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.AddBlock.prototype.getSiblingOutput = function () {};
BABYLON.AddBlock.prototype.connectTo = function () {};
BABYLON.AddBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.AddBlock.prototype.provideFallbacks = function () {};
BABYLON.AddBlock.prototype.initializeDefines = function () {};
BABYLON.AddBlock.prototype.prepareDefines = function () {};
BABYLON.AddBlock.prototype.autoConfigure = function () {};
BABYLON.AddBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.AddBlock.prototype.isReady = function () {};
BABYLON.AddBlock.prototype.build = function () {};
BABYLON.AddBlock.prototype.clone = function () {};
BABYLON.AddBlock.prototype.serialize = function () {};
BABYLON.AddBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ScaleBlock = function () {}
BABYLON.ScaleBlock.inputsAreExclusive = false;
BABYLON.ScaleBlock.comments = "";
// BABYLON.ScaleBlock.name = undefined;
BABYLON.ScaleBlock.uniqueId = 3;
BABYLON.ScaleBlock.prototype.constructor = function () {};
BABYLON.ScaleBlock.prototype.getClassName = function () {};
// BABYLON.ScaleBlock.prototype.input = undefined;
// BABYLON.ScaleBlock.prototype.factor = undefined;
// BABYLON.ScaleBlock.prototype.output = undefined;
// BABYLON.ScaleBlock.prototype.isUnique = undefined;
// BABYLON.ScaleBlock.prototype.isFinalMerger = undefined;
// BABYLON.ScaleBlock.prototype.isInput = undefined;
// BABYLON.ScaleBlock.prototype.buildId = undefined;
// BABYLON.ScaleBlock.prototype.target = undefined;
// BABYLON.ScaleBlock.prototype.inputs = undefined;
// BABYLON.ScaleBlock.prototype.outputs = undefined;
BABYLON.ScaleBlock.prototype.getInputByName = function () {};
BABYLON.ScaleBlock.prototype.getOutputByName = function () {};
BABYLON.ScaleBlock.prototype.initialize = function () {};
BABYLON.ScaleBlock.prototype.bind = function () {};
BABYLON.ScaleBlock.prototype.registerInput = function () {};
BABYLON.ScaleBlock.prototype.registerOutput = function () {};
BABYLON.ScaleBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ScaleBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ScaleBlock.prototype.getSiblingOutput = function () {};
BABYLON.ScaleBlock.prototype.connectTo = function () {};
BABYLON.ScaleBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ScaleBlock.prototype.provideFallbacks = function () {};
BABYLON.ScaleBlock.prototype.initializeDefines = function () {};
BABYLON.ScaleBlock.prototype.prepareDefines = function () {};
BABYLON.ScaleBlock.prototype.autoConfigure = function () {};
BABYLON.ScaleBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ScaleBlock.prototype.isReady = function () {};
BABYLON.ScaleBlock.prototype.build = function () {};
BABYLON.ScaleBlock.prototype.clone = function () {};
BABYLON.ScaleBlock.prototype.serialize = function () {};
BABYLON.ScaleBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ClampBlock = function () {}
BABYLON.ClampBlock.inputsAreExclusive = false;
BABYLON.ClampBlock.comments = "";
// BABYLON.ClampBlock.name = undefined;
BABYLON.ClampBlock.uniqueId = 4;
BABYLON.ClampBlock.minimum = 0;
BABYLON.ClampBlock.maximum = 1;
BABYLON.ClampBlock.prototype.constructor = function () {};
BABYLON.ClampBlock.prototype.getClassName = function () {};
// BABYLON.ClampBlock.prototype.value = undefined;
// BABYLON.ClampBlock.prototype.output = undefined;
BABYLON.ClampBlock.prototype.serialize = function () {};
// BABYLON.ClampBlock.prototype.isUnique = undefined;
// BABYLON.ClampBlock.prototype.isFinalMerger = undefined;
// BABYLON.ClampBlock.prototype.isInput = undefined;
// BABYLON.ClampBlock.prototype.buildId = undefined;
// BABYLON.ClampBlock.prototype.target = undefined;
// BABYLON.ClampBlock.prototype.inputs = undefined;
// BABYLON.ClampBlock.prototype.outputs = undefined;
BABYLON.ClampBlock.prototype.getInputByName = function () {};
BABYLON.ClampBlock.prototype.getOutputByName = function () {};
BABYLON.ClampBlock.prototype.initialize = function () {};
BABYLON.ClampBlock.prototype.bind = function () {};
BABYLON.ClampBlock.prototype.registerInput = function () {};
BABYLON.ClampBlock.prototype.registerOutput = function () {};
BABYLON.ClampBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ClampBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ClampBlock.prototype.getSiblingOutput = function () {};
BABYLON.ClampBlock.prototype.connectTo = function () {};
BABYLON.ClampBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ClampBlock.prototype.provideFallbacks = function () {};
BABYLON.ClampBlock.prototype.initializeDefines = function () {};
BABYLON.ClampBlock.prototype.prepareDefines = function () {};
BABYLON.ClampBlock.prototype.autoConfigure = function () {};
BABYLON.ClampBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ClampBlock.prototype.isReady = function () {};
BABYLON.ClampBlock.prototype.build = function () {};
BABYLON.ClampBlock.prototype.clone = function () {};
BABYLON.ClampBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.CrossBlock = function () {}
BABYLON.CrossBlock.inputsAreExclusive = false;
BABYLON.CrossBlock.comments = "";
// BABYLON.CrossBlock.name = undefined;
BABYLON.CrossBlock.uniqueId = 5;
BABYLON.CrossBlock.prototype.constructor = function () {};
BABYLON.CrossBlock.prototype.getClassName = function () {};
// BABYLON.CrossBlock.prototype.left = undefined;
// BABYLON.CrossBlock.prototype.right = undefined;
// BABYLON.CrossBlock.prototype.output = undefined;
// BABYLON.CrossBlock.prototype.isUnique = undefined;
// BABYLON.CrossBlock.prototype.isFinalMerger = undefined;
// BABYLON.CrossBlock.prototype.isInput = undefined;
// BABYLON.CrossBlock.prototype.buildId = undefined;
// BABYLON.CrossBlock.prototype.target = undefined;
// BABYLON.CrossBlock.prototype.inputs = undefined;
// BABYLON.CrossBlock.prototype.outputs = undefined;
BABYLON.CrossBlock.prototype.getInputByName = function () {};
BABYLON.CrossBlock.prototype.getOutputByName = function () {};
BABYLON.CrossBlock.prototype.initialize = function () {};
BABYLON.CrossBlock.prototype.bind = function () {};
BABYLON.CrossBlock.prototype.registerInput = function () {};
BABYLON.CrossBlock.prototype.registerOutput = function () {};
BABYLON.CrossBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.CrossBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.CrossBlock.prototype.getSiblingOutput = function () {};
BABYLON.CrossBlock.prototype.connectTo = function () {};
BABYLON.CrossBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.CrossBlock.prototype.provideFallbacks = function () {};
BABYLON.CrossBlock.prototype.initializeDefines = function () {};
BABYLON.CrossBlock.prototype.prepareDefines = function () {};
BABYLON.CrossBlock.prototype.autoConfigure = function () {};
BABYLON.CrossBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.CrossBlock.prototype.isReady = function () {};
BABYLON.CrossBlock.prototype.build = function () {};
BABYLON.CrossBlock.prototype.clone = function () {};
BABYLON.CrossBlock.prototype.serialize = function () {};
BABYLON.CrossBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.DotBlock = function () {}
BABYLON.DotBlock.inputsAreExclusive = false;
BABYLON.DotBlock.comments = "";
// BABYLON.DotBlock.name = undefined;
BABYLON.DotBlock.uniqueId = 6;
BABYLON.DotBlock.prototype.constructor = function () {};
BABYLON.DotBlock.prototype.getClassName = function () {};
// BABYLON.DotBlock.prototype.left = undefined;
// BABYLON.DotBlock.prototype.right = undefined;
// BABYLON.DotBlock.prototype.output = undefined;
// BABYLON.DotBlock.prototype.isUnique = undefined;
// BABYLON.DotBlock.prototype.isFinalMerger = undefined;
// BABYLON.DotBlock.prototype.isInput = undefined;
// BABYLON.DotBlock.prototype.buildId = undefined;
// BABYLON.DotBlock.prototype.target = undefined;
// BABYLON.DotBlock.prototype.inputs = undefined;
// BABYLON.DotBlock.prototype.outputs = undefined;
BABYLON.DotBlock.prototype.getInputByName = function () {};
BABYLON.DotBlock.prototype.getOutputByName = function () {};
BABYLON.DotBlock.prototype.initialize = function () {};
BABYLON.DotBlock.prototype.bind = function () {};
BABYLON.DotBlock.prototype.registerInput = function () {};
BABYLON.DotBlock.prototype.registerOutput = function () {};
BABYLON.DotBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.DotBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.DotBlock.prototype.getSiblingOutput = function () {};
BABYLON.DotBlock.prototype.connectTo = function () {};
BABYLON.DotBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.DotBlock.prototype.provideFallbacks = function () {};
BABYLON.DotBlock.prototype.initializeDefines = function () {};
BABYLON.DotBlock.prototype.prepareDefines = function () {};
BABYLON.DotBlock.prototype.autoConfigure = function () {};
BABYLON.DotBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.DotBlock.prototype.isReady = function () {};
BABYLON.DotBlock.prototype.build = function () {};
BABYLON.DotBlock.prototype.clone = function () {};
BABYLON.DotBlock.prototype.serialize = function () {};
BABYLON.DotBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.TransformBlock = function () {}
BABYLON.TransformBlock.inputsAreExclusive = false;
BABYLON.TransformBlock.comments = "";
// BABYLON.TransformBlock.name = undefined;
BABYLON.TransformBlock.uniqueId = 7;
BABYLON.TransformBlock.complementW = 1;
BABYLON.TransformBlock.complementZ = 0;
BABYLON.TransformBlock.prototype.constructor = function () {};
BABYLON.TransformBlock.prototype.getClassName = function () {};
// BABYLON.TransformBlock.prototype.vector = undefined;
// BABYLON.TransformBlock.prototype.output = undefined;
// BABYLON.TransformBlock.prototype.xyz = undefined;
// BABYLON.TransformBlock.prototype.transform = undefined;
BABYLON.TransformBlock.prototype.serialize = function () {};
// BABYLON.TransformBlock.prototype.isUnique = undefined;
// BABYLON.TransformBlock.prototype.isFinalMerger = undefined;
// BABYLON.TransformBlock.prototype.isInput = undefined;
// BABYLON.TransformBlock.prototype.buildId = undefined;
// BABYLON.TransformBlock.prototype.target = undefined;
// BABYLON.TransformBlock.prototype.inputs = undefined;
// BABYLON.TransformBlock.prototype.outputs = undefined;
BABYLON.TransformBlock.prototype.getInputByName = function () {};
BABYLON.TransformBlock.prototype.getOutputByName = function () {};
BABYLON.TransformBlock.prototype.initialize = function () {};
BABYLON.TransformBlock.prototype.bind = function () {};
BABYLON.TransformBlock.prototype.registerInput = function () {};
BABYLON.TransformBlock.prototype.registerOutput = function () {};
BABYLON.TransformBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.TransformBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.TransformBlock.prototype.getSiblingOutput = function () {};
BABYLON.TransformBlock.prototype.connectTo = function () {};
BABYLON.TransformBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.TransformBlock.prototype.provideFallbacks = function () {};
BABYLON.TransformBlock.prototype.initializeDefines = function () {};
BABYLON.TransformBlock.prototype.prepareDefines = function () {};
BABYLON.TransformBlock.prototype.autoConfigure = function () {};
BABYLON.TransformBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.TransformBlock.prototype.isReady = function () {};
BABYLON.TransformBlock.prototype.build = function () {};
BABYLON.TransformBlock.prototype.clone = function () {};
BABYLON.TransformBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.RemapBlock = function () {}
BABYLON.RemapBlock.inputsAreExclusive = false;
BABYLON.RemapBlock.comments = "";
// BABYLON.RemapBlock.name = undefined;
BABYLON.RemapBlock.uniqueId = 8;
BABYLON.RemapBlock.sourceRange = {};
BABYLON.RemapBlock.targetRange = {};
BABYLON.RemapBlock.prototype.constructor = function () {};
BABYLON.RemapBlock.prototype.getClassName = function () {};
// BABYLON.RemapBlock.prototype.input = undefined;
// BABYLON.RemapBlock.prototype.sourceMin = undefined;
// BABYLON.RemapBlock.prototype.sourceMax = undefined;
// BABYLON.RemapBlock.prototype.targetMin = undefined;
// BABYLON.RemapBlock.prototype.targetMax = undefined;
// BABYLON.RemapBlock.prototype.output = undefined;
BABYLON.RemapBlock.prototype.serialize = function () {};
// BABYLON.RemapBlock.prototype.isUnique = undefined;
// BABYLON.RemapBlock.prototype.isFinalMerger = undefined;
// BABYLON.RemapBlock.prototype.isInput = undefined;
// BABYLON.RemapBlock.prototype.buildId = undefined;
// BABYLON.RemapBlock.prototype.target = undefined;
// BABYLON.RemapBlock.prototype.inputs = undefined;
// BABYLON.RemapBlock.prototype.outputs = undefined;
BABYLON.RemapBlock.prototype.getInputByName = function () {};
BABYLON.RemapBlock.prototype.getOutputByName = function () {};
BABYLON.RemapBlock.prototype.initialize = function () {};
BABYLON.RemapBlock.prototype.bind = function () {};
BABYLON.RemapBlock.prototype.registerInput = function () {};
BABYLON.RemapBlock.prototype.registerOutput = function () {};
BABYLON.RemapBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.RemapBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.RemapBlock.prototype.getSiblingOutput = function () {};
BABYLON.RemapBlock.prototype.connectTo = function () {};
BABYLON.RemapBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.RemapBlock.prototype.provideFallbacks = function () {};
BABYLON.RemapBlock.prototype.initializeDefines = function () {};
BABYLON.RemapBlock.prototype.prepareDefines = function () {};
BABYLON.RemapBlock.prototype.autoConfigure = function () {};
BABYLON.RemapBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.RemapBlock.prototype.isReady = function () {};
BABYLON.RemapBlock.prototype.build = function () {};
BABYLON.RemapBlock.prototype.clone = function () {};
BABYLON.RemapBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.NormalizeBlock = function () {}
BABYLON.NormalizeBlock.inputsAreExclusive = false;
BABYLON.NormalizeBlock.comments = "";
// BABYLON.NormalizeBlock.name = undefined;
BABYLON.NormalizeBlock.uniqueId = 9;
BABYLON.NormalizeBlock.prototype.constructor = function () {};
BABYLON.NormalizeBlock.prototype.getClassName = function () {};
// BABYLON.NormalizeBlock.prototype.input = undefined;
// BABYLON.NormalizeBlock.prototype.output = undefined;
// BABYLON.NormalizeBlock.prototype.isUnique = undefined;
// BABYLON.NormalizeBlock.prototype.isFinalMerger = undefined;
// BABYLON.NormalizeBlock.prototype.isInput = undefined;
// BABYLON.NormalizeBlock.prototype.buildId = undefined;
// BABYLON.NormalizeBlock.prototype.target = undefined;
// BABYLON.NormalizeBlock.prototype.inputs = undefined;
// BABYLON.NormalizeBlock.prototype.outputs = undefined;
BABYLON.NormalizeBlock.prototype.getInputByName = function () {};
BABYLON.NormalizeBlock.prototype.getOutputByName = function () {};
BABYLON.NormalizeBlock.prototype.initialize = function () {};
BABYLON.NormalizeBlock.prototype.bind = function () {};
BABYLON.NormalizeBlock.prototype.registerInput = function () {};
BABYLON.NormalizeBlock.prototype.registerOutput = function () {};
BABYLON.NormalizeBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.NormalizeBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.NormalizeBlock.prototype.getSiblingOutput = function () {};
BABYLON.NormalizeBlock.prototype.connectTo = function () {};
BABYLON.NormalizeBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.NormalizeBlock.prototype.provideFallbacks = function () {};
BABYLON.NormalizeBlock.prototype.initializeDefines = function () {};
BABYLON.NormalizeBlock.prototype.prepareDefines = function () {};
BABYLON.NormalizeBlock.prototype.autoConfigure = function () {};
BABYLON.NormalizeBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.NormalizeBlock.prototype.isReady = function () {};
BABYLON.NormalizeBlock.prototype.build = function () {};
BABYLON.NormalizeBlock.prototype.clone = function () {};
BABYLON.NormalizeBlock.prototype.serialize = function () {};
BABYLON.NormalizeBlock.prototype.dispose = function () {};


BABYLON.TrigonometryBlockOperations = {}

/** @constructor */
BABYLON.TrigonometryBlock = function () {}
BABYLON.TrigonometryBlock.inputsAreExclusive = false;
BABYLON.TrigonometryBlock.comments = "";
// BABYLON.TrigonometryBlock.name = undefined;
BABYLON.TrigonometryBlock.uniqueId = 10;
BABYLON.TrigonometryBlock.operation = 0;
BABYLON.TrigonometryBlock.prototype.constructor = function () {};
BABYLON.TrigonometryBlock.prototype.getClassName = function () {};
// BABYLON.TrigonometryBlock.prototype.input = undefined;
// BABYLON.TrigonometryBlock.prototype.output = undefined;
BABYLON.TrigonometryBlock.prototype.serialize = function () {};
// BABYLON.TrigonometryBlock.prototype.isUnique = undefined;
// BABYLON.TrigonometryBlock.prototype.isFinalMerger = undefined;
// BABYLON.TrigonometryBlock.prototype.isInput = undefined;
// BABYLON.TrigonometryBlock.prototype.buildId = undefined;
// BABYLON.TrigonometryBlock.prototype.target = undefined;
// BABYLON.TrigonometryBlock.prototype.inputs = undefined;
// BABYLON.TrigonometryBlock.prototype.outputs = undefined;
BABYLON.TrigonometryBlock.prototype.getInputByName = function () {};
BABYLON.TrigonometryBlock.prototype.getOutputByName = function () {};
BABYLON.TrigonometryBlock.prototype.initialize = function () {};
BABYLON.TrigonometryBlock.prototype.bind = function () {};
BABYLON.TrigonometryBlock.prototype.registerInput = function () {};
BABYLON.TrigonometryBlock.prototype.registerOutput = function () {};
BABYLON.TrigonometryBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.TrigonometryBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.TrigonometryBlock.prototype.getSiblingOutput = function () {};
BABYLON.TrigonometryBlock.prototype.connectTo = function () {};
BABYLON.TrigonometryBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.TrigonometryBlock.prototype.provideFallbacks = function () {};
BABYLON.TrigonometryBlock.prototype.initializeDefines = function () {};
BABYLON.TrigonometryBlock.prototype.prepareDefines = function () {};
BABYLON.TrigonometryBlock.prototype.autoConfigure = function () {};
BABYLON.TrigonometryBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.TrigonometryBlock.prototype.isReady = function () {};
BABYLON.TrigonometryBlock.prototype.build = function () {};
BABYLON.TrigonometryBlock.prototype.clone = function () {};
BABYLON.TrigonometryBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ColorMergerBlock = function () {}
BABYLON.ColorMergerBlock.inputsAreExclusive = false;
BABYLON.ColorMergerBlock.comments = "";
// BABYLON.ColorMergerBlock.name = undefined;
BABYLON.ColorMergerBlock.uniqueId = 11;
BABYLON.ColorMergerBlock.prototype.constructor = function () {};
BABYLON.ColorMergerBlock.prototype.getClassName = function () {};
// BABYLON.ColorMergerBlock.prototype.rgbIn = undefined;
// BABYLON.ColorMergerBlock.prototype.r = undefined;
// BABYLON.ColorMergerBlock.prototype.g = undefined;
// BABYLON.ColorMergerBlock.prototype.b = undefined;
// BABYLON.ColorMergerBlock.prototype.a = undefined;
// BABYLON.ColorMergerBlock.prototype.rgba = undefined;
// BABYLON.ColorMergerBlock.prototype.rgbOut = undefined;
// BABYLON.ColorMergerBlock.prototype.rgb = undefined;
// BABYLON.ColorMergerBlock.prototype.isUnique = undefined;
// BABYLON.ColorMergerBlock.prototype.isFinalMerger = undefined;
// BABYLON.ColorMergerBlock.prototype.isInput = undefined;
// BABYLON.ColorMergerBlock.prototype.buildId = undefined;
// BABYLON.ColorMergerBlock.prototype.target = undefined;
// BABYLON.ColorMergerBlock.prototype.inputs = undefined;
// BABYLON.ColorMergerBlock.prototype.outputs = undefined;
BABYLON.ColorMergerBlock.prototype.getInputByName = function () {};
BABYLON.ColorMergerBlock.prototype.getOutputByName = function () {};
BABYLON.ColorMergerBlock.prototype.initialize = function () {};
BABYLON.ColorMergerBlock.prototype.bind = function () {};
BABYLON.ColorMergerBlock.prototype.registerInput = function () {};
BABYLON.ColorMergerBlock.prototype.registerOutput = function () {};
BABYLON.ColorMergerBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ColorMergerBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ColorMergerBlock.prototype.getSiblingOutput = function () {};
BABYLON.ColorMergerBlock.prototype.connectTo = function () {};
BABYLON.ColorMergerBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ColorMergerBlock.prototype.provideFallbacks = function () {};
BABYLON.ColorMergerBlock.prototype.initializeDefines = function () {};
BABYLON.ColorMergerBlock.prototype.prepareDefines = function () {};
BABYLON.ColorMergerBlock.prototype.autoConfigure = function () {};
BABYLON.ColorMergerBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ColorMergerBlock.prototype.isReady = function () {};
BABYLON.ColorMergerBlock.prototype.build = function () {};
BABYLON.ColorMergerBlock.prototype.clone = function () {};
BABYLON.ColorMergerBlock.prototype.serialize = function () {};
BABYLON.ColorMergerBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.VectorMergerBlock = function () {}
BABYLON.VectorMergerBlock.inputsAreExclusive = false;
BABYLON.VectorMergerBlock.comments = "";
// BABYLON.VectorMergerBlock.name = undefined;
BABYLON.VectorMergerBlock.uniqueId = 12;
BABYLON.VectorMergerBlock.prototype.constructor = function () {};
BABYLON.VectorMergerBlock.prototype.getClassName = function () {};
// BABYLON.VectorMergerBlock.prototype.xyzIn = undefined;
// BABYLON.VectorMergerBlock.prototype.xyIn = undefined;
// BABYLON.VectorMergerBlock.prototype.x = undefined;
// BABYLON.VectorMergerBlock.prototype.y = undefined;
// BABYLON.VectorMergerBlock.prototype.z = undefined;
// BABYLON.VectorMergerBlock.prototype.w = undefined;
// BABYLON.VectorMergerBlock.prototype.xyzw = undefined;
// BABYLON.VectorMergerBlock.prototype.xyzOut = undefined;
// BABYLON.VectorMergerBlock.prototype.xyOut = undefined;
// BABYLON.VectorMergerBlock.prototype.xy = undefined;
// BABYLON.VectorMergerBlock.prototype.xyz = undefined;
// BABYLON.VectorMergerBlock.prototype.isUnique = undefined;
// BABYLON.VectorMergerBlock.prototype.isFinalMerger = undefined;
// BABYLON.VectorMergerBlock.prototype.isInput = undefined;
// BABYLON.VectorMergerBlock.prototype.buildId = undefined;
// BABYLON.VectorMergerBlock.prototype.target = undefined;
// BABYLON.VectorMergerBlock.prototype.inputs = undefined;
// BABYLON.VectorMergerBlock.prototype.outputs = undefined;
BABYLON.VectorMergerBlock.prototype.getInputByName = function () {};
BABYLON.VectorMergerBlock.prototype.getOutputByName = function () {};
BABYLON.VectorMergerBlock.prototype.initialize = function () {};
BABYLON.VectorMergerBlock.prototype.bind = function () {};
BABYLON.VectorMergerBlock.prototype.registerInput = function () {};
BABYLON.VectorMergerBlock.prototype.registerOutput = function () {};
BABYLON.VectorMergerBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.VectorMergerBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.VectorMergerBlock.prototype.getSiblingOutput = function () {};
BABYLON.VectorMergerBlock.prototype.connectTo = function () {};
BABYLON.VectorMergerBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.VectorMergerBlock.prototype.provideFallbacks = function () {};
BABYLON.VectorMergerBlock.prototype.initializeDefines = function () {};
BABYLON.VectorMergerBlock.prototype.prepareDefines = function () {};
BABYLON.VectorMergerBlock.prototype.autoConfigure = function () {};
BABYLON.VectorMergerBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.VectorMergerBlock.prototype.isReady = function () {};
BABYLON.VectorMergerBlock.prototype.build = function () {};
BABYLON.VectorMergerBlock.prototype.clone = function () {};
BABYLON.VectorMergerBlock.prototype.serialize = function () {};
BABYLON.VectorMergerBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ColorSplitterBlock = function () {}
BABYLON.ColorSplitterBlock.inputsAreExclusive = true;
BABYLON.ColorSplitterBlock.comments = "";
// BABYLON.ColorSplitterBlock.name = undefined;
BABYLON.ColorSplitterBlock.uniqueId = 13;
BABYLON.ColorSplitterBlock.prototype.constructor = function () {};
BABYLON.ColorSplitterBlock.prototype.getClassName = function () {};
// BABYLON.ColorSplitterBlock.prototype.rgba = undefined;
// BABYLON.ColorSplitterBlock.prototype.rgbIn = undefined;
// BABYLON.ColorSplitterBlock.prototype.rgbOut = undefined;
// BABYLON.ColorSplitterBlock.prototype.r = undefined;
// BABYLON.ColorSplitterBlock.prototype.g = undefined;
// BABYLON.ColorSplitterBlock.prototype.b = undefined;
// BABYLON.ColorSplitterBlock.prototype.a = undefined;
// BABYLON.ColorSplitterBlock.prototype.isUnique = undefined;
// BABYLON.ColorSplitterBlock.prototype.isFinalMerger = undefined;
// BABYLON.ColorSplitterBlock.prototype.isInput = undefined;
// BABYLON.ColorSplitterBlock.prototype.buildId = undefined;
// BABYLON.ColorSplitterBlock.prototype.target = undefined;
// BABYLON.ColorSplitterBlock.prototype.inputs = undefined;
// BABYLON.ColorSplitterBlock.prototype.outputs = undefined;
BABYLON.ColorSplitterBlock.prototype.getInputByName = function () {};
BABYLON.ColorSplitterBlock.prototype.getOutputByName = function () {};
BABYLON.ColorSplitterBlock.prototype.initialize = function () {};
BABYLON.ColorSplitterBlock.prototype.bind = function () {};
BABYLON.ColorSplitterBlock.prototype.registerInput = function () {};
BABYLON.ColorSplitterBlock.prototype.registerOutput = function () {};
BABYLON.ColorSplitterBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ColorSplitterBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ColorSplitterBlock.prototype.getSiblingOutput = function () {};
BABYLON.ColorSplitterBlock.prototype.connectTo = function () {};
BABYLON.ColorSplitterBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ColorSplitterBlock.prototype.provideFallbacks = function () {};
BABYLON.ColorSplitterBlock.prototype.initializeDefines = function () {};
BABYLON.ColorSplitterBlock.prototype.prepareDefines = function () {};
BABYLON.ColorSplitterBlock.prototype.autoConfigure = function () {};
BABYLON.ColorSplitterBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ColorSplitterBlock.prototype.isReady = function () {};
BABYLON.ColorSplitterBlock.prototype.build = function () {};
BABYLON.ColorSplitterBlock.prototype.clone = function () {};
BABYLON.ColorSplitterBlock.prototype.serialize = function () {};
BABYLON.ColorSplitterBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.VectorSplitterBlock = function () {}
BABYLON.VectorSplitterBlock.inputsAreExclusive = true;
BABYLON.VectorSplitterBlock.comments = "";
// BABYLON.VectorSplitterBlock.name = undefined;
BABYLON.VectorSplitterBlock.uniqueId = 14;
BABYLON.VectorSplitterBlock.prototype.constructor = function () {};
BABYLON.VectorSplitterBlock.prototype.getClassName = function () {};
// BABYLON.VectorSplitterBlock.prototype.xyzw = undefined;
// BABYLON.VectorSplitterBlock.prototype.xyzIn = undefined;
// BABYLON.VectorSplitterBlock.prototype.xyIn = undefined;
// BABYLON.VectorSplitterBlock.prototype.xyzOut = undefined;
// BABYLON.VectorSplitterBlock.prototype.xyOut = undefined;
// BABYLON.VectorSplitterBlock.prototype.x = undefined;
// BABYLON.VectorSplitterBlock.prototype.y = undefined;
// BABYLON.VectorSplitterBlock.prototype.z = undefined;
// BABYLON.VectorSplitterBlock.prototype.w = undefined;
// BABYLON.VectorSplitterBlock.prototype.isUnique = undefined;
// BABYLON.VectorSplitterBlock.prototype.isFinalMerger = undefined;
// BABYLON.VectorSplitterBlock.prototype.isInput = undefined;
// BABYLON.VectorSplitterBlock.prototype.buildId = undefined;
// BABYLON.VectorSplitterBlock.prototype.target = undefined;
// BABYLON.VectorSplitterBlock.prototype.inputs = undefined;
// BABYLON.VectorSplitterBlock.prototype.outputs = undefined;
BABYLON.VectorSplitterBlock.prototype.getInputByName = function () {};
BABYLON.VectorSplitterBlock.prototype.getOutputByName = function () {};
BABYLON.VectorSplitterBlock.prototype.initialize = function () {};
BABYLON.VectorSplitterBlock.prototype.bind = function () {};
BABYLON.VectorSplitterBlock.prototype.registerInput = function () {};
BABYLON.VectorSplitterBlock.prototype.registerOutput = function () {};
BABYLON.VectorSplitterBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.VectorSplitterBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.VectorSplitterBlock.prototype.getSiblingOutput = function () {};
BABYLON.VectorSplitterBlock.prototype.connectTo = function () {};
BABYLON.VectorSplitterBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.VectorSplitterBlock.prototype.provideFallbacks = function () {};
BABYLON.VectorSplitterBlock.prototype.initializeDefines = function () {};
BABYLON.VectorSplitterBlock.prototype.prepareDefines = function () {};
BABYLON.VectorSplitterBlock.prototype.autoConfigure = function () {};
BABYLON.VectorSplitterBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.VectorSplitterBlock.prototype.isReady = function () {};
BABYLON.VectorSplitterBlock.prototype.build = function () {};
BABYLON.VectorSplitterBlock.prototype.clone = function () {};
BABYLON.VectorSplitterBlock.prototype.serialize = function () {};
BABYLON.VectorSplitterBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.LerpBlock = function () {}
BABYLON.LerpBlock.inputsAreExclusive = false;
BABYLON.LerpBlock.comments = "";
// BABYLON.LerpBlock.name = undefined;
BABYLON.LerpBlock.uniqueId = 15;
BABYLON.LerpBlock.prototype.constructor = function () {};
BABYLON.LerpBlock.prototype.getClassName = function () {};
// BABYLON.LerpBlock.prototype.left = undefined;
// BABYLON.LerpBlock.prototype.right = undefined;
// BABYLON.LerpBlock.prototype.gradient = undefined;
// BABYLON.LerpBlock.prototype.output = undefined;
// BABYLON.LerpBlock.prototype.isUnique = undefined;
// BABYLON.LerpBlock.prototype.isFinalMerger = undefined;
// BABYLON.LerpBlock.prototype.isInput = undefined;
// BABYLON.LerpBlock.prototype.buildId = undefined;
// BABYLON.LerpBlock.prototype.target = undefined;
// BABYLON.LerpBlock.prototype.inputs = undefined;
// BABYLON.LerpBlock.prototype.outputs = undefined;
BABYLON.LerpBlock.prototype.getInputByName = function () {};
BABYLON.LerpBlock.prototype.getOutputByName = function () {};
BABYLON.LerpBlock.prototype.initialize = function () {};
BABYLON.LerpBlock.prototype.bind = function () {};
BABYLON.LerpBlock.prototype.registerInput = function () {};
BABYLON.LerpBlock.prototype.registerOutput = function () {};
BABYLON.LerpBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.LerpBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.LerpBlock.prototype.getSiblingOutput = function () {};
BABYLON.LerpBlock.prototype.connectTo = function () {};
BABYLON.LerpBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.LerpBlock.prototype.provideFallbacks = function () {};
BABYLON.LerpBlock.prototype.initializeDefines = function () {};
BABYLON.LerpBlock.prototype.prepareDefines = function () {};
BABYLON.LerpBlock.prototype.autoConfigure = function () {};
BABYLON.LerpBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.LerpBlock.prototype.isReady = function () {};
BABYLON.LerpBlock.prototype.build = function () {};
BABYLON.LerpBlock.prototype.clone = function () {};
BABYLON.LerpBlock.prototype.serialize = function () {};
BABYLON.LerpBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.DivideBlock = function () {}
BABYLON.DivideBlock.inputsAreExclusive = false;
BABYLON.DivideBlock.comments = "";
// BABYLON.DivideBlock.name = undefined;
BABYLON.DivideBlock.uniqueId = 16;
BABYLON.DivideBlock.prototype.constructor = function () {};
BABYLON.DivideBlock.prototype.getClassName = function () {};
// BABYLON.DivideBlock.prototype.left = undefined;
// BABYLON.DivideBlock.prototype.right = undefined;
// BABYLON.DivideBlock.prototype.output = undefined;
// BABYLON.DivideBlock.prototype.isUnique = undefined;
// BABYLON.DivideBlock.prototype.isFinalMerger = undefined;
// BABYLON.DivideBlock.prototype.isInput = undefined;
// BABYLON.DivideBlock.prototype.buildId = undefined;
// BABYLON.DivideBlock.prototype.target = undefined;
// BABYLON.DivideBlock.prototype.inputs = undefined;
// BABYLON.DivideBlock.prototype.outputs = undefined;
BABYLON.DivideBlock.prototype.getInputByName = function () {};
BABYLON.DivideBlock.prototype.getOutputByName = function () {};
BABYLON.DivideBlock.prototype.initialize = function () {};
BABYLON.DivideBlock.prototype.bind = function () {};
BABYLON.DivideBlock.prototype.registerInput = function () {};
BABYLON.DivideBlock.prototype.registerOutput = function () {};
BABYLON.DivideBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.DivideBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.DivideBlock.prototype.getSiblingOutput = function () {};
BABYLON.DivideBlock.prototype.connectTo = function () {};
BABYLON.DivideBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.DivideBlock.prototype.provideFallbacks = function () {};
BABYLON.DivideBlock.prototype.initializeDefines = function () {};
BABYLON.DivideBlock.prototype.prepareDefines = function () {};
BABYLON.DivideBlock.prototype.autoConfigure = function () {};
BABYLON.DivideBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.DivideBlock.prototype.isReady = function () {};
BABYLON.DivideBlock.prototype.build = function () {};
BABYLON.DivideBlock.prototype.clone = function () {};
BABYLON.DivideBlock.prototype.serialize = function () {};
BABYLON.DivideBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.SubtractBlock = function () {}
BABYLON.SubtractBlock.inputsAreExclusive = false;
BABYLON.SubtractBlock.comments = "";
// BABYLON.SubtractBlock.name = undefined;
BABYLON.SubtractBlock.uniqueId = 17;
BABYLON.SubtractBlock.prototype.constructor = function () {};
BABYLON.SubtractBlock.prototype.getClassName = function () {};
// BABYLON.SubtractBlock.prototype.left = undefined;
// BABYLON.SubtractBlock.prototype.right = undefined;
// BABYLON.SubtractBlock.prototype.output = undefined;
// BABYLON.SubtractBlock.prototype.isUnique = undefined;
// BABYLON.SubtractBlock.prototype.isFinalMerger = undefined;
// BABYLON.SubtractBlock.prototype.isInput = undefined;
// BABYLON.SubtractBlock.prototype.buildId = undefined;
// BABYLON.SubtractBlock.prototype.target = undefined;
// BABYLON.SubtractBlock.prototype.inputs = undefined;
// BABYLON.SubtractBlock.prototype.outputs = undefined;
BABYLON.SubtractBlock.prototype.getInputByName = function () {};
BABYLON.SubtractBlock.prototype.getOutputByName = function () {};
BABYLON.SubtractBlock.prototype.initialize = function () {};
BABYLON.SubtractBlock.prototype.bind = function () {};
BABYLON.SubtractBlock.prototype.registerInput = function () {};
BABYLON.SubtractBlock.prototype.registerOutput = function () {};
BABYLON.SubtractBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.SubtractBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.SubtractBlock.prototype.getSiblingOutput = function () {};
BABYLON.SubtractBlock.prototype.connectTo = function () {};
BABYLON.SubtractBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.SubtractBlock.prototype.provideFallbacks = function () {};
BABYLON.SubtractBlock.prototype.initializeDefines = function () {};
BABYLON.SubtractBlock.prototype.prepareDefines = function () {};
BABYLON.SubtractBlock.prototype.autoConfigure = function () {};
BABYLON.SubtractBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.SubtractBlock.prototype.isReady = function () {};
BABYLON.SubtractBlock.prototype.build = function () {};
BABYLON.SubtractBlock.prototype.clone = function () {};
BABYLON.SubtractBlock.prototype.serialize = function () {};
BABYLON.SubtractBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.StepBlock = function () {}
BABYLON.StepBlock.inputsAreExclusive = false;
BABYLON.StepBlock.comments = "";
// BABYLON.StepBlock.name = undefined;
BABYLON.StepBlock.uniqueId = 18;
BABYLON.StepBlock.prototype.constructor = function () {};
BABYLON.StepBlock.prototype.getClassName = function () {};
// BABYLON.StepBlock.prototype.value = undefined;
// BABYLON.StepBlock.prototype.edge = undefined;
// BABYLON.StepBlock.prototype.output = undefined;
// BABYLON.StepBlock.prototype.isUnique = undefined;
// BABYLON.StepBlock.prototype.isFinalMerger = undefined;
// BABYLON.StepBlock.prototype.isInput = undefined;
// BABYLON.StepBlock.prototype.buildId = undefined;
// BABYLON.StepBlock.prototype.target = undefined;
// BABYLON.StepBlock.prototype.inputs = undefined;
// BABYLON.StepBlock.prototype.outputs = undefined;
BABYLON.StepBlock.prototype.getInputByName = function () {};
BABYLON.StepBlock.prototype.getOutputByName = function () {};
BABYLON.StepBlock.prototype.initialize = function () {};
BABYLON.StepBlock.prototype.bind = function () {};
BABYLON.StepBlock.prototype.registerInput = function () {};
BABYLON.StepBlock.prototype.registerOutput = function () {};
BABYLON.StepBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.StepBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.StepBlock.prototype.getSiblingOutput = function () {};
BABYLON.StepBlock.prototype.connectTo = function () {};
BABYLON.StepBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.StepBlock.prototype.provideFallbacks = function () {};
BABYLON.StepBlock.prototype.initializeDefines = function () {};
BABYLON.StepBlock.prototype.prepareDefines = function () {};
BABYLON.StepBlock.prototype.autoConfigure = function () {};
BABYLON.StepBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.StepBlock.prototype.isReady = function () {};
BABYLON.StepBlock.prototype.build = function () {};
BABYLON.StepBlock.prototype.clone = function () {};
BABYLON.StepBlock.prototype.serialize = function () {};
BABYLON.StepBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.OneMinusBlock = function () {}
BABYLON.OneMinusBlock.inputsAreExclusive = false;
BABYLON.OneMinusBlock.comments = "";
// BABYLON.OneMinusBlock.name = undefined;
BABYLON.OneMinusBlock.uniqueId = 19;
BABYLON.OneMinusBlock.prototype.constructor = function () {};
BABYLON.OneMinusBlock.prototype.getClassName = function () {};
// BABYLON.OneMinusBlock.prototype.input = undefined;
// BABYLON.OneMinusBlock.prototype.output = undefined;
// BABYLON.OneMinusBlock.prototype.isUnique = undefined;
// BABYLON.OneMinusBlock.prototype.isFinalMerger = undefined;
// BABYLON.OneMinusBlock.prototype.isInput = undefined;
// BABYLON.OneMinusBlock.prototype.buildId = undefined;
// BABYLON.OneMinusBlock.prototype.target = undefined;
// BABYLON.OneMinusBlock.prototype.inputs = undefined;
// BABYLON.OneMinusBlock.prototype.outputs = undefined;
BABYLON.OneMinusBlock.prototype.getInputByName = function () {};
BABYLON.OneMinusBlock.prototype.getOutputByName = function () {};
BABYLON.OneMinusBlock.prototype.initialize = function () {};
BABYLON.OneMinusBlock.prototype.bind = function () {};
BABYLON.OneMinusBlock.prototype.registerInput = function () {};
BABYLON.OneMinusBlock.prototype.registerOutput = function () {};
BABYLON.OneMinusBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.OneMinusBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.OneMinusBlock.prototype.getSiblingOutput = function () {};
BABYLON.OneMinusBlock.prototype.connectTo = function () {};
BABYLON.OneMinusBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.OneMinusBlock.prototype.provideFallbacks = function () {};
BABYLON.OneMinusBlock.prototype.initializeDefines = function () {};
BABYLON.OneMinusBlock.prototype.prepareDefines = function () {};
BABYLON.OneMinusBlock.prototype.autoConfigure = function () {};
BABYLON.OneMinusBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.OneMinusBlock.prototype.isReady = function () {};
BABYLON.OneMinusBlock.prototype.build = function () {};
BABYLON.OneMinusBlock.prototype.clone = function () {};
BABYLON.OneMinusBlock.prototype.serialize = function () {};
BABYLON.OneMinusBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ViewDirectionBlock = function () {}
BABYLON.ViewDirectionBlock.inputsAreExclusive = false;
BABYLON.ViewDirectionBlock.comments = "";
// BABYLON.ViewDirectionBlock.name = undefined;
BABYLON.ViewDirectionBlock.uniqueId = 20;
BABYLON.ViewDirectionBlock.prototype.constructor = function () {};
BABYLON.ViewDirectionBlock.prototype.getClassName = function () {};
// BABYLON.ViewDirectionBlock.prototype.worldPosition = undefined;
// BABYLON.ViewDirectionBlock.prototype.cameraPosition = undefined;
// BABYLON.ViewDirectionBlock.prototype.output = undefined;
BABYLON.ViewDirectionBlock.prototype.autoConfigure = function () {};
// BABYLON.ViewDirectionBlock.prototype.isUnique = undefined;
// BABYLON.ViewDirectionBlock.prototype.isFinalMerger = undefined;
// BABYLON.ViewDirectionBlock.prototype.isInput = undefined;
// BABYLON.ViewDirectionBlock.prototype.buildId = undefined;
// BABYLON.ViewDirectionBlock.prototype.target = undefined;
// BABYLON.ViewDirectionBlock.prototype.inputs = undefined;
// BABYLON.ViewDirectionBlock.prototype.outputs = undefined;
BABYLON.ViewDirectionBlock.prototype.getInputByName = function () {};
BABYLON.ViewDirectionBlock.prototype.getOutputByName = function () {};
BABYLON.ViewDirectionBlock.prototype.initialize = function () {};
BABYLON.ViewDirectionBlock.prototype.bind = function () {};
BABYLON.ViewDirectionBlock.prototype.registerInput = function () {};
BABYLON.ViewDirectionBlock.prototype.registerOutput = function () {};
BABYLON.ViewDirectionBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ViewDirectionBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ViewDirectionBlock.prototype.getSiblingOutput = function () {};
BABYLON.ViewDirectionBlock.prototype.connectTo = function () {};
BABYLON.ViewDirectionBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ViewDirectionBlock.prototype.provideFallbacks = function () {};
BABYLON.ViewDirectionBlock.prototype.initializeDefines = function () {};
BABYLON.ViewDirectionBlock.prototype.prepareDefines = function () {};
BABYLON.ViewDirectionBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ViewDirectionBlock.prototype.isReady = function () {};
BABYLON.ViewDirectionBlock.prototype.build = function () {};
BABYLON.ViewDirectionBlock.prototype.clone = function () {};
BABYLON.ViewDirectionBlock.prototype.serialize = function () {};
BABYLON.ViewDirectionBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.FresnelBlock = function () {}
BABYLON.FresnelBlock.inputsAreExclusive = false;
BABYLON.FresnelBlock.comments = "";
// BABYLON.FresnelBlock.name = undefined;
BABYLON.FresnelBlock.uniqueId = 21;
BABYLON.FresnelBlock.prototype.constructor = function () {};
BABYLON.FresnelBlock.prototype.getClassName = function () {};
// BABYLON.FresnelBlock.prototype.worldNormal = undefined;
// BABYLON.FresnelBlock.prototype.viewDirection = undefined;
// BABYLON.FresnelBlock.prototype.bias = undefined;
// BABYLON.FresnelBlock.prototype.power = undefined;
// BABYLON.FresnelBlock.prototype.fresnel = undefined;
BABYLON.FresnelBlock.prototype.autoConfigure = function () {};
// BABYLON.FresnelBlock.prototype.isUnique = undefined;
// BABYLON.FresnelBlock.prototype.isFinalMerger = undefined;
// BABYLON.FresnelBlock.prototype.isInput = undefined;
// BABYLON.FresnelBlock.prototype.buildId = undefined;
// BABYLON.FresnelBlock.prototype.target = undefined;
// BABYLON.FresnelBlock.prototype.inputs = undefined;
// BABYLON.FresnelBlock.prototype.outputs = undefined;
BABYLON.FresnelBlock.prototype.getInputByName = function () {};
BABYLON.FresnelBlock.prototype.getOutputByName = function () {};
BABYLON.FresnelBlock.prototype.initialize = function () {};
BABYLON.FresnelBlock.prototype.bind = function () {};
BABYLON.FresnelBlock.prototype.registerInput = function () {};
BABYLON.FresnelBlock.prototype.registerOutput = function () {};
BABYLON.FresnelBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.FresnelBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.FresnelBlock.prototype.getSiblingOutput = function () {};
BABYLON.FresnelBlock.prototype.connectTo = function () {};
BABYLON.FresnelBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.FresnelBlock.prototype.provideFallbacks = function () {};
BABYLON.FresnelBlock.prototype.initializeDefines = function () {};
BABYLON.FresnelBlock.prototype.prepareDefines = function () {};
BABYLON.FresnelBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.FresnelBlock.prototype.isReady = function () {};
BABYLON.FresnelBlock.prototype.build = function () {};
BABYLON.FresnelBlock.prototype.clone = function () {};
BABYLON.FresnelBlock.prototype.serialize = function () {};
BABYLON.FresnelBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.MaxBlock = function () {}
BABYLON.MaxBlock.inputsAreExclusive = false;
BABYLON.MaxBlock.comments = "";
// BABYLON.MaxBlock.name = undefined;
BABYLON.MaxBlock.uniqueId = 22;
BABYLON.MaxBlock.prototype.constructor = function () {};
BABYLON.MaxBlock.prototype.getClassName = function () {};
// BABYLON.MaxBlock.prototype.left = undefined;
// BABYLON.MaxBlock.prototype.right = undefined;
// BABYLON.MaxBlock.prototype.output = undefined;
// BABYLON.MaxBlock.prototype.isUnique = undefined;
// BABYLON.MaxBlock.prototype.isFinalMerger = undefined;
// BABYLON.MaxBlock.prototype.isInput = undefined;
// BABYLON.MaxBlock.prototype.buildId = undefined;
// BABYLON.MaxBlock.prototype.target = undefined;
// BABYLON.MaxBlock.prototype.inputs = undefined;
// BABYLON.MaxBlock.prototype.outputs = undefined;
BABYLON.MaxBlock.prototype.getInputByName = function () {};
BABYLON.MaxBlock.prototype.getOutputByName = function () {};
BABYLON.MaxBlock.prototype.initialize = function () {};
BABYLON.MaxBlock.prototype.bind = function () {};
BABYLON.MaxBlock.prototype.registerInput = function () {};
BABYLON.MaxBlock.prototype.registerOutput = function () {};
BABYLON.MaxBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.MaxBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.MaxBlock.prototype.getSiblingOutput = function () {};
BABYLON.MaxBlock.prototype.connectTo = function () {};
BABYLON.MaxBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.MaxBlock.prototype.provideFallbacks = function () {};
BABYLON.MaxBlock.prototype.initializeDefines = function () {};
BABYLON.MaxBlock.prototype.prepareDefines = function () {};
BABYLON.MaxBlock.prototype.autoConfigure = function () {};
BABYLON.MaxBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.MaxBlock.prototype.isReady = function () {};
BABYLON.MaxBlock.prototype.build = function () {};
BABYLON.MaxBlock.prototype.clone = function () {};
BABYLON.MaxBlock.prototype.serialize = function () {};
BABYLON.MaxBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.MinBlock = function () {}
BABYLON.MinBlock.inputsAreExclusive = false;
BABYLON.MinBlock.comments = "";
// BABYLON.MinBlock.name = undefined;
BABYLON.MinBlock.uniqueId = 23;
BABYLON.MinBlock.prototype.constructor = function () {};
BABYLON.MinBlock.prototype.getClassName = function () {};
// BABYLON.MinBlock.prototype.left = undefined;
// BABYLON.MinBlock.prototype.right = undefined;
// BABYLON.MinBlock.prototype.output = undefined;
// BABYLON.MinBlock.prototype.isUnique = undefined;
// BABYLON.MinBlock.prototype.isFinalMerger = undefined;
// BABYLON.MinBlock.prototype.isInput = undefined;
// BABYLON.MinBlock.prototype.buildId = undefined;
// BABYLON.MinBlock.prototype.target = undefined;
// BABYLON.MinBlock.prototype.inputs = undefined;
// BABYLON.MinBlock.prototype.outputs = undefined;
BABYLON.MinBlock.prototype.getInputByName = function () {};
BABYLON.MinBlock.prototype.getOutputByName = function () {};
BABYLON.MinBlock.prototype.initialize = function () {};
BABYLON.MinBlock.prototype.bind = function () {};
BABYLON.MinBlock.prototype.registerInput = function () {};
BABYLON.MinBlock.prototype.registerOutput = function () {};
BABYLON.MinBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.MinBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.MinBlock.prototype.getSiblingOutput = function () {};
BABYLON.MinBlock.prototype.connectTo = function () {};
BABYLON.MinBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.MinBlock.prototype.provideFallbacks = function () {};
BABYLON.MinBlock.prototype.initializeDefines = function () {};
BABYLON.MinBlock.prototype.prepareDefines = function () {};
BABYLON.MinBlock.prototype.autoConfigure = function () {};
BABYLON.MinBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.MinBlock.prototype.isReady = function () {};
BABYLON.MinBlock.prototype.build = function () {};
BABYLON.MinBlock.prototype.clone = function () {};
BABYLON.MinBlock.prototype.serialize = function () {};
BABYLON.MinBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.DistanceBlock = function () {}
BABYLON.DistanceBlock.inputsAreExclusive = false;
BABYLON.DistanceBlock.comments = "";
// BABYLON.DistanceBlock.name = undefined;
BABYLON.DistanceBlock.uniqueId = 24;
BABYLON.DistanceBlock.prototype.constructor = function () {};
BABYLON.DistanceBlock.prototype.getClassName = function () {};
// BABYLON.DistanceBlock.prototype.left = undefined;
// BABYLON.DistanceBlock.prototype.right = undefined;
// BABYLON.DistanceBlock.prototype.output = undefined;
// BABYLON.DistanceBlock.prototype.isUnique = undefined;
// BABYLON.DistanceBlock.prototype.isFinalMerger = undefined;
// BABYLON.DistanceBlock.prototype.isInput = undefined;
// BABYLON.DistanceBlock.prototype.buildId = undefined;
// BABYLON.DistanceBlock.prototype.target = undefined;
// BABYLON.DistanceBlock.prototype.inputs = undefined;
// BABYLON.DistanceBlock.prototype.outputs = undefined;
BABYLON.DistanceBlock.prototype.getInputByName = function () {};
BABYLON.DistanceBlock.prototype.getOutputByName = function () {};
BABYLON.DistanceBlock.prototype.initialize = function () {};
BABYLON.DistanceBlock.prototype.bind = function () {};
BABYLON.DistanceBlock.prototype.registerInput = function () {};
BABYLON.DistanceBlock.prototype.registerOutput = function () {};
BABYLON.DistanceBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.DistanceBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.DistanceBlock.prototype.getSiblingOutput = function () {};
BABYLON.DistanceBlock.prototype.connectTo = function () {};
BABYLON.DistanceBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.DistanceBlock.prototype.provideFallbacks = function () {};
BABYLON.DistanceBlock.prototype.initializeDefines = function () {};
BABYLON.DistanceBlock.prototype.prepareDefines = function () {};
BABYLON.DistanceBlock.prototype.autoConfigure = function () {};
BABYLON.DistanceBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.DistanceBlock.prototype.isReady = function () {};
BABYLON.DistanceBlock.prototype.build = function () {};
BABYLON.DistanceBlock.prototype.clone = function () {};
BABYLON.DistanceBlock.prototype.serialize = function () {};
BABYLON.DistanceBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.LengthBlock = function () {}
BABYLON.LengthBlock.inputsAreExclusive = false;
BABYLON.LengthBlock.comments = "";
// BABYLON.LengthBlock.name = undefined;
BABYLON.LengthBlock.uniqueId = 25;
BABYLON.LengthBlock.prototype.constructor = function () {};
BABYLON.LengthBlock.prototype.getClassName = function () {};
// BABYLON.LengthBlock.prototype.value = undefined;
// BABYLON.LengthBlock.prototype.output = undefined;
// BABYLON.LengthBlock.prototype.isUnique = undefined;
// BABYLON.LengthBlock.prototype.isFinalMerger = undefined;
// BABYLON.LengthBlock.prototype.isInput = undefined;
// BABYLON.LengthBlock.prototype.buildId = undefined;
// BABYLON.LengthBlock.prototype.target = undefined;
// BABYLON.LengthBlock.prototype.inputs = undefined;
// BABYLON.LengthBlock.prototype.outputs = undefined;
BABYLON.LengthBlock.prototype.getInputByName = function () {};
BABYLON.LengthBlock.prototype.getOutputByName = function () {};
BABYLON.LengthBlock.prototype.initialize = function () {};
BABYLON.LengthBlock.prototype.bind = function () {};
BABYLON.LengthBlock.prototype.registerInput = function () {};
BABYLON.LengthBlock.prototype.registerOutput = function () {};
BABYLON.LengthBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.LengthBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.LengthBlock.prototype.getSiblingOutput = function () {};
BABYLON.LengthBlock.prototype.connectTo = function () {};
BABYLON.LengthBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.LengthBlock.prototype.provideFallbacks = function () {};
BABYLON.LengthBlock.prototype.initializeDefines = function () {};
BABYLON.LengthBlock.prototype.prepareDefines = function () {};
BABYLON.LengthBlock.prototype.autoConfigure = function () {};
BABYLON.LengthBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.LengthBlock.prototype.isReady = function () {};
BABYLON.LengthBlock.prototype.build = function () {};
BABYLON.LengthBlock.prototype.clone = function () {};
BABYLON.LengthBlock.prototype.serialize = function () {};
BABYLON.LengthBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.NegateBlock = function () {}
BABYLON.NegateBlock.inputsAreExclusive = false;
BABYLON.NegateBlock.comments = "";
// BABYLON.NegateBlock.name = undefined;
BABYLON.NegateBlock.uniqueId = 26;
BABYLON.NegateBlock.prototype.constructor = function () {};
BABYLON.NegateBlock.prototype.getClassName = function () {};
// BABYLON.NegateBlock.prototype.value = undefined;
// BABYLON.NegateBlock.prototype.output = undefined;
// BABYLON.NegateBlock.prototype.isUnique = undefined;
// BABYLON.NegateBlock.prototype.isFinalMerger = undefined;
// BABYLON.NegateBlock.prototype.isInput = undefined;
// BABYLON.NegateBlock.prototype.buildId = undefined;
// BABYLON.NegateBlock.prototype.target = undefined;
// BABYLON.NegateBlock.prototype.inputs = undefined;
// BABYLON.NegateBlock.prototype.outputs = undefined;
BABYLON.NegateBlock.prototype.getInputByName = function () {};
BABYLON.NegateBlock.prototype.getOutputByName = function () {};
BABYLON.NegateBlock.prototype.initialize = function () {};
BABYLON.NegateBlock.prototype.bind = function () {};
BABYLON.NegateBlock.prototype.registerInput = function () {};
BABYLON.NegateBlock.prototype.registerOutput = function () {};
BABYLON.NegateBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.NegateBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.NegateBlock.prototype.getSiblingOutput = function () {};
BABYLON.NegateBlock.prototype.connectTo = function () {};
BABYLON.NegateBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.NegateBlock.prototype.provideFallbacks = function () {};
BABYLON.NegateBlock.prototype.initializeDefines = function () {};
BABYLON.NegateBlock.prototype.prepareDefines = function () {};
BABYLON.NegateBlock.prototype.autoConfigure = function () {};
BABYLON.NegateBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.NegateBlock.prototype.isReady = function () {};
BABYLON.NegateBlock.prototype.build = function () {};
BABYLON.NegateBlock.prototype.clone = function () {};
BABYLON.NegateBlock.prototype.serialize = function () {};
BABYLON.NegateBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.PowBlock = function () {}
BABYLON.PowBlock.inputsAreExclusive = false;
BABYLON.PowBlock.comments = "";
// BABYLON.PowBlock.name = undefined;
BABYLON.PowBlock.uniqueId = 27;
BABYLON.PowBlock.prototype.constructor = function () {};
BABYLON.PowBlock.prototype.getClassName = function () {};
// BABYLON.PowBlock.prototype.value = undefined;
// BABYLON.PowBlock.prototype.power = undefined;
// BABYLON.PowBlock.prototype.output = undefined;
// BABYLON.PowBlock.prototype.isUnique = undefined;
// BABYLON.PowBlock.prototype.isFinalMerger = undefined;
// BABYLON.PowBlock.prototype.isInput = undefined;
// BABYLON.PowBlock.prototype.buildId = undefined;
// BABYLON.PowBlock.prototype.target = undefined;
// BABYLON.PowBlock.prototype.inputs = undefined;
// BABYLON.PowBlock.prototype.outputs = undefined;
BABYLON.PowBlock.prototype.getInputByName = function () {};
BABYLON.PowBlock.prototype.getOutputByName = function () {};
BABYLON.PowBlock.prototype.initialize = function () {};
BABYLON.PowBlock.prototype.bind = function () {};
BABYLON.PowBlock.prototype.registerInput = function () {};
BABYLON.PowBlock.prototype.registerOutput = function () {};
BABYLON.PowBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.PowBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.PowBlock.prototype.getSiblingOutput = function () {};
BABYLON.PowBlock.prototype.connectTo = function () {};
BABYLON.PowBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.PowBlock.prototype.provideFallbacks = function () {};
BABYLON.PowBlock.prototype.initializeDefines = function () {};
BABYLON.PowBlock.prototype.prepareDefines = function () {};
BABYLON.PowBlock.prototype.autoConfigure = function () {};
BABYLON.PowBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.PowBlock.prototype.isReady = function () {};
BABYLON.PowBlock.prototype.build = function () {};
BABYLON.PowBlock.prototype.clone = function () {};
BABYLON.PowBlock.prototype.serialize = function () {};
BABYLON.PowBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.RandomNumberBlock = function () {}
BABYLON.RandomNumberBlock.inputsAreExclusive = false;
BABYLON.RandomNumberBlock.comments = "";
// BABYLON.RandomNumberBlock.name = undefined;
BABYLON.RandomNumberBlock.uniqueId = 28;
BABYLON.RandomNumberBlock.prototype.constructor = function () {};
BABYLON.RandomNumberBlock.prototype.getClassName = function () {};
// BABYLON.RandomNumberBlock.prototype.seed = undefined;
// BABYLON.RandomNumberBlock.prototype.output = undefined;
// BABYLON.RandomNumberBlock.prototype.isUnique = undefined;
// BABYLON.RandomNumberBlock.prototype.isFinalMerger = undefined;
// BABYLON.RandomNumberBlock.prototype.isInput = undefined;
// BABYLON.RandomNumberBlock.prototype.buildId = undefined;
// BABYLON.RandomNumberBlock.prototype.target = undefined;
// BABYLON.RandomNumberBlock.prototype.inputs = undefined;
// BABYLON.RandomNumberBlock.prototype.outputs = undefined;
BABYLON.RandomNumberBlock.prototype.getInputByName = function () {};
BABYLON.RandomNumberBlock.prototype.getOutputByName = function () {};
BABYLON.RandomNumberBlock.prototype.initialize = function () {};
BABYLON.RandomNumberBlock.prototype.bind = function () {};
BABYLON.RandomNumberBlock.prototype.registerInput = function () {};
BABYLON.RandomNumberBlock.prototype.registerOutput = function () {};
BABYLON.RandomNumberBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.RandomNumberBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.RandomNumberBlock.prototype.getSiblingOutput = function () {};
BABYLON.RandomNumberBlock.prototype.connectTo = function () {};
BABYLON.RandomNumberBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.RandomNumberBlock.prototype.provideFallbacks = function () {};
BABYLON.RandomNumberBlock.prototype.initializeDefines = function () {};
BABYLON.RandomNumberBlock.prototype.prepareDefines = function () {};
BABYLON.RandomNumberBlock.prototype.autoConfigure = function () {};
BABYLON.RandomNumberBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.RandomNumberBlock.prototype.isReady = function () {};
BABYLON.RandomNumberBlock.prototype.build = function () {};
BABYLON.RandomNumberBlock.prototype.clone = function () {};
BABYLON.RandomNumberBlock.prototype.serialize = function () {};
BABYLON.RandomNumberBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ArcTan2Block = function () {}
BABYLON.ArcTan2Block.inputsAreExclusive = false;
BABYLON.ArcTan2Block.comments = "";
// BABYLON.ArcTan2Block.name = undefined;
BABYLON.ArcTan2Block.uniqueId = 29;
BABYLON.ArcTan2Block.prototype.constructor = function () {};
BABYLON.ArcTan2Block.prototype.getClassName = function () {};
// BABYLON.ArcTan2Block.prototype.x = undefined;
// BABYLON.ArcTan2Block.prototype.y = undefined;
// BABYLON.ArcTan2Block.prototype.output = undefined;
// BABYLON.ArcTan2Block.prototype.isUnique = undefined;
// BABYLON.ArcTan2Block.prototype.isFinalMerger = undefined;
// BABYLON.ArcTan2Block.prototype.isInput = undefined;
// BABYLON.ArcTan2Block.prototype.buildId = undefined;
// BABYLON.ArcTan2Block.prototype.target = undefined;
// BABYLON.ArcTan2Block.prototype.inputs = undefined;
// BABYLON.ArcTan2Block.prototype.outputs = undefined;
BABYLON.ArcTan2Block.prototype.getInputByName = function () {};
BABYLON.ArcTan2Block.prototype.getOutputByName = function () {};
BABYLON.ArcTan2Block.prototype.initialize = function () {};
BABYLON.ArcTan2Block.prototype.bind = function () {};
BABYLON.ArcTan2Block.prototype.registerInput = function () {};
BABYLON.ArcTan2Block.prototype.registerOutput = function () {};
BABYLON.ArcTan2Block.prototype.getFirstAvailableInput = function () {};
BABYLON.ArcTan2Block.prototype.getFirstAvailableOutput = function () {};
BABYLON.ArcTan2Block.prototype.getSiblingOutput = function () {};
BABYLON.ArcTan2Block.prototype.connectTo = function () {};
BABYLON.ArcTan2Block.prototype.updateUniformsAndSamples = function () {};
BABYLON.ArcTan2Block.prototype.provideFallbacks = function () {};
BABYLON.ArcTan2Block.prototype.initializeDefines = function () {};
BABYLON.ArcTan2Block.prototype.prepareDefines = function () {};
BABYLON.ArcTan2Block.prototype.autoConfigure = function () {};
BABYLON.ArcTan2Block.prototype.replaceRepeatableContent = function () {};
BABYLON.ArcTan2Block.prototype.isReady = function () {};
BABYLON.ArcTan2Block.prototype.build = function () {};
BABYLON.ArcTan2Block.prototype.clone = function () {};
BABYLON.ArcTan2Block.prototype.serialize = function () {};
BABYLON.ArcTan2Block.prototype.dispose = function () {};


/** @constructor */
BABYLON.SmoothStepBlock = function () {}
BABYLON.SmoothStepBlock.inputsAreExclusive = false;
BABYLON.SmoothStepBlock.comments = "";
// BABYLON.SmoothStepBlock.name = undefined;
BABYLON.SmoothStepBlock.uniqueId = 30;
BABYLON.SmoothStepBlock.prototype.constructor = function () {};
BABYLON.SmoothStepBlock.prototype.getClassName = function () {};
// BABYLON.SmoothStepBlock.prototype.value = undefined;
// BABYLON.SmoothStepBlock.prototype.edge0 = undefined;
// BABYLON.SmoothStepBlock.prototype.edge1 = undefined;
// BABYLON.SmoothStepBlock.prototype.output = undefined;
// BABYLON.SmoothStepBlock.prototype.isUnique = undefined;
// BABYLON.SmoothStepBlock.prototype.isFinalMerger = undefined;
// BABYLON.SmoothStepBlock.prototype.isInput = undefined;
// BABYLON.SmoothStepBlock.prototype.buildId = undefined;
// BABYLON.SmoothStepBlock.prototype.target = undefined;
// BABYLON.SmoothStepBlock.prototype.inputs = undefined;
// BABYLON.SmoothStepBlock.prototype.outputs = undefined;
BABYLON.SmoothStepBlock.prototype.getInputByName = function () {};
BABYLON.SmoothStepBlock.prototype.getOutputByName = function () {};
BABYLON.SmoothStepBlock.prototype.initialize = function () {};
BABYLON.SmoothStepBlock.prototype.bind = function () {};
BABYLON.SmoothStepBlock.prototype.registerInput = function () {};
BABYLON.SmoothStepBlock.prototype.registerOutput = function () {};
BABYLON.SmoothStepBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.SmoothStepBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.SmoothStepBlock.prototype.getSiblingOutput = function () {};
BABYLON.SmoothStepBlock.prototype.connectTo = function () {};
BABYLON.SmoothStepBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.SmoothStepBlock.prototype.provideFallbacks = function () {};
BABYLON.SmoothStepBlock.prototype.initializeDefines = function () {};
BABYLON.SmoothStepBlock.prototype.prepareDefines = function () {};
BABYLON.SmoothStepBlock.prototype.autoConfigure = function () {};
BABYLON.SmoothStepBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.SmoothStepBlock.prototype.isReady = function () {};
BABYLON.SmoothStepBlock.prototype.build = function () {};
BABYLON.SmoothStepBlock.prototype.clone = function () {};
BABYLON.SmoothStepBlock.prototype.serialize = function () {};
BABYLON.SmoothStepBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ReciprocalBlock = function () {}
BABYLON.ReciprocalBlock.inputsAreExclusive = false;
BABYLON.ReciprocalBlock.comments = "";
// BABYLON.ReciprocalBlock.name = undefined;
BABYLON.ReciprocalBlock.uniqueId = 31;
BABYLON.ReciprocalBlock.prototype.constructor = function () {};
BABYLON.ReciprocalBlock.prototype.getClassName = function () {};
// BABYLON.ReciprocalBlock.prototype.input = undefined;
// BABYLON.ReciprocalBlock.prototype.output = undefined;
// BABYLON.ReciprocalBlock.prototype.isUnique = undefined;
// BABYLON.ReciprocalBlock.prototype.isFinalMerger = undefined;
// BABYLON.ReciprocalBlock.prototype.isInput = undefined;
// BABYLON.ReciprocalBlock.prototype.buildId = undefined;
// BABYLON.ReciprocalBlock.prototype.target = undefined;
// BABYLON.ReciprocalBlock.prototype.inputs = undefined;
// BABYLON.ReciprocalBlock.prototype.outputs = undefined;
BABYLON.ReciprocalBlock.prototype.getInputByName = function () {};
BABYLON.ReciprocalBlock.prototype.getOutputByName = function () {};
BABYLON.ReciprocalBlock.prototype.initialize = function () {};
BABYLON.ReciprocalBlock.prototype.bind = function () {};
BABYLON.ReciprocalBlock.prototype.registerInput = function () {};
BABYLON.ReciprocalBlock.prototype.registerOutput = function () {};
BABYLON.ReciprocalBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ReciprocalBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ReciprocalBlock.prototype.getSiblingOutput = function () {};
BABYLON.ReciprocalBlock.prototype.connectTo = function () {};
BABYLON.ReciprocalBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ReciprocalBlock.prototype.provideFallbacks = function () {};
BABYLON.ReciprocalBlock.prototype.initializeDefines = function () {};
BABYLON.ReciprocalBlock.prototype.prepareDefines = function () {};
BABYLON.ReciprocalBlock.prototype.autoConfigure = function () {};
BABYLON.ReciprocalBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ReciprocalBlock.prototype.isReady = function () {};
BABYLON.ReciprocalBlock.prototype.build = function () {};
BABYLON.ReciprocalBlock.prototype.clone = function () {};
BABYLON.ReciprocalBlock.prototype.serialize = function () {};
BABYLON.ReciprocalBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ReplaceColorBlock = function () {}
BABYLON.ReplaceColorBlock.inputsAreExclusive = false;
BABYLON.ReplaceColorBlock.comments = "";
// BABYLON.ReplaceColorBlock.name = undefined;
BABYLON.ReplaceColorBlock.uniqueId = 32;
BABYLON.ReplaceColorBlock.prototype.constructor = function () {};
BABYLON.ReplaceColorBlock.prototype.getClassName = function () {};
// BABYLON.ReplaceColorBlock.prototype.value = undefined;
// BABYLON.ReplaceColorBlock.prototype.reference = undefined;
// BABYLON.ReplaceColorBlock.prototype.distance = undefined;
// BABYLON.ReplaceColorBlock.prototype.replacement = undefined;
// BABYLON.ReplaceColorBlock.prototype.output = undefined;
// BABYLON.ReplaceColorBlock.prototype.isUnique = undefined;
// BABYLON.ReplaceColorBlock.prototype.isFinalMerger = undefined;
// BABYLON.ReplaceColorBlock.prototype.isInput = undefined;
// BABYLON.ReplaceColorBlock.prototype.buildId = undefined;
// BABYLON.ReplaceColorBlock.prototype.target = undefined;
// BABYLON.ReplaceColorBlock.prototype.inputs = undefined;
// BABYLON.ReplaceColorBlock.prototype.outputs = undefined;
BABYLON.ReplaceColorBlock.prototype.getInputByName = function () {};
BABYLON.ReplaceColorBlock.prototype.getOutputByName = function () {};
BABYLON.ReplaceColorBlock.prototype.initialize = function () {};
BABYLON.ReplaceColorBlock.prototype.bind = function () {};
BABYLON.ReplaceColorBlock.prototype.registerInput = function () {};
BABYLON.ReplaceColorBlock.prototype.registerOutput = function () {};
BABYLON.ReplaceColorBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ReplaceColorBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ReplaceColorBlock.prototype.getSiblingOutput = function () {};
BABYLON.ReplaceColorBlock.prototype.connectTo = function () {};
BABYLON.ReplaceColorBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ReplaceColorBlock.prototype.provideFallbacks = function () {};
BABYLON.ReplaceColorBlock.prototype.initializeDefines = function () {};
BABYLON.ReplaceColorBlock.prototype.prepareDefines = function () {};
BABYLON.ReplaceColorBlock.prototype.autoConfigure = function () {};
BABYLON.ReplaceColorBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ReplaceColorBlock.prototype.isReady = function () {};
BABYLON.ReplaceColorBlock.prototype.build = function () {};
BABYLON.ReplaceColorBlock.prototype.clone = function () {};
BABYLON.ReplaceColorBlock.prototype.serialize = function () {};
BABYLON.ReplaceColorBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.PosterizeBlock = function () {}
BABYLON.PosterizeBlock.inputsAreExclusive = false;
BABYLON.PosterizeBlock.comments = "";
// BABYLON.PosterizeBlock.name = undefined;
BABYLON.PosterizeBlock.uniqueId = 33;
BABYLON.PosterizeBlock.prototype.constructor = function () {};
BABYLON.PosterizeBlock.prototype.getClassName = function () {};
// BABYLON.PosterizeBlock.prototype.value = undefined;
// BABYLON.PosterizeBlock.prototype.steps = undefined;
// BABYLON.PosterizeBlock.prototype.output = undefined;
// BABYLON.PosterizeBlock.prototype.isUnique = undefined;
// BABYLON.PosterizeBlock.prototype.isFinalMerger = undefined;
// BABYLON.PosterizeBlock.prototype.isInput = undefined;
// BABYLON.PosterizeBlock.prototype.buildId = undefined;
// BABYLON.PosterizeBlock.prototype.target = undefined;
// BABYLON.PosterizeBlock.prototype.inputs = undefined;
// BABYLON.PosterizeBlock.prototype.outputs = undefined;
BABYLON.PosterizeBlock.prototype.getInputByName = function () {};
BABYLON.PosterizeBlock.prototype.getOutputByName = function () {};
BABYLON.PosterizeBlock.prototype.initialize = function () {};
BABYLON.PosterizeBlock.prototype.bind = function () {};
BABYLON.PosterizeBlock.prototype.registerInput = function () {};
BABYLON.PosterizeBlock.prototype.registerOutput = function () {};
BABYLON.PosterizeBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.PosterizeBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.PosterizeBlock.prototype.getSiblingOutput = function () {};
BABYLON.PosterizeBlock.prototype.connectTo = function () {};
BABYLON.PosterizeBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.PosterizeBlock.prototype.provideFallbacks = function () {};
BABYLON.PosterizeBlock.prototype.initializeDefines = function () {};
BABYLON.PosterizeBlock.prototype.prepareDefines = function () {};
BABYLON.PosterizeBlock.prototype.autoConfigure = function () {};
BABYLON.PosterizeBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.PosterizeBlock.prototype.isReady = function () {};
BABYLON.PosterizeBlock.prototype.build = function () {};
BABYLON.PosterizeBlock.prototype.clone = function () {};
BABYLON.PosterizeBlock.prototype.serialize = function () {};
BABYLON.PosterizeBlock.prototype.dispose = function () {};


BABYLON.WaveBlockKind = {}

/** @constructor */
BABYLON.WaveBlock = function () {}
BABYLON.WaveBlock.inputsAreExclusive = false;
BABYLON.WaveBlock.comments = "";
// BABYLON.WaveBlock.name = undefined;
BABYLON.WaveBlock.uniqueId = 34;
BABYLON.WaveBlock.kind = 0;
BABYLON.WaveBlock.prototype.constructor = function () {};
BABYLON.WaveBlock.prototype.getClassName = function () {};
// BABYLON.WaveBlock.prototype.input = undefined;
// BABYLON.WaveBlock.prototype.output = undefined;
BABYLON.WaveBlock.prototype.serialize = function () {};
// BABYLON.WaveBlock.prototype.isUnique = undefined;
// BABYLON.WaveBlock.prototype.isFinalMerger = undefined;
// BABYLON.WaveBlock.prototype.isInput = undefined;
// BABYLON.WaveBlock.prototype.buildId = undefined;
// BABYLON.WaveBlock.prototype.target = undefined;
// BABYLON.WaveBlock.prototype.inputs = undefined;
// BABYLON.WaveBlock.prototype.outputs = undefined;
BABYLON.WaveBlock.prototype.getInputByName = function () {};
BABYLON.WaveBlock.prototype.getOutputByName = function () {};
BABYLON.WaveBlock.prototype.initialize = function () {};
BABYLON.WaveBlock.prototype.bind = function () {};
BABYLON.WaveBlock.prototype.registerInput = function () {};
BABYLON.WaveBlock.prototype.registerOutput = function () {};
BABYLON.WaveBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.WaveBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.WaveBlock.prototype.getSiblingOutput = function () {};
BABYLON.WaveBlock.prototype.connectTo = function () {};
BABYLON.WaveBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.WaveBlock.prototype.provideFallbacks = function () {};
BABYLON.WaveBlock.prototype.initializeDefines = function () {};
BABYLON.WaveBlock.prototype.prepareDefines = function () {};
BABYLON.WaveBlock.prototype.autoConfigure = function () {};
BABYLON.WaveBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.WaveBlock.prototype.isReady = function () {};
BABYLON.WaveBlock.prototype.build = function () {};
BABYLON.WaveBlock.prototype.clone = function () {};
BABYLON.WaveBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.GradientBlockColorStep = function () {}
// BABYLON.GradientBlockColorStep.step = undefined;
// BABYLON.GradientBlockColorStep.color = undefined;


/** @constructor */
BABYLON.GradientBlock = function () {}
BABYLON.GradientBlock.inputsAreExclusive = false;
BABYLON.GradientBlock.comments = "";
// BABYLON.GradientBlock.name = undefined;
BABYLON.GradientBlock.uniqueId = 35;
BABYLON.GradientBlock.colorSteps = {};
BABYLON.GradientBlock.prototype.constructor = function () {};
BABYLON.GradientBlock.prototype.getClassName = function () {};
// BABYLON.GradientBlock.prototype.gradient = undefined;
// BABYLON.GradientBlock.prototype.output = undefined;
BABYLON.GradientBlock.prototype.serialize = function () {};
// BABYLON.GradientBlock.prototype.isUnique = undefined;
// BABYLON.GradientBlock.prototype.isFinalMerger = undefined;
// BABYLON.GradientBlock.prototype.isInput = undefined;
// BABYLON.GradientBlock.prototype.buildId = undefined;
// BABYLON.GradientBlock.prototype.target = undefined;
// BABYLON.GradientBlock.prototype.inputs = undefined;
// BABYLON.GradientBlock.prototype.outputs = undefined;
BABYLON.GradientBlock.prototype.getInputByName = function () {};
BABYLON.GradientBlock.prototype.getOutputByName = function () {};
BABYLON.GradientBlock.prototype.initialize = function () {};
BABYLON.GradientBlock.prototype.bind = function () {};
BABYLON.GradientBlock.prototype.registerInput = function () {};
BABYLON.GradientBlock.prototype.registerOutput = function () {};
BABYLON.GradientBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.GradientBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.GradientBlock.prototype.getSiblingOutput = function () {};
BABYLON.GradientBlock.prototype.connectTo = function () {};
BABYLON.GradientBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.GradientBlock.prototype.provideFallbacks = function () {};
BABYLON.GradientBlock.prototype.initializeDefines = function () {};
BABYLON.GradientBlock.prototype.prepareDefines = function () {};
BABYLON.GradientBlock.prototype.autoConfigure = function () {};
BABYLON.GradientBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.GradientBlock.prototype.isReady = function () {};
BABYLON.GradientBlock.prototype.build = function () {};
BABYLON.GradientBlock.prototype.clone = function () {};
BABYLON.GradientBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.NLerpBlock = function () {}
BABYLON.NLerpBlock.inputsAreExclusive = false;
BABYLON.NLerpBlock.comments = "";
// BABYLON.NLerpBlock.name = undefined;
BABYLON.NLerpBlock.uniqueId = 36;
BABYLON.NLerpBlock.prototype.constructor = function () {};
BABYLON.NLerpBlock.prototype.getClassName = function () {};
// BABYLON.NLerpBlock.prototype.left = undefined;
// BABYLON.NLerpBlock.prototype.right = undefined;
// BABYLON.NLerpBlock.prototype.gradient = undefined;
// BABYLON.NLerpBlock.prototype.output = undefined;
// BABYLON.NLerpBlock.prototype.isUnique = undefined;
// BABYLON.NLerpBlock.prototype.isFinalMerger = undefined;
// BABYLON.NLerpBlock.prototype.isInput = undefined;
// BABYLON.NLerpBlock.prototype.buildId = undefined;
// BABYLON.NLerpBlock.prototype.target = undefined;
// BABYLON.NLerpBlock.prototype.inputs = undefined;
// BABYLON.NLerpBlock.prototype.outputs = undefined;
BABYLON.NLerpBlock.prototype.getInputByName = function () {};
BABYLON.NLerpBlock.prototype.getOutputByName = function () {};
BABYLON.NLerpBlock.prototype.initialize = function () {};
BABYLON.NLerpBlock.prototype.bind = function () {};
BABYLON.NLerpBlock.prototype.registerInput = function () {};
BABYLON.NLerpBlock.prototype.registerOutput = function () {};
BABYLON.NLerpBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.NLerpBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.NLerpBlock.prototype.getSiblingOutput = function () {};
BABYLON.NLerpBlock.prototype.connectTo = function () {};
BABYLON.NLerpBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.NLerpBlock.prototype.provideFallbacks = function () {};
BABYLON.NLerpBlock.prototype.initializeDefines = function () {};
BABYLON.NLerpBlock.prototype.prepareDefines = function () {};
BABYLON.NLerpBlock.prototype.autoConfigure = function () {};
BABYLON.NLerpBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.NLerpBlock.prototype.isReady = function () {};
BABYLON.NLerpBlock.prototype.build = function () {};
BABYLON.NLerpBlock.prototype.clone = function () {};
BABYLON.NLerpBlock.prototype.serialize = function () {};
BABYLON.NLerpBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.WorleyNoise3DBlock = function () {}
BABYLON.WorleyNoise3DBlock.inputsAreExclusive = false;
BABYLON.WorleyNoise3DBlock.comments = "";
// BABYLON.WorleyNoise3DBlock.name = undefined;
BABYLON.WorleyNoise3DBlock.uniqueId = 37;
BABYLON.WorleyNoise3DBlock.manhattanDistance = false;
BABYLON.WorleyNoise3DBlock.prototype.constructor = function () {};
BABYLON.WorleyNoise3DBlock.prototype.getClassName = function () {};
// BABYLON.WorleyNoise3DBlock.prototype.seed = undefined;
// BABYLON.WorleyNoise3DBlock.prototype.jitter = undefined;
// BABYLON.WorleyNoise3DBlock.prototype.output = undefined;
BABYLON.WorleyNoise3DBlock.prototype.serialize = function () {};
// BABYLON.WorleyNoise3DBlock.prototype.isUnique = undefined;
// BABYLON.WorleyNoise3DBlock.prototype.isFinalMerger = undefined;
// BABYLON.WorleyNoise3DBlock.prototype.isInput = undefined;
// BABYLON.WorleyNoise3DBlock.prototype.buildId = undefined;
// BABYLON.WorleyNoise3DBlock.prototype.target = undefined;
// BABYLON.WorleyNoise3DBlock.prototype.inputs = undefined;
// BABYLON.WorleyNoise3DBlock.prototype.outputs = undefined;
BABYLON.WorleyNoise3DBlock.prototype.getInputByName = function () {};
BABYLON.WorleyNoise3DBlock.prototype.getOutputByName = function () {};
BABYLON.WorleyNoise3DBlock.prototype.initialize = function () {};
BABYLON.WorleyNoise3DBlock.prototype.bind = function () {};
BABYLON.WorleyNoise3DBlock.prototype.registerInput = function () {};
BABYLON.WorleyNoise3DBlock.prototype.registerOutput = function () {};
BABYLON.WorleyNoise3DBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.WorleyNoise3DBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.WorleyNoise3DBlock.prototype.getSiblingOutput = function () {};
BABYLON.WorleyNoise3DBlock.prototype.connectTo = function () {};
BABYLON.WorleyNoise3DBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.WorleyNoise3DBlock.prototype.provideFallbacks = function () {};
BABYLON.WorleyNoise3DBlock.prototype.initializeDefines = function () {};
BABYLON.WorleyNoise3DBlock.prototype.prepareDefines = function () {};
BABYLON.WorleyNoise3DBlock.prototype.autoConfigure = function () {};
BABYLON.WorleyNoise3DBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.WorleyNoise3DBlock.prototype.isReady = function () {};
BABYLON.WorleyNoise3DBlock.prototype.build = function () {};
BABYLON.WorleyNoise3DBlock.prototype.clone = function () {};
BABYLON.WorleyNoise3DBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.SimplexPerlin3DBlock = function () {}
BABYLON.SimplexPerlin3DBlock.inputsAreExclusive = false;
BABYLON.SimplexPerlin3DBlock.comments = "";
// BABYLON.SimplexPerlin3DBlock.name = undefined;
BABYLON.SimplexPerlin3DBlock.uniqueId = 38;
BABYLON.SimplexPerlin3DBlock.prototype.constructor = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.getClassName = function () {};
// BABYLON.SimplexPerlin3DBlock.prototype.seed = undefined;
// BABYLON.SimplexPerlin3DBlock.prototype.output = undefined;
// BABYLON.SimplexPerlin3DBlock.prototype.isUnique = undefined;
// BABYLON.SimplexPerlin3DBlock.prototype.isFinalMerger = undefined;
// BABYLON.SimplexPerlin3DBlock.prototype.isInput = undefined;
// BABYLON.SimplexPerlin3DBlock.prototype.buildId = undefined;
// BABYLON.SimplexPerlin3DBlock.prototype.target = undefined;
// BABYLON.SimplexPerlin3DBlock.prototype.inputs = undefined;
// BABYLON.SimplexPerlin3DBlock.prototype.outputs = undefined;
BABYLON.SimplexPerlin3DBlock.prototype.getInputByName = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.getOutputByName = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.initialize = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.bind = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.registerInput = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.registerOutput = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.getSiblingOutput = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.connectTo = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.provideFallbacks = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.initializeDefines = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.prepareDefines = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.autoConfigure = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.isReady = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.build = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.clone = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.serialize = function () {};
BABYLON.SimplexPerlin3DBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.NormalBlendBlock = function () {}
BABYLON.NormalBlendBlock.inputsAreExclusive = false;
BABYLON.NormalBlendBlock.comments = "";
// BABYLON.NormalBlendBlock.name = undefined;
BABYLON.NormalBlendBlock.uniqueId = 39;
BABYLON.NormalBlendBlock.prototype.constructor = function () {};
BABYLON.NormalBlendBlock.prototype.getClassName = function () {};
// BABYLON.NormalBlendBlock.prototype.normalMap0 = undefined;
// BABYLON.NormalBlendBlock.prototype.normalMap1 = undefined;
// BABYLON.NormalBlendBlock.prototype.output = undefined;
// BABYLON.NormalBlendBlock.prototype.isUnique = undefined;
// BABYLON.NormalBlendBlock.prototype.isFinalMerger = undefined;
// BABYLON.NormalBlendBlock.prototype.isInput = undefined;
// BABYLON.NormalBlendBlock.prototype.buildId = undefined;
// BABYLON.NormalBlendBlock.prototype.target = undefined;
// BABYLON.NormalBlendBlock.prototype.inputs = undefined;
// BABYLON.NormalBlendBlock.prototype.outputs = undefined;
BABYLON.NormalBlendBlock.prototype.getInputByName = function () {};
BABYLON.NormalBlendBlock.prototype.getOutputByName = function () {};
BABYLON.NormalBlendBlock.prototype.initialize = function () {};
BABYLON.NormalBlendBlock.prototype.bind = function () {};
BABYLON.NormalBlendBlock.prototype.registerInput = function () {};
BABYLON.NormalBlendBlock.prototype.registerOutput = function () {};
BABYLON.NormalBlendBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.NormalBlendBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.NormalBlendBlock.prototype.getSiblingOutput = function () {};
BABYLON.NormalBlendBlock.prototype.connectTo = function () {};
BABYLON.NormalBlendBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.NormalBlendBlock.prototype.provideFallbacks = function () {};
BABYLON.NormalBlendBlock.prototype.initializeDefines = function () {};
BABYLON.NormalBlendBlock.prototype.prepareDefines = function () {};
BABYLON.NormalBlendBlock.prototype.autoConfigure = function () {};
BABYLON.NormalBlendBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.NormalBlendBlock.prototype.isReady = function () {};
BABYLON.NormalBlendBlock.prototype.build = function () {};
BABYLON.NormalBlendBlock.prototype.clone = function () {};
BABYLON.NormalBlendBlock.prototype.serialize = function () {};
BABYLON.NormalBlendBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.Rotate2dBlock = function () {}
BABYLON.Rotate2dBlock.inputsAreExclusive = false;
BABYLON.Rotate2dBlock.comments = "";
// BABYLON.Rotate2dBlock.name = undefined;
BABYLON.Rotate2dBlock.uniqueId = 40;
BABYLON.Rotate2dBlock.prototype.constructor = function () {};
BABYLON.Rotate2dBlock.prototype.getClassName = function () {};
// BABYLON.Rotate2dBlock.prototype.input = undefined;
// BABYLON.Rotate2dBlock.prototype.angle = undefined;
// BABYLON.Rotate2dBlock.prototype.output = undefined;
BABYLON.Rotate2dBlock.prototype.autoConfigure = function () {};
// BABYLON.Rotate2dBlock.prototype.isUnique = undefined;
// BABYLON.Rotate2dBlock.prototype.isFinalMerger = undefined;
// BABYLON.Rotate2dBlock.prototype.isInput = undefined;
// BABYLON.Rotate2dBlock.prototype.buildId = undefined;
// BABYLON.Rotate2dBlock.prototype.target = undefined;
// BABYLON.Rotate2dBlock.prototype.inputs = undefined;
// BABYLON.Rotate2dBlock.prototype.outputs = undefined;
BABYLON.Rotate2dBlock.prototype.getInputByName = function () {};
BABYLON.Rotate2dBlock.prototype.getOutputByName = function () {};
BABYLON.Rotate2dBlock.prototype.initialize = function () {};
BABYLON.Rotate2dBlock.prototype.bind = function () {};
BABYLON.Rotate2dBlock.prototype.registerInput = function () {};
BABYLON.Rotate2dBlock.prototype.registerOutput = function () {};
BABYLON.Rotate2dBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.Rotate2dBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.Rotate2dBlock.prototype.getSiblingOutput = function () {};
BABYLON.Rotate2dBlock.prototype.connectTo = function () {};
BABYLON.Rotate2dBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.Rotate2dBlock.prototype.provideFallbacks = function () {};
BABYLON.Rotate2dBlock.prototype.initializeDefines = function () {};
BABYLON.Rotate2dBlock.prototype.prepareDefines = function () {};
BABYLON.Rotate2dBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.Rotate2dBlock.prototype.isReady = function () {};
BABYLON.Rotate2dBlock.prototype.build = function () {};
BABYLON.Rotate2dBlock.prototype.clone = function () {};
BABYLON.Rotate2dBlock.prototype.serialize = function () {};
BABYLON.Rotate2dBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ReflectBlock = function () {}
BABYLON.ReflectBlock.inputsAreExclusive = false;
BABYLON.ReflectBlock.comments = "";
// BABYLON.ReflectBlock.name = undefined;
BABYLON.ReflectBlock.uniqueId = 41;
BABYLON.ReflectBlock.prototype.constructor = function () {};
BABYLON.ReflectBlock.prototype.getClassName = function () {};
// BABYLON.ReflectBlock.prototype.incident = undefined;
// BABYLON.ReflectBlock.prototype.normal = undefined;
// BABYLON.ReflectBlock.prototype.output = undefined;
// BABYLON.ReflectBlock.prototype.isUnique = undefined;
// BABYLON.ReflectBlock.prototype.isFinalMerger = undefined;
// BABYLON.ReflectBlock.prototype.isInput = undefined;
// BABYLON.ReflectBlock.prototype.buildId = undefined;
// BABYLON.ReflectBlock.prototype.target = undefined;
// BABYLON.ReflectBlock.prototype.inputs = undefined;
// BABYLON.ReflectBlock.prototype.outputs = undefined;
BABYLON.ReflectBlock.prototype.getInputByName = function () {};
BABYLON.ReflectBlock.prototype.getOutputByName = function () {};
BABYLON.ReflectBlock.prototype.initialize = function () {};
BABYLON.ReflectBlock.prototype.bind = function () {};
BABYLON.ReflectBlock.prototype.registerInput = function () {};
BABYLON.ReflectBlock.prototype.registerOutput = function () {};
BABYLON.ReflectBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ReflectBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ReflectBlock.prototype.getSiblingOutput = function () {};
BABYLON.ReflectBlock.prototype.connectTo = function () {};
BABYLON.ReflectBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ReflectBlock.prototype.provideFallbacks = function () {};
BABYLON.ReflectBlock.prototype.initializeDefines = function () {};
BABYLON.ReflectBlock.prototype.prepareDefines = function () {};
BABYLON.ReflectBlock.prototype.autoConfigure = function () {};
BABYLON.ReflectBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ReflectBlock.prototype.isReady = function () {};
BABYLON.ReflectBlock.prototype.build = function () {};
BABYLON.ReflectBlock.prototype.clone = function () {};
BABYLON.ReflectBlock.prototype.serialize = function () {};
BABYLON.ReflectBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.RefractBlock = function () {}
BABYLON.RefractBlock.inputsAreExclusive = false;
BABYLON.RefractBlock.comments = "";
// BABYLON.RefractBlock.name = undefined;
BABYLON.RefractBlock.uniqueId = 42;
BABYLON.RefractBlock.prototype.constructor = function () {};
BABYLON.RefractBlock.prototype.getClassName = function () {};
// BABYLON.RefractBlock.prototype.incident = undefined;
// BABYLON.RefractBlock.prototype.normal = undefined;
// BABYLON.RefractBlock.prototype.ior = undefined;
// BABYLON.RefractBlock.prototype.output = undefined;
// BABYLON.RefractBlock.prototype.isUnique = undefined;
// BABYLON.RefractBlock.prototype.isFinalMerger = undefined;
// BABYLON.RefractBlock.prototype.isInput = undefined;
// BABYLON.RefractBlock.prototype.buildId = undefined;
// BABYLON.RefractBlock.prototype.target = undefined;
// BABYLON.RefractBlock.prototype.inputs = undefined;
// BABYLON.RefractBlock.prototype.outputs = undefined;
BABYLON.RefractBlock.prototype.getInputByName = function () {};
BABYLON.RefractBlock.prototype.getOutputByName = function () {};
BABYLON.RefractBlock.prototype.initialize = function () {};
BABYLON.RefractBlock.prototype.bind = function () {};
BABYLON.RefractBlock.prototype.registerInput = function () {};
BABYLON.RefractBlock.prototype.registerOutput = function () {};
BABYLON.RefractBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.RefractBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.RefractBlock.prototype.getSiblingOutput = function () {};
BABYLON.RefractBlock.prototype.connectTo = function () {};
BABYLON.RefractBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.RefractBlock.prototype.provideFallbacks = function () {};
BABYLON.RefractBlock.prototype.initializeDefines = function () {};
BABYLON.RefractBlock.prototype.prepareDefines = function () {};
BABYLON.RefractBlock.prototype.autoConfigure = function () {};
BABYLON.RefractBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.RefractBlock.prototype.isReady = function () {};
BABYLON.RefractBlock.prototype.build = function () {};
BABYLON.RefractBlock.prototype.clone = function () {};
BABYLON.RefractBlock.prototype.serialize = function () {};
BABYLON.RefractBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.DesaturateBlock = function () {}
BABYLON.DesaturateBlock.inputsAreExclusive = false;
BABYLON.DesaturateBlock.comments = "";
// BABYLON.DesaturateBlock.name = undefined;
BABYLON.DesaturateBlock.uniqueId = 43;
BABYLON.DesaturateBlock.prototype.constructor = function () {};
BABYLON.DesaturateBlock.prototype.getClassName = function () {};
// BABYLON.DesaturateBlock.prototype.color = undefined;
// BABYLON.DesaturateBlock.prototype.level = undefined;
// BABYLON.DesaturateBlock.prototype.output = undefined;
// BABYLON.DesaturateBlock.prototype.isUnique = undefined;
// BABYLON.DesaturateBlock.prototype.isFinalMerger = undefined;
// BABYLON.DesaturateBlock.prototype.isInput = undefined;
// BABYLON.DesaturateBlock.prototype.buildId = undefined;
// BABYLON.DesaturateBlock.prototype.target = undefined;
// BABYLON.DesaturateBlock.prototype.inputs = undefined;
// BABYLON.DesaturateBlock.prototype.outputs = undefined;
BABYLON.DesaturateBlock.prototype.getInputByName = function () {};
BABYLON.DesaturateBlock.prototype.getOutputByName = function () {};
BABYLON.DesaturateBlock.prototype.initialize = function () {};
BABYLON.DesaturateBlock.prototype.bind = function () {};
BABYLON.DesaturateBlock.prototype.registerInput = function () {};
BABYLON.DesaturateBlock.prototype.registerOutput = function () {};
BABYLON.DesaturateBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.DesaturateBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.DesaturateBlock.prototype.getSiblingOutput = function () {};
BABYLON.DesaturateBlock.prototype.connectTo = function () {};
BABYLON.DesaturateBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.DesaturateBlock.prototype.provideFallbacks = function () {};
BABYLON.DesaturateBlock.prototype.initializeDefines = function () {};
BABYLON.DesaturateBlock.prototype.prepareDefines = function () {};
BABYLON.DesaturateBlock.prototype.autoConfigure = function () {};
BABYLON.DesaturateBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.DesaturateBlock.prototype.isReady = function () {};
BABYLON.DesaturateBlock.prototype.build = function () {};
BABYLON.DesaturateBlock.prototype.clone = function () {};
BABYLON.DesaturateBlock.prototype.serialize = function () {};
BABYLON.DesaturateBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.NodeMaterialOptimizer = function () {}
BABYLON.NodeMaterialOptimizer.prototype.optimize = function () {};


/** @constructor */
BABYLON.VertexOutputBlock = function () {}
BABYLON.VertexOutputBlock.inputsAreExclusive = false;
BABYLON.VertexOutputBlock.comments = "";
// BABYLON.VertexOutputBlock.name = undefined;
BABYLON.VertexOutputBlock.uniqueId = 44;
BABYLON.VertexOutputBlock.prototype.constructor = function () {};
BABYLON.VertexOutputBlock.prototype.getClassName = function () {};
// BABYLON.VertexOutputBlock.prototype.vector = undefined;
// BABYLON.VertexOutputBlock.prototype.isUnique = undefined;
// BABYLON.VertexOutputBlock.prototype.isFinalMerger = undefined;
// BABYLON.VertexOutputBlock.prototype.isInput = undefined;
// BABYLON.VertexOutputBlock.prototype.buildId = undefined;
// BABYLON.VertexOutputBlock.prototype.target = undefined;
// BABYLON.VertexOutputBlock.prototype.inputs = undefined;
// BABYLON.VertexOutputBlock.prototype.outputs = undefined;
BABYLON.VertexOutputBlock.prototype.getInputByName = function () {};
BABYLON.VertexOutputBlock.prototype.getOutputByName = function () {};
BABYLON.VertexOutputBlock.prototype.initialize = function () {};
BABYLON.VertexOutputBlock.prototype.bind = function () {};
BABYLON.VertexOutputBlock.prototype.registerInput = function () {};
BABYLON.VertexOutputBlock.prototype.registerOutput = function () {};
BABYLON.VertexOutputBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.VertexOutputBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.VertexOutputBlock.prototype.getSiblingOutput = function () {};
BABYLON.VertexOutputBlock.prototype.connectTo = function () {};
BABYLON.VertexOutputBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.VertexOutputBlock.prototype.provideFallbacks = function () {};
BABYLON.VertexOutputBlock.prototype.initializeDefines = function () {};
BABYLON.VertexOutputBlock.prototype.prepareDefines = function () {};
BABYLON.VertexOutputBlock.prototype.autoConfigure = function () {};
BABYLON.VertexOutputBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.VertexOutputBlock.prototype.isReady = function () {};
BABYLON.VertexOutputBlock.prototype.build = function () {};
BABYLON.VertexOutputBlock.prototype.clone = function () {};
BABYLON.VertexOutputBlock.prototype.serialize = function () {};
BABYLON.VertexOutputBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.BonesBlock = function () {}
BABYLON.BonesBlock.inputsAreExclusive = false;
BABYLON.BonesBlock.comments = "";
// BABYLON.BonesBlock.name = undefined;
BABYLON.BonesBlock.uniqueId = 45;
BABYLON.BonesBlock.prototype.constructor = function () {};
BABYLON.BonesBlock.prototype.initialize = function () {};
BABYLON.BonesBlock.prototype.getClassName = function () {};
// BABYLON.BonesBlock.prototype.matricesIndices = undefined;
// BABYLON.BonesBlock.prototype.matricesWeights = undefined;
// BABYLON.BonesBlock.prototype.matricesIndicesExtra = undefined;
// BABYLON.BonesBlock.prototype.matricesWeightsExtra = undefined;
// BABYLON.BonesBlock.prototype.world = undefined;
// BABYLON.BonesBlock.prototype.output = undefined;
BABYLON.BonesBlock.prototype.autoConfigure = function () {};
BABYLON.BonesBlock.prototype.provideFallbacks = function () {};
BABYLON.BonesBlock.prototype.bind = function () {};
BABYLON.BonesBlock.prototype.prepareDefines = function () {};
// BABYLON.BonesBlock.prototype.isUnique = undefined;
// BABYLON.BonesBlock.prototype.isFinalMerger = undefined;
// BABYLON.BonesBlock.prototype.isInput = undefined;
// BABYLON.BonesBlock.prototype.buildId = undefined;
// BABYLON.BonesBlock.prototype.target = undefined;
// BABYLON.BonesBlock.prototype.inputs = undefined;
// BABYLON.BonesBlock.prototype.outputs = undefined;
BABYLON.BonesBlock.prototype.getInputByName = function () {};
BABYLON.BonesBlock.prototype.getOutputByName = function () {};
BABYLON.BonesBlock.prototype.registerInput = function () {};
BABYLON.BonesBlock.prototype.registerOutput = function () {};
BABYLON.BonesBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.BonesBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.BonesBlock.prototype.getSiblingOutput = function () {};
BABYLON.BonesBlock.prototype.connectTo = function () {};
BABYLON.BonesBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.BonesBlock.prototype.initializeDefines = function () {};
BABYLON.BonesBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.BonesBlock.prototype.isReady = function () {};
BABYLON.BonesBlock.prototype.build = function () {};
BABYLON.BonesBlock.prototype.clone = function () {};
BABYLON.BonesBlock.prototype.serialize = function () {};
BABYLON.BonesBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.InstancesBlock = function () {}
BABYLON.InstancesBlock.inputsAreExclusive = false;
BABYLON.InstancesBlock.comments = "";
// BABYLON.InstancesBlock.name = undefined;
BABYLON.InstancesBlock.uniqueId = 46;
BABYLON.InstancesBlock.prototype.constructor = function () {};
BABYLON.InstancesBlock.prototype.getClassName = function () {};
// BABYLON.InstancesBlock.prototype.world0 = undefined;
// BABYLON.InstancesBlock.prototype.world1 = undefined;
// BABYLON.InstancesBlock.prototype.world2 = undefined;
// BABYLON.InstancesBlock.prototype.world3 = undefined;
// BABYLON.InstancesBlock.prototype.world = undefined;
// BABYLON.InstancesBlock.prototype.output = undefined;
// BABYLON.InstancesBlock.prototype.instanceID = undefined;
BABYLON.InstancesBlock.prototype.autoConfigure = function () {};
BABYLON.InstancesBlock.prototype.prepareDefines = function () {};
// BABYLON.InstancesBlock.prototype.isUnique = undefined;
// BABYLON.InstancesBlock.prototype.isFinalMerger = undefined;
// BABYLON.InstancesBlock.prototype.isInput = undefined;
// BABYLON.InstancesBlock.prototype.buildId = undefined;
// BABYLON.InstancesBlock.prototype.target = undefined;
// BABYLON.InstancesBlock.prototype.inputs = undefined;
// BABYLON.InstancesBlock.prototype.outputs = undefined;
BABYLON.InstancesBlock.prototype.getInputByName = function () {};
BABYLON.InstancesBlock.prototype.getOutputByName = function () {};
BABYLON.InstancesBlock.prototype.initialize = function () {};
BABYLON.InstancesBlock.prototype.bind = function () {};
BABYLON.InstancesBlock.prototype.registerInput = function () {};
BABYLON.InstancesBlock.prototype.registerOutput = function () {};
BABYLON.InstancesBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.InstancesBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.InstancesBlock.prototype.getSiblingOutput = function () {};
BABYLON.InstancesBlock.prototype.connectTo = function () {};
BABYLON.InstancesBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.InstancesBlock.prototype.provideFallbacks = function () {};
BABYLON.InstancesBlock.prototype.initializeDefines = function () {};
BABYLON.InstancesBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.InstancesBlock.prototype.isReady = function () {};
BABYLON.InstancesBlock.prototype.build = function () {};
BABYLON.InstancesBlock.prototype.clone = function () {};
BABYLON.InstancesBlock.prototype.serialize = function () {};
BABYLON.InstancesBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.MorphTargetsBlock = function () {}
BABYLON.MorphTargetsBlock.inputsAreExclusive = false;
BABYLON.MorphTargetsBlock.comments = "";
// BABYLON.MorphTargetsBlock.name = undefined;
BABYLON.MorphTargetsBlock.uniqueId = 47;
BABYLON.MorphTargetsBlock.prototype.constructor = function () {};
BABYLON.MorphTargetsBlock.prototype.getClassName = function () {};
// BABYLON.MorphTargetsBlock.prototype.position = undefined;
// BABYLON.MorphTargetsBlock.prototype.normal = undefined;
// BABYLON.MorphTargetsBlock.prototype.tangent = undefined;
// BABYLON.MorphTargetsBlock.prototype.uv = undefined;
// BABYLON.MorphTargetsBlock.prototype.positionOutput = undefined;
// BABYLON.MorphTargetsBlock.prototype.normalOutput = undefined;
// BABYLON.MorphTargetsBlock.prototype.tangentOutput = undefined;
// BABYLON.MorphTargetsBlock.prototype.uvOutput = undefined;
BABYLON.MorphTargetsBlock.prototype.initialize = function () {};
BABYLON.MorphTargetsBlock.prototype.autoConfigure = function () {};
BABYLON.MorphTargetsBlock.prototype.prepareDefines = function () {};
BABYLON.MorphTargetsBlock.prototype.bind = function () {};
BABYLON.MorphTargetsBlock.prototype.replaceRepeatableContent = function () {};
// BABYLON.MorphTargetsBlock.prototype.isUnique = undefined;
// BABYLON.MorphTargetsBlock.prototype.isFinalMerger = undefined;
// BABYLON.MorphTargetsBlock.prototype.isInput = undefined;
// BABYLON.MorphTargetsBlock.prototype.buildId = undefined;
// BABYLON.MorphTargetsBlock.prototype.target = undefined;
// BABYLON.MorphTargetsBlock.prototype.inputs = undefined;
// BABYLON.MorphTargetsBlock.prototype.outputs = undefined;
BABYLON.MorphTargetsBlock.prototype.getInputByName = function () {};
BABYLON.MorphTargetsBlock.prototype.getOutputByName = function () {};
BABYLON.MorphTargetsBlock.prototype.registerInput = function () {};
BABYLON.MorphTargetsBlock.prototype.registerOutput = function () {};
BABYLON.MorphTargetsBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.MorphTargetsBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.MorphTargetsBlock.prototype.getSiblingOutput = function () {};
BABYLON.MorphTargetsBlock.prototype.connectTo = function () {};
BABYLON.MorphTargetsBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.MorphTargetsBlock.prototype.provideFallbacks = function () {};
BABYLON.MorphTargetsBlock.prototype.initializeDefines = function () {};
BABYLON.MorphTargetsBlock.prototype.isReady = function () {};
BABYLON.MorphTargetsBlock.prototype.build = function () {};
BABYLON.MorphTargetsBlock.prototype.clone = function () {};
BABYLON.MorphTargetsBlock.prototype.serialize = function () {};
BABYLON.MorphTargetsBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.LightInformationBlock = function () {}
BABYLON.LightInformationBlock.inputsAreExclusive = false;
BABYLON.LightInformationBlock.comments = "";
// BABYLON.LightInformationBlock.name = undefined;
BABYLON.LightInformationBlock.uniqueId = 48;
BABYLON.LightInformationBlock.prototype.constructor = function () {};
BABYLON.LightInformationBlock.prototype.getClassName = function () {};
// BABYLON.LightInformationBlock.prototype.worldPosition = undefined;
// BABYLON.LightInformationBlock.prototype.direction = undefined;
// BABYLON.LightInformationBlock.prototype.color = undefined;
// BABYLON.LightInformationBlock.prototype.intensity = undefined;
BABYLON.LightInformationBlock.prototype.bind = function () {};
BABYLON.LightInformationBlock.prototype.prepareDefines = function () {};
BABYLON.LightInformationBlock.prototype.serialize = function () {};
// BABYLON.LightInformationBlock.prototype.isUnique = undefined;
// BABYLON.LightInformationBlock.prototype.isFinalMerger = undefined;
// BABYLON.LightInformationBlock.prototype.isInput = undefined;
// BABYLON.LightInformationBlock.prototype.buildId = undefined;
// BABYLON.LightInformationBlock.prototype.target = undefined;
// BABYLON.LightInformationBlock.prototype.inputs = undefined;
// BABYLON.LightInformationBlock.prototype.outputs = undefined;
BABYLON.LightInformationBlock.prototype.getInputByName = function () {};
BABYLON.LightInformationBlock.prototype.getOutputByName = function () {};
BABYLON.LightInformationBlock.prototype.initialize = function () {};
BABYLON.LightInformationBlock.prototype.registerInput = function () {};
BABYLON.LightInformationBlock.prototype.registerOutput = function () {};
BABYLON.LightInformationBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.LightInformationBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.LightInformationBlock.prototype.getSiblingOutput = function () {};
BABYLON.LightInformationBlock.prototype.connectTo = function () {};
BABYLON.LightInformationBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.LightInformationBlock.prototype.provideFallbacks = function () {};
BABYLON.LightInformationBlock.prototype.initializeDefines = function () {};
BABYLON.LightInformationBlock.prototype.autoConfigure = function () {};
BABYLON.LightInformationBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.LightInformationBlock.prototype.isReady = function () {};
BABYLON.LightInformationBlock.prototype.build = function () {};
BABYLON.LightInformationBlock.prototype.clone = function () {};
BABYLON.LightInformationBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.FragmentOutputBlock = function () {}
BABYLON.FragmentOutputBlock.inputsAreExclusive = false;
BABYLON.FragmentOutputBlock.comments = "";
// BABYLON.FragmentOutputBlock.name = undefined;
BABYLON.FragmentOutputBlock.uniqueId = 49;
BABYLON.FragmentOutputBlock.prototype.constructor = function () {};
BABYLON.FragmentOutputBlock.prototype.getClassName = function () {};
// BABYLON.FragmentOutputBlock.prototype.rgba = undefined;
// BABYLON.FragmentOutputBlock.prototype.rgb = undefined;
// BABYLON.FragmentOutputBlock.prototype.a = undefined;
// BABYLON.FragmentOutputBlock.prototype.isUnique = undefined;
// BABYLON.FragmentOutputBlock.prototype.isFinalMerger = undefined;
// BABYLON.FragmentOutputBlock.prototype.isInput = undefined;
// BABYLON.FragmentOutputBlock.prototype.buildId = undefined;
// BABYLON.FragmentOutputBlock.prototype.target = undefined;
// BABYLON.FragmentOutputBlock.prototype.inputs = undefined;
// BABYLON.FragmentOutputBlock.prototype.outputs = undefined;
BABYLON.FragmentOutputBlock.prototype.getInputByName = function () {};
BABYLON.FragmentOutputBlock.prototype.getOutputByName = function () {};
BABYLON.FragmentOutputBlock.prototype.initialize = function () {};
BABYLON.FragmentOutputBlock.prototype.bind = function () {};
BABYLON.FragmentOutputBlock.prototype.registerInput = function () {};
BABYLON.FragmentOutputBlock.prototype.registerOutput = function () {};
BABYLON.FragmentOutputBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.FragmentOutputBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.FragmentOutputBlock.prototype.getSiblingOutput = function () {};
BABYLON.FragmentOutputBlock.prototype.connectTo = function () {};
BABYLON.FragmentOutputBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.FragmentOutputBlock.prototype.provideFallbacks = function () {};
BABYLON.FragmentOutputBlock.prototype.initializeDefines = function () {};
BABYLON.FragmentOutputBlock.prototype.prepareDefines = function () {};
BABYLON.FragmentOutputBlock.prototype.autoConfigure = function () {};
BABYLON.FragmentOutputBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.FragmentOutputBlock.prototype.isReady = function () {};
BABYLON.FragmentOutputBlock.prototype.build = function () {};
BABYLON.FragmentOutputBlock.prototype.clone = function () {};
BABYLON.FragmentOutputBlock.prototype.serialize = function () {};
BABYLON.FragmentOutputBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ImageProcessingBlock = function () {}
BABYLON.ImageProcessingBlock.inputsAreExclusive = false;
BABYLON.ImageProcessingBlock.comments = "";
// BABYLON.ImageProcessingBlock.name = undefined;
BABYLON.ImageProcessingBlock.uniqueId = 50;
BABYLON.ImageProcessingBlock.prototype.constructor = function () {};
BABYLON.ImageProcessingBlock.prototype.getClassName = function () {};
// BABYLON.ImageProcessingBlock.prototype.color = undefined;
// BABYLON.ImageProcessingBlock.prototype.output = undefined;
BABYLON.ImageProcessingBlock.prototype.initialize = function () {};
BABYLON.ImageProcessingBlock.prototype.isReady = function () {};
BABYLON.ImageProcessingBlock.prototype.prepareDefines = function () {};
BABYLON.ImageProcessingBlock.prototype.bind = function () {};
// BABYLON.ImageProcessingBlock.prototype.isUnique = undefined;
// BABYLON.ImageProcessingBlock.prototype.isFinalMerger = undefined;
// BABYLON.ImageProcessingBlock.prototype.isInput = undefined;
// BABYLON.ImageProcessingBlock.prototype.buildId = undefined;
// BABYLON.ImageProcessingBlock.prototype.target = undefined;
// BABYLON.ImageProcessingBlock.prototype.inputs = undefined;
// BABYLON.ImageProcessingBlock.prototype.outputs = undefined;
BABYLON.ImageProcessingBlock.prototype.getInputByName = function () {};
BABYLON.ImageProcessingBlock.prototype.getOutputByName = function () {};
BABYLON.ImageProcessingBlock.prototype.registerInput = function () {};
BABYLON.ImageProcessingBlock.prototype.registerOutput = function () {};
BABYLON.ImageProcessingBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ImageProcessingBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ImageProcessingBlock.prototype.getSiblingOutput = function () {};
BABYLON.ImageProcessingBlock.prototype.connectTo = function () {};
BABYLON.ImageProcessingBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ImageProcessingBlock.prototype.provideFallbacks = function () {};
BABYLON.ImageProcessingBlock.prototype.initializeDefines = function () {};
BABYLON.ImageProcessingBlock.prototype.autoConfigure = function () {};
BABYLON.ImageProcessingBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ImageProcessingBlock.prototype.build = function () {};
BABYLON.ImageProcessingBlock.prototype.clone = function () {};
BABYLON.ImageProcessingBlock.prototype.serialize = function () {};
BABYLON.ImageProcessingBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.PerturbNormalBlock = function () {}
BABYLON.PerturbNormalBlock.inputsAreExclusive = false;
BABYLON.PerturbNormalBlock.comments = "";
// BABYLON.PerturbNormalBlock.name = undefined;
BABYLON.PerturbNormalBlock.uniqueId = 51;
BABYLON.PerturbNormalBlock.invertX = false;
BABYLON.PerturbNormalBlock.invertY = false;
BABYLON.PerturbNormalBlock.prototype.constructor = function () {};
BABYLON.PerturbNormalBlock.prototype.getClassName = function () {};
// BABYLON.PerturbNormalBlock.prototype.worldPosition = undefined;
// BABYLON.PerturbNormalBlock.prototype.worldNormal = undefined;
// BABYLON.PerturbNormalBlock.prototype.worldTangent = undefined;
// BABYLON.PerturbNormalBlock.prototype.uv = undefined;
// BABYLON.PerturbNormalBlock.prototype.normalMapColor = undefined;
// BABYLON.PerturbNormalBlock.prototype.strength = undefined;
// BABYLON.PerturbNormalBlock.prototype.output = undefined;
BABYLON.PerturbNormalBlock.prototype.prepareDefines = function () {};
BABYLON.PerturbNormalBlock.prototype.bind = function () {};
BABYLON.PerturbNormalBlock.prototype.autoConfigure = function () {};
BABYLON.PerturbNormalBlock.prototype.serialize = function () {};
// BABYLON.PerturbNormalBlock.prototype.isUnique = undefined;
// BABYLON.PerturbNormalBlock.prototype.isFinalMerger = undefined;
// BABYLON.PerturbNormalBlock.prototype.isInput = undefined;
// BABYLON.PerturbNormalBlock.prototype.buildId = undefined;
// BABYLON.PerturbNormalBlock.prototype.target = undefined;
// BABYLON.PerturbNormalBlock.prototype.inputs = undefined;
// BABYLON.PerturbNormalBlock.prototype.outputs = undefined;
BABYLON.PerturbNormalBlock.prototype.getInputByName = function () {};
BABYLON.PerturbNormalBlock.prototype.getOutputByName = function () {};
BABYLON.PerturbNormalBlock.prototype.initialize = function () {};
BABYLON.PerturbNormalBlock.prototype.registerInput = function () {};
BABYLON.PerturbNormalBlock.prototype.registerOutput = function () {};
BABYLON.PerturbNormalBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.PerturbNormalBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.PerturbNormalBlock.prototype.getSiblingOutput = function () {};
BABYLON.PerturbNormalBlock.prototype.connectTo = function () {};
BABYLON.PerturbNormalBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.PerturbNormalBlock.prototype.provideFallbacks = function () {};
BABYLON.PerturbNormalBlock.prototype.initializeDefines = function () {};
BABYLON.PerturbNormalBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.PerturbNormalBlock.prototype.isReady = function () {};
BABYLON.PerturbNormalBlock.prototype.build = function () {};
BABYLON.PerturbNormalBlock.prototype.clone = function () {};
BABYLON.PerturbNormalBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.DiscardBlock = function () {}
BABYLON.DiscardBlock.inputsAreExclusive = false;
BABYLON.DiscardBlock.comments = "";
// BABYLON.DiscardBlock.name = undefined;
BABYLON.DiscardBlock.uniqueId = 52;
BABYLON.DiscardBlock.prototype.constructor = function () {};
BABYLON.DiscardBlock.prototype.getClassName = function () {};
// BABYLON.DiscardBlock.prototype.value = undefined;
// BABYLON.DiscardBlock.prototype.cutoff = undefined;
// BABYLON.DiscardBlock.prototype.isUnique = undefined;
// BABYLON.DiscardBlock.prototype.isFinalMerger = undefined;
// BABYLON.DiscardBlock.prototype.isInput = undefined;
// BABYLON.DiscardBlock.prototype.buildId = undefined;
// BABYLON.DiscardBlock.prototype.target = undefined;
// BABYLON.DiscardBlock.prototype.inputs = undefined;
// BABYLON.DiscardBlock.prototype.outputs = undefined;
BABYLON.DiscardBlock.prototype.getInputByName = function () {};
BABYLON.DiscardBlock.prototype.getOutputByName = function () {};
BABYLON.DiscardBlock.prototype.initialize = function () {};
BABYLON.DiscardBlock.prototype.bind = function () {};
BABYLON.DiscardBlock.prototype.registerInput = function () {};
BABYLON.DiscardBlock.prototype.registerOutput = function () {};
BABYLON.DiscardBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.DiscardBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.DiscardBlock.prototype.getSiblingOutput = function () {};
BABYLON.DiscardBlock.prototype.connectTo = function () {};
BABYLON.DiscardBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.DiscardBlock.prototype.provideFallbacks = function () {};
BABYLON.DiscardBlock.prototype.initializeDefines = function () {};
BABYLON.DiscardBlock.prototype.prepareDefines = function () {};
BABYLON.DiscardBlock.prototype.autoConfigure = function () {};
BABYLON.DiscardBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.DiscardBlock.prototype.isReady = function () {};
BABYLON.DiscardBlock.prototype.build = function () {};
BABYLON.DiscardBlock.prototype.clone = function () {};
BABYLON.DiscardBlock.prototype.serialize = function () {};
BABYLON.DiscardBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.FrontFacingBlock = function () {}
BABYLON.FrontFacingBlock.inputsAreExclusive = false;
BABYLON.FrontFacingBlock.comments = "";
// BABYLON.FrontFacingBlock.name = undefined;
BABYLON.FrontFacingBlock.uniqueId = 53;
BABYLON.FrontFacingBlock.prototype.constructor = function () {};
BABYLON.FrontFacingBlock.prototype.getClassName = function () {};
// BABYLON.FrontFacingBlock.prototype.output = undefined;
// BABYLON.FrontFacingBlock.prototype.isUnique = undefined;
// BABYLON.FrontFacingBlock.prototype.isFinalMerger = undefined;
// BABYLON.FrontFacingBlock.prototype.isInput = undefined;
// BABYLON.FrontFacingBlock.prototype.buildId = undefined;
// BABYLON.FrontFacingBlock.prototype.target = undefined;
// BABYLON.FrontFacingBlock.prototype.inputs = undefined;
// BABYLON.FrontFacingBlock.prototype.outputs = undefined;
BABYLON.FrontFacingBlock.prototype.getInputByName = function () {};
BABYLON.FrontFacingBlock.prototype.getOutputByName = function () {};
BABYLON.FrontFacingBlock.prototype.initialize = function () {};
BABYLON.FrontFacingBlock.prototype.bind = function () {};
BABYLON.FrontFacingBlock.prototype.registerInput = function () {};
BABYLON.FrontFacingBlock.prototype.registerOutput = function () {};
BABYLON.FrontFacingBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.FrontFacingBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.FrontFacingBlock.prototype.getSiblingOutput = function () {};
BABYLON.FrontFacingBlock.prototype.connectTo = function () {};
BABYLON.FrontFacingBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.FrontFacingBlock.prototype.provideFallbacks = function () {};
BABYLON.FrontFacingBlock.prototype.initializeDefines = function () {};
BABYLON.FrontFacingBlock.prototype.prepareDefines = function () {};
BABYLON.FrontFacingBlock.prototype.autoConfigure = function () {};
BABYLON.FrontFacingBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.FrontFacingBlock.prototype.isReady = function () {};
BABYLON.FrontFacingBlock.prototype.build = function () {};
BABYLON.FrontFacingBlock.prototype.clone = function () {};
BABYLON.FrontFacingBlock.prototype.serialize = function () {};
BABYLON.FrontFacingBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.DerivativeBlock = function () {}
BABYLON.DerivativeBlock.inputsAreExclusive = false;
BABYLON.DerivativeBlock.comments = "";
// BABYLON.DerivativeBlock.name = undefined;
BABYLON.DerivativeBlock.uniqueId = 54;
BABYLON.DerivativeBlock.prototype.constructor = function () {};
BABYLON.DerivativeBlock.prototype.getClassName = function () {};
// BABYLON.DerivativeBlock.prototype.input = undefined;
// BABYLON.DerivativeBlock.prototype.dx = undefined;
// BABYLON.DerivativeBlock.prototype.dy = undefined;
// BABYLON.DerivativeBlock.prototype.isUnique = undefined;
// BABYLON.DerivativeBlock.prototype.isFinalMerger = undefined;
// BABYLON.DerivativeBlock.prototype.isInput = undefined;
// BABYLON.DerivativeBlock.prototype.buildId = undefined;
// BABYLON.DerivativeBlock.prototype.target = undefined;
// BABYLON.DerivativeBlock.prototype.inputs = undefined;
// BABYLON.DerivativeBlock.prototype.outputs = undefined;
BABYLON.DerivativeBlock.prototype.getInputByName = function () {};
BABYLON.DerivativeBlock.prototype.getOutputByName = function () {};
BABYLON.DerivativeBlock.prototype.initialize = function () {};
BABYLON.DerivativeBlock.prototype.bind = function () {};
BABYLON.DerivativeBlock.prototype.registerInput = function () {};
BABYLON.DerivativeBlock.prototype.registerOutput = function () {};
BABYLON.DerivativeBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.DerivativeBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.DerivativeBlock.prototype.getSiblingOutput = function () {};
BABYLON.DerivativeBlock.prototype.connectTo = function () {};
BABYLON.DerivativeBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.DerivativeBlock.prototype.provideFallbacks = function () {};
BABYLON.DerivativeBlock.prototype.initializeDefines = function () {};
BABYLON.DerivativeBlock.prototype.prepareDefines = function () {};
BABYLON.DerivativeBlock.prototype.autoConfigure = function () {};
BABYLON.DerivativeBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.DerivativeBlock.prototype.isReady = function () {};
BABYLON.DerivativeBlock.prototype.build = function () {};
BABYLON.DerivativeBlock.prototype.clone = function () {};
BABYLON.DerivativeBlock.prototype.serialize = function () {};
BABYLON.DerivativeBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.FogBlock = function () {}
BABYLON.FogBlock.inputsAreExclusive = false;
BABYLON.FogBlock.comments = "";
// BABYLON.FogBlock.name = undefined;
BABYLON.FogBlock.uniqueId = 55;
BABYLON.FogBlock.prototype.constructor = function () {};
BABYLON.FogBlock.prototype.getClassName = function () {};
// BABYLON.FogBlock.prototype.worldPosition = undefined;
// BABYLON.FogBlock.prototype.view = undefined;
// BABYLON.FogBlock.prototype.input = undefined;
// BABYLON.FogBlock.prototype.fogColor = undefined;
// BABYLON.FogBlock.prototype.output = undefined;
BABYLON.FogBlock.prototype.autoConfigure = function () {};
BABYLON.FogBlock.prototype.prepareDefines = function () {};
BABYLON.FogBlock.prototype.bind = function () {};
// BABYLON.FogBlock.prototype.isUnique = undefined;
// BABYLON.FogBlock.prototype.isFinalMerger = undefined;
// BABYLON.FogBlock.prototype.isInput = undefined;
// BABYLON.FogBlock.prototype.buildId = undefined;
// BABYLON.FogBlock.prototype.target = undefined;
// BABYLON.FogBlock.prototype.inputs = undefined;
// BABYLON.FogBlock.prototype.outputs = undefined;
BABYLON.FogBlock.prototype.getInputByName = function () {};
BABYLON.FogBlock.prototype.getOutputByName = function () {};
BABYLON.FogBlock.prototype.initialize = function () {};
BABYLON.FogBlock.prototype.registerInput = function () {};
BABYLON.FogBlock.prototype.registerOutput = function () {};
BABYLON.FogBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.FogBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.FogBlock.prototype.getSiblingOutput = function () {};
BABYLON.FogBlock.prototype.connectTo = function () {};
BABYLON.FogBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.FogBlock.prototype.provideFallbacks = function () {};
BABYLON.FogBlock.prototype.initializeDefines = function () {};
BABYLON.FogBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.FogBlock.prototype.isReady = function () {};
BABYLON.FogBlock.prototype.build = function () {};
BABYLON.FogBlock.prototype.clone = function () {};
BABYLON.FogBlock.prototype.serialize = function () {};
BABYLON.FogBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.LightBlock = function () {}
BABYLON.LightBlock.inputsAreExclusive = false;
BABYLON.LightBlock.comments = "";
// BABYLON.LightBlock.name = undefined;
BABYLON.LightBlock.uniqueId = 56;
BABYLON.LightBlock.prototype.constructor = function () {};
BABYLON.LightBlock.prototype.getClassName = function () {};
// BABYLON.LightBlock.prototype.worldPosition = undefined;
// BABYLON.LightBlock.prototype.worldNormal = undefined;
// BABYLON.LightBlock.prototype.cameraPosition = undefined;
// BABYLON.LightBlock.prototype.glossiness = undefined;
// BABYLON.LightBlock.prototype.glossPower = undefined;
// BABYLON.LightBlock.prototype.diffuseColor = undefined;
// BABYLON.LightBlock.prototype.specularColor = undefined;
// BABYLON.LightBlock.prototype.diffuseOutput = undefined;
// BABYLON.LightBlock.prototype.specularOutput = undefined;
// BABYLON.LightBlock.prototype.shadow = undefined;
BABYLON.LightBlock.prototype.autoConfigure = function () {};
BABYLON.LightBlock.prototype.prepareDefines = function () {};
BABYLON.LightBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.LightBlock.prototype.bind = function () {};
BABYLON.LightBlock.prototype.serialize = function () {};
// BABYLON.LightBlock.prototype.isUnique = undefined;
// BABYLON.LightBlock.prototype.isFinalMerger = undefined;
// BABYLON.LightBlock.prototype.isInput = undefined;
// BABYLON.LightBlock.prototype.buildId = undefined;
// BABYLON.LightBlock.prototype.target = undefined;
// BABYLON.LightBlock.prototype.inputs = undefined;
// BABYLON.LightBlock.prototype.outputs = undefined;
BABYLON.LightBlock.prototype.getInputByName = function () {};
BABYLON.LightBlock.prototype.getOutputByName = function () {};
BABYLON.LightBlock.prototype.initialize = function () {};
BABYLON.LightBlock.prototype.registerInput = function () {};
BABYLON.LightBlock.prototype.registerOutput = function () {};
BABYLON.LightBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.LightBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.LightBlock.prototype.getSiblingOutput = function () {};
BABYLON.LightBlock.prototype.connectTo = function () {};
BABYLON.LightBlock.prototype.provideFallbacks = function () {};
BABYLON.LightBlock.prototype.initializeDefines = function () {};
BABYLON.LightBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.LightBlock.prototype.isReady = function () {};
BABYLON.LightBlock.prototype.build = function () {};
BABYLON.LightBlock.prototype.clone = function () {};
BABYLON.LightBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.TextureBlock = function () {}
BABYLON.TextureBlock.inputsAreExclusive = false;
BABYLON.TextureBlock.comments = "";
// BABYLON.TextureBlock.name = undefined;
BABYLON.TextureBlock.uniqueId = 57;
BABYLON.TextureBlock.convertToGammaSpace = false;
BABYLON.TextureBlock.prototype.constructor = function () {};
BABYLON.TextureBlock.prototype.getClassName = function () {};
// BABYLON.TextureBlock.prototype.uv = undefined;
// BABYLON.TextureBlock.prototype.rgba = undefined;
// BABYLON.TextureBlock.prototype.rgb = undefined;
// BABYLON.TextureBlock.prototype.r = undefined;
// BABYLON.TextureBlock.prototype.g = undefined;
// BABYLON.TextureBlock.prototype.b = undefined;
// BABYLON.TextureBlock.prototype.a = undefined;
// BABYLON.TextureBlock.prototype.target = undefined;
BABYLON.TextureBlock.prototype.autoConfigure = function () {};
BABYLON.TextureBlock.prototype.initializeDefines = function () {};
BABYLON.TextureBlock.prototype.prepareDefines = function () {};
BABYLON.TextureBlock.prototype.isReady = function () {};
BABYLON.TextureBlock.prototype.bind = function () {};
BABYLON.TextureBlock.prototype.serialize = function () {};
// BABYLON.TextureBlock.prototype.isUnique = undefined;
// BABYLON.TextureBlock.prototype.isFinalMerger = undefined;
// BABYLON.TextureBlock.prototype.isInput = undefined;
// BABYLON.TextureBlock.prototype.buildId = undefined;
// BABYLON.TextureBlock.prototype.inputs = undefined;
// BABYLON.TextureBlock.prototype.outputs = undefined;
BABYLON.TextureBlock.prototype.getInputByName = function () {};
BABYLON.TextureBlock.prototype.getOutputByName = function () {};
BABYLON.TextureBlock.prototype.initialize = function () {};
BABYLON.TextureBlock.prototype.registerInput = function () {};
BABYLON.TextureBlock.prototype.registerOutput = function () {};
BABYLON.TextureBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.TextureBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.TextureBlock.prototype.getSiblingOutput = function () {};
BABYLON.TextureBlock.prototype.connectTo = function () {};
BABYLON.TextureBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.TextureBlock.prototype.provideFallbacks = function () {};
BABYLON.TextureBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.TextureBlock.prototype.build = function () {};
BABYLON.TextureBlock.prototype.clone = function () {};
BABYLON.TextureBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.ReflectionTextureBlock = function () {}
BABYLON.ReflectionTextureBlock.inputsAreExclusive = false;
BABYLON.ReflectionTextureBlock.comments = "";
// BABYLON.ReflectionTextureBlock.name = undefined;
BABYLON.ReflectionTextureBlock.uniqueId = 58;
BABYLON.ReflectionTextureBlock.prototype.constructor = function () {};
BABYLON.ReflectionTextureBlock.prototype.getClassName = function () {};
// BABYLON.ReflectionTextureBlock.prototype.position = undefined;
// BABYLON.ReflectionTextureBlock.prototype.worldPosition = undefined;
// BABYLON.ReflectionTextureBlock.prototype.worldNormal = undefined;
// BABYLON.ReflectionTextureBlock.prototype.world = undefined;
// BABYLON.ReflectionTextureBlock.prototype.cameraPosition = undefined;
// BABYLON.ReflectionTextureBlock.prototype.view = undefined;
// BABYLON.ReflectionTextureBlock.prototype.rgb = undefined;
// BABYLON.ReflectionTextureBlock.prototype.r = undefined;
// BABYLON.ReflectionTextureBlock.prototype.g = undefined;
// BABYLON.ReflectionTextureBlock.prototype.b = undefined;
BABYLON.ReflectionTextureBlock.prototype.autoConfigure = function () {};
BABYLON.ReflectionTextureBlock.prototype.prepareDefines = function () {};
BABYLON.ReflectionTextureBlock.prototype.isReady = function () {};
BABYLON.ReflectionTextureBlock.prototype.bind = function () {};
BABYLON.ReflectionTextureBlock.prototype.serialize = function () {};
// BABYLON.ReflectionTextureBlock.prototype.isUnique = undefined;
// BABYLON.ReflectionTextureBlock.prototype.isFinalMerger = undefined;
// BABYLON.ReflectionTextureBlock.prototype.isInput = undefined;
// BABYLON.ReflectionTextureBlock.prototype.buildId = undefined;
// BABYLON.ReflectionTextureBlock.prototype.target = undefined;
// BABYLON.ReflectionTextureBlock.prototype.inputs = undefined;
// BABYLON.ReflectionTextureBlock.prototype.outputs = undefined;
BABYLON.ReflectionTextureBlock.prototype.getInputByName = function () {};
BABYLON.ReflectionTextureBlock.prototype.getOutputByName = function () {};
BABYLON.ReflectionTextureBlock.prototype.initialize = function () {};
BABYLON.ReflectionTextureBlock.prototype.registerInput = function () {};
BABYLON.ReflectionTextureBlock.prototype.registerOutput = function () {};
BABYLON.ReflectionTextureBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.ReflectionTextureBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.ReflectionTextureBlock.prototype.getSiblingOutput = function () {};
BABYLON.ReflectionTextureBlock.prototype.connectTo = function () {};
BABYLON.ReflectionTextureBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.ReflectionTextureBlock.prototype.provideFallbacks = function () {};
BABYLON.ReflectionTextureBlock.prototype.initializeDefines = function () {};
BABYLON.ReflectionTextureBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.ReflectionTextureBlock.prototype.build = function () {};
BABYLON.ReflectionTextureBlock.prototype.clone = function () {};
BABYLON.ReflectionTextureBlock.prototype.dispose = function () {};


/** @constructor */
BABYLON.InputBlock = function () {}
BABYLON.InputBlock.inputsAreExclusive = false;
BABYLON.InputBlock.comments = "";
// BABYLON.InputBlock.name = undefined;
BABYLON.InputBlock.uniqueId = 59;
BABYLON.InputBlock.min = 0;
BABYLON.InputBlock.max = 0;
BABYLON.InputBlock.isBoolean = false;
BABYLON.InputBlock.matrixMode = 0;
BABYLON.InputBlock.visibleInInspector = false;
BABYLON.InputBlock.isConstant = false;
BABYLON.InputBlock.groupInInspector = "";
BABYLON.InputBlock.onValueChangedObservable = {};
BABYLON.InputBlock.prototype.constructor = function () {};
// BABYLON.InputBlock.prototype.type = undefined;
// BABYLON.InputBlock.prototype.output = undefined;
BABYLON.InputBlock.prototype.setAsAttribute = function () {};
BABYLON.InputBlock.prototype.setAsSystemValue = function () {};
// BABYLON.InputBlock.prototype.value = undefined;
// BABYLON.InputBlock.prototype.valueCallback = undefined;
// BABYLON.InputBlock.prototype.associatedVariableName = undefined;
// BABYLON.InputBlock.prototype.animationType = undefined;
BABYLON.InputBlock.prototype.isUndefined = false;
BABYLON.InputBlock.prototype.isUniform = false;
BABYLON.InputBlock.prototype.isAttribute = false;
BABYLON.InputBlock.prototype.isVarying = false;
BABYLON.InputBlock.prototype.isSystemValue = false;
// BABYLON.InputBlock.prototype.systemValue = undefined;
BABYLON.InputBlock.prototype.getClassName = function () {};
BABYLON.InputBlock.prototype.animate = function () {};
BABYLON.InputBlock.prototype.initialize = function () {};
BABYLON.InputBlock.prototype.setDefaultValue = function () {};
BABYLON.InputBlock.prototype.dispose = function () {};
BABYLON.InputBlock.prototype.serialize = function () {};
// BABYLON.InputBlock.prototype.isUnique = undefined;
// BABYLON.InputBlock.prototype.isFinalMerger = undefined;
// BABYLON.InputBlock.prototype.isInput = undefined;
// BABYLON.InputBlock.prototype.buildId = undefined;
// BABYLON.InputBlock.prototype.target = undefined;
// BABYLON.InputBlock.prototype.inputs = undefined;
// BABYLON.InputBlock.prototype.outputs = undefined;
BABYLON.InputBlock.prototype.getInputByName = function () {};
BABYLON.InputBlock.prototype.getOutputByName = function () {};
BABYLON.InputBlock.prototype.bind = function () {};
BABYLON.InputBlock.prototype.registerInput = function () {};
BABYLON.InputBlock.prototype.registerOutput = function () {};
BABYLON.InputBlock.prototype.getFirstAvailableInput = function () {};
BABYLON.InputBlock.prototype.getFirstAvailableOutput = function () {};
BABYLON.InputBlock.prototype.getSiblingOutput = function () {};
BABYLON.InputBlock.prototype.connectTo = function () {};
BABYLON.InputBlock.prototype.updateUniformsAndSamples = function () {};
BABYLON.InputBlock.prototype.provideFallbacks = function () {};
BABYLON.InputBlock.prototype.initializeDefines = function () {};
BABYLON.InputBlock.prototype.prepareDefines = function () {};
BABYLON.InputBlock.prototype.autoConfigure = function () {};
BABYLON.InputBlock.prototype.replaceRepeatableContent = function () {};
BABYLON.InputBlock.prototype.isReady = function () {};
BABYLON.InputBlock.prototype.build = function () {};
BABYLON.InputBlock.prototype.clone = function () {};


BABYLON.AnimatedInputBlockTypes = {}

/** @constructor */
BABYLON.Scalar = function () {}


BABYLON.Space = {}

/** @constructor */
BABYLON.Axis = function () {}


/** @constructor */
BABYLON.Color3 = function () {}
BABYLON.Color3.r = 0;
BABYLON.Color3.g = 0;
BABYLON.Color3.b = 0;
BABYLON.Color3.prototype.toString = function () {};
BABYLON.Color3.prototype.getClassName = function () {};
BABYLON.Color3.prototype.getHashCode = function () {};
BABYLON.Color3.prototype.toArray = function () {};
BABYLON.Color3.prototype.toColor4 = function () {};
BABYLON.Color3.prototype.asArray = function () {};
BABYLON.Color3.prototype.toLuminance = function () {};
BABYLON.Color3.prototype.multiply = function () {};
BABYLON.Color3.prototype.multiplyToRef = function () {};
BABYLON.Color3.prototype.equals = function () {};
BABYLON.Color3.prototype.equalsFloats = function () {};
BABYLON.Color3.prototype.scale = function () {};
BABYLON.Color3.prototype.scaleToRef = function () {};
BABYLON.Color3.prototype.scaleAndAddToRef = function () {};
BABYLON.Color3.prototype.clampToRef = function () {};
BABYLON.Color3.prototype.add = function () {};
BABYLON.Color3.prototype.addToRef = function () {};
BABYLON.Color3.prototype.subtract = function () {};
BABYLON.Color3.prototype.subtractToRef = function () {};
BABYLON.Color3.prototype.clone = function () {};
BABYLON.Color3.prototype.copyFrom = function () {};
BABYLON.Color3.prototype.copyFromFloats = function () {};
BABYLON.Color3.prototype.set = function () {};
BABYLON.Color3.prototype.toHexString = function () {};
BABYLON.Color3.prototype.toLinearSpace = function () {};
BABYLON.Color3.prototype.toHSV = function () {};
BABYLON.Color3.prototype.toHSVToRef = function () {};
BABYLON.Color3.prototype.toLinearSpaceToRef = function () {};
BABYLON.Color3.prototype.toGammaSpace = function () {};
BABYLON.Color3.prototype.toGammaSpaceToRef = function () {};


/** @constructor */
BABYLON.Color4 = function () {}
BABYLON.Color4.r = 0;
BABYLON.Color4.g = 0;
BABYLON.Color4.b = 0;
BABYLON.Color4.a = 1;
BABYLON.Color4.prototype.addInPlace = function () {};
BABYLON.Color4.prototype.asArray = function () {};
BABYLON.Color4.prototype.toArray = function () {};
BABYLON.Color4.prototype.equals = function () {};
BABYLON.Color4.prototype.add = function () {};
BABYLON.Color4.prototype.subtract = function () {};
BABYLON.Color4.prototype.subtractToRef = function () {};
BABYLON.Color4.prototype.scale = function () {};
BABYLON.Color4.prototype.scaleToRef = function () {};
BABYLON.Color4.prototype.scaleAndAddToRef = function () {};
BABYLON.Color4.prototype.clampToRef = function () {};
BABYLON.Color4.prototype.multiply = function () {};
BABYLON.Color4.prototype.multiplyToRef = function () {};
BABYLON.Color4.prototype.toString = function () {};
BABYLON.Color4.prototype.getClassName = function () {};
BABYLON.Color4.prototype.getHashCode = function () {};
BABYLON.Color4.prototype.clone = function () {};
BABYLON.Color4.prototype.copyFrom = function () {};
BABYLON.Color4.prototype.copyFromFloats = function () {};
BABYLON.Color4.prototype.set = function () {};
BABYLON.Color4.prototype.toHexString = function () {};
BABYLON.Color4.prototype.toLinearSpace = function () {};
BABYLON.Color4.prototype.toLinearSpaceToRef = function () {};
BABYLON.Color4.prototype.toGammaSpace = function () {};
BABYLON.Color4.prototype.toGammaSpaceToRef = function () {};


/** @constructor */
BABYLON.TmpColors = function () {}


BABYLON.ToGammaSpace = 0.45454545454545453;

BABYLON.ToLinearSpace = 2.2;

BABYLON.Epsilon = 0.001;

/** @constructor */
BABYLON.Frustum = function () {}


/** @constructor */
BABYLON.Plane = function () {}
BABYLON.Plane.normal = {};
// BABYLON.Plane.d = undefined;
BABYLON.Plane.prototype.asArray = function () {};
BABYLON.Plane.prototype.clone = function () {};
BABYLON.Plane.prototype.getClassName = function () {};
BABYLON.Plane.prototype.getHashCode = function () {};
BABYLON.Plane.prototype.normalize = function () {};
BABYLON.Plane.prototype.transform = function () {};
BABYLON.Plane.prototype.dotCoordinate = function () {};
BABYLON.Plane.prototype.copyFromPoints = function () {};
BABYLON.Plane.prototype.isFrontFacingTo = function () {};
BABYLON.Plane.prototype.signedDistanceTo = function () {};


/** @constructor */
BABYLON.Size = function () {}
// BABYLON.Size.width = undefined;
// BABYLON.Size.height = undefined;
BABYLON.Size.prototype.toString = function () {};
BABYLON.Size.prototype.getClassName = function () {};
BABYLON.Size.prototype.getHashCode = function () {};
BABYLON.Size.prototype.copyFrom = function () {};
BABYLON.Size.prototype.copyFromFloats = function () {};
BABYLON.Size.prototype.set = function () {};
BABYLON.Size.prototype.multiplyByFloats = function () {};
BABYLON.Size.prototype.clone = function () {};
BABYLON.Size.prototype.equals = function () {};
BABYLON.Size.prototype.surface = NaN;
BABYLON.Size.prototype.add = function () {};
BABYLON.Size.prototype.subtract = function () {};


/** @constructor */
BABYLON.Vector2 = function () {}
BABYLON.Vector2.x = 0;
BABYLON.Vector2.y = 0;
BABYLON.Vector2.prototype.toString = function () {};
BABYLON.Vector2.prototype.getClassName = function () {};
BABYLON.Vector2.prototype.getHashCode = function () {};
BABYLON.Vector2.prototype.toArray = function () {};
BABYLON.Vector2.prototype.asArray = function () {};
BABYLON.Vector2.prototype.copyFrom = function () {};
BABYLON.Vector2.prototype.copyFromFloats = function () {};
BABYLON.Vector2.prototype.set = function () {};
BABYLON.Vector2.prototype.add = function () {};
BABYLON.Vector2.prototype.addToRef = function () {};
BABYLON.Vector2.prototype.addInPlace = function () {};
BABYLON.Vector2.prototype.addVector3 = function () {};
BABYLON.Vector2.prototype.subtract = function () {};
BABYLON.Vector2.prototype.subtractToRef = function () {};
BABYLON.Vector2.prototype.subtractInPlace = function () {};
BABYLON.Vector2.prototype.multiplyInPlace = function () {};
BABYLON.Vector2.prototype.multiply = function () {};
BABYLON.Vector2.prototype.multiplyToRef = function () {};
BABYLON.Vector2.prototype.multiplyByFloats = function () {};
BABYLON.Vector2.prototype.divide = function () {};
BABYLON.Vector2.prototype.divideToRef = function () {};
BABYLON.Vector2.prototype.divideInPlace = function () {};
BABYLON.Vector2.prototype.negate = function () {};
BABYLON.Vector2.prototype.negateInPlace = function () {};
BABYLON.Vector2.prototype.negateToRef = function () {};
BABYLON.Vector2.prototype.scaleInPlace = function () {};
BABYLON.Vector2.prototype.scale = function () {};
BABYLON.Vector2.prototype.scaleToRef = function () {};
BABYLON.Vector2.prototype.scaleAndAddToRef = function () {};
BABYLON.Vector2.prototype.equals = function () {};
BABYLON.Vector2.prototype.equalsWithEpsilon = function () {};
BABYLON.Vector2.prototype.floor = function () {};
BABYLON.Vector2.prototype.fract = function () {};
BABYLON.Vector2.prototype.length = function () {};
BABYLON.Vector2.prototype.lengthSquared = function () {};
BABYLON.Vector2.prototype.normalize = function () {};
BABYLON.Vector2.prototype.clone = function () {};


/** @constructor */
BABYLON.Vector3 = function () {}
BABYLON.Vector3.x = 0;
BABYLON.Vector3.y = 0;
BABYLON.Vector3.z = 0;
BABYLON.Vector3.prototype.toString = function () {};
BABYLON.Vector3.prototype.getClassName = function () {};
BABYLON.Vector3.prototype.getHashCode = function () {};
BABYLON.Vector3.prototype.asArray = function () {};
BABYLON.Vector3.prototype.toArray = function () {};
BABYLON.Vector3.prototype.toQuaternion = function () {};
BABYLON.Vector3.prototype.addInPlace = function () {};
BABYLON.Vector3.prototype.addInPlaceFromFloats = function () {};
BABYLON.Vector3.prototype.add = function () {};
BABYLON.Vector3.prototype.addToRef = function () {};
BABYLON.Vector3.prototype.subtractInPlace = function () {};
BABYLON.Vector3.prototype.subtract = function () {};
BABYLON.Vector3.prototype.subtractToRef = function () {};
BABYLON.Vector3.prototype.subtractFromFloats = function () {};
BABYLON.Vector3.prototype.subtractFromFloatsToRef = function () {};
BABYLON.Vector3.prototype.negate = function () {};
BABYLON.Vector3.prototype.negateInPlace = function () {};
BABYLON.Vector3.prototype.negateToRef = function () {};
BABYLON.Vector3.prototype.scaleInPlace = function () {};
BABYLON.Vector3.prototype.scale = function () {};
BABYLON.Vector3.prototype.scaleToRef = function () {};
BABYLON.Vector3.prototype.scaleAndAddToRef = function () {};
BABYLON.Vector3.prototype.equals = function () {};
BABYLON.Vector3.prototype.equalsWithEpsilon = function () {};
BABYLON.Vector3.prototype.equalsToFloats = function () {};
BABYLON.Vector3.prototype.multiplyInPlace = function () {};
BABYLON.Vector3.prototype.multiply = function () {};
BABYLON.Vector3.prototype.multiplyToRef = function () {};
BABYLON.Vector3.prototype.multiplyByFloats = function () {};
BABYLON.Vector3.prototype.divide = function () {};
BABYLON.Vector3.prototype.divideToRef = function () {};
BABYLON.Vector3.prototype.divideInPlace = function () {};
BABYLON.Vector3.prototype.minimizeInPlace = function () {};
BABYLON.Vector3.prototype.maximizeInPlace = function () {};
BABYLON.Vector3.prototype.minimizeInPlaceFromFloats = function () {};
BABYLON.Vector3.prototype.maximizeInPlaceFromFloats = function () {};
BABYLON.Vector3.prototype.isNonUniformWithinEpsilon = function () {};
BABYLON.Vector3.prototype.isNonUniform = true;
BABYLON.Vector3.prototype.floor = function () {};
BABYLON.Vector3.prototype.fract = function () {};
BABYLON.Vector3.prototype.length = function () {};
BABYLON.Vector3.prototype.lengthSquared = function () {};
BABYLON.Vector3.prototype.normalize = function () {};
BABYLON.Vector3.prototype.reorderInPlace = function () {};
BABYLON.Vector3.prototype.rotateByQuaternionToRef = function () {};
BABYLON.Vector3.prototype.rotateByQuaternionAroundPointToRef = function () {};
BABYLON.Vector3.prototype.cross = function () {};
BABYLON.Vector3.prototype.normalizeFromLength = function () {};
BABYLON.Vector3.prototype.normalizeToNew = function () {};
BABYLON.Vector3.prototype.normalizeToRef = function () {};
BABYLON.Vector3.prototype.clone = function () {};
BABYLON.Vector3.prototype.copyFrom = function () {};
BABYLON.Vector3.prototype.copyFromFloats = function () {};
BABYLON.Vector3.prototype.set = function () {};
BABYLON.Vector3.prototype.setAll = function () {};


/** @constructor */
BABYLON.Vector4 = function () {}
// BABYLON.Vector4.x = undefined;
// BABYLON.Vector4.y = undefined;
// BABYLON.Vector4.z = undefined;
// BABYLON.Vector4.w = undefined;
BABYLON.Vector4.prototype.toString = function () {};
BABYLON.Vector4.prototype.getClassName = function () {};
BABYLON.Vector4.prototype.getHashCode = function () {};
BABYLON.Vector4.prototype.asArray = function () {};
BABYLON.Vector4.prototype.toArray = function () {};
BABYLON.Vector4.prototype.addInPlace = function () {};
BABYLON.Vector4.prototype.add = function () {};
BABYLON.Vector4.prototype.addToRef = function () {};
BABYLON.Vector4.prototype.subtractInPlace = function () {};
BABYLON.Vector4.prototype.subtract = function () {};
BABYLON.Vector4.prototype.subtractToRef = function () {};
BABYLON.Vector4.prototype.subtractFromFloats = function () {};
BABYLON.Vector4.prototype.subtractFromFloatsToRef = function () {};
BABYLON.Vector4.prototype.negate = function () {};
BABYLON.Vector4.prototype.negateInPlace = function () {};
BABYLON.Vector4.prototype.negateToRef = function () {};
BABYLON.Vector4.prototype.scaleInPlace = function () {};
BABYLON.Vector4.prototype.scale = function () {};
BABYLON.Vector4.prototype.scaleToRef = function () {};
BABYLON.Vector4.prototype.scaleAndAddToRef = function () {};
BABYLON.Vector4.prototype.equals = function () {};
BABYLON.Vector4.prototype.equalsWithEpsilon = function () {};
BABYLON.Vector4.prototype.equalsToFloats = function () {};
BABYLON.Vector4.prototype.multiplyInPlace = function () {};
BABYLON.Vector4.prototype.multiply = function () {};
BABYLON.Vector4.prototype.multiplyToRef = function () {};
BABYLON.Vector4.prototype.multiplyByFloats = function () {};
BABYLON.Vector4.prototype.divide = function () {};
BABYLON.Vector4.prototype.divideToRef = function () {};
BABYLON.Vector4.prototype.divideInPlace = function () {};
BABYLON.Vector4.prototype.minimizeInPlace = function () {};
BABYLON.Vector4.prototype.maximizeInPlace = function () {};
BABYLON.Vector4.prototype.floor = function () {};
BABYLON.Vector4.prototype.fract = function () {};
BABYLON.Vector4.prototype.length = function () {};
BABYLON.Vector4.prototype.lengthSquared = function () {};
BABYLON.Vector4.prototype.normalize = function () {};
BABYLON.Vector4.prototype.toVector3 = function () {};
BABYLON.Vector4.prototype.clone = function () {};
BABYLON.Vector4.prototype.copyFrom = function () {};
BABYLON.Vector4.prototype.copyFromFloats = function () {};
BABYLON.Vector4.prototype.set = function () {};
BABYLON.Vector4.prototype.setAll = function () {};


/** @constructor */
BABYLON.Quaternion = function () {}
BABYLON.Quaternion.x = 0;
BABYLON.Quaternion.y = 0;
BABYLON.Quaternion.z = 0;
BABYLON.Quaternion.w = 1;
BABYLON.Quaternion.prototype.toString = function () {};
BABYLON.Quaternion.prototype.getClassName = function () {};
BABYLON.Quaternion.prototype.getHashCode = function () {};
BABYLON.Quaternion.prototype.asArray = function () {};
BABYLON.Quaternion.prototype.equals = function () {};
BABYLON.Quaternion.prototype.equalsWithEpsilon = function () {};
BABYLON.Quaternion.prototype.clone = function () {};
BABYLON.Quaternion.prototype.copyFrom = function () {};
BABYLON.Quaternion.prototype.copyFromFloats = function () {};
BABYLON.Quaternion.prototype.set = function () {};
BABYLON.Quaternion.prototype.add = function () {};
BABYLON.Quaternion.prototype.addInPlace = function () {};
BABYLON.Quaternion.prototype.subtract = function () {};
BABYLON.Quaternion.prototype.scale = function () {};
BABYLON.Quaternion.prototype.scaleToRef = function () {};
BABYLON.Quaternion.prototype.scaleInPlace = function () {};
BABYLON.Quaternion.prototype.scaleAndAddToRef = function () {};
BABYLON.Quaternion.prototype.multiply = function () {};
BABYLON.Quaternion.prototype.multiplyToRef = function () {};
BABYLON.Quaternion.prototype.multiplyInPlace = function () {};
BABYLON.Quaternion.prototype.conjugateToRef = function () {};
BABYLON.Quaternion.prototype.conjugateInPlace = function () {};
BABYLON.Quaternion.prototype.conjugate = function () {};
BABYLON.Quaternion.prototype.length = function () {};
BABYLON.Quaternion.prototype.normalize = function () {};
BABYLON.Quaternion.prototype.toEulerAngles = function () {};
BABYLON.Quaternion.prototype.toEulerAnglesToRef = function () {};
BABYLON.Quaternion.prototype.toRotationMatrix = function () {};
BABYLON.Quaternion.prototype.fromRotationMatrix = function () {};


/** @constructor */
BABYLON.Matrix = function () {}
BABYLON.Matrix.updateFlag = 239;
// BABYLON.Matrix.prototype.m = undefined;
BABYLON.Matrix.prototype.isIdentity = function () {};
BABYLON.Matrix.prototype.isIdentityAs3x2 = function () {};
BABYLON.Matrix.prototype.determinant = function () {};
BABYLON.Matrix.prototype.toArray = function () {};
BABYLON.Matrix.prototype.asArray = function () {};
BABYLON.Matrix.prototype.invert = function () {};
BABYLON.Matrix.prototype.reset = function () {};
BABYLON.Matrix.prototype.add = function () {};
BABYLON.Matrix.prototype.addToRef = function () {};
BABYLON.Matrix.prototype.addToSelf = function () {};
BABYLON.Matrix.prototype.invertToRef = function () {};
BABYLON.Matrix.prototype.addAtIndex = function () {};
BABYLON.Matrix.prototype.multiplyAtIndex = function () {};
BABYLON.Matrix.prototype.setTranslationFromFloats = function () {};
BABYLON.Matrix.prototype.addTranslationFromFloats = function () {};
BABYLON.Matrix.prototype.setTranslation = function () {};
BABYLON.Matrix.prototype.getTranslation = function () {};
BABYLON.Matrix.prototype.getTranslationToRef = function () {};
BABYLON.Matrix.prototype.removeRotationAndScaling = function () {};
BABYLON.Matrix.prototype.multiply = function () {};
BABYLON.Matrix.prototype.copyFrom = function () {};
BABYLON.Matrix.prototype.copyToArray = function () {};
BABYLON.Matrix.prototype.multiplyToRef = function () {};
BABYLON.Matrix.prototype.multiplyToArray = function () {};
BABYLON.Matrix.prototype.equals = function () {};
BABYLON.Matrix.prototype.clone = function () {};
BABYLON.Matrix.prototype.getClassName = function () {};
BABYLON.Matrix.prototype.getHashCode = function () {};
BABYLON.Matrix.prototype.decompose = function () {};
BABYLON.Matrix.prototype.getRow = function () {};
BABYLON.Matrix.prototype.setRow = function () {};
BABYLON.Matrix.prototype.transpose = function () {};
BABYLON.Matrix.prototype.transposeToRef = function () {};
BABYLON.Matrix.prototype.setRowFromFloats = function () {};
BABYLON.Matrix.prototype.scale = function () {};
BABYLON.Matrix.prototype.scaleToRef = function () {};
BABYLON.Matrix.prototype.scaleAndAddToRef = function () {};
BABYLON.Matrix.prototype.toNormalMatrix = function () {};
BABYLON.Matrix.prototype.getRotationMatrix = function () {};
BABYLON.Matrix.prototype.getRotationMatrixToRef = function () {};
BABYLON.Matrix.prototype.toggleModelMatrixHandInPlace = function () {};
BABYLON.Matrix.prototype.toggleProjectionMatrixHandInPlace = function () {};


/** @constructor */
BABYLON.TmpVectors = function () {}


/** @constructor */
BABYLON.Viewport = function () {}
// BABYLON.Viewport.x = undefined;
// BABYLON.Viewport.y = undefined;
// BABYLON.Viewport.width = undefined;
// BABYLON.Viewport.height = undefined;
BABYLON.Viewport.prototype.toGlobal = function () {};
BABYLON.Viewport.prototype.toGlobalToRef = function () {};
BABYLON.Viewport.prototype.clone = function () {};


/** @constructor */
BABYLON.SphericalHarmonics = function () {}
BABYLON.SphericalHarmonics.preScaled = false;
BABYLON.SphericalHarmonics.l00 = {};
BABYLON.SphericalHarmonics.l1_1 = {};
BABYLON.SphericalHarmonics.l10 = {};
BABYLON.SphericalHarmonics.l11 = {};
BABYLON.SphericalHarmonics.l2_2 = {};
BABYLON.SphericalHarmonics.l2_1 = {};
BABYLON.SphericalHarmonics.l20 = {};
BABYLON.SphericalHarmonics.l21 = {};
BABYLON.SphericalHarmonics.l22 = {};
BABYLON.SphericalHarmonics.prototype.addLight = function () {};
BABYLON.SphericalHarmonics.prototype.scaleInPlace = function () {};
BABYLON.SphericalHarmonics.prototype.convertIncidentRadianceToIrradiance = function () {};
BABYLON.SphericalHarmonics.prototype.convertIrradianceToLambertianRadiance = function () {};
BABYLON.SphericalHarmonics.prototype.preScaleForRendering = function () {};


/** @constructor */
BABYLON.SphericalPolynomial = function () {}
BABYLON.SphericalPolynomial.x = {};
BABYLON.SphericalPolynomial.y = {};
BABYLON.SphericalPolynomial.z = {};
BABYLON.SphericalPolynomial.xx = {};
BABYLON.SphericalPolynomial.yy = {};
BABYLON.SphericalPolynomial.zz = {};
BABYLON.SphericalPolynomial.xy = {};
BABYLON.SphericalPolynomial.yz = {};
BABYLON.SphericalPolynomial.zx = {};
// BABYLON.SphericalPolynomial.prototype.preScaledHarmonics = undefined;
BABYLON.SphericalPolynomial.prototype.addAmbient = function () {};
BABYLON.SphericalPolynomial.prototype.scaleInPlace = function () {};


BABYLON.Orientation = {}

/** @constructor */
BABYLON.BezierCurve = function () {}


/** @constructor */
BABYLON.Angle = function () {}
BABYLON.Angle.prototype.degrees = function () {};
BABYLON.Angle.prototype.radians = function () {};


/** @constructor */
BABYLON.Arc2 = function () {}


/** @constructor */
BABYLON.Path2 = function () {}
BABYLON.Path2.closed = false;
BABYLON.Path2.prototype.addLineTo = function () {};
BABYLON.Path2.prototype.addArcTo = function () {};
BABYLON.Path2.prototype.close = function () {};
BABYLON.Path2.prototype.length = function () {};
BABYLON.Path2.prototype.getPoints = function () {};
BABYLON.Path2.prototype.getPointAtLengthPosition = function () {};


/** @constructor */
BABYLON.Path3D = function () {}


/** @constructor */
BABYLON.Curve3 = function () {}
BABYLON.Curve3.CreateQuadraticBezier = function () {};
BABYLON.Curve3.CreateCubicBezier = function () {};
BABYLON.Curve3.CreateHermiteSpline = function () {};
BABYLON.Curve3.CreateCatmullRomSpline = function () {};


/** @constructor */
BABYLON.PositionNormalVertex = function () {}
BABYLON.PositionNormalVertex.position = {};
BABYLON.PositionNormalVertex.normal = {};
BABYLON.PositionNormalVertex.prototype.clone = function () {};


/** @constructor */
BABYLON.PositionNormalTextureVertex = function () {}
BABYLON.PositionNormalTextureVertex.position = {};
BABYLON.PositionNormalTextureVertex.normal = {};
BABYLON.PositionNormalTextureVertex.uv = {};
BABYLON.PositionNormalTextureVertex.prototype.clone = function () {};


/** @constructor */
BABYLON.AbstractMesh = function () {}
BABYLON.AbstractMesh.BILLBOARDMODE_NONE = 0;
BABYLON.AbstractMesh.BILLBOARDMODE_X = 1;
BABYLON.AbstractMesh.BILLBOARDMODE_Y = 2;
BABYLON.AbstractMesh.BILLBOARDMODE_Z = 4;
BABYLON.AbstractMesh.BILLBOARDMODE_ALL = 7;
BABYLON.AbstractMesh.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.AbstractMesh.OCCLUSION_TYPE_NONE = 0;
BABYLON.AbstractMesh.OCCLUSION_TYPE_OPTIMISTIC = 1;
BABYLON.AbstractMesh.OCCLUSION_TYPE_STRICT = 2;
BABYLON.AbstractMesh.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
BABYLON.AbstractMesh.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
BABYLON.AbstractMesh.CULLINGSTRATEGY_STANDARD = 0;
BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
BABYLON.AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
BABYLON.AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
BABYLON.AbstractMesh.prototype.Parse = function () {};
BABYLON.AbstractMesh.prototype.AddNodeConstructor = function () {};
BABYLON.AbstractMesh.prototype.Construct = function () {};
BABYLON.AbstractMesh.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.Buffer = function () {}


/** @constructor */
BABYLON.VertexBuffer = function () {}
BABYLON.VertexBuffer.DeduceStride = function () {};
BABYLON.VertexBuffer.GetTypeByteLength = function () {};
BABYLON.VertexBuffer.ForEach = function () {};
BABYLON.VertexBuffer.BYTE = 5120;
BABYLON.VertexBuffer.UNSIGNED_BYTE = 5121;
BABYLON.VertexBuffer.SHORT = 5122;
BABYLON.VertexBuffer.UNSIGNED_SHORT = 5123;
BABYLON.VertexBuffer.INT = 5124;
BABYLON.VertexBuffer.UNSIGNED_INT = 5125;
BABYLON.VertexBuffer.FLOAT = 5126;
BABYLON.VertexBuffer.PositionKind = "position";
BABYLON.VertexBuffer.NormalKind = "normal";
BABYLON.VertexBuffer.TangentKind = "tangent";
BABYLON.VertexBuffer.UVKind = "uv";
BABYLON.VertexBuffer.UV2Kind = "uv2";
BABYLON.VertexBuffer.UV3Kind = "uv3";
BABYLON.VertexBuffer.UV4Kind = "uv4";
BABYLON.VertexBuffer.UV5Kind = "uv5";
BABYLON.VertexBuffer.UV6Kind = "uv6";
BABYLON.VertexBuffer.ColorKind = "color";
BABYLON.VertexBuffer.MatricesIndicesKind = "matricesIndices";
BABYLON.VertexBuffer.MatricesWeightsKind = "matricesWeights";
BABYLON.VertexBuffer.MatricesIndicesExtraKind = "matricesIndicesExtra";
BABYLON.VertexBuffer.MatricesWeightsExtraKind = "matricesWeightsExtra";


/** @constructor */
BABYLON.CSG = function () {}
BABYLON.CSG.polygons = {};
BABYLON.CSG.prototype.clone = function () {};
BABYLON.CSG.prototype.union = function () {};
BABYLON.CSG.prototype.unionInPlace = function () {};
BABYLON.CSG.prototype.subtract = function () {};
BABYLON.CSG.prototype.subtractInPlace = function () {};
BABYLON.CSG.prototype.intersect = function () {};
BABYLON.CSG.prototype.intersectInPlace = function () {};
BABYLON.CSG.prototype.inverse = function () {};
BABYLON.CSG.prototype.inverseInPlace = function () {};
BABYLON.CSG.prototype.copyTransformAttributes = function () {};
BABYLON.CSG.prototype.buildMeshGeometry = function () {};
BABYLON.CSG.prototype.toMesh = function () {};


/** @constructor */
BABYLON.Geometry = function () {}
BABYLON.Geometry.CreateGeometryForMesh = function () {};
BABYLON.Geometry.ExtractFromMesh = function () {};
BABYLON.Geometry.RandomId = function () {};
BABYLON.Geometry.Parse = function () {};


/** @constructor */
BABYLON.GroundMesh = function () {}
BABYLON.GroundMesh.Parse = function () {};
BABYLON.GroundMesh.prototype.CreateRibbon = function () {};
BABYLON.GroundMesh.prototype.CreateDisc = function () {};
BABYLON.GroundMesh.prototype.CreateBox = function () {};
BABYLON.GroundMesh.prototype.CreateSphere = function () {};
BABYLON.GroundMesh.prototype.CreateHemisphere = function () {};
BABYLON.GroundMesh.prototype.CreateCylinder = function () {};
BABYLON.GroundMesh.prototype.CreateTorus = function () {};
BABYLON.GroundMesh.prototype.CreateTorusKnot = function () {};
BABYLON.GroundMesh.prototype.CreateLines = function () {};
BABYLON.GroundMesh.prototype.CreateDashedLines = function () {};
BABYLON.GroundMesh.prototype.CreatePolygon = function () {};
BABYLON.GroundMesh.prototype.ExtrudePolygon = function () {};
BABYLON.GroundMesh.prototype.ExtrudeShape = function () {};
BABYLON.GroundMesh.prototype.ExtrudeShapeCustom = function () {};
BABYLON.GroundMesh.prototype.CreateLathe = function () {};
BABYLON.GroundMesh.prototype.CreatePlane = function () {};
BABYLON.GroundMesh.prototype.CreateGround = function () {};
BABYLON.GroundMesh.prototype.CreateTiledGround = function () {};
BABYLON.GroundMesh.prototype.CreateGroundFromHeightMap = function () {};
BABYLON.GroundMesh.prototype.CreateTube = function () {};
BABYLON.GroundMesh.prototype.CreatePolyhedron = function () {};
BABYLON.GroundMesh.prototype.CreateIcoSphere = function () {};
BABYLON.GroundMesh.prototype.CreateDecal = function () {};
BABYLON.GroundMesh.prototype.MinMax = function () {};
BABYLON.GroundMesh.prototype.Center = function () {};
BABYLON.GroundMesh.prototype.MergeMeshes = function () {};
BABYLON.GroundMesh.prototype.FRONTSIDE = 0;
BABYLON.GroundMesh.prototype.BACKSIDE = 1;
BABYLON.GroundMesh.prototype.DOUBLESIDE = 2;
BABYLON.GroundMesh.prototype.DEFAULTSIDE = 0;
BABYLON.GroundMesh.prototype.NO_CAP = 0;
BABYLON.GroundMesh.prototype.CAP_START = 1;
BABYLON.GroundMesh.prototype.CAP_END = 2;
BABYLON.GroundMesh.prototype.CAP_ALL = 3;
BABYLON.GroundMesh.prototype.NO_FLIP = 0;
BABYLON.GroundMesh.prototype.FLIP_TILE = 1;
BABYLON.GroundMesh.prototype.ROTATE_TILE = 2;
BABYLON.GroundMesh.prototype.FLIP_ROW = 3;
BABYLON.GroundMesh.prototype.ROTATE_ROW = 4;
BABYLON.GroundMesh.prototype.FLIP_N_ROTATE_TILE = 5;
BABYLON.GroundMesh.prototype.FLIP_N_ROTATE_ROW = 6;
BABYLON.GroundMesh.prototype.CENTER = 0;
BABYLON.GroundMesh.prototype.LEFT = 1;
BABYLON.GroundMesh.prototype.RIGHT = 2;
BABYLON.GroundMesh.prototype.TOP = 3;
BABYLON.GroundMesh.prototype.BOTTOM = 4;
BABYLON.GroundMesh.prototype.BILLBOARDMODE_NONE = 0;
BABYLON.GroundMesh.prototype.BILLBOARDMODE_X = 1;
BABYLON.GroundMesh.prototype.BILLBOARDMODE_Y = 2;
BABYLON.GroundMesh.prototype.BILLBOARDMODE_Z = 4;
BABYLON.GroundMesh.prototype.BILLBOARDMODE_ALL = 7;
BABYLON.GroundMesh.prototype.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.GroundMesh.prototype.OCCLUSION_TYPE_NONE = 0;
BABYLON.GroundMesh.prototype.OCCLUSION_TYPE_OPTIMISTIC = 1;
BABYLON.GroundMesh.prototype.OCCLUSION_TYPE_STRICT = 2;
BABYLON.GroundMesh.prototype.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
BABYLON.GroundMesh.prototype.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
BABYLON.GroundMesh.prototype.CULLINGSTRATEGY_STANDARD = 0;
BABYLON.GroundMesh.prototype.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
BABYLON.GroundMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
BABYLON.GroundMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
BABYLON.GroundMesh.prototype.AddNodeConstructor = function () {};
BABYLON.GroundMesh.prototype.Construct = function () {};
BABYLON.GroundMesh.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.TrailMesh = function () {}
BABYLON.TrailMesh.Parse = function () {};
BABYLON.TrailMesh.prototype.CreateRibbon = function () {};
BABYLON.TrailMesh.prototype.CreateDisc = function () {};
BABYLON.TrailMesh.prototype.CreateBox = function () {};
BABYLON.TrailMesh.prototype.CreateSphere = function () {};
BABYLON.TrailMesh.prototype.CreateHemisphere = function () {};
BABYLON.TrailMesh.prototype.CreateCylinder = function () {};
BABYLON.TrailMesh.prototype.CreateTorus = function () {};
BABYLON.TrailMesh.prototype.CreateTorusKnot = function () {};
BABYLON.TrailMesh.prototype.CreateLines = function () {};
BABYLON.TrailMesh.prototype.CreateDashedLines = function () {};
BABYLON.TrailMesh.prototype.CreatePolygon = function () {};
BABYLON.TrailMesh.prototype.ExtrudePolygon = function () {};
BABYLON.TrailMesh.prototype.ExtrudeShape = function () {};
BABYLON.TrailMesh.prototype.ExtrudeShapeCustom = function () {};
BABYLON.TrailMesh.prototype.CreateLathe = function () {};
BABYLON.TrailMesh.prototype.CreatePlane = function () {};
BABYLON.TrailMesh.prototype.CreateGround = function () {};
BABYLON.TrailMesh.prototype.CreateTiledGround = function () {};
BABYLON.TrailMesh.prototype.CreateGroundFromHeightMap = function () {};
BABYLON.TrailMesh.prototype.CreateTube = function () {};
BABYLON.TrailMesh.prototype.CreatePolyhedron = function () {};
BABYLON.TrailMesh.prototype.CreateIcoSphere = function () {};
BABYLON.TrailMesh.prototype.CreateDecal = function () {};
BABYLON.TrailMesh.prototype.MinMax = function () {};
BABYLON.TrailMesh.prototype.Center = function () {};
BABYLON.TrailMesh.prototype.MergeMeshes = function () {};
BABYLON.TrailMesh.prototype.FRONTSIDE = 0;
BABYLON.TrailMesh.prototype.BACKSIDE = 1;
BABYLON.TrailMesh.prototype.DOUBLESIDE = 2;
BABYLON.TrailMesh.prototype.DEFAULTSIDE = 0;
BABYLON.TrailMesh.prototype.NO_CAP = 0;
BABYLON.TrailMesh.prototype.CAP_START = 1;
BABYLON.TrailMesh.prototype.CAP_END = 2;
BABYLON.TrailMesh.prototype.CAP_ALL = 3;
BABYLON.TrailMesh.prototype.NO_FLIP = 0;
BABYLON.TrailMesh.prototype.FLIP_TILE = 1;
BABYLON.TrailMesh.prototype.ROTATE_TILE = 2;
BABYLON.TrailMesh.prototype.FLIP_ROW = 3;
BABYLON.TrailMesh.prototype.ROTATE_ROW = 4;
BABYLON.TrailMesh.prototype.FLIP_N_ROTATE_TILE = 5;
BABYLON.TrailMesh.prototype.FLIP_N_ROTATE_ROW = 6;
BABYLON.TrailMesh.prototype.CENTER = 0;
BABYLON.TrailMesh.prototype.LEFT = 1;
BABYLON.TrailMesh.prototype.RIGHT = 2;
BABYLON.TrailMesh.prototype.TOP = 3;
BABYLON.TrailMesh.prototype.BOTTOM = 4;
BABYLON.TrailMesh.prototype.BILLBOARDMODE_NONE = 0;
BABYLON.TrailMesh.prototype.BILLBOARDMODE_X = 1;
BABYLON.TrailMesh.prototype.BILLBOARDMODE_Y = 2;
BABYLON.TrailMesh.prototype.BILLBOARDMODE_Z = 4;
BABYLON.TrailMesh.prototype.BILLBOARDMODE_ALL = 7;
BABYLON.TrailMesh.prototype.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.TrailMesh.prototype.OCCLUSION_TYPE_NONE = 0;
BABYLON.TrailMesh.prototype.OCCLUSION_TYPE_OPTIMISTIC = 1;
BABYLON.TrailMesh.prototype.OCCLUSION_TYPE_STRICT = 2;
BABYLON.TrailMesh.prototype.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
BABYLON.TrailMesh.prototype.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
BABYLON.TrailMesh.prototype.CULLINGSTRATEGY_STANDARD = 0;
BABYLON.TrailMesh.prototype.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
BABYLON.TrailMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
BABYLON.TrailMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
BABYLON.TrailMesh.prototype.AddNodeConstructor = function () {};
BABYLON.TrailMesh.prototype.Construct = function () {};
BABYLON.TrailMesh.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.InstancedMesh = function () {}
BABYLON.InstancedMesh.prototype.BILLBOARDMODE_NONE = 0;
BABYLON.InstancedMesh.prototype.BILLBOARDMODE_X = 1;
BABYLON.InstancedMesh.prototype.BILLBOARDMODE_Y = 2;
BABYLON.InstancedMesh.prototype.BILLBOARDMODE_Z = 4;
BABYLON.InstancedMesh.prototype.BILLBOARDMODE_ALL = 7;
BABYLON.InstancedMesh.prototype.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.InstancedMesh.prototype.OCCLUSION_TYPE_NONE = 0;
BABYLON.InstancedMesh.prototype.OCCLUSION_TYPE_OPTIMISTIC = 1;
BABYLON.InstancedMesh.prototype.OCCLUSION_TYPE_STRICT = 2;
BABYLON.InstancedMesh.prototype.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
BABYLON.InstancedMesh.prototype.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
BABYLON.InstancedMesh.prototype.CULLINGSTRATEGY_STANDARD = 0;
BABYLON.InstancedMesh.prototype.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
BABYLON.InstancedMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
BABYLON.InstancedMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
BABYLON.InstancedMesh.prototype.Parse = function () {};
BABYLON.InstancedMesh.prototype.AddNodeConstructor = function () {};
BABYLON.InstancedMesh.prototype.Construct = function () {};
BABYLON.InstancedMesh.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.LinesMesh = function () {}
BABYLON.LinesMesh.prototype.Parse = function () {};
BABYLON.LinesMesh.prototype.CreateRibbon = function () {};
BABYLON.LinesMesh.prototype.CreateDisc = function () {};
BABYLON.LinesMesh.prototype.CreateBox = function () {};
BABYLON.LinesMesh.prototype.CreateSphere = function () {};
BABYLON.LinesMesh.prototype.CreateHemisphere = function () {};
BABYLON.LinesMesh.prototype.CreateCylinder = function () {};
BABYLON.LinesMesh.prototype.CreateTorus = function () {};
BABYLON.LinesMesh.prototype.CreateTorusKnot = function () {};
BABYLON.LinesMesh.prototype.CreateLines = function () {};
BABYLON.LinesMesh.prototype.CreateDashedLines = function () {};
BABYLON.LinesMesh.prototype.CreatePolygon = function () {};
BABYLON.LinesMesh.prototype.ExtrudePolygon = function () {};
BABYLON.LinesMesh.prototype.ExtrudeShape = function () {};
BABYLON.LinesMesh.prototype.ExtrudeShapeCustom = function () {};
BABYLON.LinesMesh.prototype.CreateLathe = function () {};
BABYLON.LinesMesh.prototype.CreatePlane = function () {};
BABYLON.LinesMesh.prototype.CreateGround = function () {};
BABYLON.LinesMesh.prototype.CreateTiledGround = function () {};
BABYLON.LinesMesh.prototype.CreateGroundFromHeightMap = function () {};
BABYLON.LinesMesh.prototype.CreateTube = function () {};
BABYLON.LinesMesh.prototype.CreatePolyhedron = function () {};
BABYLON.LinesMesh.prototype.CreateIcoSphere = function () {};
BABYLON.LinesMesh.prototype.CreateDecal = function () {};
BABYLON.LinesMesh.prototype.MinMax = function () {};
BABYLON.LinesMesh.prototype.Center = function () {};
BABYLON.LinesMesh.prototype.MergeMeshes = function () {};
BABYLON.LinesMesh.prototype.FRONTSIDE = 0;
BABYLON.LinesMesh.prototype.BACKSIDE = 1;
BABYLON.LinesMesh.prototype.DOUBLESIDE = 2;
BABYLON.LinesMesh.prototype.DEFAULTSIDE = 0;
BABYLON.LinesMesh.prototype.NO_CAP = 0;
BABYLON.LinesMesh.prototype.CAP_START = 1;
BABYLON.LinesMesh.prototype.CAP_END = 2;
BABYLON.LinesMesh.prototype.CAP_ALL = 3;
BABYLON.LinesMesh.prototype.NO_FLIP = 0;
BABYLON.LinesMesh.prototype.FLIP_TILE = 1;
BABYLON.LinesMesh.prototype.ROTATE_TILE = 2;
BABYLON.LinesMesh.prototype.FLIP_ROW = 3;
BABYLON.LinesMesh.prototype.ROTATE_ROW = 4;
BABYLON.LinesMesh.prototype.FLIP_N_ROTATE_TILE = 5;
BABYLON.LinesMesh.prototype.FLIP_N_ROTATE_ROW = 6;
BABYLON.LinesMesh.prototype.CENTER = 0;
BABYLON.LinesMesh.prototype.LEFT = 1;
BABYLON.LinesMesh.prototype.RIGHT = 2;
BABYLON.LinesMesh.prototype.TOP = 3;
BABYLON.LinesMesh.prototype.BOTTOM = 4;
BABYLON.LinesMesh.prototype.BILLBOARDMODE_NONE = 0;
BABYLON.LinesMesh.prototype.BILLBOARDMODE_X = 1;
BABYLON.LinesMesh.prototype.BILLBOARDMODE_Y = 2;
BABYLON.LinesMesh.prototype.BILLBOARDMODE_Z = 4;
BABYLON.LinesMesh.prototype.BILLBOARDMODE_ALL = 7;
BABYLON.LinesMesh.prototype.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.LinesMesh.prototype.OCCLUSION_TYPE_NONE = 0;
BABYLON.LinesMesh.prototype.OCCLUSION_TYPE_OPTIMISTIC = 1;
BABYLON.LinesMesh.prototype.OCCLUSION_TYPE_STRICT = 2;
BABYLON.LinesMesh.prototype.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
BABYLON.LinesMesh.prototype.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
BABYLON.LinesMesh.prototype.CULLINGSTRATEGY_STANDARD = 0;
BABYLON.LinesMesh.prototype.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
BABYLON.LinesMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
BABYLON.LinesMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
BABYLON.LinesMesh.prototype.AddNodeConstructor = function () {};
BABYLON.LinesMesh.prototype.Construct = function () {};
BABYLON.LinesMesh.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.InstancedLinesMesh = function () {}
BABYLON.InstancedLinesMesh.prototype.BILLBOARDMODE_NONE = 0;
BABYLON.InstancedLinesMesh.prototype.BILLBOARDMODE_X = 1;
BABYLON.InstancedLinesMesh.prototype.BILLBOARDMODE_Y = 2;
BABYLON.InstancedLinesMesh.prototype.BILLBOARDMODE_Z = 4;
BABYLON.InstancedLinesMesh.prototype.BILLBOARDMODE_ALL = 7;
BABYLON.InstancedLinesMesh.prototype.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.InstancedLinesMesh.prototype.OCCLUSION_TYPE_NONE = 0;
BABYLON.InstancedLinesMesh.prototype.OCCLUSION_TYPE_OPTIMISTIC = 1;
BABYLON.InstancedLinesMesh.prototype.OCCLUSION_TYPE_STRICT = 2;
BABYLON.InstancedLinesMesh.prototype.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
BABYLON.InstancedLinesMesh.prototype.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
BABYLON.InstancedLinesMesh.prototype.CULLINGSTRATEGY_STANDARD = 0;
BABYLON.InstancedLinesMesh.prototype.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
BABYLON.InstancedLinesMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
BABYLON.InstancedLinesMesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
BABYLON.InstancedLinesMesh.prototype.Parse = function () {};
BABYLON.InstancedLinesMesh.prototype.AddNodeConstructor = function () {};
BABYLON.InstancedLinesMesh.prototype.Construct = function () {};
BABYLON.InstancedLinesMesh.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.Mesh = function () {}
BABYLON.Mesh.Parse = function () {};
BABYLON.Mesh.CreateRibbon = function () {};
BABYLON.Mesh.CreateDisc = function () {};
BABYLON.Mesh.CreateBox = function () {};
BABYLON.Mesh.CreateSphere = function () {};
BABYLON.Mesh.CreateHemisphere = function () {};
BABYLON.Mesh.CreateCylinder = function () {};
BABYLON.Mesh.CreateTorus = function () {};
BABYLON.Mesh.CreateTorusKnot = function () {};
BABYLON.Mesh.CreateLines = function () {};
BABYLON.Mesh.CreateDashedLines = function () {};
BABYLON.Mesh.CreatePolygon = function () {};
BABYLON.Mesh.ExtrudePolygon = function () {};
BABYLON.Mesh.ExtrudeShape = function () {};
BABYLON.Mesh.ExtrudeShapeCustom = function () {};
BABYLON.Mesh.CreateLathe = function () {};
BABYLON.Mesh.CreatePlane = function () {};
BABYLON.Mesh.CreateGround = function () {};
BABYLON.Mesh.CreateTiledGround = function () {};
BABYLON.Mesh.CreateGroundFromHeightMap = function () {};
BABYLON.Mesh.CreateTube = function () {};
BABYLON.Mesh.CreatePolyhedron = function () {};
BABYLON.Mesh.CreateIcoSphere = function () {};
BABYLON.Mesh.CreateDecal = function () {};
BABYLON.Mesh.MinMax = function () {};
BABYLON.Mesh.Center = function () {};
BABYLON.Mesh.MergeMeshes = function () {};
BABYLON.Mesh.FRONTSIDE = 0;
BABYLON.Mesh.BACKSIDE = 1;
BABYLON.Mesh.DOUBLESIDE = 2;
BABYLON.Mesh.DEFAULTSIDE = 0;
BABYLON.Mesh.NO_CAP = 0;
BABYLON.Mesh.CAP_START = 1;
BABYLON.Mesh.CAP_END = 2;
BABYLON.Mesh.CAP_ALL = 3;
BABYLON.Mesh.NO_FLIP = 0;
BABYLON.Mesh.FLIP_TILE = 1;
BABYLON.Mesh.ROTATE_TILE = 2;
BABYLON.Mesh.FLIP_ROW = 3;
BABYLON.Mesh.ROTATE_ROW = 4;
BABYLON.Mesh.FLIP_N_ROTATE_TILE = 5;
BABYLON.Mesh.FLIP_N_ROTATE_ROW = 6;
BABYLON.Mesh.CENTER = 0;
BABYLON.Mesh.LEFT = 1;
BABYLON.Mesh.RIGHT = 2;
BABYLON.Mesh.TOP = 3;
BABYLON.Mesh.BOTTOM = 4;
BABYLON.Mesh.prototype.BILLBOARDMODE_NONE = 0;
BABYLON.Mesh.prototype.BILLBOARDMODE_X = 1;
BABYLON.Mesh.prototype.BILLBOARDMODE_Y = 2;
BABYLON.Mesh.prototype.BILLBOARDMODE_Z = 4;
BABYLON.Mesh.prototype.BILLBOARDMODE_ALL = 7;
BABYLON.Mesh.prototype.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.Mesh.prototype.OCCLUSION_TYPE_NONE = 0;
BABYLON.Mesh.prototype.OCCLUSION_TYPE_OPTIMISTIC = 1;
BABYLON.Mesh.prototype.OCCLUSION_TYPE_STRICT = 2;
BABYLON.Mesh.prototype.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0;
BABYLON.Mesh.prototype.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1;
BABYLON.Mesh.prototype.CULLINGSTRATEGY_STANDARD = 0;
BABYLON.Mesh.prototype.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
BABYLON.Mesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
BABYLON.Mesh.prototype.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
BABYLON.Mesh.prototype.AddNodeConstructor = function () {};
BABYLON.Mesh.prototype.Construct = function () {};
BABYLON.Mesh.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.VertexData = function () {}
BABYLON.VertexData.prototype.set = function () {};
BABYLON.VertexData.prototype.applyToMesh = function () {};
BABYLON.VertexData.prototype.applyToGeometry = function () {};
BABYLON.VertexData.prototype.updateMesh = function () {};
BABYLON.VertexData.prototype.updateGeometry = function () {};
BABYLON.VertexData.prototype.transform = function () {};
BABYLON.VertexData.prototype.merge = function () {};
BABYLON.VertexData.prototype.serialize = function () {};


/** @constructor */
BABYLON.MeshBuilder = function () {}


/** @constructor */
BABYLON.SimplificationSettings = function () {}
// BABYLON.SimplificationSettings.quality = undefined;
// BABYLON.SimplificationSettings.distance = undefined;
// BABYLON.SimplificationSettings.optimizeMesh = undefined;


/** @constructor */
BABYLON.SimplificationQueue = function () {}
BABYLON.SimplificationQueue.running = false;
BABYLON.SimplificationQueue.prototype.addTask = function () {};
BABYLON.SimplificationQueue.prototype.executeNext = function () {};
BABYLON.SimplificationQueue.prototype.runSimplification = function () {};
BABYLON.SimplificationQueue.prototype.getSimplifier = function () {};


BABYLON.SimplificationType = {}

/** @constructor */
BABYLON.SimplicationQueueSceneComponent = function () {}
BABYLON.SimplicationQueueSceneComponent.name = "SimplificationQueue";
// BABYLON.SimplicationQueueSceneComponent.scene = undefined;
BABYLON.SimplicationQueueSceneComponent.prototype.register = function () {};
BABYLON.SimplicationQueueSceneComponent.prototype.rebuild = function () {};
BABYLON.SimplicationQueueSceneComponent.prototype.dispose = function () {};


/** @constructor */
BABYLON.Polygon = function () {}


/** @constructor */
BABYLON.PolygonMeshBuilder = function () {}


/** @constructor */
BABYLON.BaseSubMesh = function () {}
// BABYLON.BaseSubMesh.prototype.materialDefines = undefined;
// BABYLON.BaseSubMesh.prototype.effect = undefined;
BABYLON.BaseSubMesh.prototype.setEffect = function () {};


/** @constructor */
BABYLON.SubMesh = function () {}
BABYLON.SubMesh.AddToMesh = function () {};
BABYLON.SubMesh.CreateFromIndices = function () {};


/** @constructor */
BABYLON.MeshLODLevel = function () {}
// BABYLON.MeshLODLevel.distance = undefined;
// BABYLON.MeshLODLevel.mesh = undefined;


/** @constructor */
BABYLON.TransformNode = function () {}
BABYLON.TransformNode.Parse = function () {};
BABYLON.TransformNode.BILLBOARDMODE_NONE = 0;
BABYLON.TransformNode.BILLBOARDMODE_X = 1;
BABYLON.TransformNode.BILLBOARDMODE_Y = 2;
BABYLON.TransformNode.BILLBOARDMODE_Z = 4;
BABYLON.TransformNode.BILLBOARDMODE_ALL = 7;
BABYLON.TransformNode.BILLBOARDMODE_USE_POSITION = 128;
BABYLON.TransformNode.prototype.AddNodeConstructor = function () {};
BABYLON.TransformNode.prototype.Construct = function () {};
BABYLON.TransformNode.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.BoxBuilder = function () {}


/** @constructor */
BABYLON.SphereBuilder = function () {}


/** @constructor */
BABYLON.CylinderBuilder = function () {}


/** @constructor */
BABYLON.TorusBuilder = function () {}


/** @constructor */
BABYLON.LinesBuilder = function () {}


/** @constructor */
BABYLON.PlaneBuilder = function () {}


/** @constructor */
BABYLON.GroundBuilder = function () {}


/** @constructor */
BABYLON.DataBuffer = function () {}
BABYLON.DataBuffer.references = 0;
BABYLON.DataBuffer.capacity = 0;
BABYLON.DataBuffer.is32Bits = false;
BABYLON.DataBuffer.prototype.underlyingResource = null;


/** @constructor */
BABYLON.WebGLDataBuffer = function () {}
BABYLON.WebGLDataBuffer.references = 0;
BABYLON.WebGLDataBuffer.capacity = 0;
BABYLON.WebGLDataBuffer.is32Bits = false;
BABYLON.WebGLDataBuffer.prototype.constructor = function () {};
// BABYLON.WebGLDataBuffer.prototype.underlyingResource = undefined;


/** @constructor */
BABYLON.DracoCompression = function () {}
BABYLON.DracoCompression.prototype.dispose = function () {};
BABYLON.DracoCompression.prototype.whenReadyAsync = function () {};
BABYLON.DracoCompression.prototype.decodeMeshAsync = function () {};


/** @constructor */
BABYLON.TiledBoxBuilder = function () {}


/** @constructor */
BABYLON.DiscBuilder = function () {}


/** @constructor */
BABYLON.RibbonBuilder = function () {}


/** @constructor */
BABYLON.HemisphereBuilder = function () {}


/** @constructor */
BABYLON.TorusKnotBuilder = function () {}


/** @constructor */
BABYLON.PolygonBuilder = function () {}


/** @constructor */
BABYLON.ShapeBuilder = function () {}


/** @constructor */
BABYLON.LatheBuilder = function () {}


/** @constructor */
BABYLON.TiledPlaneBuilder = function () {}


/** @constructor */
BABYLON.TubeBuilder = function () {}


/** @constructor */
BABYLON.PolyhedronBuilder = function () {}


/** @constructor */
BABYLON.IcoSphereBuilder = function () {}


/** @constructor */
BABYLON.DecalBuilder = function () {}


/** @constructor */
BABYLON.MorphTarget = function () {}
// BABYLON.MorphTarget.name = undefined;
BABYLON.MorphTarget.animations = {};
BABYLON.MorphTarget.onInfluenceChanged = {};
// BABYLON.MorphTarget.prototype.influence = undefined;
// BABYLON.MorphTarget.prototype.animationPropertiesOverride = undefined;
// BABYLON.MorphTarget.prototype.uniqueId = undefined;
BABYLON.MorphTarget.prototype.hasPositions = false;
BABYLON.MorphTarget.prototype.hasNormals = false;
BABYLON.MorphTarget.prototype.hasTangents = false;
BABYLON.MorphTarget.prototype.hasUVs = false;
BABYLON.MorphTarget.prototype.setPositions = function () {};
BABYLON.MorphTarget.prototype.getPositions = function () {};
BABYLON.MorphTarget.prototype.setNormals = function () {};
BABYLON.MorphTarget.prototype.getNormals = function () {};
BABYLON.MorphTarget.prototype.setTangents = function () {};
BABYLON.MorphTarget.prototype.getTangents = function () {};
BABYLON.MorphTarget.prototype.setUVs = function () {};
BABYLON.MorphTarget.prototype.getUVs = function () {};
BABYLON.MorphTarget.prototype.clone = function () {};
BABYLON.MorphTarget.prototype.serialize = function () {};
BABYLON.MorphTarget.prototype.getClassName = function () {};


/** @constructor */
BABYLON.MorphTargetManager = function () {}
BABYLON.MorphTargetManager.enableNormalMorphing = true;
BABYLON.MorphTargetManager.enableTangentMorphing = true;
BABYLON.MorphTargetManager.enableUVMorphing = true;
// BABYLON.MorphTargetManager.prototype.uniqueId = undefined;
// BABYLON.MorphTargetManager.prototype.vertexCount = undefined;
// BABYLON.MorphTargetManager.prototype.supportsNormals = undefined;
// BABYLON.MorphTargetManager.prototype.supportsTangents = undefined;
// BABYLON.MorphTargetManager.prototype.supportsUVs = undefined;
// BABYLON.MorphTargetManager.prototype.numTargets = undefined;
// BABYLON.MorphTargetManager.prototype.numInfluencers = undefined;
// BABYLON.MorphTargetManager.prototype.influences = undefined;
BABYLON.MorphTargetManager.prototype.getActiveTarget = function () {};
BABYLON.MorphTargetManager.prototype.getTarget = function () {};
BABYLON.MorphTargetManager.prototype.addTarget = function () {};
BABYLON.MorphTargetManager.prototype.removeTarget = function () {};
BABYLON.MorphTargetManager.prototype.clone = function () {};
BABYLON.MorphTargetManager.prototype.serialize = function () {};
BABYLON.MorphTargetManager.prototype.synchronize = function () {};


/** @constructor */
BABYLON.RecastJSPlugin = function () {}


/** @constructor */
BABYLON.RecastJSCrowd = function () {}


/** @constructor */
BABYLON.Node = function () {}
BABYLON.Node.AddNodeConstructor = function () {};
BABYLON.Node.Construct = function () {};
BABYLON.Node.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.Database = function () {}
BABYLON.Database.IsUASupportingBlobStorage = true;
BABYLON.Database.IDBStorageEnabled = false;


/** @constructor */
BABYLON.BaseParticleSystem = function () {}
BABYLON.BaseParticleSystem.animations = {};
BABYLON.BaseParticleSystem.renderingGroupId = 0;
BABYLON.BaseParticleSystem.emitter = {};
BABYLON.BaseParticleSystem.emitRate = 10;
BABYLON.BaseParticleSystem.manualEmitCount = -1;
BABYLON.BaseParticleSystem.updateSpeed = 0.01;
BABYLON.BaseParticleSystem.targetStopDuration = 0;
BABYLON.BaseParticleSystem.disposeOnStop = false;
BABYLON.BaseParticleSystem.minEmitPower = 1;
BABYLON.BaseParticleSystem.maxEmitPower = 1;
BABYLON.BaseParticleSystem.minLifeTime = 1;
BABYLON.BaseParticleSystem.maxLifeTime = 1;
BABYLON.BaseParticleSystem.minSize = 1;
BABYLON.BaseParticleSystem.maxSize = 1;
BABYLON.BaseParticleSystem.minScaleX = 1;
BABYLON.BaseParticleSystem.maxScaleX = 1;
BABYLON.BaseParticleSystem.minScaleY = 1;
BABYLON.BaseParticleSystem.maxScaleY = 1;
BABYLON.BaseParticleSystem.minInitialRotation = 0;
BABYLON.BaseParticleSystem.maxInitialRotation = 0;
BABYLON.BaseParticleSystem.minAngularSpeed = 0;
BABYLON.BaseParticleSystem.maxAngularSpeed = 0;
BABYLON.BaseParticleSystem.layerMask = 268435455;
BABYLON.BaseParticleSystem.customShader = null;
BABYLON.BaseParticleSystem.preventAutoStart = false;
BABYLON.BaseParticleSystem.noiseStrength = {};
BABYLON.BaseParticleSystem.onAnimationEnd = null;
BABYLON.BaseParticleSystem.blendMode = 0;
BABYLON.BaseParticleSystem.forceDepthWrite = false;
BABYLON.BaseParticleSystem.preWarmCycles = 0;
BABYLON.BaseParticleSystem.preWarmStepOffset = 1;
BABYLON.BaseParticleSystem.spriteCellChangeSpeed = 1;
BABYLON.BaseParticleSystem.startSpriteCellID = 0;
BABYLON.BaseParticleSystem.endSpriteCellID = 0;
BABYLON.BaseParticleSystem.spriteCellWidth = 0;
BABYLON.BaseParticleSystem.spriteCellHeight = 0;
BABYLON.BaseParticleSystem.spriteRandomStartCell = false;
BABYLON.BaseParticleSystem.translationPivot = {};
BABYLON.BaseParticleSystem.beginAnimationOnStart = false;
BABYLON.BaseParticleSystem.beginAnimationFrom = 0;
BABYLON.BaseParticleSystem.beginAnimationTo = 60;
BABYLON.BaseParticleSystem.beginAnimationLoop = false;
BABYLON.BaseParticleSystem.worldOffset = {};
BABYLON.BaseParticleSystem.gravity = {};
BABYLON.BaseParticleSystem.startDelay = 0;
BABYLON.BaseParticleSystem.limitVelocityDamping = 0.4;
BABYLON.BaseParticleSystem.color1 = {};
BABYLON.BaseParticleSystem.color2 = {};
BABYLON.BaseParticleSystem.colorDead = {};
BABYLON.BaseParticleSystem.textureMask = {};
BABYLON.BaseParticleSystem.billboardMode = 7;
// BABYLON.BaseParticleSystem.id = undefined;
// BABYLON.BaseParticleSystem.name = undefined;
// BABYLON.BaseParticleSystem.prototype.noiseTexture = undefined;
// BABYLON.BaseParticleSystem.prototype.isAnimationSheetEnabled = undefined;
BABYLON.BaseParticleSystem.prototype.getScene = function () {};
BABYLON.BaseParticleSystem.prototype.getDragGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getLimitVelocityGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getColorGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getSizeGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getColorRemapGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getAlphaRemapGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getLifeTimeGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getAngularSpeedGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getVelocityGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getStartSizeGradients = function () {};
BABYLON.BaseParticleSystem.prototype.getEmitRateGradients = function () {};
// BABYLON.BaseParticleSystem.prototype.direction1 = undefined;
// BABYLON.BaseParticleSystem.prototype.direction2 = undefined;
// BABYLON.BaseParticleSystem.prototype.minEmitBox = undefined;
// BABYLON.BaseParticleSystem.prototype.maxEmitBox = undefined;
// BABYLON.BaseParticleSystem.prototype.isBillboardBased = undefined;
// BABYLON.BaseParticleSystem.prototype.imageProcessingConfiguration = undefined;
BABYLON.BaseParticleSystem.prototype.createPointEmitter = function () {};
BABYLON.BaseParticleSystem.prototype.createHemisphericEmitter = function () {};
BABYLON.BaseParticleSystem.prototype.createSphereEmitter = function () {};
BABYLON.BaseParticleSystem.prototype.createDirectedSphereEmitter = function () {};
BABYLON.BaseParticleSystem.prototype.createCylinderEmitter = function () {};
BABYLON.BaseParticleSystem.prototype.createDirectedCylinderEmitter = function () {};
BABYLON.BaseParticleSystem.prototype.createConeEmitter = function () {};
BABYLON.BaseParticleSystem.prototype.createBoxEmitter = function () {};


/** @constructor */
BABYLON.GPUParticleSystem = function () {}
BABYLON.GPUParticleSystem.IsSupported = false;
BABYLON.GPUParticleSystem.Parse = function () {};
BABYLON.GPUParticleSystem.prototype.BLENDMODE_ONEONE = 0;
BABYLON.GPUParticleSystem.prototype.BLENDMODE_STANDARD = 1;
BABYLON.GPUParticleSystem.prototype.BLENDMODE_ADD = 2;
BABYLON.GPUParticleSystem.prototype.BLENDMODE_MULTIPLY = 3;
BABYLON.GPUParticleSystem.prototype.BLENDMODE_MULTIPLYADD = 4;


/** @constructor */
BABYLON.Particle = function () {}


/** @constructor */
BABYLON.ParticleHelper = function () {}


/** @constructor */
BABYLON.ParticleSystem = function () {}
BABYLON.ParticleSystem.Parse = function () {};
BABYLON.ParticleSystem.BILLBOARDMODE_Y = 2;
BABYLON.ParticleSystem.BILLBOARDMODE_ALL = 7;
BABYLON.ParticleSystem.BILLBOARDMODE_STRETCHED = 8;
BABYLON.ParticleSystem.prototype.BLENDMODE_ONEONE = 0;
BABYLON.ParticleSystem.prototype.BLENDMODE_STANDARD = 1;
BABYLON.ParticleSystem.prototype.BLENDMODE_ADD = 2;
BABYLON.ParticleSystem.prototype.BLENDMODE_MULTIPLY = 3;
BABYLON.ParticleSystem.prototype.BLENDMODE_MULTIPLYADD = 4;


/** @constructor */
BABYLON.ParticleSystemSet = function () {}
BABYLON.ParticleSystemSet.systems = {};
// BABYLON.ParticleSystemSet.prototype.emitterNode = undefined;
BABYLON.ParticleSystemSet.prototype.setEmitterAsSphere = function () {};
BABYLON.ParticleSystemSet.prototype.start = function () {};
BABYLON.ParticleSystemSet.prototype.dispose = function () {};
BABYLON.ParticleSystemSet.prototype.serialize = function () {};


/** @constructor */
BABYLON.SolidParticle = function () {}
// BABYLON.SolidParticle.idx = undefined;
// BABYLON.SolidParticle.id = undefined;
BABYLON.SolidParticle.color = {};
BABYLON.SolidParticle.position = {};
BABYLON.SolidParticle.rotation = {};
BABYLON.SolidParticle.scaling = {};
BABYLON.SolidParticle.uvs = {};
BABYLON.SolidParticle.velocity = {};
BABYLON.SolidParticle.pivot = {};
BABYLON.SolidParticle.translateFromPivot = false;
BABYLON.SolidParticle.alive = true;
BABYLON.SolidParticle.isVisible = true;
// BABYLON.SolidParticle.shapeId = undefined;
// BABYLON.SolidParticle.idxInShape = undefined;
BABYLON.SolidParticle.parentId = null;
BABYLON.SolidParticle.materialIndex = null;
BABYLON.SolidParticle.cullingStrategy = 1;
BABYLON.SolidParticle.prototype.copyToRef = function () {};
// BABYLON.SolidParticle.prototype.scale = undefined;
// BABYLON.SolidParticle.prototype.quaternion = undefined;
BABYLON.SolidParticle.prototype.intersectsMesh = function () {};
BABYLON.SolidParticle.prototype.isInFrustum = function () {};
BABYLON.SolidParticle.prototype.getRotationMatrix = function () {};


/** @constructor */
BABYLON.ModelShape = function () {}


/** @constructor */
BABYLON.DepthSortedParticle = function () {}
// BABYLON.DepthSortedParticle.ind = undefined;
// BABYLON.DepthSortedParticle.indicesLength = undefined;
BABYLON.DepthSortedParticle.sqDistance = 0;
// BABYLON.DepthSortedParticle.materialIndex = undefined;


/** @constructor */
BABYLON.SolidParticleSystem = function () {}


/** @constructor */
BABYLON.CloudPoint = function () {}
// BABYLON.CloudPoint.idx = undefined;
BABYLON.CloudPoint.color = {};
BABYLON.CloudPoint.position = {};
BABYLON.CloudPoint.rotation = {};
BABYLON.CloudPoint.uv = {};
BABYLON.CloudPoint.velocity = {};
BABYLON.CloudPoint.pivot = {};
BABYLON.CloudPoint.translateFromPivot = false;
// BABYLON.CloudPoint.groupId = undefined;
// BABYLON.CloudPoint.idxInGroup = undefined;
BABYLON.CloudPoint.parentId = null;
// BABYLON.CloudPoint.prototype.size = undefined;
// BABYLON.CloudPoint.prototype.quaternion = undefined;
BABYLON.CloudPoint.prototype.intersectsMesh = function () {};
BABYLON.CloudPoint.prototype.getRotationMatrix = function () {};


/** @constructor */
BABYLON.PointsGroup = function () {}
// BABYLON.PointsGroup.groupID = undefined;


BABYLON.PointColor = {}

/** @constructor */
BABYLON.PointsCloudSystem = function () {}
BABYLON.PointsCloudSystem.particles = {};
BABYLON.PointsCloudSystem.nbParticles = 0;
BABYLON.PointsCloudSystem.counter = 0;
BABYLON.PointsCloudSystem.vars = {};
// BABYLON.PointsCloudSystem.name = undefined;
BABYLON.PointsCloudSystem.prototype.buildMeshAsync = function () {};
BABYLON.PointsCloudSystem.prototype.addPoints = function () {};
BABYLON.PointsCloudSystem.prototype.addSurfacePoints = function () {};
BABYLON.PointsCloudSystem.prototype.addVolumePoints = function () {};
BABYLON.PointsCloudSystem.prototype.setParticles = function () {};
BABYLON.PointsCloudSystem.prototype.dispose = function () {};
BABYLON.PointsCloudSystem.prototype.refreshVisibleSize = function () {};
BABYLON.PointsCloudSystem.prototype.setVisibilityBox = function () {};
// BABYLON.PointsCloudSystem.prototype.isAlwaysVisible = undefined;
// BABYLON.PointsCloudSystem.prototype.computeParticleRotation = undefined;
// BABYLON.PointsCloudSystem.prototype.computeParticleColor = undefined;
// BABYLON.PointsCloudSystem.prototype.computeParticleTexture = undefined;
// BABYLON.PointsCloudSystem.prototype.computeBoundingBox = undefined;
BABYLON.PointsCloudSystem.prototype.initParticles = function () {};
BABYLON.PointsCloudSystem.prototype.recycleParticle = function () {};
BABYLON.PointsCloudSystem.prototype.updateParticle = function () {};
BABYLON.PointsCloudSystem.prototype.beforeUpdateParticles = function () {};
BABYLON.PointsCloudSystem.prototype.afterUpdateParticles = function () {};


BABYLON.SubEmitterType = {}

/** @constructor */
BABYLON.SubEmitter = function () {}
BABYLON.SubEmitter.Parse = function () {};


/** @constructor */
BABYLON.BoxParticleEmitter = function () {}
BABYLON.BoxParticleEmitter.direction1 = {};
BABYLON.BoxParticleEmitter.direction2 = {};
BABYLON.BoxParticleEmitter.minEmitBox = {};
BABYLON.BoxParticleEmitter.maxEmitBox = {};
BABYLON.BoxParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.BoxParticleEmitter.prototype.startPositionFunction = function () {};
BABYLON.BoxParticleEmitter.prototype.clone = function () {};
BABYLON.BoxParticleEmitter.prototype.applyToShader = function () {};
BABYLON.BoxParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.BoxParticleEmitter.prototype.getClassName = function () {};
BABYLON.BoxParticleEmitter.prototype.serialize = function () {};
BABYLON.BoxParticleEmitter.prototype.parse = function () {};


/** @constructor */
BABYLON.ConeParticleEmitter = function () {}
BABYLON.ConeParticleEmitter.directionRandomizer = 0;
BABYLON.ConeParticleEmitter.radiusRange = 1;
BABYLON.ConeParticleEmitter.heightRange = 1;
BABYLON.ConeParticleEmitter.emitFromSpawnPointOnly = false;
// BABYLON.ConeParticleEmitter.prototype.radius = undefined;
// BABYLON.ConeParticleEmitter.prototype.angle = undefined;
BABYLON.ConeParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.ConeParticleEmitter.prototype.startPositionFunction = function () {};
BABYLON.ConeParticleEmitter.prototype.clone = function () {};
BABYLON.ConeParticleEmitter.prototype.applyToShader = function () {};
BABYLON.ConeParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.ConeParticleEmitter.prototype.getClassName = function () {};
BABYLON.ConeParticleEmitter.prototype.serialize = function () {};
BABYLON.ConeParticleEmitter.prototype.parse = function () {};


/** @constructor */
BABYLON.CylinderParticleEmitter = function () {}
BABYLON.CylinderParticleEmitter.radius = 1;
BABYLON.CylinderParticleEmitter.height = 1;
BABYLON.CylinderParticleEmitter.radiusRange = 1;
BABYLON.CylinderParticleEmitter.directionRandomizer = 0;
BABYLON.CylinderParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.CylinderParticleEmitter.prototype.startPositionFunction = function () {};
BABYLON.CylinderParticleEmitter.prototype.clone = function () {};
BABYLON.CylinderParticleEmitter.prototype.applyToShader = function () {};
BABYLON.CylinderParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.CylinderParticleEmitter.prototype.getClassName = function () {};
BABYLON.CylinderParticleEmitter.prototype.serialize = function () {};
BABYLON.CylinderParticleEmitter.prototype.parse = function () {};


/** @constructor */
BABYLON.CylinderDirectedParticleEmitter = function () {}
BABYLON.CylinderDirectedParticleEmitter.radius = 1;
BABYLON.CylinderDirectedParticleEmitter.height = 1;
BABYLON.CylinderDirectedParticleEmitter.radiusRange = 1;
BABYLON.CylinderDirectedParticleEmitter.directionRandomizer = 0;
BABYLON.CylinderDirectedParticleEmitter.direction1 = {};
BABYLON.CylinderDirectedParticleEmitter.direction2 = {};
BABYLON.CylinderDirectedParticleEmitter.prototype.constructor = function () {};
BABYLON.CylinderDirectedParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.CylinderDirectedParticleEmitter.prototype.clone = function () {};
BABYLON.CylinderDirectedParticleEmitter.prototype.applyToShader = function () {};
BABYLON.CylinderDirectedParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.CylinderDirectedParticleEmitter.prototype.getClassName = function () {};
BABYLON.CylinderDirectedParticleEmitter.prototype.serialize = function () {};
BABYLON.CylinderDirectedParticleEmitter.prototype.parse = function () {};
BABYLON.CylinderDirectedParticleEmitter.prototype.startPositionFunction = function () {};


/** @constructor */
BABYLON.HemisphericParticleEmitter = function () {}
BABYLON.HemisphericParticleEmitter.radius = 1;
BABYLON.HemisphericParticleEmitter.radiusRange = 1;
BABYLON.HemisphericParticleEmitter.directionRandomizer = 0;
BABYLON.HemisphericParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.HemisphericParticleEmitter.prototype.startPositionFunction = function () {};
BABYLON.HemisphericParticleEmitter.prototype.clone = function () {};
BABYLON.HemisphericParticleEmitter.prototype.applyToShader = function () {};
BABYLON.HemisphericParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.HemisphericParticleEmitter.prototype.getClassName = function () {};
BABYLON.HemisphericParticleEmitter.prototype.serialize = function () {};
BABYLON.HemisphericParticleEmitter.prototype.parse = function () {};


/** @constructor */
BABYLON.PointParticleEmitter = function () {}
BABYLON.PointParticleEmitter.direction1 = {};
BABYLON.PointParticleEmitter.direction2 = {};
BABYLON.PointParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.PointParticleEmitter.prototype.startPositionFunction = function () {};
BABYLON.PointParticleEmitter.prototype.clone = function () {};
BABYLON.PointParticleEmitter.prototype.applyToShader = function () {};
BABYLON.PointParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.PointParticleEmitter.prototype.getClassName = function () {};
BABYLON.PointParticleEmitter.prototype.serialize = function () {};
BABYLON.PointParticleEmitter.prototype.parse = function () {};


/** @constructor */
BABYLON.SphereParticleEmitter = function () {}
BABYLON.SphereParticleEmitter.radius = 1;
BABYLON.SphereParticleEmitter.radiusRange = 1;
BABYLON.SphereParticleEmitter.directionRandomizer = 0;
BABYLON.SphereParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.SphereParticleEmitter.prototype.startPositionFunction = function () {};
BABYLON.SphereParticleEmitter.prototype.clone = function () {};
BABYLON.SphereParticleEmitter.prototype.applyToShader = function () {};
BABYLON.SphereParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.SphereParticleEmitter.prototype.getClassName = function () {};
BABYLON.SphereParticleEmitter.prototype.serialize = function () {};
BABYLON.SphereParticleEmitter.prototype.parse = function () {};


/** @constructor */
BABYLON.SphereDirectedParticleEmitter = function () {}
BABYLON.SphereDirectedParticleEmitter.radius = 1;
BABYLON.SphereDirectedParticleEmitter.radiusRange = 1;
BABYLON.SphereDirectedParticleEmitter.directionRandomizer = 0;
BABYLON.SphereDirectedParticleEmitter.direction1 = {};
BABYLON.SphereDirectedParticleEmitter.direction2 = {};
BABYLON.SphereDirectedParticleEmitter.prototype.constructor = function () {};
BABYLON.SphereDirectedParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.SphereDirectedParticleEmitter.prototype.clone = function () {};
BABYLON.SphereDirectedParticleEmitter.prototype.applyToShader = function () {};
BABYLON.SphereDirectedParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.SphereDirectedParticleEmitter.prototype.getClassName = function () {};
BABYLON.SphereDirectedParticleEmitter.prototype.serialize = function () {};
BABYLON.SphereDirectedParticleEmitter.prototype.parse = function () {};
BABYLON.SphereDirectedParticleEmitter.prototype.startPositionFunction = function () {};


/** @constructor */
BABYLON.CustomParticleEmitter = function () {}
BABYLON.CustomParticleEmitter.particlePositionGenerator = function () {};
BABYLON.CustomParticleEmitter.particleDestinationGenerator = function () {};
BABYLON.CustomParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.CustomParticleEmitter.prototype.startPositionFunction = function () {};
BABYLON.CustomParticleEmitter.prototype.clone = function () {};
BABYLON.CustomParticleEmitter.prototype.applyToShader = function () {};
BABYLON.CustomParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.CustomParticleEmitter.prototype.getClassName = function () {};
BABYLON.CustomParticleEmitter.prototype.serialize = function () {};
BABYLON.CustomParticleEmitter.prototype.parse = function () {};


/** @constructor */
BABYLON.MeshParticleEmitter = function () {}
// BABYLON.MeshParticleEmitter.mesh = undefined;
BABYLON.MeshParticleEmitter.direction1 = {};
BABYLON.MeshParticleEmitter.direction2 = {};
BABYLON.MeshParticleEmitter.useMeshNormalsForDirection = true;
BABYLON.MeshParticleEmitter.prototype.startDirectionFunction = function () {};
BABYLON.MeshParticleEmitter.prototype.startPositionFunction = function () {};
BABYLON.MeshParticleEmitter.prototype.clone = function () {};
BABYLON.MeshParticleEmitter.prototype.applyToShader = function () {};
BABYLON.MeshParticleEmitter.prototype.getEffectDefines = function () {};
BABYLON.MeshParticleEmitter.prototype.getClassName = function () {};
BABYLON.MeshParticleEmitter.prototype.serialize = function () {};
BABYLON.MeshParticleEmitter.prototype.parse = function () {};


/** @constructor */
BABYLON.PhysicsEngine = function () {}
BABYLON.PhysicsEngine.DefaultPluginFactory = function () {};
BABYLON.PhysicsEngine.Epsilon = 0.001;


/** @constructor */
BABYLON.PhysicsEngineSceneComponent = function () {}


/** @constructor */
BABYLON.PhysicsHelper = function () {}


/** @constructor */
BABYLON.PhysicsRadialExplosionEventOptions = function () {}
BABYLON.PhysicsRadialExplosionEventOptions.radius = 5;
BABYLON.PhysicsRadialExplosionEventOptions.strength = 10;
BABYLON.PhysicsRadialExplosionEventOptions.falloff = 0;
BABYLON.PhysicsRadialExplosionEventOptions.sphere = {};


/** @constructor */
BABYLON.PhysicsUpdraftEventOptions = function () {}
BABYLON.PhysicsUpdraftEventOptions.radius = 5;
BABYLON.PhysicsUpdraftEventOptions.strength = 10;
BABYLON.PhysicsUpdraftEventOptions.height = 10;
BABYLON.PhysicsUpdraftEventOptions.updraftMode = 0;


/** @constructor */
BABYLON.PhysicsVortexEventOptions = function () {}
BABYLON.PhysicsVortexEventOptions.radius = 5;
BABYLON.PhysicsVortexEventOptions.strength = 10;
BABYLON.PhysicsVortexEventOptions.height = 10;
BABYLON.PhysicsVortexEventOptions.centripetalForceThreshold = 0.7;
BABYLON.PhysicsVortexEventOptions.centripetalForceMultiplier = 5;
BABYLON.PhysicsVortexEventOptions.centrifugalForceMultiplier = 0.5;
BABYLON.PhysicsVortexEventOptions.updraftForceMultiplier = 0.02;


BABYLON.PhysicsRadialImpulseFalloff = {}

BABYLON.PhysicsUpdraftMode = {}

/** @constructor */
BABYLON.PhysicsImpostor = function () {}
// BABYLON.PhysicsImpostor.object = undefined;
// BABYLON.PhysicsImpostor.type = undefined;
BABYLON.PhysicsImpostor.soft = false;
BABYLON.PhysicsImpostor.segments = 0;
BABYLON.PhysicsImpostor.beforeStep = function () {};
BABYLON.PhysicsImpostor.afterStep = function () {};
BABYLON.PhysicsImpostor.onCollideEvent = null;
BABYLON.PhysicsImpostor.onCollide = function () {};
// BABYLON.PhysicsImpostor.prototype.isDisposed = undefined;
BABYLON.PhysicsImpostor.prototype.mass = 0;
BABYLON.PhysicsImpostor.prototype.friction = 0;
BABYLON.PhysicsImpostor.prototype.restitution = 0;
BABYLON.PhysicsImpostor.prototype.pressure = 0;
BABYLON.PhysicsImpostor.prototype.stiffness = 0;
BABYLON.PhysicsImpostor.prototype.velocityIterations = 0;
BABYLON.PhysicsImpostor.prototype.positionIterations = 0;
BABYLON.PhysicsImpostor.prototype.isBodyInitRequired = function () {};
BABYLON.PhysicsImpostor.prototype.setScalingUpdated = function () {};
BABYLON.PhysicsImpostor.prototype.forceUpdate = function () {};
// BABYLON.PhysicsImpostor.prototype.physicsBody = undefined;
// BABYLON.PhysicsImpostor.prototype.parent = undefined;
BABYLON.PhysicsImpostor.prototype.resetUpdateFlags = function () {};
BABYLON.PhysicsImpostor.prototype.getObjectExtendSize = function () {};
BABYLON.PhysicsImpostor.prototype.getObjectCenter = function () {};
BABYLON.PhysicsImpostor.prototype.getParam = function () {};
BABYLON.PhysicsImpostor.prototype.setParam = function () {};
BABYLON.PhysicsImpostor.prototype.setMass = function () {};
BABYLON.PhysicsImpostor.prototype.getLinearVelocity = function () {};
BABYLON.PhysicsImpostor.prototype.setLinearVelocity = function () {};
BABYLON.PhysicsImpostor.prototype.getAngularVelocity = function () {};
BABYLON.PhysicsImpostor.prototype.setAngularVelocity = function () {};
BABYLON.PhysicsImpostor.prototype.executeNativeFunction = function () {};
BABYLON.PhysicsImpostor.prototype.registerBeforePhysicsStep = function () {};
BABYLON.PhysicsImpostor.prototype.unregisterBeforePhysicsStep = function () {};
BABYLON.PhysicsImpostor.prototype.registerAfterPhysicsStep = function () {};
BABYLON.PhysicsImpostor.prototype.unregisterAfterPhysicsStep = function () {};
BABYLON.PhysicsImpostor.prototype.registerOnPhysicsCollide = function () {};
BABYLON.PhysicsImpostor.prototype.unregisterOnPhysicsCollide = function () {};
BABYLON.PhysicsImpostor.prototype.getParentsRotation = function () {};
BABYLON.PhysicsImpostor.prototype.applyForce = function () {};
BABYLON.PhysicsImpostor.prototype.applyImpulse = function () {};
BABYLON.PhysicsImpostor.prototype.createJoint = function () {};
BABYLON.PhysicsImpostor.prototype.addJoint = function () {};
BABYLON.PhysicsImpostor.prototype.addAnchor = function () {};
BABYLON.PhysicsImpostor.prototype.addHook = function () {};
BABYLON.PhysicsImpostor.prototype.sleep = function () {};
BABYLON.PhysicsImpostor.prototype.wakeUp = function () {};
BABYLON.PhysicsImpostor.prototype.clone = function () {};
BABYLON.PhysicsImpostor.prototype.dispose = function () {};
BABYLON.PhysicsImpostor.prototype.setDeltaPosition = function () {};
BABYLON.PhysicsImpostor.prototype.setDeltaRotation = function () {};
BABYLON.PhysicsImpostor.prototype.getBoxSizeToRef = function () {};
BABYLON.PhysicsImpostor.prototype.getRadius = function () {};
BABYLON.PhysicsImpostor.prototype.syncBoneWithImpostor = function () {};
BABYLON.PhysicsImpostor.prototype.syncImpostorWithBone = function () {};


/** @constructor */
BABYLON.PhysicsJoint = function () {}
BABYLON.PhysicsJoint.DistanceJoint = 0;
BABYLON.PhysicsJoint.HingeJoint = 1;
BABYLON.PhysicsJoint.BallAndSocketJoint = 2;
BABYLON.PhysicsJoint.WheelJoint = 3;
BABYLON.PhysicsJoint.SliderJoint = 4;
BABYLON.PhysicsJoint.PrismaticJoint = 5;
BABYLON.PhysicsJoint.UniversalJoint = 6;
BABYLON.PhysicsJoint.Hinge2Joint = 3;
BABYLON.PhysicsJoint.PointToPointJoint = 8;
BABYLON.PhysicsJoint.SpringJoint = 9;
BABYLON.PhysicsJoint.LockJoint = 10;


/** @constructor */
BABYLON.DistanceJoint = function () {}
BABYLON.DistanceJoint.prototype.DistanceJoint = 0;
BABYLON.DistanceJoint.prototype.HingeJoint = 1;
BABYLON.DistanceJoint.prototype.BallAndSocketJoint = 2;
BABYLON.DistanceJoint.prototype.WheelJoint = 3;
BABYLON.DistanceJoint.prototype.SliderJoint = 4;
BABYLON.DistanceJoint.prototype.PrismaticJoint = 5;
BABYLON.DistanceJoint.prototype.UniversalJoint = 6;
BABYLON.DistanceJoint.prototype.Hinge2Joint = 3;
BABYLON.DistanceJoint.prototype.PointToPointJoint = 8;
BABYLON.DistanceJoint.prototype.SpringJoint = 9;
BABYLON.DistanceJoint.prototype.LockJoint = 10;


/** @constructor */
BABYLON.MotorEnabledJoint = function () {}
BABYLON.MotorEnabledJoint.prototype.DistanceJoint = 0;
BABYLON.MotorEnabledJoint.prototype.HingeJoint = 1;
BABYLON.MotorEnabledJoint.prototype.BallAndSocketJoint = 2;
BABYLON.MotorEnabledJoint.prototype.WheelJoint = 3;
BABYLON.MotorEnabledJoint.prototype.SliderJoint = 4;
BABYLON.MotorEnabledJoint.prototype.PrismaticJoint = 5;
BABYLON.MotorEnabledJoint.prototype.UniversalJoint = 6;
BABYLON.MotorEnabledJoint.prototype.Hinge2Joint = 3;
BABYLON.MotorEnabledJoint.prototype.PointToPointJoint = 8;
BABYLON.MotorEnabledJoint.prototype.SpringJoint = 9;
BABYLON.MotorEnabledJoint.prototype.LockJoint = 10;


/** @constructor */
BABYLON.HingeJoint = function () {}
BABYLON.HingeJoint.prototype.DistanceJoint = 0;
BABYLON.HingeJoint.prototype.HingeJoint = 1;
BABYLON.HingeJoint.prototype.BallAndSocketJoint = 2;
BABYLON.HingeJoint.prototype.WheelJoint = 3;
BABYLON.HingeJoint.prototype.SliderJoint = 4;
BABYLON.HingeJoint.prototype.PrismaticJoint = 5;
BABYLON.HingeJoint.prototype.UniversalJoint = 6;
BABYLON.HingeJoint.prototype.Hinge2Joint = 3;
BABYLON.HingeJoint.prototype.PointToPointJoint = 8;
BABYLON.HingeJoint.prototype.SpringJoint = 9;
BABYLON.HingeJoint.prototype.LockJoint = 10;


/** @constructor */
BABYLON.Hinge2Joint = function () {}
BABYLON.Hinge2Joint.prototype.DistanceJoint = 0;
BABYLON.Hinge2Joint.prototype.HingeJoint = 1;
BABYLON.Hinge2Joint.prototype.BallAndSocketJoint = 2;
BABYLON.Hinge2Joint.prototype.WheelJoint = 3;
BABYLON.Hinge2Joint.prototype.SliderJoint = 4;
BABYLON.Hinge2Joint.prototype.PrismaticJoint = 5;
BABYLON.Hinge2Joint.prototype.UniversalJoint = 6;
BABYLON.Hinge2Joint.prototype.Hinge2Joint = 3;
BABYLON.Hinge2Joint.prototype.PointToPointJoint = 8;
BABYLON.Hinge2Joint.prototype.SpringJoint = 9;
BABYLON.Hinge2Joint.prototype.LockJoint = 10;


/** @constructor */
BABYLON.CannonJSPlugin = function () {}


/** @constructor */
BABYLON.AmmoJSPlugin = function () {}
BABYLON.AmmoJSPlugin.DISABLE_COLLISION_FLAG = 4;
BABYLON.AmmoJSPlugin.KINEMATIC_FLAG = 2;
BABYLON.AmmoJSPlugin.DISABLE_DEACTIVATION_FLAG = 4;


/** @constructor */
BABYLON.OimoJSPlugin = function () {}


/** @constructor */
BABYLON.AnaglyphPostProcess = function () {}


/** @constructor */
BABYLON.BlackAndWhitePostProcess = function () {}


/** @constructor */
BABYLON.BloomEffect = function () {}


/** @constructor */
BABYLON.BloomMergePostProcess = function () {}


/** @constructor */
BABYLON.BlurPostProcess = function () {}
// BABYLON.BlurPostProcess.name = undefined;
BABYLON.BlurPostProcess.width = -1;
BABYLON.BlurPostProcess.height = -1;
BABYLON.BlurPostProcess.autoClear = true;
BABYLON.BlurPostProcess.alphaMode = 0;
BABYLON.BlurPostProcess.animations = {};
BABYLON.BlurPostProcess.enablePixelPerfectMode = false;
BABYLON.BlurPostProcess.forceFullscreenViewport = true;
BABYLON.BlurPostProcess.scaleMode = 1;
BABYLON.BlurPostProcess.alwaysForcePOT = false;
BABYLON.BlurPostProcess.adaptScaleToCurrentViewport = false;
BABYLON.BlurPostProcess.onActivateObservable = {};
BABYLON.BlurPostProcess.onSizeChangedObservable = {};
BABYLON.BlurPostProcess.onApplyObservable = {};
BABYLON.BlurPostProcess.onBeforeRenderObservable = {};
BABYLON.BlurPostProcess.onAfterRenderObservable = {};
BABYLON.BlurPostProcess.renderTargetSamplingMode = 2;
// BABYLON.BlurPostProcess.direction = undefined;
BABYLON.BlurPostProcess.blockCompilation = false;
BABYLON.BlurPostProcess.prototype.constructor = function () {};
// BABYLON.BlurPostProcess.prototype.kernel = undefined;
// BABYLON.BlurPostProcess.prototype.packedFloat = undefined;
BABYLON.BlurPostProcess.prototype.updateEffect = function () {};
// BABYLON.BlurPostProcess.prototype.samples = undefined;
BABYLON.BlurPostProcess.prototype.getEffectName = function () {};
// BABYLON.BlurPostProcess.prototype.onActivate = undefined;
// BABYLON.BlurPostProcess.prototype.onSizeChanged = undefined;
// BABYLON.BlurPostProcess.prototype.onApply = undefined;
// BABYLON.BlurPostProcess.prototype.onBeforeRender = undefined;
// BABYLON.BlurPostProcess.prototype.onAfterRender = undefined;
// BABYLON.BlurPostProcess.prototype.inputTexture = undefined;
BABYLON.BlurPostProcess.prototype.getCamera = function () {};
// BABYLON.BlurPostProcess.prototype.texelSize = undefined;
BABYLON.BlurPostProcess.prototype.getClassName = function () {};
BABYLON.BlurPostProcess.prototype.getEngine = function () {};
BABYLON.BlurPostProcess.prototype.getEffect = function () {};
BABYLON.BlurPostProcess.prototype.shareOutputWith = function () {};
BABYLON.BlurPostProcess.prototype.useOwnOutput = function () {};
BABYLON.BlurPostProcess.prototype.isReusable = function () {};
BABYLON.BlurPostProcess.prototype.markTextureDirty = function () {};
BABYLON.BlurPostProcess.prototype.activate = function () {};
// BABYLON.BlurPostProcess.prototype.isSupported = undefined;
BABYLON.BlurPostProcess.prototype.aspectRatio = NaN;
BABYLON.BlurPostProcess.prototype.isReady = function () {};
BABYLON.BlurPostProcess.prototype.apply = function () {};
BABYLON.BlurPostProcess.prototype.dispose = function () {};


/** @constructor */
BABYLON.ChromaticAberrationPostProcess = function () {}


/** @constructor */
BABYLON.CircleOfConfusionPostProcess = function () {}


/** @constructor */
BABYLON.ColorCorrectionPostProcess = function () {}


/** @constructor */
BABYLON.ConvolutionPostProcess = function () {}
BABYLON.ConvolutionPostProcess.EdgeDetect0Kernel = {};
BABYLON.ConvolutionPostProcess.EdgeDetect1Kernel = {};
BABYLON.ConvolutionPostProcess.EdgeDetect2Kernel = {};
BABYLON.ConvolutionPostProcess.SharpenKernel = {};
BABYLON.ConvolutionPostProcess.EmbossKernel = {};
BABYLON.ConvolutionPostProcess.GaussianKernel = {};


/** @constructor */
BABYLON.DepthOfFieldBlurPostProcess = function () {}
// BABYLON.DepthOfFieldBlurPostProcess.name = undefined;
BABYLON.DepthOfFieldBlurPostProcess.width = -1;
BABYLON.DepthOfFieldBlurPostProcess.height = -1;
BABYLON.DepthOfFieldBlurPostProcess.autoClear = true;
BABYLON.DepthOfFieldBlurPostProcess.alphaMode = 0;
BABYLON.DepthOfFieldBlurPostProcess.animations = {};
BABYLON.DepthOfFieldBlurPostProcess.enablePixelPerfectMode = false;
BABYLON.DepthOfFieldBlurPostProcess.forceFullscreenViewport = true;
BABYLON.DepthOfFieldBlurPostProcess.scaleMode = 1;
BABYLON.DepthOfFieldBlurPostProcess.alwaysForcePOT = false;
BABYLON.DepthOfFieldBlurPostProcess.adaptScaleToCurrentViewport = false;
BABYLON.DepthOfFieldBlurPostProcess.onActivateObservable = {};
BABYLON.DepthOfFieldBlurPostProcess.onSizeChangedObservable = {};
BABYLON.DepthOfFieldBlurPostProcess.onApplyObservable = {};
BABYLON.DepthOfFieldBlurPostProcess.onBeforeRenderObservable = {};
BABYLON.DepthOfFieldBlurPostProcess.onAfterRenderObservable = {};
BABYLON.DepthOfFieldBlurPostProcess.renderTargetSamplingMode = 2;
// BABYLON.DepthOfFieldBlurPostProcess.direction = undefined;
BABYLON.DepthOfFieldBlurPostProcess.blockCompilation = false;
BABYLON.DepthOfFieldBlurPostProcess.prototype.constructor = function () {};
// BABYLON.DepthOfFieldBlurPostProcess.prototype.kernel = undefined;
// BABYLON.DepthOfFieldBlurPostProcess.prototype.packedFloat = undefined;
BABYLON.DepthOfFieldBlurPostProcess.prototype.updateEffect = function () {};
// BABYLON.DepthOfFieldBlurPostProcess.prototype.samples = undefined;
BABYLON.DepthOfFieldBlurPostProcess.prototype.getEffectName = function () {};
// BABYLON.DepthOfFieldBlurPostProcess.prototype.onActivate = undefined;
// BABYLON.DepthOfFieldBlurPostProcess.prototype.onSizeChanged = undefined;
// BABYLON.DepthOfFieldBlurPostProcess.prototype.onApply = undefined;
// BABYLON.DepthOfFieldBlurPostProcess.prototype.onBeforeRender = undefined;
// BABYLON.DepthOfFieldBlurPostProcess.prototype.onAfterRender = undefined;
// BABYLON.DepthOfFieldBlurPostProcess.prototype.inputTexture = undefined;
BABYLON.DepthOfFieldBlurPostProcess.prototype.getCamera = function () {};
// BABYLON.DepthOfFieldBlurPostProcess.prototype.texelSize = undefined;
BABYLON.DepthOfFieldBlurPostProcess.prototype.getClassName = function () {};
BABYLON.DepthOfFieldBlurPostProcess.prototype.getEngine = function () {};
BABYLON.DepthOfFieldBlurPostProcess.prototype.getEffect = function () {};
BABYLON.DepthOfFieldBlurPostProcess.prototype.shareOutputWith = function () {};
BABYLON.DepthOfFieldBlurPostProcess.prototype.useOwnOutput = function () {};
BABYLON.DepthOfFieldBlurPostProcess.prototype.isReusable = function () {};
BABYLON.DepthOfFieldBlurPostProcess.prototype.markTextureDirty = function () {};
BABYLON.DepthOfFieldBlurPostProcess.prototype.activate = function () {};
// BABYLON.DepthOfFieldBlurPostProcess.prototype.isSupported = undefined;
BABYLON.DepthOfFieldBlurPostProcess.prototype.aspectRatio = NaN;
BABYLON.DepthOfFieldBlurPostProcess.prototype.isReady = function () {};
BABYLON.DepthOfFieldBlurPostProcess.prototype.apply = function () {};
BABYLON.DepthOfFieldBlurPostProcess.prototype.dispose = function () {};


BABYLON.DepthOfFieldEffectBlurLevel = {}

/** @constructor */
BABYLON.DepthOfFieldEffect = function () {}


/** @constructor */
BABYLON.DepthOfFieldMergePostProcessOptions = function () {}


/** @constructor */
BABYLON.DepthOfFieldMergePostProcess = function () {}


/** @constructor */
BABYLON.DisplayPassPostProcess = function () {}


/** @constructor */
BABYLON.ExtractHighlightsPostProcess = function () {}


/** @constructor */
BABYLON.FilterPostProcess = function () {}


/** @constructor */
BABYLON.FxaaPostProcess = function () {}


/** @constructor */
BABYLON.GrainPostProcess = function () {}


/** @constructor */
BABYLON.HighlightsPostProcess = function () {}


/** @constructor */
BABYLON.ImageProcessingPostProcess = function () {}


/** @constructor */
BABYLON.MotionBlurPostProcess = function () {}


/** @constructor */
BABYLON.PassPostProcess = function () {}


/** @constructor */
BABYLON.PassCubePostProcess = function () {}


/** @constructor */
BABYLON.PostProcess = function () {}


/** @constructor */
BABYLON.PostProcessManager = function () {}
BABYLON.PostProcessManager.prototype.directRender = function () {};
BABYLON.PostProcessManager.prototype.dispose = function () {};


/** @constructor */
BABYLON.RefractionPostProcess = function () {}


/** @constructor */
BABYLON.SharpenPostProcess = function () {}


/** @constructor */
BABYLON.StereoscopicInterlacePostProcessI = function () {}


/** @constructor */
BABYLON.StereoscopicInterlacePostProcess = function () {}


BABYLON.TonemappingOperator = {}

/** @constructor */
BABYLON.TonemapPostProcess = function () {}


/** @constructor */
BABYLON.VolumetricLightScatteringPostProcess = function () {}
BABYLON.VolumetricLightScatteringPostProcess.CreateDefaultMesh = function () {};


/** @constructor */
BABYLON.VRDistortionCorrectionPostProcess = function () {}


/** @constructor */
BABYLON.VRMultiviewToSingleviewPostProcess = function () {}


/** @constructor */
BABYLON.ScreenSpaceReflectionPostProcess = function () {}


/** @constructor */
BABYLON.PostProcessRenderEffect = function () {}
BABYLON.PostProcessRenderEffect.prototype.isSupported = true;
BABYLON.PostProcessRenderEffect.prototype.getPostProcesses = function () {};


/** @constructor */
BABYLON.PostProcessRenderPipeline = function () {}
// BABYLON.PostProcessRenderPipeline.engine = undefined;
// BABYLON.PostProcessRenderPipeline.prototype.name = undefined;
// BABYLON.PostProcessRenderPipeline.prototype.cameras = undefined;
BABYLON.PostProcessRenderPipeline.prototype.getClassName = function () {};
BABYLON.PostProcessRenderPipeline.prototype.isSupported = true;
BABYLON.PostProcessRenderPipeline.prototype.addEffect = function () {};
BABYLON.PostProcessRenderPipeline.prototype.dispose = function () {};


/** @constructor */
BABYLON.PostProcessRenderPipelineManager = function () {}
BABYLON.PostProcessRenderPipelineManager.prototype.supportedPipelines = {};
BABYLON.PostProcessRenderPipelineManager.prototype.addPipeline = function () {};
BABYLON.PostProcessRenderPipelineManager.prototype.attachCamerasToRenderPipeline = function () {};
BABYLON.PostProcessRenderPipelineManager.prototype.detachCamerasFromRenderPipeline = function () {};
BABYLON.PostProcessRenderPipelineManager.prototype.enableEffectInPipeline = function () {};
BABYLON.PostProcessRenderPipelineManager.prototype.disableEffectInPipeline = function () {};
BABYLON.PostProcessRenderPipelineManager.prototype.update = function () {};
BABYLON.PostProcessRenderPipelineManager.prototype.dispose = function () {};


/** @constructor */
BABYLON.PostProcessRenderPipelineManagerSceneComponent = function () {}
BABYLON.PostProcessRenderPipelineManagerSceneComponent.name = "PostProcessRenderPipelineManager";
// BABYLON.PostProcessRenderPipelineManagerSceneComponent.scene = undefined;
BABYLON.PostProcessRenderPipelineManagerSceneComponent.prototype.register = function () {};
BABYLON.PostProcessRenderPipelineManagerSceneComponent.prototype.rebuild = function () {};
BABYLON.PostProcessRenderPipelineManagerSceneComponent.prototype.dispose = function () {};


/** @constructor */
BABYLON.DefaultRenderingPipeline = function () {}
BABYLON.DefaultRenderingPipeline.Parse = function () {};


/** @constructor */
BABYLON.LensRenderingPipeline = function () {}


/** @constructor */
BABYLON.SSAO2RenderingPipeline = function () {}
BABYLON.SSAO2RenderingPipeline.IsSupported = false;
BABYLON.SSAO2RenderingPipeline.Parse = function () {};


/** @constructor */
BABYLON.SSAORenderingPipeline = function () {}


/** @constructor */
BABYLON.StandardRenderingPipeline = function () {}
BABYLON.StandardRenderingPipeline.Parse = function () {};
BABYLON.StandardRenderingPipeline.LuminanceSteps = 6;


/** @constructor */
BABYLON.ReflectionProbe = function () {}
BABYLON.ReflectionProbe.Parse = function () {};


/** @constructor */
BABYLON.BoundingBoxRenderer = function () {}


/** @constructor */
BABYLON.DepthRenderer = function () {}


/** @constructor */
BABYLON.DepthRendererSceneComponent = function () {}
BABYLON.DepthRendererSceneComponent.name = "DepthRenderer";
// BABYLON.DepthRendererSceneComponent.scene = undefined;
BABYLON.DepthRendererSceneComponent.prototype.register = function () {};
BABYLON.DepthRendererSceneComponent.prototype.rebuild = function () {};
BABYLON.DepthRendererSceneComponent.prototype.dispose = function () {};


/** @constructor */
BABYLON.EdgesRenderer = function () {}


/** @constructor */
BABYLON.LineEdgesRenderer = function () {}


/** @constructor */
BABYLON.GeometryBufferRenderer = function () {}
BABYLON.GeometryBufferRenderer.POSITION_TEXTURE_TYPE = 1;
BABYLON.GeometryBufferRenderer.VELOCITY_TEXTURE_TYPE = 2;
BABYLON.GeometryBufferRenderer.REFLECTIVITY_TEXTURE_TYPE = 3;


/** @constructor */
BABYLON.GeometryBufferRendererSceneComponent = function () {}
BABYLON.GeometryBufferRendererSceneComponent.name = "GeometryBufferRenderer";
// BABYLON.GeometryBufferRendererSceneComponent.scene = undefined;
BABYLON.GeometryBufferRendererSceneComponent.prototype.register = function () {};
BABYLON.GeometryBufferRendererSceneComponent.prototype.rebuild = function () {};
BABYLON.GeometryBufferRendererSceneComponent.prototype.dispose = function () {};


/** @constructor */
BABYLON.OutlineRenderer = function () {}


/** @constructor */
BABYLON.RenderingGroup = function () {}
// BABYLON.RenderingGroup.index = undefined;
// BABYLON.RenderingGroup.prototype.opaqueSortCompareFn = undefined;
// BABYLON.RenderingGroup.prototype.alphaTestSortCompareFn = undefined;
// BABYLON.RenderingGroup.prototype.transparentSortCompareFn = undefined;
BABYLON.RenderingGroup.prototype.render = function () {};
BABYLON.RenderingGroup.prototype.renderOpaqueSorted = function () {};
BABYLON.RenderingGroup.prototype.renderAlphaTestSorted = function () {};
BABYLON.RenderingGroup.prototype.renderTransparentSorted = function () {};
BABYLON.RenderingGroup.prototype.prepare = function () {};
BABYLON.RenderingGroup.prototype.dispose = function () {};
BABYLON.RenderingGroup.prototype.dispatch = function () {};
BABYLON.RenderingGroup.prototype.dispatchSprites = function () {};
BABYLON.RenderingGroup.prototype.dispatchParticles = function () {};


/** @constructor */
BABYLON.RenderingGroupInfo = function () {}


/** @constructor */
BABYLON.RenderingManager = function () {}
BABYLON.RenderingManager.prototype.render = function () {};
BABYLON.RenderingManager.prototype.reset = function () {};
BABYLON.RenderingManager.prototype.dispose = function () {};
BABYLON.RenderingManager.prototype.freeRenderingGroups = function () {};
BABYLON.RenderingManager.prototype.dispatchSprites = function () {};
BABYLON.RenderingManager.prototype.dispatchParticles = function () {};
BABYLON.RenderingManager.prototype.dispatch = function () {};
BABYLON.RenderingManager.prototype.setRenderingOrder = function () {};
BABYLON.RenderingManager.prototype.setRenderingAutoClearDepthStencil = function () {};
BABYLON.RenderingManager.prototype.getAutoClearDepthStencilSetup = function () {};


/** @constructor */
BABYLON.UtilityLayerRenderer = function () {}
// BABYLON.UtilityLayerRenderer.DefaultUtilityLayer = undefined;
// BABYLON.UtilityLayerRenderer.DefaultKeepDepthUtilityLayer = undefined;


/** @constructor */
BABYLON.Scene = function () {}
BABYLON.Scene.rootNodes = {};
BABYLON.Scene.cameras = {};
BABYLON.Scene.lights = {};
BABYLON.Scene.meshes = {};
BABYLON.Scene.skeletons = {};
BABYLON.Scene.particleSystems = {};
BABYLON.Scene.animations = {};
BABYLON.Scene.animationGroups = {};
BABYLON.Scene.multiMaterials = {};
BABYLON.Scene.materials = {};
BABYLON.Scene.morphTargetManagers = {};
BABYLON.Scene.geometries = {};
BABYLON.Scene.transformNodes = {};
BABYLON.Scene.actionManagers = {};
BABYLON.Scene.textures = {};
BABYLON.Scene.cameraToUseForPointers = null;
BABYLON.Scene.autoClear = true;
BABYLON.Scene.autoClearDepthAndStencil = true;
BABYLON.Scene.clearColor = {};
BABYLON.Scene.ambientColor = {};
BABYLON.Scene.animationsEnabled = true;
BABYLON.Scene.useConstantAnimationDeltaTime = false;
BABYLON.Scene.constantlyUpdateMeshUnderPointer = false;
BABYLON.Scene.hoverCursor = "pointer";
BABYLON.Scene.defaultCursor = "";
BABYLON.Scene.doNotHandleCursors = false;
BABYLON.Scene.preventDefaultOnPointerDown = true;
BABYLON.Scene.preventDefaultOnPointerUp = true;
BABYLON.Scene.metadata = null;
BABYLON.Scene.reservedDataStore = null;
BABYLON.Scene.disableOfflineSupportExceptionRules = {};
BABYLON.Scene.onDisposeObservable = {};
BABYLON.Scene.onBeforeRenderObservable = {};
BABYLON.Scene.onAfterRenderObservable = {};
BABYLON.Scene.onAfterRenderCameraObservable = {};
BABYLON.Scene.onBeforeAnimationsObservable = {};
BABYLON.Scene.onAfterAnimationsObservable = {};
BABYLON.Scene.onBeforeDrawPhaseObservable = {};
BABYLON.Scene.onAfterDrawPhaseObservable = {};
BABYLON.Scene.onReadyObservable = {};
BABYLON.Scene.onBeforeCameraRenderObservable = {};
BABYLON.Scene.onAfterCameraRenderObservable = {};
BABYLON.Scene.onBeforeActiveMeshesEvaluationObservable = {};
BABYLON.Scene.onAfterActiveMeshesEvaluationObservable = {};
BABYLON.Scene.onBeforeParticlesRenderingObservable = {};
BABYLON.Scene.onAfterParticlesRenderingObservable = {};
BABYLON.Scene.onDataLoadedObservable = {};
BABYLON.Scene.onNewCameraAddedObservable = {};
BABYLON.Scene.onCameraRemovedObservable = {};
BABYLON.Scene.onNewLightAddedObservable = {};
BABYLON.Scene.onLightRemovedObservable = {};
BABYLON.Scene.onNewGeometryAddedObservable = {};
BABYLON.Scene.onGeometryRemovedObservable = {};
BABYLON.Scene.onNewTransformNodeAddedObservable = {};
BABYLON.Scene.onTransformNodeRemovedObservable = {};
BABYLON.Scene.onNewMeshAddedObservable = {};
BABYLON.Scene.onMeshRemovedObservable = {};
BABYLON.Scene.onNewSkeletonAddedObservable = {};
BABYLON.Scene.onSkeletonRemovedObservable = {};
BABYLON.Scene.onNewMaterialAddedObservable = {};
BABYLON.Scene.onMaterialRemovedObservable = {};
BABYLON.Scene.onNewTextureAddedObservable = {};
BABYLON.Scene.onTextureRemovedObservable = {};
BABYLON.Scene.onBeforeRenderTargetsRenderObservable = {};
BABYLON.Scene.onAfterRenderTargetsRenderObservable = {};
BABYLON.Scene.onBeforeStepObservable = {};
BABYLON.Scene.onAfterStepObservable = {};
BABYLON.Scene.onActiveCameraChanged = {};
BABYLON.Scene.onBeforeRenderingGroupObservable = {};
BABYLON.Scene.onAfterRenderingGroupObservable = {};
BABYLON.Scene.onMeshImportedObservable = {};
BABYLON.Scene.onAnimationFileImportedObservable = {};
BABYLON.Scene.onPrePointerObservable = {};
BABYLON.Scene.onPointerObservable = {};
BABYLON.Scene.onPreKeyboardObservable = {};
BABYLON.Scene.onKeyboardObservable = {};
BABYLON.Scene.fogColor = {};
BABYLON.Scene.fogDensity = 0.1;
BABYLON.Scene.fogStart = 0;
BABYLON.Scene.fogEnd = 1000;
BABYLON.Scene.activeCameras = {};
BABYLON.Scene.particlesEnabled = true;
BABYLON.Scene.spritesEnabled = true;
BABYLON.Scene.lensFlaresEnabled = true;
BABYLON.Scene.collisionsEnabled = true;
BABYLON.Scene.gravity = {};
BABYLON.Scene.postProcessesEnabled = true;
BABYLON.Scene.postProcesses = {};
BABYLON.Scene.renderTargetsEnabled = true;
BABYLON.Scene.dumpNextRenderTargets = false;
BABYLON.Scene.customRenderTargets = {};
BABYLON.Scene.importedMeshesFiles = {};
BABYLON.Scene.probesEnabled = true;
BABYLON.Scene.proceduralTexturesEnabled = true;
BABYLON.Scene.animationTimeScale = 1;
BABYLON.Scene.dispatchAllSubMeshesOfActiveMeshes = false;
BABYLON.Scene.requireLightSorting = false;
BABYLON.Scene.geometriesByUniqueId = {};
BABYLON.Scene.getDeterministicFrameTime = function () {};
BABYLON.Scene.postProcessManager = {};
BABYLON.Scene.getActiveMeshCandidates = function () {};
BABYLON.Scene.getActiveSubMeshCandidates = function () {};
BABYLON.Scene.getIntersectingSubMeshCandidates = function () {};
BABYLON.Scene.getCollidingSubMeshCandidates = function () {};
BABYLON.Scene.useMaterialMeshMap = true;
BABYLON.Scene.useClonedMeshMap = true;
BABYLON.Scene.prototype.constructor = function () {};
// BABYLON.Scene.prototype.environmentTexture = undefined;
// BABYLON.Scene.prototype.environmentIntensity = undefined;
// BABYLON.Scene.prototype.imageProcessingConfiguration = undefined;
// BABYLON.Scene.prototype.forceWireframe = undefined;
// BABYLON.Scene.prototype.skipFrustumClipping = undefined;
// BABYLON.Scene.prototype.forcePointsCloud = undefined;
// BABYLON.Scene.prototype.animationPropertiesOverride = undefined;
// BABYLON.Scene.prototype.onDispose = undefined;
// BABYLON.Scene.prototype.beforeRender = undefined;
// BABYLON.Scene.prototype.afterRender = undefined;
// BABYLON.Scene.prototype.beforeCameraRender = undefined;
// BABYLON.Scene.prototype.afterCameraRender = undefined;
// BABYLON.Scene.prototype.unTranslatedPointer = undefined;
// BABYLON.Scene.prototype.useRightHandedSystem = undefined;
BABYLON.Scene.prototype.setStepId = function () {};
BABYLON.Scene.prototype.getStepId = function () {};
BABYLON.Scene.prototype.getInternalStep = function () {};
// BABYLON.Scene.prototype.fogEnabled = undefined;
// BABYLON.Scene.prototype.fogMode = undefined;
// BABYLON.Scene.prototype.shadowsEnabled = undefined;
// BABYLON.Scene.prototype.lightsEnabled = undefined;
// BABYLON.Scene.prototype.activeCamera = undefined;
// BABYLON.Scene.prototype.defaultMaterial = undefined;
// BABYLON.Scene.prototype.texturesEnabled = undefined;
// BABYLON.Scene.prototype.skeletonsEnabled = undefined;
BABYLON.Scene.prototype.collisionCoordinator = {};
// BABYLON.Scene.prototype.frustumPlanes = undefined;
BABYLON.Scene.prototype.getClassName = function () {};
BABYLON.Scene.prototype.setDefaultCandidateProviders = function () {};
// BABYLON.Scene.prototype.meshUnderPointer = undefined;
// BABYLON.Scene.prototype.pointerX = undefined;
// BABYLON.Scene.prototype.pointerY = undefined;
BABYLON.Scene.prototype.getCachedMaterial = function () {};
BABYLON.Scene.prototype.getCachedEffect = function () {};
BABYLON.Scene.prototype.getCachedVisibility = function () {};
BABYLON.Scene.prototype.isCachedMaterialInvalid = function () {};
BABYLON.Scene.prototype.getEngine = function () {};
BABYLON.Scene.prototype.getTotalVertices = function () {};
// BABYLON.Scene.prototype.totalVerticesPerfCounter = undefined;
BABYLON.Scene.prototype.getActiveIndices = function () {};
// BABYLON.Scene.prototype.totalActiveIndicesPerfCounter = undefined;
BABYLON.Scene.prototype.getActiveParticles = function () {};
// BABYLON.Scene.prototype.activeParticlesPerfCounter = undefined;
BABYLON.Scene.prototype.getActiveBones = function () {};
// BABYLON.Scene.prototype.activeBonesPerfCounter = undefined;
BABYLON.Scene.prototype.getActiveMeshes = function () {};
BABYLON.Scene.prototype.getAnimationRatio = function () {};
BABYLON.Scene.prototype.getRenderId = function () {};
BABYLON.Scene.prototype.getFrameId = function () {};
BABYLON.Scene.prototype.incrementRenderId = function () {};
BABYLON.Scene.prototype.simulatePointerMove = function () {};
BABYLON.Scene.prototype.simulatePointerDown = function () {};
BABYLON.Scene.prototype.simulatePointerUp = function () {};
BABYLON.Scene.prototype.isPointerCaptured = function () {};
BABYLON.Scene.prototype.attachControl = function () {};
BABYLON.Scene.prototype.detachControl = function () {};
BABYLON.Scene.prototype.isReady = function () {};
BABYLON.Scene.prototype.resetCachedMaterial = function () {};
BABYLON.Scene.prototype.registerBeforeRender = function () {};
BABYLON.Scene.prototype.unregisterBeforeRender = function () {};
BABYLON.Scene.prototype.registerAfterRender = function () {};
BABYLON.Scene.prototype.unregisterAfterRender = function () {};
BABYLON.Scene.prototype.executeOnceBeforeRender = function () {};
BABYLON.Scene.prototype.getWaitingItemsCount = function () {};
// BABYLON.Scene.prototype.isLoading = undefined;
BABYLON.Scene.prototype.executeWhenReady = function () {};
BABYLON.Scene.prototype.whenReadyAsync = function () {};
// BABYLON.Scene.prototype.animatables = undefined;
BABYLON.Scene.prototype.resetLastAnimationTimeFrame = function () {};
BABYLON.Scene.prototype.getViewMatrix = function () {};
BABYLON.Scene.prototype.getProjectionMatrix = function () {};
BABYLON.Scene.prototype.getTransformMatrix = function () {};
BABYLON.Scene.prototype.setTransformMatrix = function () {};
BABYLON.Scene.prototype.getSceneUniformBuffer = function () {};
BABYLON.Scene.prototype.getUniqueId = function () {};
BABYLON.Scene.prototype.addMesh = function () {};
BABYLON.Scene.prototype.removeMesh = function () {};
BABYLON.Scene.prototype.addTransformNode = function () {};
BABYLON.Scene.prototype.removeTransformNode = function () {};
BABYLON.Scene.prototype.removeSkeleton = function () {};
BABYLON.Scene.prototype.removeMorphTargetManager = function () {};
BABYLON.Scene.prototype.removeLight = function () {};
BABYLON.Scene.prototype.removeCamera = function () {};
BABYLON.Scene.prototype.removeParticleSystem = function () {};
BABYLON.Scene.prototype.removeAnimation = function () {};
BABYLON.Scene.prototype.stopAnimation = function () {};
BABYLON.Scene.prototype.removeAnimationGroup = function () {};
BABYLON.Scene.prototype.removeMultiMaterial = function () {};
BABYLON.Scene.prototype.removeMaterial = function () {};
BABYLON.Scene.prototype.removeActionManager = function () {};
BABYLON.Scene.prototype.removeTexture = function () {};
BABYLON.Scene.prototype.addLight = function () {};
BABYLON.Scene.prototype.sortLightsByPriority = function () {};
BABYLON.Scene.prototype.addCamera = function () {};
BABYLON.Scene.prototype.addSkeleton = function () {};
BABYLON.Scene.prototype.addParticleSystem = function () {};
BABYLON.Scene.prototype.addAnimation = function () {};
BABYLON.Scene.prototype.addAnimationGroup = function () {};
BABYLON.Scene.prototype.addMultiMaterial = function () {};
BABYLON.Scene.prototype.addMaterial = function () {};
BABYLON.Scene.prototype.addMorphTargetManager = function () {};
BABYLON.Scene.prototype.addGeometry = function () {};
BABYLON.Scene.prototype.addActionManager = function () {};
BABYLON.Scene.prototype.addTexture = function () {};
BABYLON.Scene.prototype.switchActiveCamera = function () {};
BABYLON.Scene.prototype.setActiveCameraByID = function () {};
BABYLON.Scene.prototype.setActiveCameraByName = function () {};
BABYLON.Scene.prototype.getAnimationGroupByName = function () {};
BABYLON.Scene.prototype.getMaterialByUniqueID = function () {};
BABYLON.Scene.prototype.getMaterialByID = function () {};
BABYLON.Scene.prototype.getLastMaterialByID = function () {};
BABYLON.Scene.prototype.getMaterialByName = function () {};
BABYLON.Scene.prototype.getTextureByUniqueID = function () {};
BABYLON.Scene.prototype.getCameraByID = function () {};
BABYLON.Scene.prototype.getCameraByUniqueID = function () {};
BABYLON.Scene.prototype.getCameraByName = function () {};
BABYLON.Scene.prototype.getBoneByID = function () {};
BABYLON.Scene.prototype.getBoneByName = function () {};
BABYLON.Scene.prototype.getLightByName = function () {};
BABYLON.Scene.prototype.getLightByID = function () {};
BABYLON.Scene.prototype.getLightByUniqueID = function () {};
BABYLON.Scene.prototype.getParticleSystemByID = function () {};
BABYLON.Scene.prototype.getGeometryByID = function () {};
BABYLON.Scene.prototype.pushGeometry = function () {};
BABYLON.Scene.prototype.removeGeometry = function () {};
BABYLON.Scene.prototype.getGeometries = function () {};
BABYLON.Scene.prototype.getMeshByID = function () {};
BABYLON.Scene.prototype.getMeshesByID = function () {};
BABYLON.Scene.prototype.getTransformNodeByID = function () {};
BABYLON.Scene.prototype.getTransformNodeByUniqueID = function () {};
BABYLON.Scene.prototype.getTransformNodesByID = function () {};
BABYLON.Scene.prototype.getMeshByUniqueID = function () {};
BABYLON.Scene.prototype.getLastMeshByID = function () {};
BABYLON.Scene.prototype.getLastEntryByID = function () {};
BABYLON.Scene.prototype.getNodeByID = function () {};
BABYLON.Scene.prototype.getNodeByName = function () {};
BABYLON.Scene.prototype.getMeshByName = function () {};
BABYLON.Scene.prototype.getTransformNodeByName = function () {};
BABYLON.Scene.prototype.getLastSkeletonByID = function () {};
BABYLON.Scene.prototype.getSkeletonByUniqueId = function () {};
BABYLON.Scene.prototype.getSkeletonById = function () {};
BABYLON.Scene.prototype.getSkeletonByName = function () {};
BABYLON.Scene.prototype.getMorphTargetManagerById = function () {};
BABYLON.Scene.prototype.getMorphTargetById = function () {};
BABYLON.Scene.prototype.isActiveMesh = function () {};
BABYLON.Scene.prototype.uid = "3386a392-13ae-4bc3-80f0-37d6c891f319";
BABYLON.Scene.prototype.addExternalData = function () {};
BABYLON.Scene.prototype.getExternalData = function () {};
BABYLON.Scene.prototype.getOrAddExternalDataWithFactory = function () {};
BABYLON.Scene.prototype.removeExternalData = function () {};
BABYLON.Scene.prototype.freeProcessedMaterials = function () {};
// BABYLON.Scene.prototype.blockfreeActiveMeshesAndRenderingGroups = undefined;
BABYLON.Scene.prototype.freeActiveMeshes = function () {};
BABYLON.Scene.prototype.freeRenderingGroups = function () {};
BABYLON.Scene.prototype.freezeActiveMeshes = function () {};
BABYLON.Scene.prototype.unfreezeActiveMeshes = function () {};
BABYLON.Scene.prototype.updateTransformMatrix = function () {};
BABYLON.Scene.prototype.animate = function () {};
BABYLON.Scene.prototype.render = function () {};
BABYLON.Scene.prototype.freezeMaterials = function () {};
BABYLON.Scene.prototype.unfreezeMaterials = function () {};
BABYLON.Scene.prototype.dispose = function () {};
// BABYLON.Scene.prototype.isDisposed = undefined;
BABYLON.Scene.prototype.clearCachedVertexData = function () {};
BABYLON.Scene.prototype.cleanCachedTextureBuffer = function () {};
BABYLON.Scene.prototype.getWorldExtends = function () {};
BABYLON.Scene.prototype.createPickingRay = function () {};
BABYLON.Scene.prototype.createPickingRayToRef = function () {};
BABYLON.Scene.prototype.createPickingRayInCameraSpace = function () {};
BABYLON.Scene.prototype.createPickingRayInCameraSpaceToRef = function () {};
BABYLON.Scene.prototype.pick = function () {};
BABYLON.Scene.prototype.pickWithRay = function () {};
BABYLON.Scene.prototype.multiPick = function () {};
BABYLON.Scene.prototype.multiPickWithRay = function () {};
BABYLON.Scene.prototype.setPointerOverMesh = function () {};
BABYLON.Scene.prototype.getPointerOverMesh = function () {};
BABYLON.Scene.prototype.getMeshesByTags = function () {};
BABYLON.Scene.prototype.getCamerasByTags = function () {};
BABYLON.Scene.prototype.getLightsByTags = function () {};
BABYLON.Scene.prototype.getMaterialByTags = function () {};
BABYLON.Scene.prototype.setRenderingOrder = function () {};
BABYLON.Scene.prototype.setRenderingAutoClearDepthStencil = function () {};
BABYLON.Scene.prototype.getAutoClearDepthStencilSetup = function () {};
// BABYLON.Scene.prototype.blockMaterialDirtyMechanism = undefined;
BABYLON.Scene.prototype.markAllMaterialsAsDirty = function () {};
BABYLON.Scene.prototype.beginWeightedAnimation = function () {};
BABYLON.Scene.prototype.beginAnimation = function () {};
BABYLON.Scene.prototype.beginHierarchyAnimation = function () {};
BABYLON.Scene.prototype.beginDirectAnimation = function () {};
BABYLON.Scene.prototype.beginDirectHierarchyAnimation = function () {};
BABYLON.Scene.prototype.getAnimatableByTarget = function () {};
BABYLON.Scene.prototype.getAllAnimatablesByTarget = function () {};
BABYLON.Scene.prototype.stopAllAnimations = function () {};
// BABYLON.Scene.prototype.mainSoundTrack = undefined;
BABYLON.Scene.prototype.getSoundByName = function () {};
// BABYLON.Scene.prototype.audioEnabled = undefined;
// BABYLON.Scene.prototype.headphone = undefined;
// BABYLON.Scene.prototype.audioListenerPositionProvider = undefined;
// BABYLON.Scene.prototype.audioPositioningRefreshRate = undefined;
// BABYLON.Scene.prototype.gamepadManager = undefined;
BABYLON.Scene.prototype.createOrUpdateSelectionOctree = function () {};
// BABYLON.Scene.prototype.selectionOctree = undefined;
// BABYLON.Scene.prototype.debugLayer = undefined;
BABYLON.Scene.prototype.createDefaultLight = function () {};
BABYLON.Scene.prototype.createDefaultCamera = function () {};
BABYLON.Scene.prototype.createDefaultCameraOrLight = function () {};
BABYLON.Scene.prototype.createDefaultSkybox = function () {};
BABYLON.Scene.prototype.createDefaultEnvironment = function () {};
BABYLON.Scene.prototype.createDefaultVRExperience = function () {};
BABYLON.Scene.prototype.createDefaultXRExperienceAsync = function () {};
// BABYLON.Scene.prototype.simplificationQueue = undefined;
BABYLON.Scene.prototype.getPhysicsEngine = function () {};
BABYLON.Scene.prototype.enablePhysics = function () {};
BABYLON.Scene.prototype.disablePhysicsEngine = function () {};
BABYLON.Scene.prototype.isPhysicsEnabled = function () {};
BABYLON.Scene.prototype.deleteCompoundImpostor = function () {};
// BABYLON.Scene.prototype.geometryBufferRenderer = undefined;
BABYLON.Scene.prototype.enableGeometryBufferRenderer = function () {};
BABYLON.Scene.prototype.disableGeometryBufferRenderer = function () {};
// BABYLON.Scene.prototype.postProcessRenderPipelineManager = undefined;
BABYLON.Scene.prototype.forceShowBoundingBoxes = false;
BABYLON.Scene.prototype.getBoundingBoxRenderer = function () {};
BABYLON.Scene.prototype.enableDepthRenderer = function () {};
BABYLON.Scene.prototype.disableDepthRenderer = function () {};
BABYLON.Scene.prototype.getOutlineRenderer = function () {};
BABYLON.Scene.prototype.pickSprite = function () {};
BABYLON.Scene.prototype.pickSpriteWithRay = function () {};
BABYLON.Scene.prototype.multiPickSprite = function () {};
BABYLON.Scene.prototype.multiPickSpriteWithRay = function () {};
BABYLON.Scene.prototype.setPointerOverSprite = function () {};
BABYLON.Scene.prototype.getPointerOverSprite = function () {};
BABYLON.Scene.prototype.getNodes = function () {};
BABYLON.Scene.prototype.removeEffectLayer = function () {};
BABYLON.Scene.prototype.addEffectLayer = function () {};
BABYLON.Scene.prototype.getGlowLayerByName = function () {};
BABYLON.Scene.prototype.getHighlightLayerByName = function () {};
BABYLON.Scene.prototype.getLensFlareSystemByName = function () {};
BABYLON.Scene.prototype.getLensFlareSystemByID = function () {};
BABYLON.Scene.prototype.removeLensFlareSystem = function () {};
BABYLON.Scene.prototype.addLensFlareSystem = function () {};
BABYLON.Scene.prototype.removeReflectionProbe = function () {};
BABYLON.Scene.prototype.addReflectionProbe = function () {};


/** @constructor */
BABYLON.SceneComponentConstants = function () {}


/** @constructor */
BABYLON.Stage = function () {}


/** @constructor */
BABYLON.Sprite = function () {}


/** @constructor */
BABYLON.SpriteManager = function () {}


/** @constructor */
BABYLON.SpriteMap = function () {}


/** @constructor */
BABYLON.SpritePackedManager = function () {}


/** @constructor */
BABYLON.SpriteSceneComponent = function () {}


/** @constructor */
BABYLON.AlphaState = function () {}
// BABYLON.AlphaState.prototype.isDirty = undefined;
// BABYLON.AlphaState.prototype.alphaBlend = undefined;
BABYLON.AlphaState.prototype.setAlphaBlendConstants = function () {};
BABYLON.AlphaState.prototype.setAlphaBlendFunctionParameters = function () {};
BABYLON.AlphaState.prototype.setAlphaEquationParameters = function () {};
BABYLON.AlphaState.prototype.reset = function () {};
BABYLON.AlphaState.prototype.apply = function () {};


/** @constructor */
BABYLON.DepthCullingState = function () {}
// BABYLON.DepthCullingState.prototype.isDirty = undefined;
// BABYLON.DepthCullingState.prototype.zOffset = undefined;
// BABYLON.DepthCullingState.prototype.cullFace = undefined;
// BABYLON.DepthCullingState.prototype.cull = undefined;
// BABYLON.DepthCullingState.prototype.depthFunc = undefined;
// BABYLON.DepthCullingState.prototype.depthMask = undefined;
// BABYLON.DepthCullingState.prototype.depthTest = undefined;
// BABYLON.DepthCullingState.prototype.frontFace = undefined;
BABYLON.DepthCullingState.prototype.reset = function () {};
BABYLON.DepthCullingState.prototype.apply = function () {};


/** @constructor */
BABYLON.StencilState = function () {}
// BABYLON.StencilState.prototype.isDirty = undefined;
// BABYLON.StencilState.prototype.stencilFunc = undefined;
// BABYLON.StencilState.prototype.stencilFuncRef = undefined;
// BABYLON.StencilState.prototype.stencilFuncMask = undefined;
// BABYLON.StencilState.prototype.stencilOpStencilFail = undefined;
// BABYLON.StencilState.prototype.stencilOpDepthFail = undefined;
// BABYLON.StencilState.prototype.stencilOpStencilDepthPass = undefined;
// BABYLON.StencilState.prototype.stencilMask = undefined;
// BABYLON.StencilState.prototype.stencilTest = undefined;
BABYLON.StencilState.prototype.reset = function () {};
BABYLON.StencilState.prototype.apply = function () {};


/** @constructor */
BABYLON.AndOrNotEvaluator = function () {}


BABYLON.AssetTaskState = {}

/** @constructor */
BABYLON.AbstractAssetTask = function () {}
// BABYLON.AbstractAssetTask.name = undefined;
// BABYLON.AbstractAssetTask.prototype.isCompleted = undefined;
// BABYLON.AbstractAssetTask.prototype.taskState = undefined;
// BABYLON.AbstractAssetTask.prototype.errorObject = undefined;
BABYLON.AbstractAssetTask.prototype.run = function () {};
BABYLON.AbstractAssetTask.prototype.runTask = function () {};
BABYLON.AbstractAssetTask.prototype.reset = function () {};
BABYLON.AbstractAssetTask.prototype.onErrorCallback = function () {};
BABYLON.AbstractAssetTask.prototype.onDoneCallback = function () {};


/** @constructor */
BABYLON.AssetsProgressEvent = function () {}
// BABYLON.AssetsProgressEvent.remainingCount = undefined;
// BABYLON.AssetsProgressEvent.totalCount = undefined;
// BABYLON.AssetsProgressEvent.task = undefined;


/** @constructor */
BABYLON.MeshAssetTask = function () {}
// BABYLON.MeshAssetTask.name = undefined;
// BABYLON.MeshAssetTask.meshesNames = undefined;
// BABYLON.MeshAssetTask.rootUrl = undefined;
// BABYLON.MeshAssetTask.sceneFilename = undefined;
BABYLON.MeshAssetTask.prototype.constructor = function () {};
BABYLON.MeshAssetTask.prototype.runTask = function () {};
// BABYLON.MeshAssetTask.prototype.isCompleted = undefined;
// BABYLON.MeshAssetTask.prototype.taskState = undefined;
// BABYLON.MeshAssetTask.prototype.errorObject = undefined;
BABYLON.MeshAssetTask.prototype.run = function () {};
BABYLON.MeshAssetTask.prototype.reset = function () {};
BABYLON.MeshAssetTask.prototype.onErrorCallback = function () {};
BABYLON.MeshAssetTask.prototype.onDoneCallback = function () {};


/** @constructor */
BABYLON.TextFileAssetTask = function () {}
// BABYLON.TextFileAssetTask.name = undefined;
// BABYLON.TextFileAssetTask.url = undefined;
BABYLON.TextFileAssetTask.prototype.constructor = function () {};
BABYLON.TextFileAssetTask.prototype.runTask = function () {};
// BABYLON.TextFileAssetTask.prototype.isCompleted = undefined;
// BABYLON.TextFileAssetTask.prototype.taskState = undefined;
// BABYLON.TextFileAssetTask.prototype.errorObject = undefined;
BABYLON.TextFileAssetTask.prototype.run = function () {};
BABYLON.TextFileAssetTask.prototype.reset = function () {};
BABYLON.TextFileAssetTask.prototype.onErrorCallback = function () {};
BABYLON.TextFileAssetTask.prototype.onDoneCallback = function () {};


/** @constructor */
BABYLON.BinaryFileAssetTask = function () {}
// BABYLON.BinaryFileAssetTask.name = undefined;
// BABYLON.BinaryFileAssetTask.url = undefined;
BABYLON.BinaryFileAssetTask.prototype.constructor = function () {};
BABYLON.BinaryFileAssetTask.prototype.runTask = function () {};
// BABYLON.BinaryFileAssetTask.prototype.isCompleted = undefined;
// BABYLON.BinaryFileAssetTask.prototype.taskState = undefined;
// BABYLON.BinaryFileAssetTask.prototype.errorObject = undefined;
BABYLON.BinaryFileAssetTask.prototype.run = function () {};
BABYLON.BinaryFileAssetTask.prototype.reset = function () {};
BABYLON.BinaryFileAssetTask.prototype.onErrorCallback = function () {};
BABYLON.BinaryFileAssetTask.prototype.onDoneCallback = function () {};


/** @constructor */
BABYLON.ImageAssetTask = function () {}
// BABYLON.ImageAssetTask.name = undefined;
// BABYLON.ImageAssetTask.url = undefined;
BABYLON.ImageAssetTask.prototype.constructor = function () {};
BABYLON.ImageAssetTask.prototype.runTask = function () {};
// BABYLON.ImageAssetTask.prototype.isCompleted = undefined;
// BABYLON.ImageAssetTask.prototype.taskState = undefined;
// BABYLON.ImageAssetTask.prototype.errorObject = undefined;
BABYLON.ImageAssetTask.prototype.run = function () {};
BABYLON.ImageAssetTask.prototype.reset = function () {};
BABYLON.ImageAssetTask.prototype.onErrorCallback = function () {};
BABYLON.ImageAssetTask.prototype.onDoneCallback = function () {};


/** @constructor */
BABYLON.TextureAssetTask = function () {}
// BABYLON.TextureAssetTask.name = undefined;
// BABYLON.TextureAssetTask.url = undefined;
// BABYLON.TextureAssetTask.noMipmap = undefined;
// BABYLON.TextureAssetTask.invertY = undefined;
BABYLON.TextureAssetTask.samplingMode = 3;
BABYLON.TextureAssetTask.prototype.constructor = function () {};
BABYLON.TextureAssetTask.prototype.runTask = function () {};
// BABYLON.TextureAssetTask.prototype.isCompleted = undefined;
// BABYLON.TextureAssetTask.prototype.taskState = undefined;
// BABYLON.TextureAssetTask.prototype.errorObject = undefined;
BABYLON.TextureAssetTask.prototype.run = function () {};
BABYLON.TextureAssetTask.prototype.reset = function () {};
BABYLON.TextureAssetTask.prototype.onErrorCallback = function () {};
BABYLON.TextureAssetTask.prototype.onDoneCallback = function () {};


/** @constructor */
BABYLON.CubeTextureAssetTask = function () {}
// BABYLON.CubeTextureAssetTask.name = undefined;
// BABYLON.CubeTextureAssetTask.url = undefined;
// BABYLON.CubeTextureAssetTask.extensions = undefined;
// BABYLON.CubeTextureAssetTask.noMipmap = undefined;
// BABYLON.CubeTextureAssetTask.files = undefined;
BABYLON.CubeTextureAssetTask.prototype.constructor = function () {};
BABYLON.CubeTextureAssetTask.prototype.runTask = function () {};
// BABYLON.CubeTextureAssetTask.prototype.isCompleted = undefined;
// BABYLON.CubeTextureAssetTask.prototype.taskState = undefined;
// BABYLON.CubeTextureAssetTask.prototype.errorObject = undefined;
BABYLON.CubeTextureAssetTask.prototype.run = function () {};
BABYLON.CubeTextureAssetTask.prototype.reset = function () {};
BABYLON.CubeTextureAssetTask.prototype.onErrorCallback = function () {};
BABYLON.CubeTextureAssetTask.prototype.onDoneCallback = function () {};


/** @constructor */
BABYLON.HDRCubeTextureAssetTask = function () {}
// BABYLON.HDRCubeTextureAssetTask.name = undefined;
// BABYLON.HDRCubeTextureAssetTask.url = undefined;
// BABYLON.HDRCubeTextureAssetTask.size = undefined;
BABYLON.HDRCubeTextureAssetTask.noMipmap = false;
BABYLON.HDRCubeTextureAssetTask.generateHarmonics = true;
BABYLON.HDRCubeTextureAssetTask.gammaSpace = false;
BABYLON.HDRCubeTextureAssetTask.reserved = false;
BABYLON.HDRCubeTextureAssetTask.prototype.constructor = function () {};
BABYLON.HDRCubeTextureAssetTask.prototype.runTask = function () {};
// BABYLON.HDRCubeTextureAssetTask.prototype.isCompleted = undefined;
// BABYLON.HDRCubeTextureAssetTask.prototype.taskState = undefined;
// BABYLON.HDRCubeTextureAssetTask.prototype.errorObject = undefined;
BABYLON.HDRCubeTextureAssetTask.prototype.run = function () {};
BABYLON.HDRCubeTextureAssetTask.prototype.reset = function () {};
BABYLON.HDRCubeTextureAssetTask.prototype.onErrorCallback = function () {};
BABYLON.HDRCubeTextureAssetTask.prototype.onDoneCallback = function () {};


/** @constructor */
BABYLON.EquiRectangularCubeTextureAssetTask = function () {}
// BABYLON.EquiRectangularCubeTextureAssetTask.name = undefined;
// BABYLON.EquiRectangularCubeTextureAssetTask.url = undefined;
// BABYLON.EquiRectangularCubeTextureAssetTask.size = undefined;
BABYLON.EquiRectangularCubeTextureAssetTask.noMipmap = false;
BABYLON.EquiRectangularCubeTextureAssetTask.gammaSpace = true;
BABYLON.EquiRectangularCubeTextureAssetTask.prototype.constructor = function () {};
BABYLON.EquiRectangularCubeTextureAssetTask.prototype.runTask = function () {};
// BABYLON.EquiRectangularCubeTextureAssetTask.prototype.isCompleted = undefined;
// BABYLON.EquiRectangularCubeTextureAssetTask.prototype.taskState = undefined;
// BABYLON.EquiRectangularCubeTextureAssetTask.prototype.errorObject = undefined;
BABYLON.EquiRectangularCubeTextureAssetTask.prototype.run = function () {};
BABYLON.EquiRectangularCubeTextureAssetTask.prototype.reset = function () {};
BABYLON.EquiRectangularCubeTextureAssetTask.prototype.onErrorCallback = function () {};
BABYLON.EquiRectangularCubeTextureAssetTask.prototype.onDoneCallback = function () {};


/** @constructor */
BABYLON.AssetsManager = function () {}
BABYLON.AssetsManager.onTaskSuccessObservable = {};
BABYLON.AssetsManager.onTaskErrorObservable = {};
BABYLON.AssetsManager.onTasksDoneObservable = {};
BABYLON.AssetsManager.onProgressObservable = {};
BABYLON.AssetsManager.useDefaultLoadingScreen = true;
BABYLON.AssetsManager.autoHideLoadingUI = true;
BABYLON.AssetsManager.prototype.addMeshTask = function () {};
BABYLON.AssetsManager.prototype.addTextFileTask = function () {};
BABYLON.AssetsManager.prototype.addBinaryFileTask = function () {};
BABYLON.AssetsManager.prototype.addImageTask = function () {};
BABYLON.AssetsManager.prototype.addTextureTask = function () {};
BABYLON.AssetsManager.prototype.addCubeTextureTask = function () {};
BABYLON.AssetsManager.prototype.addHDRCubeTextureTask = function () {};
BABYLON.AssetsManager.prototype.addEquiRectangularCubeTextureAssetTask = function () {};
BABYLON.AssetsManager.prototype.removeTask = function () {};
BABYLON.AssetsManager.prototype.reset = function () {};
BABYLON.AssetsManager.prototype.load = function () {};
BABYLON.AssetsManager.prototype.loadAsync = function () {};


/** @constructor */
BABYLON.BasisTranscodeConfiguration = function () {}


/** @constructor */
BABYLON.BasisTools = function () {}


/** @constructor */
BABYLON.DDSTools = function () {}


/** @constructor */
BABYLON.expandToProperty = function () {}


/** @constructor */
BABYLON.serialize = function () {}


/** @constructor */
BABYLON.serializeAsTexture = function () {}


/** @constructor */
BABYLON.serializeAsColor3 = function () {}


/** @constructor */
BABYLON.serializeAsFresnelParameters = function () {}


/** @constructor */
BABYLON.serializeAsVector2 = function () {}


/** @constructor */
BABYLON.serializeAsVector3 = function () {}


/** @constructor */
BABYLON.serializeAsMeshReference = function () {}


/** @constructor */
BABYLON.serializeAsColorCurves = function () {}


/** @constructor */
BABYLON.serializeAsColor4 = function () {}


/** @constructor */
BABYLON.serializeAsImageProcessingConfiguration = function () {}


/** @constructor */
BABYLON.serializeAsQuaternion = function () {}


/** @constructor */
BABYLON.serializeAsMatrix = function () {}


/** @constructor */
BABYLON.serializeAsCameraReference = function () {}


/** @constructor */
BABYLON.SerializationHelper = function () {}


/** @constructor */
BABYLON.Deferred = function () {}
BABYLON.Deferred.promise = {};
// BABYLON.Deferred.prototype.resolve = undefined;
// BABYLON.Deferred.prototype.reject = undefined;


/** @constructor */
BABYLON.EnvironmentTextureTools = function () {}


/** @constructor */
BABYLON.MeshExploder = function () {}


/** @constructor */
BABYLON.FilesInput = function () {}
BABYLON.FilesInput.onProcessFileCallback = function () {};
BABYLON.FilesInput.prototype.monitorElementForDragNDrop = function () {};
BABYLON.FilesInput.prototype.dispose = function () {};
BABYLON.FilesInput.prototype.renderFunction = function () {};
BABYLON.FilesInput.prototype.drag = function () {};
BABYLON.FilesInput.prototype.drop = function () {};
BABYLON.FilesInput.prototype.loadFiles = function () {};
BABYLON.FilesInput.prototype.reload = function () {};


/** @constructor */
BABYLON.KhronosTextureContainer = function () {}
BABYLON.KhronosTextureContainer.IsValid = function () {};
BABYLON.KhronosTextureContainer.HEADER_LEN = 64;
BABYLON.KhronosTextureContainer.COMPRESSED_2D = 0;
BABYLON.KhronosTextureContainer.COMPRESSED_3D = 1;
BABYLON.KhronosTextureContainer.TEX_2D = 2;
BABYLON.KhronosTextureContainer.TEX_3D = 3;


/** @constructor */
BABYLON.EventState = function () {}
// BABYLON.EventState.mask = undefined;
BABYLON.EventState.skipNextObservers = false;
// BABYLON.EventState.target = undefined;
// BABYLON.EventState.currentTarget = undefined;
BABYLON.EventState.prototype.initalize = function () {};


/** @constructor */
BABYLON.Observer = function () {}
// BABYLON.Observer.callback = undefined;
// BABYLON.Observer.mask = undefined;
BABYLON.Observer.scope = null;
BABYLON.Observer.unregisterOnNextCall = false;


/** @constructor */
BABYLON.MultiObserver = function () {}
BABYLON.MultiObserver.prototype.dispose = function () {};


/** @constructor */
BABYLON.Observable = function () {}
// BABYLON.Observable.prototype.observers = undefined;
BABYLON.Observable.prototype.add = function () {};
BABYLON.Observable.prototype.addOnce = function () {};
BABYLON.Observable.prototype.remove = function () {};
BABYLON.Observable.prototype.removeCallback = function () {};
BABYLON.Observable.prototype.makeObserverTopPriority = function () {};
BABYLON.Observable.prototype.makeObserverBottomPriority = function () {};
BABYLON.Observable.prototype.notifyObservers = function () {};
BABYLON.Observable.prototype.notifyObserversWithPromise = function () {};
BABYLON.Observable.prototype.notifyObserver = function () {};
BABYLON.Observable.prototype.hasObservers = function () {};
BABYLON.Observable.prototype.clear = function () {};
BABYLON.Observable.prototype.clone = function () {};
BABYLON.Observable.prototype.hasSpecificMask = function () {};


/** @constructor */
BABYLON.PerformanceMonitor = function () {}
BABYLON.PerformanceMonitor.prototype.sampleFrame = function () {};
// BABYLON.PerformanceMonitor.prototype.averageFrameTime = undefined;
// BABYLON.PerformanceMonitor.prototype.averageFrameTimeVariance = undefined;
// BABYLON.PerformanceMonitor.prototype.instantaneousFrameTime = undefined;
// BABYLON.PerformanceMonitor.prototype.averageFPS = undefined;
// BABYLON.PerformanceMonitor.prototype.instantaneousFPS = undefined;
// BABYLON.PerformanceMonitor.prototype.isSaturated = undefined;
BABYLON.PerformanceMonitor.prototype.enable = function () {};
BABYLON.PerformanceMonitor.prototype.disable = function () {};
// BABYLON.PerformanceMonitor.prototype.isEnabled = undefined;
BABYLON.PerformanceMonitor.prototype.reset = function () {};


/** @constructor */
BABYLON.RollingAverage = function () {}
BABYLON.RollingAverage.average = 0;
BABYLON.RollingAverage.variance = 0;
BABYLON.RollingAverage.prototype.add = function () {};
BABYLON.RollingAverage.prototype.history = function () {};
BABYLON.RollingAverage.prototype.isSaturated = function () {};
BABYLON.RollingAverage.prototype.reset = function () {};


/** @constructor */
BABYLON.PromisePolyfill = function () {}


/** @constructor */
BABYLON.SceneOptimization = function () {}
BABYLON.SceneOptimization.priority = 0;
BABYLON.SceneOptimization.prototype.getDescription = function () {};
BABYLON.SceneOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.TextureOptimization = function () {}
BABYLON.TextureOptimization.priority = 0;
BABYLON.TextureOptimization.maximumSize = 1024;
BABYLON.TextureOptimization.step = 0.5;
BABYLON.TextureOptimization.prototype.constructor = function () {};
BABYLON.TextureOptimization.prototype.getDescription = function () {};
BABYLON.TextureOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.HardwareScalingOptimization = function () {}
BABYLON.HardwareScalingOptimization.priority = 0;
BABYLON.HardwareScalingOptimization.maximumScale = 2;
BABYLON.HardwareScalingOptimization.step = 0.25;
BABYLON.HardwareScalingOptimization.prototype.constructor = function () {};
BABYLON.HardwareScalingOptimization.prototype.getDescription = function () {};
BABYLON.HardwareScalingOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.ShadowsOptimization = function () {}
BABYLON.ShadowsOptimization.priority = 0;
BABYLON.ShadowsOptimization.prototype.constructor = function () {};
BABYLON.ShadowsOptimization.prototype.getDescription = function () {};
BABYLON.ShadowsOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.PostProcessesOptimization = function () {}
BABYLON.PostProcessesOptimization.priority = 0;
BABYLON.PostProcessesOptimization.prototype.constructor = function () {};
BABYLON.PostProcessesOptimization.prototype.getDescription = function () {};
BABYLON.PostProcessesOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.LensFlaresOptimization = function () {}
BABYLON.LensFlaresOptimization.priority = 0;
BABYLON.LensFlaresOptimization.prototype.constructor = function () {};
BABYLON.LensFlaresOptimization.prototype.getDescription = function () {};
BABYLON.LensFlaresOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.CustomOptimization = function () {}
BABYLON.CustomOptimization.priority = 0;
BABYLON.CustomOptimization.prototype.constructor = function () {};
BABYLON.CustomOptimization.prototype.getDescription = function () {};
BABYLON.CustomOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.ParticlesOptimization = function () {}
BABYLON.ParticlesOptimization.priority = 0;
BABYLON.ParticlesOptimization.prototype.constructor = function () {};
BABYLON.ParticlesOptimization.prototype.getDescription = function () {};
BABYLON.ParticlesOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.RenderTargetsOptimization = function () {}
BABYLON.RenderTargetsOptimization.priority = 0;
BABYLON.RenderTargetsOptimization.prototype.constructor = function () {};
BABYLON.RenderTargetsOptimization.prototype.getDescription = function () {};
BABYLON.RenderTargetsOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.MergeMeshesOptimization = function () {}
BABYLON.MergeMeshesOptimization.priority = 0;
BABYLON.MergeMeshesOptimization.prototype.constructor = function () {};
BABYLON.MergeMeshesOptimization.prototype.getDescription = function () {};
BABYLON.MergeMeshesOptimization.prototype.apply = function () {};


/** @constructor */
BABYLON.SceneOptimizerOptions = function () {}
BABYLON.SceneOptimizerOptions.targetFrameRate = 60;
BABYLON.SceneOptimizerOptions.trackerDuration = 2000;
BABYLON.SceneOptimizerOptions.optimizations = {};
BABYLON.SceneOptimizerOptions.prototype.addOptimization = function () {};
BABYLON.SceneOptimizerOptions.prototype.addCustomOptimization = function () {};


/** @constructor */
BABYLON.SceneOptimizer = function () {}
BABYLON.SceneOptimizer.onSuccessObservable = {};
BABYLON.SceneOptimizer.onNewOptimizationAppliedObservable = {};
BABYLON.SceneOptimizer.onFailureObservable = {};
// BABYLON.SceneOptimizer.prototype.isInImprovementMode = undefined;
// BABYLON.SceneOptimizer.prototype.currentPriorityLevel = undefined;
// BABYLON.SceneOptimizer.prototype.currentFrameRate = undefined;
// BABYLON.SceneOptimizer.prototype.targetFrameRate = undefined;
// BABYLON.SceneOptimizer.prototype.trackerDuration = undefined;
// BABYLON.SceneOptimizer.prototype.optimizations = undefined;
BABYLON.SceneOptimizer.prototype.stop = function () {};
BABYLON.SceneOptimizer.prototype.reset = function () {};
BABYLON.SceneOptimizer.prototype.start = function () {};
BABYLON.SceneOptimizer.prototype.dispose = function () {};


/** @constructor */
BABYLON.SceneSerializer = function () {}


/** @constructor */
BABYLON.SmartArray = function () {}
BABYLON.SmartArray.length = 0;
BABYLON.SmartArray.data = {};
BABYLON.SmartArray.prototype.push = function () {};
BABYLON.SmartArray.prototype.forEach = function () {};
BABYLON.SmartArray.prototype.sort = function () {};
BABYLON.SmartArray.prototype.reset = function () {};
BABYLON.SmartArray.prototype.dispose = function () {};
BABYLON.SmartArray.prototype.concat = function () {};
BABYLON.SmartArray.prototype.indexOf = function () {};
BABYLON.SmartArray.prototype.contains = function () {};


/** @constructor */
BABYLON.SmartArrayNoDuplicate = function () {}
BABYLON.SmartArrayNoDuplicate.length = 0;
BABYLON.SmartArrayNoDuplicate.data = {};
BABYLON.SmartArrayNoDuplicate.prototype.constructor = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.push = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.pushNoDuplicate = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.reset = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.concatWithNoDuplicate = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.forEach = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.sort = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.dispose = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.concat = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.indexOf = function () {};
BABYLON.SmartArrayNoDuplicate.prototype.contains = function () {};


/** @constructor */
BABYLON.StringDictionary = function () {}
BABYLON.StringDictionary.prototype.copyFrom = function () {};
BABYLON.StringDictionary.prototype.get = function () {};
BABYLON.StringDictionary.prototype.getOrAddWithFactory = function () {};
BABYLON.StringDictionary.prototype.getOrAdd = function () {};
BABYLON.StringDictionary.prototype.contains = function () {};
BABYLON.StringDictionary.prototype.add = function () {};
BABYLON.StringDictionary.prototype.set = function () {};
BABYLON.StringDictionary.prototype.getAndRemove = function () {};
BABYLON.StringDictionary.prototype.remove = function () {};
BABYLON.StringDictionary.prototype.clear = function () {};
// BABYLON.StringDictionary.prototype.count = undefined;
BABYLON.StringDictionary.prototype.forEach = function () {};
BABYLON.StringDictionary.prototype.first = function () {};


/** @constructor */
BABYLON.Tags = function () {}


/** @constructor */
BABYLON.TextureTools = function () {}


/** @constructor */
BABYLON.TGATools = function () {}


/** @constructor */
BABYLON.Tools = function () {}


/** @constructor */
BABYLON.className = function () {}


/** @constructor */
BABYLON.AsyncLoop = function () {}
// BABYLON.AsyncLoop.iterations = undefined;
BABYLON.AsyncLoop.index = -1;
BABYLON.AsyncLoop.prototype.executeNext = function () {};
BABYLON.AsyncLoop.prototype.breakLoop = function () {};


/** @constructor */
BABYLON.VideoRecorder = function () {}
BABYLON.VideoRecorder.IsSupported = function () {};


BABYLON.JoystickAxis = {}

/** @constructor */
BABYLON.VirtualJoystick = function () {}
BABYLON.VirtualJoystick.Canvas = {};
BABYLON.VirtualJoystick.vjCanvasWidth = 1024;
BABYLON.VirtualJoystick.vjCanvasHeight = 768;


/** @constructor */
BABYLON.WorkerPool = function () {}


/** @constructor */
BABYLON.Logger = function () {}


/** @constructor */
BABYLON.FilesInputStore = function () {}


/** @constructor */
BABYLON.DeepCopier = function () {}


/** @constructor */
BABYLON.PivotTools = function () {}


/** @constructor */
BABYLON.PrecisionDate = function () {}


/** @constructor */
BABYLON.ScreenshotTools = function () {}


/** @constructor */
BABYLON.WebRequest = function () {}
// BABYLON.WebRequest.prototype.onprogress = undefined;
// BABYLON.WebRequest.prototype.readyState = undefined;
// BABYLON.WebRequest.prototype.status = undefined;
// BABYLON.WebRequest.prototype.statusText = undefined;
// BABYLON.WebRequest.prototype.response = undefined;
// BABYLON.WebRequest.prototype.responseURL = undefined;
// BABYLON.WebRequest.prototype.responseText = undefined;
// BABYLON.WebRequest.prototype.responseType = undefined;
BABYLON.WebRequest.prototype.addEventListener = function () {};
BABYLON.WebRequest.prototype.removeEventListener = function () {};
BABYLON.WebRequest.prototype.abort = function () {};
BABYLON.WebRequest.prototype.send = function () {};
BABYLON.WebRequest.prototype.open = function () {};
BABYLON.WebRequest.prototype.setRequestHeader = function () {};
BABYLON.WebRequest.prototype.getResponseHeader = function () {};


BABYLON.InspectableType = {}

/** @constructor */
BABYLON.BRDFTextureTools = function () {}


/** @constructor */
BABYLON.RGBDTextureTools = function () {}


/** @constructor */
BABYLON.ColorGradient = function () {}
BABYLON.ColorGradient.prototype.getColorToRef = function () {};


/** @constructor */
BABYLON.Color3Gradient = function () {}


/** @constructor */
BABYLON.FactorGradient = function () {}
BABYLON.FactorGradient.prototype.getFactor = function () {};


/** @constructor */
BABYLON.GradientHelper = function () {}


/** @constructor */
BABYLON.PerfCounter = function () {}
// BABYLON.PerfCounter.prototype.min = undefined;
// BABYLON.PerfCounter.prototype.max = undefined;
// BABYLON.PerfCounter.prototype.average = undefined;
// BABYLON.PerfCounter.prototype.lastSecAverage = undefined;
// BABYLON.PerfCounter.prototype.current = undefined;
// BABYLON.PerfCounter.prototype.total = undefined;
// BABYLON.PerfCounter.prototype.count = undefined;
BABYLON.PerfCounter.prototype.fetchNewFrame = function () {};
BABYLON.PerfCounter.prototype.addCount = function () {};
BABYLON.PerfCounter.prototype.beginMonitoring = function () {};
BABYLON.PerfCounter.prototype.endMonitoring = function () {};


/** @constructor */
BABYLON.RetryStrategy = function () {}


/** @constructor */
BABYLON.CanvasGenerator = function () {}


/** @constructor */
BABYLON.LoadFileError = function () {}
BABYLON.LoadFileError.name = "LoadFileError";
// BABYLON.LoadFileError.file = undefined;
BABYLON.LoadFileError.prototype.constructor = function () {};


/** @constructor */
BABYLON.RequestFileError = function () {}
// BABYLON.RequestFileError.request = undefined;
BABYLON.RequestFileError.name = "RequestFileError";
BABYLON.RequestFileError.prototype.constructor = function () {};


/** @constructor */
BABYLON.ReadFileError = function () {}
// BABYLON.ReadFileError.file = undefined;
BABYLON.ReadFileError.name = "ReadFileError";
BABYLON.ReadFileError.prototype.constructor = function () {};


/** @constructor */
BABYLON.FileTools = function () {}


/** @constructor */
BABYLON.StringTools = function () {}


/** @constructor */
BABYLON.DataReader = function () {}
BABYLON.DataReader.byteOffset = 0;
// BABYLON.DataReader.buffer = undefined;
BABYLON.DataReader.prototype.loadAsync = function () {};
BABYLON.DataReader.prototype.readUint32 = function () {};
BABYLON.DataReader.prototype.readUint8Array = function () {};
BABYLON.DataReader.prototype.readString = function () {};
BABYLON.DataReader.prototype.skipBytes = function () {};


/** @constructor */
BABYLON.MinMaxReducer = function () {}


/** @constructor */
BABYLON.DepthReducer = function () {}


/** @constructor */
BABYLON.CubeMapToSphericalPolynomialTools = function () {}


/** @constructor */
BABYLON.HDRTools = function () {}


/** @constructor */
BABYLON.PanoramaToCubeMapTools = function () {}


/** @constructor */
BABYLON.WebXRCamera = function () {}
BABYLON.WebXRCamera.prototype.GetConstructorFromName = function () {};
BABYLON.WebXRCamera.prototype.Parse = function () {};
BABYLON.WebXRCamera.prototype.PERSPECTIVE_CAMERA = 0;
BABYLON.WebXRCamera.prototype.ORTHOGRAPHIC_CAMERA = 1;
BABYLON.WebXRCamera.prototype.FOVMODE_VERTICAL_FIXED = 0;
BABYLON.WebXRCamera.prototype.FOVMODE_HORIZONTAL_FIXED = 1;
BABYLON.WebXRCamera.prototype.RIG_MODE_NONE = 0;
BABYLON.WebXRCamera.prototype.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
BABYLON.WebXRCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
BABYLON.WebXRCamera.prototype.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
BABYLON.WebXRCamera.prototype.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
BABYLON.WebXRCamera.prototype.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
BABYLON.WebXRCamera.prototype.RIG_MODE_VR = 20;
BABYLON.WebXRCamera.prototype.RIG_MODE_WEBVR = 21;
BABYLON.WebXRCamera.prototype.RIG_MODE_CUSTOM = 22;
BABYLON.WebXRCamera.prototype.ForceAttachControlToAlwaysPreventDefault = false;
BABYLON.WebXRCamera.prototype.AddNodeConstructor = function () {};
BABYLON.WebXRCamera.prototype.Construct = function () {};
BABYLON.WebXRCamera.prototype.ParseAnimationRanges = function () {};


/** @constructor */
BABYLON.WebXREnterExitUIButton = function () {}
// BABYLON.WebXREnterExitUIButton.element = undefined;
// BABYLON.WebXREnterExitUIButton.sessionMode = undefined;
// BABYLON.WebXREnterExitUIButton.referenceSpaceType = undefined;
BABYLON.WebXREnterExitUIButton.prototype.update = function () {};


/** @constructor */
BABYLON.WebXREnterExitUIOptions = function () {}


/** @constructor */
BABYLON.WebXREnterExitUI = function () {}
BABYLON.WebXREnterExitUI.CreateAsync = function () {};


/** @constructor */
BABYLON.WebXRExperienceHelper = function () {}
BABYLON.WebXRExperienceHelper.CreateAsync = function () {};


/** @constructor */
BABYLON.WebXRInput = function () {}


/** @constructor */
BABYLON.WebXRInputSource = function () {}


/** @constructor */
BABYLON.WebXRManagedOutputCanvasOptions = function () {}


/** @constructor */
BABYLON.WebXRManagedOutputCanvas = function () {}


BABYLON.WebXRState = {}

/** @constructor */
BABYLON.WebXRSessionManager = function () {}
// BABYLON.WebXRSessionManager.scene = undefined;
BABYLON.WebXRSessionManager.baseLayer = null;
BABYLON.WebXRSessionManager.currentTimestamp = -1;
BABYLON.WebXRSessionManager.defaultHeightCompensation = 1.7;
BABYLON.WebXRSessionManager.onXRFrameObservable = {};
BABYLON.WebXRSessionManager.onXRReferenceSpaceChanged = {};
BABYLON.WebXRSessionManager.onXRSessionEnded = {};
BABYLON.WebXRSessionManager.onXRSessionInit = {};
// BABYLON.WebXRSessionManager.prototype.referenceSpace = undefined;
BABYLON.WebXRSessionManager.prototype.dispose = function () {};
BABYLON.WebXRSessionManager.prototype.exitXRAsync = function () {};
BABYLON.WebXRSessionManager.prototype.getRenderTargetTextureForEye = function () {};
BABYLON.WebXRSessionManager.prototype.getWebXRRenderTarget = function () {};
BABYLON.WebXRSessionManager.prototype.initializeAsync = function () {};
BABYLON.WebXRSessionManager.prototype.initializeSessionAsync = function () {};
BABYLON.WebXRSessionManager.prototype.isSessionSupportedAsync = function () {};
BABYLON.WebXRSessionManager.prototype.resetReferenceSpace = function () {};
BABYLON.WebXRSessionManager.prototype.runXRRenderLoop = function () {};
BABYLON.WebXRSessionManager.prototype.setReferenceSpaceTypeAsync = function () {};
BABYLON.WebXRSessionManager.prototype.updateRenderStateAsync = function () {};


/** @constructor */
BABYLON.WebXRDefaultExperienceOptions = function () {}


/** @constructor */
BABYLON.WebXRDefaultExperience = function () {}
BABYLON.WebXRDefaultExperience.prototype.dispose = function () {};


/** @constructor */
BABYLON.WebXRFeatureName = function () {}


/** @constructor */
BABYLON.WebXRFeaturesManager = function () {}
BABYLON.WebXRFeaturesManager.AddWebXRFeature = function () {};
BABYLON.WebXRFeaturesManager.ConstructFeature = function () {};
BABYLON.WebXRFeaturesManager.GetAvailableFeatures = function () {};
BABYLON.WebXRFeaturesManager.GetAvailableVersions = function () {};
BABYLON.WebXRFeaturesManager.GetLatestVersionOfFeature = function () {};
BABYLON.WebXRFeaturesManager.GetStableVersionOfFeature = function () {};


/** @constructor */
BABYLON.WebXRHitTestLegacy = function () {}
BABYLON.WebXRHitTestLegacy.disableAutoAttach = false;
BABYLON.WebXRHitTestLegacy.options = {};
BABYLON.WebXRHitTestLegacy.lastNativeXRHitResults = {};
BABYLON.WebXRHitTestLegacy.onHitTestResultObservable = {};
BABYLON.WebXRHitTestLegacy.prototype.constructor = function () {};
BABYLON.WebXRHitTestLegacy.prototype.attach = function () {};
BABYLON.WebXRHitTestLegacy.prototype.detach = function () {};
BABYLON.WebXRHitTestLegacy.prototype.dispose = function () {};
// BABYLON.WebXRHitTestLegacy.prototype.attached = undefined;


/** @constructor */
BABYLON.WebXRAnchorSystem = function () {}
BABYLON.WebXRAnchorSystem.disableAutoAttach = false;
BABYLON.WebXRAnchorSystem.onAnchorAddedObservable = {};
BABYLON.WebXRAnchorSystem.onAnchorRemovedObservable = {};
BABYLON.WebXRAnchorSystem.onAnchorUpdatedObservable = {};
BABYLON.WebXRAnchorSystem.prototype.constructor = function () {};
BABYLON.WebXRAnchorSystem.prototype.addAnchorAtRigidTransformation = function () {};
BABYLON.WebXRAnchorSystem.prototype.attach = function () {};
BABYLON.WebXRAnchorSystem.prototype.detach = function () {};
BABYLON.WebXRAnchorSystem.prototype.dispose = function () {};
BABYLON.WebXRAnchorSystem.prototype.setHitTestModule = function () {};
BABYLON.WebXRAnchorSystem.prototype.setPlaneDetector = function () {};
// BABYLON.WebXRAnchorSystem.prototype.attached = undefined;


/** @constructor */
BABYLON.WebXRPlaneDetector = function () {}
BABYLON.WebXRPlaneDetector.Name = "xr-plane-detection";
BABYLON.WebXRPlaneDetector.Version = 1;


/** @constructor */
BABYLON.WebXRBackgroundRemover = function () {}
BABYLON.WebXRBackgroundRemover.disableAutoAttach = false;
BABYLON.WebXRBackgroundRemover.options = {};
BABYLON.WebXRBackgroundRemover.onBackgroundStateChangedObservable = {};
BABYLON.WebXRBackgroundRemover.prototype.constructor = function () {};
BABYLON.WebXRBackgroundRemover.prototype.attach = function () {};
BABYLON.WebXRBackgroundRemover.prototype.detach = function () {};
BABYLON.WebXRBackgroundRemover.prototype.dispose = function () {};
// BABYLON.WebXRBackgroundRemover.prototype.attached = undefined;


/** @constructor */
BABYLON.WebXRMotionControllerTeleportation = function () {}
BABYLON.WebXRMotionControllerTeleportation.Name = "xr-controller-teleportation";
BABYLON.WebXRMotionControllerTeleportation.Version = 1;


/** @constructor */
BABYLON.WebXRControllerPointerSelection = function () {}
BABYLON.WebXRControllerPointerSelection.Name = "xr-controller-pointer-selection";
BABYLON.WebXRControllerPointerSelection.Version = 1;


/** @constructor */
BABYLON.IWebXRControllerPhysicsOptions = function () {}


/** @constructor */
BABYLON.WebXRControllerPhysics = function () {}
BABYLON.WebXRControllerPhysics.Name = "xr-physics-controller";
BABYLON.WebXRControllerPhysics.Version = 1;


/** @constructor */
BABYLON.WebXRAbstractMotionController = function () {}


/** @constructor */
BABYLON.WebXRControllerComponent = function () {}
// BABYLON.WebXRControllerComponent.id = undefined;
// BABYLON.WebXRControllerComponent.type = undefined;
BABYLON.WebXRControllerComponent.onAxisValueChangedObservable = {};
BABYLON.WebXRControllerComponent.onButtonStateChangedObservable = {};
// BABYLON.WebXRControllerComponent.prototype.axes = undefined;
// BABYLON.WebXRControllerComponent.prototype.changes = undefined;
// BABYLON.WebXRControllerComponent.prototype.hasChanges = undefined;
// BABYLON.WebXRControllerComponent.prototype.pressed = undefined;
// BABYLON.WebXRControllerComponent.prototype.touched = undefined;
// BABYLON.WebXRControllerComponent.prototype.value = undefined;
BABYLON.WebXRControllerComponent.prototype.dispose = function () {};
BABYLON.WebXRControllerComponent.prototype.isAxes = function () {};
BABYLON.WebXRControllerComponent.prototype.isButton = function () {};
BABYLON.WebXRControllerComponent.prototype.update = function () {};


/** @constructor */
BABYLON.WebXRGenericTriggerMotionController = function () {}
BABYLON.WebXRGenericTriggerMotionController.ProfileId = "generic-trigger";


/** @constructor */
BABYLON.WebXRMicrosoftMixedRealityController = function () {}
BABYLON.WebXRMicrosoftMixedRealityController.MODEL_BASE_URL = "https://controllers.babylonjs.com/microsoft/";
BABYLON.WebXRMicrosoftMixedRealityController.MODEL_LEFT_FILENAME = "left.glb";
BABYLON.WebXRMicrosoftMixedRealityController.MODEL_RIGHT_FILENAME = "right.glb";


/** @constructor */
BABYLON.WebXRMotionControllerManager = function () {}


/** @constructor */
BABYLON.WebXROculusTouchMotionController = function () {}
BABYLON.WebXROculusTouchMotionController.MODEL_BASE_URL = "https://controllers.babylonjs.com/oculus/";
BABYLON.WebXROculusTouchMotionController.MODEL_LEFT_FILENAME = "left.babylon";
BABYLON.WebXROculusTouchMotionController.MODEL_RIGHT_FILENAME = "right.babylon";
BABYLON.WebXROculusTouchMotionController.QUEST_MODEL_BASE_URL = "https://controllers.babylonjs.com/oculusQuest/";


/** @constructor */
BABYLON.WebXRHTCViveMotionController = function () {}
BABYLON.WebXRHTCViveMotionController.MODEL_BASE_URL = "https://controllers.babylonjs.com/vive/";
BABYLON.WebXRHTCViveMotionController.MODEL_FILENAME = "wand.babylon";


/** @constructor */
BABYLON.WebXRProfiledMotionController = function () {}
