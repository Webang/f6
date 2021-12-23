import { useRef, useState, useEffect } from "react";
import { defineName } from "../utils/name";
import classNames from "classnames";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("password-input"),
    prefix = _defineName[0];

var PasswordInput = function PasswordInput(_ref) {
  var className = _ref.className,
      onChange = _ref.onChange,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 6 : _ref$count;

  var _useState = useState(new Array(count).fill("")),
      state = _useState[0],
      setValue = _useState[1];

  var _useState2 = useState(true),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var _useState3 = useState(0),
      cursorIndex = _useState3[0],
      setIndex = _useState3[1];

  var mRef = useRef(null);
  var mCls = classNames([className, prefix, "hairline"]);

  var setCursorIndex = function setCursorIndex(index) {
    if (index > state.length - 1 || index < -1) {
      setIndex(-1);
    } else {
      setIndex(index);
    }
  };

  var setState = function setState(val) {
    if (Array.isArray(val)) {
      setValue(val);
      onChange == null ? void 0 : onChange(val);
    }

    if (typeof val === "function") {
      setValue(function (prev) {
        onChange == null ? void 0 : onChange(val(prev));
        return val(prev);
      });
    }
  };

  var renderItem = function renderItem(index) {
    return /*#__PURE__*/_jsxs("div", {
      className: prefix + "__item hairline",
      onClick: function onClick() {
        return handleClick(index);
      },
      children: [cursorIndex === index && /*#__PURE__*/_jsx("span", {
        className: prefix + "__cursor"
      }), state[index] && /*#__PURE__*/_jsx("span", {
        className: prefix + "__token"
      }), /*#__PURE__*/_jsx("input", {
        type: "number",
        value: state[index],
        onChange: function onChange(e) {
          return handleChange(index, e);
        },
        className: prefix + "__input",
        maxLength: 1
      })]
    });
  };

  useEffect(function () {
    doFocus(0);
  }, []);
  useEffect(function () {
    // 处理是否失焦
    var handleClick = function handleClick(e) {
      var p = e.target;

      while (p) {
        var _p;

        if (p === mRef.current) {
          setFocus(true);
          break;
        }

        p = (_p = p) == null ? void 0 : _p.parentElement;
      }

      if (!p || p === document.body || p === document.documentElement) {
        setCursorIndex(-1);
        setFocus(false);
      }
    }; // 处理 delete


    var callBack = function callBack(e) {
      if (e.keyCode === 8) {
        if (!focus || cursorIndex === 0) return;
        var index = cursorIndex;

        if (cursorIndex === -1) {
          index = state.length - 1;
        } else {
          index = index - 1;
        }

        setState(function (prev) {
          return prev.map(function (it, i) {
            return i < index ? it : "";
          });
        });
        setCursorIndex(index);
        doFocus(index);
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("keyup", callBack);
    return function () {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keyup", callBack);
    };
  }, [setCursorIndex, cursorIndex, focus]);

  var handleClick = function handleClick(cur) {
    var index = getFirstIndex();

    if (index === -1) {
      startTo(cur);
    } else {
      if (cur <= index) {
        startTo(cur);
      } else {
        startTo(index);
      }
    }
  };

  var getInput = function getInput(index) {
    return mRef.current ? mRef.current.querySelectorAll("input").item(index) : null;
  };

  var doFocus = function doFocus(index) {
    if (mRef.current) {
      var input = getInput(index);
      input == null ? void 0 : input.focus();
    }
  };

  var startTo = function startTo(index) {
    if (index === -1) return;
    setState(function (prev) {
      return prev.map(function (it, _index) {
        return _index >= index ? "" : it;
      });
    });
    setCursorIndex(index);
    doFocus(index);
  }; // 获取第一个没有值的输入框索引


  var getFirstIndex = function getFirstIndex() {
    return state.findIndex(function (it) {
      return !it;
    });
  };

  var handleChange = function handleChange(index, e) {
    var val = e.target.value.slice(0, 1);

    if (val) {
      setState(function (prev) {
        return prev.map(function (it, _index) {
          return _index === index ? val : it;
        });
      });
      setCursorIndex(index + 1);
      doFocus(index + 1);
    } else {
      setState(function (prev) {
        return prev.map(function (it, _index) {
          return _index === index ? val : it;
        });
      });
    }
  };

  var list = state.map(function (_, index) {
    return renderItem(index);
  });
  return /*#__PURE__*/_jsx("div", {
    className: mCls,
    ref: mRef,
    children: /*#__PURE__*/_jsx("div", {
      className: prefix + "__list",
      children: list
    })
  });
};

export default PasswordInput;